/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: zhupengfei
 * @Date: 2021-09-08 15:07:05
 * @LastEditTime: 2021-09-16 13:23:33
 * @LastEditors: zhupengfei
 * @Description:
 * @FilePath: /cocos-build/src/main.ts
 */
import * as core from '@actions/core'
import axios from 'axios'
import {exec} from '@actions/exec'
import {downloadTool, extractZip} from '@actions/tool-cache'
import * as artifact from '@actions/artifact'
import * as glob from '@actions/glob'

// import {wait} from './wait'

type CCDownloadType = {version: string; darwin: string; win32: string}

async function run(): Promise<void> {
  try {
    const downloadUrls = core.getInput('cocos_download_url')
    const cocosVersion = core.getInput('cocos_version')
    const cocosType = core.getInput('cocos_type')
    const projectPath = core.getInput('project_path')
    const platform = core.getInput('platform')
    try {
      const {data} = await (await axios.get(downloadUrls)).data
      const urlList = data[cocosType] as CCDownloadType[]
      const {version, darwin} =
        cocosVersion === '0.0.0'
          ? urlList[0]
          : urlList.find(value => {
              return value.version === cocosVersion
            })!
      const ccZipPath = await downloadTool(
        darwin,
        `CocosCreator_V${version}.zip`
      )
      await extractZip(`${ccZipPath}`, './')
      await exec(`open ./CocosCreator.app`)
      await exec(
        `./CocosCreator.app/Contents/MacOS/CocosCreator --path ${projectPath} --build "platform=${platform}"`
      )
      const artifactClient = artifact.create()
      const artifactName = 'cocos-build-package'
      const patterns = `${platform}/*`
      const globber = await glob.create(patterns)
      const files = await globber.glob()
      console.log('files :>> ', files)

      const rootDirectory = './build'
      // const options = {
      //   continueOnError: true
      // }

      const uploadResult = await artifactClient.uploadArtifact(
        artifactName,
        files,
        rootDirectory
        // options
      )
      console.log('uploadResult :>> ', uploadResult)
    } catch (error) {
      core.error(error as string)
    }
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()

/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: zhupengfei
 * @Date: 2021-09-08 15:07:05
 * @LastEditTime: 2021-09-13 20:50:20
 * @LastEditors: zhupengfei
 * @Description:
 * @FilePath: /cocos-build/src/main.ts
 */
import * as core from '@actions/core'
// import axios from 'axios'
// import {exec} from '@actions/exec'
import {downloadTool} from '@actions/tool-cache'

// import {wait} from './wait'

// type CCDownloadType = {version: string; darwin: string; win32: string}

async function run(): Promise<void> {
  try {
    const downloadUrls = core.getInput('cocos_download_urls')
    // const cocosVersion = core.getInput('cocos_version')
    // const cocosType = core.getInput('cocos_type')
    // const projectPath = core.getInput('project_path')
    const resp = await downloadTool(downloadUrls)
    console.log('resp :>> ', resp)
    return
    // try {
    //   const {data} = await (await axios.get(downloadUrls)).data
    //   const urlList = data[cocosType] as CCDownloadType[]
    //   const ccDownloadItem =
    //     cocosVersion === ''
    //       ? urlList[0]
    //       : urlList.find(value => {
    //           return value.version === cocosVersion
    //         })
    //   const dlUrl = ccDownloadItem?.darwin
    //   await exec(`echo 'download start'`)
    //   await exec(`wget ${dlUrl} -O CocosCreator_V${cocosVersion}.zip`)
    //   await exec(`echo 'download end'`)
    //   await exec(`echo 'unzip start'`)
    //   await exec(`unzip CocosCreator_V${cocosVersion}.zip`)
    //   await exec(`echo 'unzip end'`)
    //   await exec(`ls -al`)
    //   await exec(`echo 'open app start'`)
    //   await exec(`open ./CocosCreator.app`)
    //   await exec(`echo 'open app end'`)
    //   await exec(
    //     `./CocosCreator.app/Contents/MacOS/CocosCreator --path ${projectPath} --build`
    //   )
    // } catch (error) {
    //   core.error(error as string)
    // }
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()

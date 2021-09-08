/*
 * @Author: zhupengfei
 * @Date: 2021-09-08 15:07:05
 * @LastEditTime: 2021-09-08 15:31:42
 * @LastEditors: zhupengfei
 * @Description:
 * @FilePath: /cocos-build/src/main.ts
 */
import * as core from '@actions/core'
// import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const cocosVersion = core.getInput('cocos-version')
    core.debug(`cocos-version: ${cocosVersion}`)

    const projectPath = core.getInput('project-path')
    core.debug(`project-path: ${projectPath}`)
    // const ms: string = core.getInput('milliseconds')
    // core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    // core.debug(new Date().toTimeString())
    // await wait(parseInt(ms, 10))
    // core.debug(new Date().toTimeString())
    // core.setOutput('time', new Date().toTimeString())
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()

/*
 * @Author: zhupengfei
 * @Date: 2021-09-08 15:07:05
 * @LastEditTime: 2021-09-13 20:36:31
 * @LastEditors: zhupengfei
 * @Description:
 * @FilePath: /cocos-build/__tests__/main.test.ts
 */
import {wait} from '../src/wait'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

test('throws invalid number', async () => {
  const input = parseInt('foo', 10)
  await expect(wait(input)).rejects.toThrow('milliseconds not a number')
})

// test('wait 500 ms', async () => {
//   const start = new Date()
//   await wait(500)
//   const end = new Date()
//   var delta = Math.abs(end.getTime() - start.getTime())
//   expect(delta).toBeGreaterThan(450)
// })

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  // process.env['INPUT_MILLISECONDS'] = '500'
  process.env['INPUT_COCOS_DOWNLOAD_URL'] =
    'https://creator-api.cocos.com/api/cocoshub/editor_version_list?lang=zh'
  process.env['INPUT_COCOS_VERSION'] = ''
  process.env['INPUT_COCOS_TYPE'] = '2d'
  process.env['INPUT_PROJECT_PATH'] = './'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})

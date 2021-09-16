<!--
 * @Author: zhupengfei
 * @Date: 2021-09-08 15:07:05
 * @LastEditTime: 2021-09-16 15:43:42
 * @LastEditors: zhupengfei
 * @Description:
 * @FilePath: /cocos-build/README.md
-->

# Cocos Creator Build

This action provides the following functionality for Github Actions users:

- automate building for cocos creator project
- configuring cocos_download_url, cocos-version, cocos_type, project_path, platform, build_path for building
- only run on mac

| inputs             | required | description                 | default                                                                |
| ------------------ | -------- | --------------------------- | ---------------------------------------------------------------------- |
| cocos_download_url | false    | cocos creator download urls | https://creator-api.cocos.com/api/cocoshub/editor_version_list?lang=zh |
| cocos_version      | false    | cocos creator version       | 0.0.0                                                                  |
| cocos_type         | false    | cocos creator type(2d/3d)   | 2d                                                                     |
| project_path       | False    | project path for build      | ./                                                                     |
| platform           | false    | platform to build           | web-mobile                                                             |
| build_path         | false    | build path                  | ./build                                                                |

## Usage

See [action.yml]()

**Basic**

```
steps:
    - uses: actions/checkout@v2
    - name: Cocos Creator Build
    uses: miggene/cocos-build@v1.2.3
    with:
        cocos_version: 2.4.5
```

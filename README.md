# spirit_music

#### 介绍 精灵音乐播放器
微信小程序 精灵 背景音乐播放器组件

#### 说明
自己在做一个有播放功能的微信小程序，微信自带的audio组件已经不建议使用，其他的音频类组件虽然提供了api但是使用起来一点也不灵性，
所以，我做了这个组件，给它命名“精灵”
- 这个组件是对微信小程序的背景音乐管理器BackgroundAudioManager做的封装和扩展，所以可以支持音频的后台播放
- 提供了Spirit.js这个api，后续可以在这个基础上进行继续扩展
- 提供了一个demo，可以流畅的支持背景音乐的播放，暂停 以及进度条的实时更新
- demo 预览


 ![输入图片说明](https://images.gitee.com/uploads/images/2019/0711/195734_c99aa866_1538208.png "精灵播放器.PNG")


#### 使用说明
- 把libs下的Spirit保存到你的项目中，最好仍然放在libs目录下
- 将componments下的spirit 组件保存到你的小程序同名目录下
- 修改app.json 的配置，使组件允许背景播放`"requiredBackgroundModes": [
    "audio"
  ]`
- 在你需要这个播放器组件的.json中引入组件`{
  "usingComponents": {
    "spirit": "../../components/spirit/spirit"
  }
}`，然后在需要的页面引入组件`<spirit />`
- 在每次需要播放的时候，调用onPlay方法，组装自己的music数据，即可，更多请查看demo
  







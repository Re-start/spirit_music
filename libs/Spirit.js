var handle = {
  // 单曲播放
  fastPlay: function(param) {
    if (this.context.src && this.context.paused) {
      this.context.play()
    } else {
      this.context.src = param.src
    }
    this.music = param
    this.context.title = param.title
  },
  //暂停播放
  pausePlay: function(param) {
    this.context.pause()
  },
  // 循环播放
  loopPlay: function() {
    this.context.src = this.music.src
    this.context.title = this.music.title
  }
}

var callback = {
  // 播放结束回调方法
  endCallBack: function(context) {
    // 判断是否有循环播放
    if (context.loop) {
      this.loopPlay()
    } else {
      this.context.stop()
    }
  },
  // 开始播放的回调方法
  startCallBack: function(context) {
    console.log('播放中')
    setInterval(function() {
      // 如果是暂停或者停止
      if (context.paused) {
        let duration = context.duration
        let currentTime = context.currentTime
        let percent = (currentTime / duration) * 100
        context.percent = percent
        return 
      } else {
        if (context.src && context.duration != null) {
          let duration = context.duration
          let currentTime = context.currentTime
          let percent = (currentTime / duration) * 100
          context.percent = percent
        } else {
          context.percent = 0
        }
      }
    },500)

  }
}




class Spirit {
  constructor() {
    const context = wx.getBackgroundAudioManager();
    context.loop = false
    context.percent = 0
    this.context = context
    Object.assign(this, handle)
    Object.assign(this, callback)
    // 监听播放结束
    this.context.onEnded(() => {
      this.endCallBack(this.context)
    })
    // 监听开始播放
    this.context.onPlay(() => {
      this.startCallBack(this.context)
    })
  }
}


export const initSpirit = (param) => {
  let spirit = new Spirit()
  return spirit
}
import {
  initSpirit
} from '../../libs/Spirit.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    percent: 0,
    loopColor: '#27aa80'
  },


  lifetimes: {
    attached: function () {
      this.spirit = initSpirit()

    },

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 播放
     */
    onPlay: function () {
      let music = {
        src: '你的音频地址',
        title: '你的音频title'
      }
      this.execPlay(music)
    },

    execPlay(music) {
      this.spirit.fastPlay(music)
      let _that = this
      setInterval(function () {
        let percent = _that.spirit.context.percent
        _that.setData({
          percent: percent
        })
      }, 1000)
    },

    /**
     * 暂停
     */
    onPause: function () {
      this.spirit.pausePlay()
    },

    /**
     * 循环播放
     */
    onLoop: function () {
      this.spirit.context.loop = !this.spirit.context.loop
      if (this.spirit.context.loop) {
        this.setData({
          loopColor: '#fa8282'
        })
      } else {
        this.setData({
          loopColor: '#27aa80'
        })
      }

    },
  }
})
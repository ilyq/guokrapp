// pages/index/index.js

var getList = require('../utils/getList.js')

Page({
  data:{
    scrollTop: 0,
    currentTab: 0,
    lastIndex: 0,
    screenWidth: 0,
    screenheight: 0,
    itemWidth: 0,
    pixelRatio: 2,
    articleData: [],
    navTabText: [
      '全部',
      '科技',
      '生活',
      '健康',
      '学习',
      '人文',
      '自然',
      '娱乐',
    ],
    handpickImg: [],
    likeImage: '../images/ic_article_like.png',
    shareImage: '../images/ic_article_list_share.png',
    replyImage: '../images/ic_reply.png',
    offset: 0
  },
  // 导航栏
  navbarTap: function(e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.index) {
      return false
    } else {
      that.setData({
        currentTab: e.target.dataset.index
      })
    }
  },
  // 滑动内容
  swiperChange: function (e) {
    let that = this;
    that.setData({
      currentTab: e.detail.current,
      scrollTop: e.detail.current * this.data.itemWidth,
      screenheight: 0
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenWidth: res.windowWidth,
          pixelRatio: res.windowWidth/750,
          itemWidth: res.windowWidth / 5
        })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
    let that = this;
    wx.request({
      url: 'https://api.gzxunzhi.cn/v1/guokr/flowingboard/item/handpick_carousel',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){ 
        // success
        that.setData({
          handpickImg: res.data.result,
          screenheight: that.data.screenheight + 324
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
    // 获取主题
    getList.getList(that)
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onPullDownRefresh: function(){
    // 下拉
    let that = this;
    that.setData({
      offset: 0,
      articleData: [],
      screenheight: 324
    })
    getList.getList(that)
    wx.stopPullDownRefresh()
  },
  onReachBottom: function(){
    let that = this;
    getList.getList(that)
  }
})
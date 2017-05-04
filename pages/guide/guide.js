// pages/guide/guide.js
Page({
  data:{
    screenImage: "../../images/default_splash_image.jpg",
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    setTimeout(function() {
      wx.redirectTo({
        url: '../index/index',
        success: function(res){
          // success
          console.log("success")
        },
        fail: function(res) {
          // fail
          console.log("fail")
        },
        complete: function(res) {
          // complete
          console.log("complete")
        }
      })
    }, 3000)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
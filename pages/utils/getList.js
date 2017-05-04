function getList(that) {
    wx.showLoading({
        title: '加载中',
    })

    let listData = that.data.articleData

    wx.request({
      url: 'https://api.gzxunzhi.cn/v1/guokr/handpick/v2/article?retrieve_type=by_offset&limit=5&ad=1'+ that.data.offset,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data.result)
        for (let i=0; i<res.data.result.length; i++) {
            listData.push(res.data.result[i])
        }
        that.setData({
            articleData: listData,
            offset: that.data.offset + 10,
            screenheight: that.data.screenheight + 312*5
        })
        wx.hideLoading()
      },
      fail: function(res) {
        // fail
        wx.hideLoading()
        wx.showToast({
            title: '获取失败',
            icon: 'fail',
            duration: 2000
        })
      },
      complete: function(res) {
        // complete
      }
    })
}

module.exports = {
    getList
}
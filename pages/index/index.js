// index.js
Page({
  首页:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  客服: function(){
    wx.navigateTo({
      url: '../customer_service/customer_service',
    })
  },
全部分类: function() {
  wx.navigateTo({
    url: '../store/store',
  })
},
我的: function() {
  wx.navigateTo({
    url: '../mine/mine',
  })
},
购物车: function(){
  wx.navigateTo({
    url: '../order/order',
  })
},
})
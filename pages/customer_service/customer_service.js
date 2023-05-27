// pages/index/customer_service.js
Page({
  phone:function(){
    wx.makePhoneCall({
      phoneNumber: '15005584595' //仅为示例，并非真实的电话号码
    })
  },
  wx_developer:function(){
    wx.makePhoneCall({
      phoneNumber: '15005584595' //仅为示例，并非真实的电话号码
    })
  }
})
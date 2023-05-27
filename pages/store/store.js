var sum
var Num=new Array()
var array=new Array()
Page({
  data:{
    sumofbuy:sum,
    arrayofs:array
  },
  onReady() {
    const that = this; // 保存当前上下文
    wx.request({
      url: 'http://121.40.55.67:8000/product_list',
      method: 'GET',
      dataType: 'JSON',
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        array = JSON.parse(res.data)
        that.setData({ sumofbuy: 0, arrayofs: array }) // 使用 that 调用 setData()
      },
    })
    Num = [0, 0, 0]
    sum = 0
  },
  add:function(e){
    var i=Number(e.currentTarget.dataset.id)
    var price=Number(array[i].price)
    var num=Number(array[i].num)
    sum=sum+price
    Num[i]=num+1
    array[i].num=String(Num[i])
    array[i].sum=String(Number(array[i].sum)+price)
    this.setData({sumofbuy:sum,arrayofs:array})
  },
  sub:function(e){
    var i=Number(e.currentTarget.dataset.id)
    var price=Number(array[i].price)
    var num=Number(array[i].num)
    if(num>0){
    sum=sum-price
    Num[i]=num-1
    array[i].num=String(Num[i])
    array[i].sum=String(Number(array[i].sum)-price)
    this.setData({sumofbuy:sum,arrayofs:array})
    }
  }
})
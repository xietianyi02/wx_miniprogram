Page({
  formSubmit(e){
    var formData = e.detail.value;
    console.log(formData)
    wx.request({
      url: 'http://121.40.55.67:8000/add_goods', // 替换为你的服务器端接口地址
      method: 'POST',
      data: JSON.stringify(formData),
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        // 处理服务器端返回的结果
        console.log(res.data);
        wx.showModal({
          title: '提示',
          content: '表单提交成功',
          showCancel: true,
          success: function() {
            wx.navigateBack({
              delta: 1  // 返回的页面层数，1 表示返回上一个页面
            });
          }
        });
      },
      fail: function(error) {
        wx.showModal({
          title: '提示',
          content: '表单提交失败',
          showCancel: false,
        });
      }
    });
  },
})
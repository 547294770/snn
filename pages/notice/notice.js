//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    src: '../../resources/notice.jpg',
    srcqrcode: '../../resources/qrcode.jpg'
  },
  onShareAppMessage:function(res){
    if(res.from === 'button'){
      console.log(res.target);
    }

    return {
      title:' 一分之差，你在清华，我在天涯',
      //desc:'',
      path: '/pages/noticecreate/noticecreate',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function (options) {
    var queryBean = JSON.parse(options.data);
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })

    console.warn(queryBean.xingming);
    console.warn(queryBean.xuexiao);

    var imgWidth = 700.0;
    var imgHeight = 472.0;
    var screenWidth = wx.getSystemInfoSync().windowWidth;
    var screenHeight = wx.getSystemInfoSync().windowHeight;

    var height = screenWidth * imgHeight / imgWidth;

    var left = 98.0 / 700.0 * screenWidth;
    var top = height * 170 / 475;

    var context = wx.createCanvasContext('canvas01');
    //context.
    context.drawImage('../../resources/notice.jpg', 0, 0, screenWidth, height);
    context.setFontSize(12)
    //context.strokeStyle = 'blue'; 
    context.setFillStyle('black');

    //姓名
    context.fillText(queryBean.xingming, left, top);
    
    left = 130.0 / 700.0 * screenWidth;
    top = height * 270 / 475;

    if (queryBean.xuexiao.length <= 4){
      left = 150.0 / 700.0 * screenWidth;
    } else if (queryBean.xuexiao.length > 4 && queryBean.xuexiao.length <= 6){
      left = 130.0 / 700.0 * screenWidth;
    } else {
      left = 110.0 / 700.0 * screenWidth;
    }

    //大学
    context.setFillStyle('#e03172');
    context.fillText(queryBean.xuexiao, left, top);

    left = 455.0 / 700.0 * screenWidth;
    top = height * 396 / 475.0;

    var myDate = new Date();
    var y = myDate.getYear();
    var fy = myDate.getFullYear();
    var m = myDate.getMonth();
    var d = myDate.getDate();
    var strDate = fy + "年" + (m + 1) + "月" + d + "日";

    //日期
    context.setFontSize(8)
    context.setFillStyle('#000');
    context.fillText(strDate, left, top);

    context.draw();
    console.warn(screenWidth);
    console.warn(screenHeight);
    //console(screenHeight);
  },
  onReady:function(e){
    
  }
})

//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    titleText: '落榜通知书',
    nameText: '姓名',
    schoolText: '学校',
    buttonText:'生成',
    xingming:'',
    xuexiao : '清华大学'
  },
  xingmingText: function (e) {
    this.data.xingming = e.detail.value;
  },
  xuexiaoText: function (e) {
    this.data.xuexiao = e.detail.value;
  },
  onLoad: function () {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
    // var myDate = new Date();
    // var y = myDate.getYear(); 
    // var fy = myDate.getFullYear(); 
    // var m =myDate.getMonth(); 
    // var d = myDate.getDate();
    // var strDate = fy + "年" + (m + 1) + "月" + d + "日";
    // //var date = Date.toString();
    // console.info(strDate);
  },
  clickMe : function (e) {
    
    var dd = this.data;
    if (dd.xingming.trim().length < 2 || dd.xingming.trim().length > 4){
      wx.showToast({ title: '姓名2-4个汉字', icon: 'succes', duration: 1000, mask: true});
      return;
    }

    if (dd.xuexiao.trim().length < 4 || dd.xuexiao.trim().length > 10) {
      wx.showToast({ title: '学校4-10个汉字', icon: 'succes', duration: 1000, mask: true });
      return;
    }
    
    console.info(dd.nameText);
    var strData = JSON.stringify(dd);
    wx.navigateTo({
      url: '../notice/notice?data=' + strData,
    })
    // this.setData({
    //   buttonText: 'hello world'

    // })
  }
})

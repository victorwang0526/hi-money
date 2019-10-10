// miniprogram/pages/my/map/map.js
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../../libs/bmap-wx.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [{ "id": 0, "latitude": 31.261579834995, "longitude": 120.63678570262, "title": "苏州澹台湖大酒店", "iconPath": "../../../images/marker_red.png", "iconTapPath": "../../../images/marker_red.png", "address": "江苏省苏州市吴中区太湖东路299号", "telephone": "(0512)66358888", "alpha": 1 }, { "id": 1, "latitude": 31.261729546746, "longitude": 120.6339214697, "title": "苏州澹台湖大酒店澹台楼(西楼)", "iconPath": "../../../images/marker_red.png", "iconTapPath": "../../../images/marker_red.png", "address": "江苏省苏州市吴中区太湖东路299号", "telephone": "(0512)66358888", "alpha": 1 }, { "id": 2, "latitude": 31.266101713054, "longitude": 120.64015516726, "title": "苏州吴中希尔顿欢朋酒店", "iconPath": "../../../images/marker_red.png", "iconTapPath": "../../../images/marker_red.png", "address": "江苏省苏州市吴中区迎春路38号", "telephone": "(0512)66196188", "alpha": 1 }, { "id": 3, "latitude": 31.264912909095, "longitude": 120.62851330621, "title": "如家酒店(宝带路地铁站店)", "iconPath": "../../../images/marker_red.png", "iconTapPath": "../../../images/marker_red.png", "address": "苏州市吴中区东吴北路25号", "telephone": "(0512)67075288", "alpha": 1 }, { "id": 4, "latitude": 31.252451138409, "longitude": 120.63553748256, "title": "雅杰大酒店", "iconPath": "../../../images/marker_red.png", "iconTapPath": "../../../images/marker_red.png", "address": "江苏省苏州市吴中区石湖东路77号", "telephone": "(0512)69217777", "alpha": 1 }, { "id": 5, "latitude": 31.272720472838, "longitude": 120.62871736527, "title": "全季酒店(人民南路店)", "iconPath": "../../../images/marker_red.png", "iconTapPath": "../../../images/marker_red.png", "address": "苏州市吴中区吴中东路158号利通大厦南楼1栋1层", "telephone": "(0512)68550999", "alpha": 1 }, { "id": 6, "latitude": 31.269518802019, "longitude": 120.6320302612, "title": "苏盛宾馆", "iconPath": "../../../images/marker_red.png", "iconTapPath": "../../../images/marker_red.png", "address": "江苏省苏州市吴中区县前街58号", "telephone": "(0512)65252349", "alpha": 1 }, { "id": 7, "latitude": 31.256355617946, "longitude": 120.63028888001, "title": "莫泰酒店(吴中商城店)", "iconPath": "../../../images/marker_red.png", "iconTapPath": "../../../images/marker_red.png", "address": "苏州市吴中区东吴南路388号吴中商城F1层", "telephone": "(0512)66351888", "alpha": 1 }, { "id": 8, "latitude": 31.262051544011, "longitude": 120.63681902592, "title": "苏州澹台湖大酒店宝带楼(东楼)", "iconPath": "../../../images/marker_yellow.png", "iconTapPath": "../../../images/marker_red.png", "address": "江苏省苏州市吴中区太湖东路299号", "telephone": "(0512)66358888", "alpha": 1 }, { "id": 9, "latitude": 31.255427087786, "longitude": 120.63016755712, "title": "美韵公寓", "iconPath": "../../../images/marker_red.png", "iconTapPath": "../../../images/marker_red.png", "address": "江苏省苏州市吴中区东吴南路388号吴中商城大厦", "alpha": 1 }],
    latitude: '31.261579834995',
    longitude: '120.63678570262',
    placeData: {}
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'kqj0erzhZIc8fth9TeH540zML42uK6aG'
    });

    // var fail = function (data) {
    //   console.log(data)
    // };
    // var success = function (data) {
    //   wxMarkerData = data.wxMarkerData;
    //   that.setData({
    //     markers: wxMarkerData
    //   });
    //   that.setData({
    //     latitude: wxMarkerData[0].latitude
    //   });
    //   that.setData({
    //     longitude: wxMarkerData[0].longitude
    //   });
    // }
    // // 发起POI检索请求 
    // BMap.search({
    //   "query": '酒店',
    //   fail: fail,
    //   success: success,
    //   // 此处需要在相应路径放置图片文件 
    //   iconPath: '../../../images/marker_red.png',
    //   // 此处需要在相应路径放置图片文件 
    //   iconTapPath: '../../../images/marker_red.png'
    // });
  },
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      placeData: {
        title: '名称：' + data[i].title + '\n',
        address: '地址：' + data[i].address + '\n',
        telephone: '电话：' + data[i].telephone
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../../images/marker_yellow.png";
      } else {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../../images/marker_red.png";
      }
      markers[j] = data[j];
    }
    console.log(JSON.stringify(markers))
    that.setData({
      markers: markers
    });
  }
})
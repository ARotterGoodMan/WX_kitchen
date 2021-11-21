// index.js
import {envList} from '../../envList.js';

Page({
  data: {
    envList,
    tapNum: '1',
    swiperImages: Array,
    load: ""
  },
  onShow() {
  },
  tapTo(e) {
    this.setData({
      tapNum: e.detail.num,
    })
  },
  onLoad() {
    const db = wx.cloud.database();
    db.collection("swiperImages").get({
      success: res => {
        console.log(res.data)
        this.setData({
          swiperImages: res.data,
          load: "ok"
        })
      }
    })
  }

});
// index.js

import {envList} from '../../envList.js';

Page({
    data: {
        envList,
        tapNum: '1',
    },
    tapTo(e) {
        this.setData({
            tapNum: e.detail.num,
        })
    }

});
// index.js

import {envList} from '../../envList.js';


Page({
    data: {
        envList,
        search_value: "",
        search_placeholder: "搜索",
        scroll_list:2,
    },
    getSearchValue(e) {
        console.log(e)
        if (e.detail.value !== "") {
            this.setData({
                search_value: e.detail.value
            })
        } else {
            this.setData({
                search_placeholder: "搜索"
            })
        }
        return ""
    },
    searchClear() {
        this.setData({
            search_placeholder: ""
        })
        return ""
    },
    search() {
        console.log(this.data.search_value)
        this.setData({
            search_value: "",
            search_placeholder: "搜索"
        })
    },


});

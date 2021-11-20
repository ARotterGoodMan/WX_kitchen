// components/indexPage/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        search_value: "",
        search_placeholder: "搜索",
        scroll_list: 2,
    },

    /**
     * 组件的方法列表
     */
    methods: {
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
    },

})

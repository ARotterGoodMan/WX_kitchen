// components/BottomNav/index.js
Component({
    //组件的属性列表

    properties: {},

    //组件的初始数据

    data: {},

    //组件的方法列表

    methods: {
        tapTo(e) {
            console.log(e);
            this.triggerEvent("tapTo", {
                num: e.currentTarget.id,
            })

            return ""
        }
    },


})
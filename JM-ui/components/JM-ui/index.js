import MyLoading from "./components/loading.vue"
import MyList from "./components/list.vue"
import "./JM-ui.less"
// 这里是重点
console.log(MyList)
const JM_ui = {
    install: function(Vue){//Vue.use()会执行install方法
        Vue.component('jm-loading',MyLoading)
        Vue.component('jm-list',MyList)
    }
}

// 导出组件
export default JM_ui
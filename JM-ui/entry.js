import Vue from "vue/dist/vue.js"
import VueRouter from "vue-router"
import JM_ui from "./components/JM-ui"
import first from "./src/components/firstList.vue"

Vue.use(VueRouter)
Vue.use(JM_ui)

let router = new VueRouter({
    routes: [
	    {
	    	path: '/',
	    	component: first,
	    	/*children:[
	    	        { path: '/', component: list1},
                    { path: '/list/needList', component: list1},
                    { path: '/list/edit', component: edit},
                    { path: '/list/soluList', component: list2}
                   ]*/
	    }
    ]
});

new Vue({
	el:"#app",
	router: router,
});
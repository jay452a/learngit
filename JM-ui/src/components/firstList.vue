<template>
	<div class="listContainer"><!--必须在template下边有一个div-->
		<header>{{header}}</header>
		<jm-loading></jm-loading>
		<jm-list :text="item.name"v-for="item in lists" @click="changeLink(item.name)"></jm-list>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				lists:[
				  {name:"one",value:1},
				  {name:"two",value:2}
		        ],
		        header:"标题"
			}
		},
		methods:{
				changeLink:function(val){
					this.header=val
				}
			}
	}
</script>
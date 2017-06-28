<template>
    <div class="JM-list">
        <ul>
        	<li v-on:click="alert()">
        		{{text}}
        	</li>
        </ul>
    </div>
</template>
<script type="text/javascript">
	export default {
		props:{
			text:{
				type:String,
				default:"this is a list"
			}
		},
		methods:{
			alert(){
				this.$emit('click')//子组件定义事件传到父组件自定义叫click的事件
			}
		}
	}
</script>

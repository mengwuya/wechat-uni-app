<template>
	<image :src="src" mode="widthFix" :style="getStyle" :class="type"></image>
</template>

<script>
	export default {
		props: {
			size:{
				type:[String,Number],
				default:90
			},
			src: {
				type: String,
				default: ""
			},
			type:{
				type:String,
				default:"rounded"
			}
		},
		computed: {
			getStyle() {
				return `width: ${this.size}rpx;height: ${this.size}rpx;`
			}
		},
	}
</script>

<style>
</style>

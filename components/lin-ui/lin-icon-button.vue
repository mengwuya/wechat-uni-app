<template>
	<view class="flex align-center justify-center" hover-class="bg-hover-light" @click="$emit('click')" style="height: 90rpx;width: 90rpx;">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			iconCode: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style>
</style>

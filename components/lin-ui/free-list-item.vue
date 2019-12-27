<template>
	<view class="bg-white flex align-stretch" hover-class="bg-light"
	@click="$emit('click')">
		<view class="flex align-center justify-center py-2 px-3">
			<slot name="icon"></slot>
			<image :src="cover" v-if="cover"
			mode="widthFix" :style="coverStyle"></image>
		</view>
		<view class="flex-1 border-bottom flex align-center justify-between pr-3">
			<slot>
				<text class="font-md text-dark">{{title}}</text>
			</slot>
			<view class="flex align-center" v-if="showRight">
				<slot name="right"></slot>
				<!-- 右箭头 -->
				<text class="iconfont text-light-muted font-md">&#xe60c;</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 封面
			cover: {
				type: String,
				default: ""
			},
			// 封面大小
			coverSize:{
				type: [String,Number],
				default:75
			},
			// 标题
			title:{
				type:String,
				default:""
			},
			// 显示右边
			showRight:{
				type:Boolean,
				default:false
			}
		},
		computed: {
			coverStyle() {
				return `width: ${this.coverSize}rpx;height: ${this.coverSize}rpx;`
			}
		},
	}
</script>

<style>
</style>

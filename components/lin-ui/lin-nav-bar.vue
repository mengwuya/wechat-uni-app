<template>
	<view>
		<view class="bg-light" :class="fixed?'fixed-top':''">
			<!-- 状态栏 -->
			<view :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between" style="height: 90rpx;">
				<!-- 左边 -->
				<view class="flex align-center">
					<!-- 标题 -->
					<text v-if="title" class="font-md ml-3">{{getTitle}}</text>
				</view>
				<!-- 右边 -->
				<view class="flex align-center">
					<lin-icon-button @click="search"><text class="iconfont font-md">&#xe6e3;</text></lin-icon-button>
					<lin-icon-button @click="openExtend"><text class="iconfont font-md">&#xe682;</text></lin-icon-button>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view v-if="fixed" :style="fixedStyle"></view>
	</view>
</template>

<script>
	import linIconButton from './lin-icon-button.vue';
	export default {
		props: {
			title: {
				type: [String, Boolean],
				default: false
			},
			fixed: {
				type: Boolean,
				default: true
			},
			noreadnum: {
				type: Number,
				default: 0
			}
		},
		components: {
			linIconButton
		},
		data() {
			return {
				statusBarHeight: 0,
				navBarHeight: 0
			}
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
			// #endif
			this.navBarHeight = this.statusBarHeight + uni.upx2px(90)
		},
		computed: {
			fixedStyle() {
				return `height:${this.navBarHeight}px`
			},
			getTitle() {
				let noreadnum = this.noreadnum > 0 ? '(' + this.noreadnum + ')' : ''
				return this.title + noreadnum
			}
		},
		methods: {
			search(){
				console.log("search");
			},
			openExtend() {
				this.$emit('openExtend')
			}
		},
	}
</script>

<style>
</style>

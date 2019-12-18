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
		
		<!-- 扩展菜单 -->
		<lin-popup ref="extendNav" :bodyWidth="320" :bodyHeight="525"
		bodyBgColor="bg-dark" transformOrigin="right top">
			<view class="flex flex-column bg-dark" 
			style="width: 320rpx;height: 525rpx;">
				<view class="flex-1 flex align-center" 
				hover-class="bg-hover-dark"
				v-for="(item,index) in menus"
				:key="index"
				@click="clickEvent(item.event)">
					<text class="iconfont pl-3 pr-2 font-md text-white">{{item.icon}}</text>
					<text class="font-md text-white">{{item.name}}</text>
				</view>
			</view>
		</lin-popup>
		
		
	</view>
</template>

<script>
	import linIconButton from './lin-icon-button.vue';
	import linPopup from "./lin-popup.vue";
	export default {
		props: {
			title: {
				type: [String,Boolean],
				default:false 
			},
			fixed:{
				type:Boolean,
				default:true
			},
			noreadnum:{
				type:Number,
				default:0
			}
		},
		components:{
			linIconButton,
			linPopup
		},
		data() {
			return {
				statusBarHeight:0,
				navBarHeight:0,
				menus:[
					{
						name:"发起群聊",
						event:"",
						icon:"\ue633"
					},
					{
						name:"添加好友",
						event:"",
						icon:"\ue65d"
					},
					{
						name:"扫一扫",
						event:"",
						icon:"\ue614"
					},
					{
						name:"收付款",
						event:"",
						icon:"\ue66c"
					},
					{
						name:"帮助与反馈",
						event:"",
						icon:"\ue66c"
					}
				],
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
			getTitle(){
				let noreadnum = this.noreadnum > 0 ? '('+this.noreadnum+')' : ''
				return this.title + noreadnum
			}
		},
		methods: {
			openExtend() {
				this.$refs.extendNav.show(uni.upx2px(415),uni.upx2px(150))
			}
		},
	}
</script>

<style>
</style>

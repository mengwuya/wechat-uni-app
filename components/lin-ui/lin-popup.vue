<template>
	<div style="z-index:9999;overflow:hidden;" v-if="status">
		<!-- 蒙版 -->
		<div v-if="mask" class="position-fixed top-0 left-0 right-0 bottom-0" :style="getMaskColor" @click="hide"></div>
		<!-- 弹出框内容 -->
		<div class="position-fixed bg-white" :class="getBodyClass" :style="getBodyStyle">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			// 蒙版颜色是否开启
			maskColor: {
				type: Boolean,
				default: false
			},
			// 是否开启蒙版
			mask: {
				type: Boolean,
				default: true
			},
			// 是否处于底部
			fixBottom: {
				type: Boolean,
				default: false
			},
			// 弹出层的内容高度
			bodyHeight: {
				type: Number,
				default: 0
			},
			// 弹出层的内容宽度
			bodyWidth: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				status: false,
				x: -1,
				y: 1,
				maxX: 0,
				maxY: 0
			}
		},
		mounted() {
			try {
				const res = uni.getSystemInfoSync()
				this.maxX = res.windowWidth - uni.upx2px(this.bodyWidth)
				this.maxY = res.windowHeight - uni.upx2px(this.bodyHeight)
			} catch (e) {
				//TODO handle the exception
			}
		},
		computed: {
			getMaskColor() {
				let i = this.maskColor ? 0.5 : 0
				return `background-color: rgba(0,0,0,${i});`
			},
			getBodyClass() {
				let fixBottom = this.fixBottom ? 'left-0 right-0 bottom-0' : 'rounded border'
				return fixBottom
			},
			getBodyStyle() {
				let left = this.x > -1 ? `left:${this.x}px;` : ''
				let top = this.y > -1 ? `top:${this.y}px;` : ''
				return left + top
			}
		},
		methods: {
			show(x = -1, y = -1) {
				this.x = x > this.maxX ? this.maxX - 10 : x
				this.y = y > this.maxY ? this.maxY : y
				this.status = true
			},
			hide() {
				this.status = false
			}
		}
	}
</script>

<style>
</style>

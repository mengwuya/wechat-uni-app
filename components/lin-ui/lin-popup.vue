<template>
	<div style="z-index:9999;overflow:hidden;" v-if="status">
		<!-- 蒙版 -->
		<div v-if="mask" class="position-fixed top-0 left-0 right-0 bottom-0" :style="getMaskColor" @click="hide"></div>
		<!-- 弹出框内容 -->
		<div ref="popup" class="position-fixed bg-white free-animated" :class="getBodyClass" :style="getBodyStyle">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	// #ifdef APP-PLUS-NVUE
	const animation = weex.requireModule('animation')
	// #endif
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
			},
			bodyBgColor: {
				type: String,
				default: "bg-white"
			},
			transformOrigin: {
				type: String,
				default: "left top"
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
				return `${this.bodyBgColor} ${fixBottom}`
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
				// #ifdef APP-PLUS-NVUE
				this.$nextTick(() => {
					animation.transition(this.$refs.popup, {
						styles: {
							transform: 'scale(1,1)',
							transformOrigin: this.transformOrigin,
							opacity: 1
						},
						duration: 100, //ms
						timingFunction: 'ease',
					}, function() {
						console.log('动画执行结束');
					})
				})
				// #endif
			},
			hide() {
				// #ifdef APP-PLUS-NVUE
				this.$nextTick(() => {
					animation.transition(this.$refs.popup, {
						styles: {
							transform: 'scale(0,0)',
							transformOrigin: this.transformOrigin,
							opacity: 0
						},
						duration: 100, //ms
						timingFunction: 'ease',
					}, () => {
						this.status = false
						console.log('动画执行结束');
					})
				})
				// #endif
				// #ifndef APP-PLUS-NVUE
				this.status = false
				// #endif
<<<<<<< HEAD
=======
				this.$emit('cancelBack')
>>>>>>> e19336ba77b62792e2346b31f190281e2a918976
			}
		}
	}
</script>

<style scoped>
	.free-animated {
		/* #ifdef APP-PLUS-NVUE */
		transform: scale(0, 0);
		opacity: 0;
		/* #endif */
	}
</style>

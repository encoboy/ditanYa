<template>
	<view class="uni-margin-wrap">
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/index/gouwu1.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/index/gouwu2.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/index/gouwu3.png"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
	<xzw-notice theme="primary" :list="list" theKey="name" :showIcon="true" :showMore="false" />
	<!-- 	<view class="search_box">
		<uni-icons type="search" size="16" color="#1296db" />
		<text>搜索</text>
	</view> -->
	<y-tabs v-model="activeIndex" @click="tabClick" @change="tabChange">
		<y-tab v-for="(name,index) in tabname" :key="index" :title="name">
			<view class="content-wrap">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view class="list-data-box">
						<view v-for="(item,index) in listdata" :key="index" class="data-box"
							:class="{borderRight:index%2 ==0}">
							<image src="../../static/index/sj1.png" alt=""></image>

							<text class="data-text">
								{{item.name}} vivo X80 Pro 12GB+256GB蔡司T*光学镜头|自研芯片V1+|全新一代骁龙8
							</text>
							<view class="data-bottom">
								<view class="bottom-text">
									<text>购买进度</text><text class="bottom-progress">64.2%</text>
								</view>
								<button type="warn" plain="true" size="mini" class="bottom-button" @click="addCar">加购物车</button>
							</view>
						</view>
					</view>

				</scroll-view>
			</view>
		</y-tab>
	</y-tabs>

</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				indicatorDots: true,
				autoplay: true,
				src: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				list: [{
					id: 1,
					name: '恭喜 BB 中国黄金生肖鼠吊坠1.77克鼠年足金小绅士老鼠金吊坠女新款定价'
				}, {
					id: 2,
					name: '恭喜 AA 中国黄金生肖鼠吊坠1.77克鼠年足金小绅士老鼠金吊坠女新款定价'
				}],
				tabname: ['人气商品', '最新上架', '即将满员'],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				listdata: [{

					name: '小米'
				}, {

					name: '小米'
				}, {

					name: '小米'
				}, {

					name: '小米'
				}, {

					name: '小米'
				}, {

					name: '小米'
				}]
			}
		},
		methods: {
			// 标签点击事件
			tabClick(index, item) {
				console.log("tabClick", index, item);
			},
			// 标签切换事件
			tabChange(index, item) {
				console.log("tabChange", index, item);
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			},
			addCar:function(e){
				// 加入购物车，没有登录直接跳转到登录页面
				console.log(e)
			
				uni.navigateTo({url: "/pages/login/index"});
			}
		}
	}
</script>

<style lang="scss">
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;

		image {
			height: 300rpx;
		}
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.search_box {
		background-color: white;
		border-radius: 50rpx;
		padding: 10rpx 15rpx;
		margin: 13rpx 12rpx 16rpx;
		display: flex;
		align-items: center;

		text {
			font-size: 12px;
			margin-left: 15rpx;
		}
	}

	.scroll-Y {
		height: 100%;

	}

	.list-data-box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.data-box {
		height: 500rpx;
		width: 49.7%;
		border-bottom: 1px solid lightgray;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px 0;

		image {
			height: 144px;
			width: 144px;
		}
	}

	.borderRight {
		border-right: 1px solid lightgray;
	}

	.data-text {
		font-size: 14px;
		padding: 0 10rpx;
	}

	.data-bottom {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.bottom-text {
		font-size: 12px;
		margin-right: 4px;
	}

	.bottom-progress {
		color: lightskyblue;
	}

	.bottom-button {
		width: 175rpx;
	}
</style>
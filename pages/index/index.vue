<template>
	<view class="uni-margin-wrap">
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/index/ditan1.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/index/ditan2.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/index/ditan3.png"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
	<xzw-notice theme="primary" :list="list" theKey="name" :showIcon="true" :showMore="false" />
	<view class="search_box">
		<uni-icons type="search" size="16" color="#1296db" />
		<text>搜索</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				src: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				list: [{
					id: 1,
					name: '公告1'
				}, {
					id: 2,
					name: '公告2'
				}]
			}
		},
		methods: {

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
</style>
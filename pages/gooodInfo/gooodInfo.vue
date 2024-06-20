<template>
	<view>
		<view class="colonn">
			<swiper class="w-750 h-450" autoplay>
				<!-- <swiper-item class="w-750 h-450" v-for="(item,index) in goodInfo.banners" v-if="goodInfo.banners.length>0">
					<image :src="BASE_URL+item"
					 @click="showimg(BASE_URL+item)"
					 mode="aspectFill" class="w-750 h-450"></image>
				</swiper-item> -->
				<!-- v-else -->
				<swiper-item class="w-750 h-450"  >
					<image :src="BASE_URL+goodInfo.img"
					 @click="showimg(BASE_URL+goodInfo.img)"
					 mode="aspectFill" class="w-750 h-450"></image>
				</swiper-item>
			</swiper>
			<view class="p-all-20">
				<view class="fw-600 m-bottom-20">{{goodInfo.name}}</view>
				<view class="roww fs-30  duiqi ">
					<view class="fw-600 color2_r">优惠价:{{goodInfo.xPrice}}</view>
					<view class="huadiao  fs-20 " 
					style="color: black;margin-left: 15rpx;" >原价:{{goodInfo.yPrice}}</view>
					<view class="allline"></view>
					<view>销量：{{goodInfo.sale}}</view>
				</view>
				<view class="colonn center_center m-top-30"  v-if="goodInfo.content" >
					<view class="m-bottom-20">商品简介</view>
					<rich-text :nodes="goodInfo.content"></rich-text>
				</view>
			</view>
		</view>
		<view style="height: 90rpx;"></view>
		<view class="roww center_center" @click="tolianwi">
			<view class="lianxiwomen">联系我们</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nows:"<a style='color:red'>阿斯拉达稍大</a>",
				goodInfo:{},
				BASE_URL:""
			}
		},
		onLoad(){
			this.BASE_URL=this.$paths.BASE_IMG;
			this.goodInfo=uni.getStorageSync("goodInfo");
			this.goodInfo.banners=this.goodInfo.banners.split(",");
		},
		methods: {  
			showimg(img){
				wx.previewImage({
				  current: img, // 当前显示图片的http链接
				  urls: [img] // 需要预览的图片http链接列表
				})
			},
			tolianwi(){
				uni.switchTab({
					url:"/pages/wode/wode"
				})
			}
		}
	}
</script>

<style>
@import url(gooodInfo.css);
</style>

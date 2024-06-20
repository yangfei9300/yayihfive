<template>
	<view>
		<view class="colonn center_center w-750" style="height: 70vh;">
			<image class="logo" :src="BASE_URL+info.icon"></image>
			<view>{{info.gsm}}</view>
			<view class="roww w-750 border_bottom p-all-20 fs-30"
			@click.stop="tel(info.phone)"
			>
				<view>联系电话</view>
				<view class="allline"></view>
				<view>{{info.phone}}</view>
				<view style="color:blue;font-weight:bold;">(拨打电话)</view>
			</view>
			<view class="roww w-750 border_bottom p-all-20 fs-30">
				<view>营业时间</view>
				<view class="allline"></view>
				<view>{{info.yysjTime}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{},
				BASE_URL:""
			}
		},
		onLoad(){
			this.BASE_URL=this.$paths.BASE_IMG;
			this.getgsInfo();
		},
		methods: {
			tel(tel){
				window.location.href="tel://"+tel
			},
			getgsInfo(){
				var data = {};
				this.$axios
					.axios('POST', this.$paths.getGsInfo, data)
					.then(res => {
						console.log('轮播图颜色', res);
						this.info=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>

<style>
@import url(wode.css);
</style>

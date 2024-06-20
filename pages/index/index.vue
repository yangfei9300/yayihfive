<template>
	<view class="content">
		
		<view class="topban">
			<v-tabs  v-model="current"
			activeColor="#1296db" lineColor="#1296db"  :scroll="true" field="typeName" :tabs="types" @change="changeTab"></v-tabs>
		</view>
		<view class="h-90"></view>
		<view class="colonn">
			<view class="roww p-all-20 border_bottom"
			v-for="(item,index) in goodList"
			@click="togood(index)" 
			>
				<image v-if="item.img" class="goodimg" mode="aspectFill" 
				:src="BASE_URL+item.img"></image>
				<image v-else class="goodimg" mode="aspectFill"
				></image>
				<view class="colonn rowsb">
					<view class="w-550 fs-30 txtShowLength1">{{item.name}}  </view>
					<view class="roww fs-30 duiqi color2_r ">
						<view class="fw-600">优惠价:{{item.xPrice}}</view>
						<view class="huadiao fs-20" 
						style="color: black;margin-left: 15rpx">原价:{{item.yPrice}}</view>
					</view>
				</view>
			</view>
			<view class="roww center_center m-top-25" v-if="goodList.length<=0">
				<view>暂无数据</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {BASE_URL:"",
				current: 0,
				tabs: [
				  '军事',
				  '国内',
				  '新闻新闻',
				  '军事',
				  '国内',
				  '新闻',
				  '军事',
				  '国内',
				  '新闻',
				],
				types:[],
				goodList:[],
			}
		},
		onLoad() {
			this.BASE_URL=this.$paths.BASE_IMG;
			this.getType();
		},
		methods: {
			getType(){
				var data = {};
				this.$axios
					.axios('POST', this.$paths.gettype, data)
					.then(res => {
						console.log('轮播图颜色', res);
						this.types=res.data;
						this.getGoods();
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			getGoods(){
				this.goodList=[];
				var data = {
					'typeId':this.types[this.current].id
				};
				this.$axios
					.axios('POST', this.$paths.getgoodList, data)
					.then(res => {
						console.log('轮播图颜色', res);
						this.goodList=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			togood(index){
				wx.setStorageSync('goodInfo', this.goodList[index])
				uni.navigateTo({
					url:"/pages/gooodInfo/gooodInfo"
				})
			},
				changeTab(index) {
					  console.log('当前选中的项：' + index)
					  this.current=index;
					  this.getGoods();
				},
		}
	}
</script>

<style>
	@import url(index.css);
</style>

<!-- declare var require: any -->

<template>
  <div class="main">
    <div class="search-bar">
      <van-row class="test-row">
        <van-col span="3">
          <img :src="state.locationIcon" class="location-icon" />
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找搜索</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- swiper area -->
    <div class="swiper-area">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(banner,index) in state.imgArray" :key="index">
          <img v-lazy="banner.imageUrl" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, onMounted } from "vue";
import service from "../api/index";
export default {
  setup() {
    const state = reactive({
      msg: "Shopping Mall",
      locationIcon: "/images/location.png",
      imgArray: [],
      data: [],
    });
    const getBannerData = async () => {
      // 获取banner图列表
      let res = await service.get("/getBanner");
      state.imgArray = { ...res.imgArray };
    };
    // 获取数据表
    const getData = async () => {
      let res = await service.get("/getProduct");
      state.data = { ...res.data };
    };
    onMounted(() => {
      getBannerData();
      getData();
    });
    return {
      state,
      getBannerData,
    };
  },
};
</script>
<style lang='stylus' scoped>
input {
  background: none;
  border: none;
}

.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
}

.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-right: 0rem;
  border-bottom: 1px solid #fff !important;
  background: #e5017d;
  color: #fff;
}

.location-icon {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
  width: 80%;
}

.swiper-area {
  clear: both;
  max-height: 15rem;
  overflow: hidden;

  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;

    img {
      width: 100%;
    }
  }
}

.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
  flex: 1;
}

.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}

.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}

.recommend-body {
  border-bottom: 1px solid #eee;
}

.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}

.hot-area {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}

.hot-goods {
  height: 130rem;
  overflow: hidden;
  background-color: #fff;
}
</style>




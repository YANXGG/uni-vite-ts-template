<script setup lang="ts">
  import { useCountStore } from '@/store/modules/counter';
  const title = ref('Hello233');
  const countStore = useCountStore();
  const toHome = () => uni.navigateTo({
    url: '/pages/home/index'
  });
</script>

<template>
  <view class="lq-content">
    <image
      class="lq-content__logo"
      src="/static/logo.png"
    />
    <view class="lq-content__text-area">
      <text class="lq-content__title">
        {{ title }}
      </text>
      <text>
        计数:{{ countStore.count }}
      </text>
    </view>
    <button @click="countStore.addCount">
      增加
    </button>
    <button @click="toHome">
      跳转
    </button>
  </view>
</template>

<style lang="scss">
@include b(content) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include e(logo){
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  @include e(text-area){
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  @include e(title){
    font-size: 36rpx;
    color: $text-grey;
  }
}
</style>

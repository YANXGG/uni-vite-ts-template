<script setup lang="ts">
  import { useCountStore } from '@/store/modules/counter';
  const title = ref('HOME');
  const countStore = useCountStore();
</script>

<template>
  <view class="lq-content">
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

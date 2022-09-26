<script setup lang="ts">
import { useCountStore } from '@/store/modules/counter';
const title = ref('Hello233');
const countStore = useCountStore();
const toHome = () =>
  uni.navigateTo({
    url: '/pages/home/index'
  });
</script>

<template>
  <view class="w-100">
    <image src="/static/logo.png" />
    <view class="lq-content__text-area">
      <text class="lq-content__title">
        {{ title }}
      </text>
      <text> 计数:{{ countStore.count }} </text>
    </view>
    <button @click="countStore.addCount">
      增加
    </button>
    <button @click="toHome">
      跳转
    </button>
  </view>
</template>

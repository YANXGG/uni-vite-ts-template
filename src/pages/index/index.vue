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
  <view class="wh-full">
    <image src="/static/logo.png" />
    <view class="w-750">
      <text class="flex-center">
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

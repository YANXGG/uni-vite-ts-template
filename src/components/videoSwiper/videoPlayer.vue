<script lang="ts" setup>
import { ClickPause } from './hooks';
interface Props {
  videoPause: ClickPause
}
const props = defineProps<Props>();

</script>
<template>
  <view class="wh-full">
    <img
      v-show="! props.videoPause.isPlay"
      class="fixed left-0 top-0 bottom-0 right-0 m-a w-200 h-200 z-36 transition pointer-events-none"
      src="@/static/play.png"
    >
    <video
      v-bind="$attrs"
    ></video>
  </view>
</template>

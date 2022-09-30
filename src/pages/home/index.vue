<script setup lang="ts">
  import VideoSwiper from '@/components/videoSwiper/index.vue';
  const videoList = [
    'https://www.w3school.com.cn/i/movie.ogg',
    'https://www.runoob.com/try/demo_source/mov_bbb.mp4',
    'https://www.runoob.com/try/demo_source/movie.mp4',
    'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    'http://vjs.zencdn.net/v/oceans.mp4'
  ];
  const getVideo = () => {
    const arr = new Array(10).fill('');
    return arr.map(() => {
      const num = Math.ceil(Math.random()*9999) + 1;
      return {
        id: num,
        url: videoList[num % videoList.length]
      };
    });
  };
  </script>

<template>
  <VideoSwiper :refresh="getVideo" />
</template>


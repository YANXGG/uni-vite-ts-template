import { ComponentInternalInstance, ref, Ref } from 'vue';

export interface ClickPause {
  isPlay: Ref<boolean>,
  reset: (arg0: string)=> void,
  toggle: (arg0: string)=> void,
}

// 单击暂停/播放
export function useClickPause(instance: ComponentInternalInstance): ClickPause{
    const isPlay = ref(true);

    function reset(videoId: string){
        console.log(isPlay.value);
        const videoContext = uni.createVideoContext(videoId, instance);
        videoContext.play();
        isPlay.value = true;
    }

    function toggle(videoId: string){
        const videoContext = uni.createVideoContext(videoId, instance);
        if(isPlay.value){
          videoContext.pause();
          isPlay.value = false;
        }else{
          videoContext.play();
          isPlay.value = true;
        }
    }

    return {
      isPlay,
      reset,
      toggle
  };
}

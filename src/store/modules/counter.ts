import { defineStore } from 'pinia';
import {reactive, toRefs} from 'vue';

interface counter{
  count: number;
}

export const useCountStore = defineStore('counter', () => {
  const store: counter = reactive({
    count: 0
  });

  function addCount() {
    store.count ++;
  }

  return {
    ...toRefs(store),
    addCount
  };
});

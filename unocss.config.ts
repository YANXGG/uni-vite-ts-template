import { defineConfig } from 'unocss';
import presetWeapp from 'unocss-preset-weapp';
import { transformerClass } from 'unocss-preset-weapp/transformer';

export default defineConfig({
  presets: [
    presetWeapp()
  ],
  theme: {
    colors: {
      primary: '#7fe7c4',
      info: '#70c0e8',
      success: '#63e2b7',
      warn: '#f2c97d',
      error: '#e88080'
    }
  },
  shortcuts: {
    'wh-full': 'w-full h-full',
    'wh-screen': 'w-screen h-screen',
    'flex-center': 'flex justify-center items-center',
    'card-2': 'grid grid-cols-2 grid-rows-2 grid-gap1',
    'card-3': 'grid grid-cols-3 grid-rows-3 grid-gap1',
    'bg-gradient': 'bg-gradient-to-lt from-primary to-info'
  },
  transformers:[
    transformerClass()
  ]
});

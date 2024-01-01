import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['border-base', 'border-gray:70 dark:border-gray:20'],
    ['center', 'flex justify-center items-center'],
    ['bg-base', 'bg-black dark:bg-white'],
    ['full', 'w-full h-full'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  safelist: [
    ...['justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around', 'justify-evenly'],
    ...['items-stretch', 'items-start', 'items-center', 'items-end', 'items-baseline', 'items-revert'],
    ...['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'],
  ],
})

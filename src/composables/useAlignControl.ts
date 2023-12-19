export const justifyOptions = ['justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around', 'justify-evenly'] as const
export const alignItems = ['items-stretch', 'items-start', 'items-center', 'items-end', 'items-baseline', 'items-revert'] as const

export function useAlignControl() {
  const justify = ref<typeof justifyOptions[number]>('justify-start')
  const align = ref<typeof alignItems[number]>('items-stretch')

  return { justify, align }
}

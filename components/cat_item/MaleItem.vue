<template>
  <div class="mt-2 mb-4 md:w-60 lg:w-80 w-72 m-auto">
    <div class="relative text-center">
      <div
        class="shadow-xl border-2 border-gray-600 mb-7 overflow-hidden"
        :class="type === 'male' ? 'rounded-md' : 'rounded-full'"
      >
        <img
          class="transition-transform duration-700 transform hover:scale-125 md:w-60 md:h-60 lg:w-80 lg:h-80 h-72 w-72 object-cover"
          :class="type === 'male' ? 'rounded-md' : 'rounded-full'"
          :src="item.getImg()"
          :alt="item.name"
        />
      </div>
      <div
        class="font-bold text-xl shadow-xl border-gray-600 border-2 rounded-2xl absolute mx-4 left-0 right-0 text-center p-2 -bottom-6 text-gray-800 bg-blue-200"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="text-lg text-center text-blue-400">
      {{ item.colors }}
    </div>
  </div>
</template>
<script>
import { CatItem } from '~/components/cat_item/catItem.js'

export default {
  props: {
    item: {
      /**
       * @type {CatItem}
       * '~/components/cat_item/catItem.js'
       */
      type: CatItem,
      required: true,
    },
    type: {
      type: String,
      default: 'male',
    },
  },
}
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="mt-2 mb-4 w-52 mx-2">
    <div class="relative text-center">
      <nuxt-link
        :to="item.getLink()"
        class="block hover:opacity-100 hover:shadow-3xl shadow-xl rounded-full border-2 border-gray-600 overflow-hidden"
      >
        <img
          class="transition-transform duration-700 transform hover:scale-125 h-52 w-52 object-cover"
          :src="item.getImg()"
          :alt="item.name"
        />
      </nuxt-link>
      <nuxt-link
        :to="item.getLink()"
        class="hover:opacity-100 overflow-ellipsis whitespace-nowrap overflow-x-hidden hover:bg-blue-300 block font-bold text-xl shadow-xl border-gray-600 border-2 rounded-2xl relative left-0 right-0 text-center p-2 -top-8 text-gray-800 bg-blue-200"
      >
        {{ item.name }}
      </nuxt-link>
      <div
        v-if="item.available"
        class="absolute w-20 h-20 text-xs rounded-full pt-6 bg-yellow-500 text-white -left-4 top-2 p-1 transform -rotate-45"
      >
        Available to Adopt
      </div>
    </div>
    <div
      class="text-lg text-center text-blue-400 -mt-4"
      v-html="item.getSimpleInfoStr()"
    ></div>
  </div>
</template>
<script>
import { KittenItem } from '~/models/kittenItem'

export default {
  props: {
    item: {
      /**
       * @type {KittenItem}
       * '~/models/KittenItem.js'
       */
      type: KittenItem,
      required: true,
    },
    type: {
      type: String,
      default: 'male',
    },
  },
}
</script>

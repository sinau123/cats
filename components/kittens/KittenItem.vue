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
      <nuxt-link :to="item.getLink()">
        <MyButton
          tag="div"
          class="overflow-ellipsis whitespace-nowrap overflow-x-hidden block font-bold shadow-xl rounded-2xl relative left-0 right-0 text-center -top-8 p-1"
        >
          {{ item.name }}</MyButton
        >
      </nuxt-link>
      <div
        v-if="item.available"
        class="absolute w-20 h-20 font-bold text-sm rounded-full pt-6 border-red-theme border-2 text-red-theme bg-white -left-4 top-2 leading-7 transform -rotate-45"
      >
        Available
      </div>
    </div>
    <div
      class="text-base leading-5 text-center text-green-theme font-bold -mt-4"
      v-html="
        item
          .getSimpleInfoStr()
          .replace(/\//g, `<span class='text-red-theme'>&bull;</span>`)
      "
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

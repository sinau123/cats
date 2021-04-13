<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="mt-2 mb-4 md:w-60 lg:w-80 w-72 m-auto">
    <div class="relative text-center">
      <nuxt-link
        :to="item.getLink()"
        class="block hover:opacity-100 hover:shadow-3xl shadow-xl mb-7 overflow-hidden"
        :class="type === 'male' ? 'rounded-md' : 'rounded-full'"
      >
        <img
          class="transition-transform duration-700 transform hover:scale-125 md:w-60 md:h-60 lg:w-80 lg:h-80 h-72 w-72 object-cover"
          :src="item.getImg()"
          :alt="item.name"
        />
      </nuxt-link>
      <nuxt-link :to="item.getLink()">
        <MyButton
          tag="div"
          class="overflow-ellipsis whitespace-nowrap overflow-x-hidden block font-bold text-xl shadow-xl absolute mx-4 left-0 right-0 -bottom-6"
        >
          {{ item.name }}
        </MyButton>
      </nuxt-link>
    </div>
    <div
      class="text-lg text-center text-green-theme font-bold"
      v-html="
        item
          .getSimpleInfoStr()
          .replace(/\//g, `<span class='text-red-theme'>&bull;</span>`)
      "
    ></div>
  </div>
</template>
<script>
import { CatItem } from '~/models/catItem.js'

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

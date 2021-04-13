<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="mt-2 mb-4 md:w-80 lg:w-96 w-44"
    :class="type === 'male' ? '-mr-4' : '-ml-4'"
  >
    <div class="text-center">
      <nuxt-link
        :to="item.getLink()"
        class="block hover:opacity-100 hover:shadow-3xl shadow-sm mb-7 overflow-hidden"
        :class="type === 'male' ? 'rounded-md' : 'rounded-full'"
      >
        <img
          class="md:w-80 md:h-80 lg:w-96 lg:h-96 h-44 w-44 object-cover"
          :src="item.getImg()"
          :alt="item.name"
        />
      </nuxt-link>
    </div>
    <div class="text-center" :class="type === 'male' ? 'pr-8' : 'pl-8'">
      <nuxt-link :to="item.getLink()" class="inline-block">
        <div
          class="font-playfair inline-block font-bold overflow-ellipsis whitespace-nowrap overflow-x-hidden text-2xl xs-only:text-base text-red-theme hover:text-green-theme"
        >
          {{ item.name }}
        </div>
      </nuxt-link>
      <div
        class="text-lg text-green-theme xs-only:text-sm text-center font-bold"
        v-html="
          item
            .getSimpleInfoStr()
            .replace(/\//g, `<span class='text-red-theme'>&bull;</span>`)
        "
      ></div>
    </div>
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

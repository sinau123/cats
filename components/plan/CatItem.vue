<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="mt-2 mb-4 md:w-80 lg:w-96 w-44"
    :class="type === 'male' ? '-mr-4' : '-ml-4'"
  >
    <div class="text-center">
      <nuxt-link
        :to="item.getLink()"
        class="block hover:opacity-100 hover:shadow-3xl shadow-xl border-2 border-gray-600 mb-7 overflow-hidden"
        :class="type === 'male' ? 'rounded-md' : 'rounded-full border-pink-400'"
      >
        <img
          class="md:w-80 md:h-80 lg:w-96 lg:h-96 h-44 w-44 object-cover"
          :src="item.getImg()"
          :alt="item.name"
        />
      </nuxt-link>
    </div>
    <div :class="type === 'male' ? 'pr-8' : 'pl-8'">
      <nuxt-link :to="item.getLink()" class="block">
        <div
          class="font-bold overflow-ellipsis whitespace-nowrap overflow-x-hidden text-xl xs-only:text-base text-center text-gray-800"
        >
          {{ item.name }}
        </div>
      </nuxt-link>
      <div
        class="text-lg xs-only:text-sm text-center text-blue-400"
        v-html="item.getSimpleInfoStr()"
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

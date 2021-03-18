<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div
      class="border-2 rounded-lg border-gray-600 md:w-96 md:h-96 w-80 h-80 mt-5 mb-9 m-auto overflow-hidden"
    >
      <img
        class="transition-transform duration-500 transform hover:scale-125 md:w-96 md:h-96 w-80 h-80 object-cover"
        :src="item.getImg()"
        alt=""
      />
    </div>

    <div class="font-bold text-center text-gray-700 m-4">
      <div class="text-3xl mb-4">{{ item.name }}</div>
      <div class="text-2xl" v-html="item.getInfoStr()"></div>
      <div class="text-4xl m-16">
        {{ item.gender === 'male' ? 'Father' : 'Mother' }} of Little KITTEN:
      </div>
      <div>
        <div v-for="kitten in item.getKittens()" :key="kitten.name">
          {{ kitten }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { findCatByName } from '~/data/derivedCatData'
import { CatItem } from '~/models/catItem'
export default {
  asyncData({ route }) {
    return {
      item: findCatByName(
        CatItem.getLowerNameFromRouteParam(route.params.name)
      ),
    }
  },
}
</script>

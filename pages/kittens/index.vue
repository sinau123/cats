<template>
  <div>
    <div
      class="text-green-theme font-playfair text-5xl text-center p-4 mb-8 font-extrabold"
    >
      Kittens
    </div>
    <div class="text-red-theme text-center text-3xl font-bold mb-6">
      Our <span class="text-green-theme">lovely kittens</span>
    </div>
    <div class="container flex justify-center m-auto flex-wrap">
      <KittenItem v-for="item in items" :key="item.name" :item="item" />
    </div>
  </div>
</template>
<script>
import { getKittens } from '~/derived-data'

export default {
  components: {
    KittenItem: () => import('~/components/kittens/KittenItem'),
  },
  data() {
    return {
      items: getKittens,
    }
  },
  head: {
    title: 'Kitten List | Miaumi Cattery',
  },
}
</script>

<template>
  <div class="m-auto">
    <div
      class="text-green-theme font-playfair text-5xl text-center p-4 mb-8 font-extrabold"
    >
      Adopt Me
    </div>
    <div class="text-red-theme text-center text-3xl font-bold mb-6">
      Meet available kittens <span class="text-green-theme">for adoption</span>
    </div>
    <AdoptMeItem
      v-for="(item, idx) in items"
      :key="item.name"
      :item="item"
      data-aos="fade-up"
      :class="{ 'bg-pink-theme': idx % 2 === 1 }"
    />
  </div>
</template>
<script>
import { getAvailableKittens } from '~/derived-data'

export default {
  components: {
    AdoptMeItem: () => import('~/components/adopt_me/AdoptMeItem'),
  },
  data() {
    return {
      items: getAvailableKittens,
    }
  },
  head: {
    title: 'Adopt Me | Miaumi Cattery',
  },
}
</script>

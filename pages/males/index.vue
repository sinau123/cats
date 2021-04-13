<template>
  <div class="container m-auto">
    <div
      class="text-green-theme font-playfair text-5xl text-center p-4 mb-8 font-extrabold"
    >
      Males
    </div>
    <div class="text-red-theme text-center text-3xl font-bold mb-6">
      Let's meet <span class="text-green-theme">the males</span>
    </div>
    <CatItems :items="items" type="male" />
  </div>
</template>
<script>
import { getMaleCats } from '~/derived-data'

export default {
  components: {
    CatItems: () => import('~/components/cat_item/CatItems'),
  },
  data() {
    return {
      items: getMaleCats,
    }
  },
  head: {
    title: 'Male Cats | Miaumi Cattery',
  },
}
</script>

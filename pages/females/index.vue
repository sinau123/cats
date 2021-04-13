<template>
  <div class="container m-auto">
    <div
      class="text-green-theme font-playfair text-5xl text-center p-4 mb-8 font-extrabold"
    >
      Females
    </div>
    <div class="text-red-theme text-center text-3xl font-bold mb-6">
      Let's meet <span class="text-green-theme">the females</span>
    </div>
    <CatItems :items="items" type="female" />
  </div>
</template>
<script>
import { getFemaleCats } from '~/derived-data'
export default {
  components: {
    CatItems: () => import('~/components/cat_item/CatItems'),
  },
  data() {
    return {
      items: getFemaleCats,
    }
  },
  head: {
    title: 'Female Cats | Miaumi Cattery',
  },
}
</script>

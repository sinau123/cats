<template>
  <div class="container m-auto">
    <CatItems :items="items" type="female" />
  </div>
</template>
<script>
import { getFemaleCats } from '~/data/derivedCatData'
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
    title: 'Female Cats',
    meta: [
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Female Cats',
      },
    ],
  },
}
</script>

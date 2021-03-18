<template>
  <div class="container m-auto">
    <CatItems :items="items" type="male" />
  </div>
</template>
<script>
import { getMaleCats } from '~/data/derivedCatData'

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
    title: 'Male Cats',
    meta: [
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Male Cats',
      },
    ],
  },
}
</script>

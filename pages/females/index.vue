<template>
  <div class="container m-auto">
    <CatItems :items="items" type="female" />
  </div>
</template>
<script>
import { CatItem } from '~/components/cat_item/catItem.js'
export default {
  components: {
    CatItems: () => import('~/components/cat_item/CatItems'),
  },
  data() {
    return {
      items: [
        new CatItem('Cat Lucu', 'cat_1.jpeg', 'Blue White'),
        new CatItem('Cat Manis', 'cat_2.jpeg', 'Orange White'),
        new CatItem('Cat Imut', 'cat_3.jpeg', 'Black'),
        new CatItem('Cat Besar', 'cat_4.jpeg', 'Grey'),
        new CatItem('Cat Kecil', 'cat_5.jpeg', 'Orange White'),
        new CatItem('Cat Biru', 'cat_6.jpeg', 'Blue White'),
      ],
    }
  },
}
</script>

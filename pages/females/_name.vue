<template>
  <CatDetail />
</template>

<script>
import { CatItem } from '~/models/catItem'

export default {
  components: {
    CatDetail: () => import('~/components/CatDetail'),
  },
  data() {
    return {
      catTitle: '',
    }
  },
  head() {
    return {
      title: `${this.catTitle} | Miaumi Cattery`,
    }
  },
  created() {
    this.catTitle = CatItem.getNameFromRouteParam(this.$route.params.name)
  },
}
</script>

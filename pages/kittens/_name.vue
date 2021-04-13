<template>
  <CatDetail />
</template>

<script>
import DerivedData from '~/derived-data'

export default {
  components: {
    CatDetail: () => import('~/components/kittens/KittenDetail'),
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
    this.catTitle = DerivedData.CatItem.getNameFromRouteParam(
      this.$route.params.name
    )
  },
}
</script>

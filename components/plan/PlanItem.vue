<template>
  <div class="flex py-4 w-full justify-center overflow-x-hidden">
    <CatItem :item="item.male" data-aos="fade-right" />
    <CatItem :item="item.female" type="female" data-aos="fade-left" />
  </div>
</template>
<script>
import { CatPlanItem } from '~/models/catPlanItem.js'

export default {
  components: {
    CatItem: () => import('~/components/plan/CatItem.vue'),
  },
  props: {
    item: {
      type: CatPlanItem,
      required: true,
    },
  },
}
</script>

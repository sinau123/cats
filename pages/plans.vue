<template>
  <div class="flex flex-col items-center justify-center m-auto">
    <div class="text-blue-400 text-4xl text-center p-4 font-bold">
      {{ getCurYear() }} Plans
    </div>
    <PlanItem
      v-for="(plan, idx) in plans"
      :key="idx"
      :item="plan"
      :class="idx % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50'"
    />
  </div>
</template>
<script>
import { getPlanItems } from '~/data/derivedCatData'

export default {
  components: {
    PlanItem: () => import('~/components/plan/PlanItem.vue'),
  },
  data() {
    return {
      plans: getPlanItems,
    }
  },
  methods: {
    getCurYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

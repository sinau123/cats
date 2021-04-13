<template>
  <div class="flex flex-col items-center justify-center m-auto">
    <div
      class="text-green-theme font-playfair text-5xl text-center p-4 mb-8 font-extrabold"
    >
      Plans
    </div>
    <div class="text-red-theme text-center text-4xl font-bold mb-6">
      {{ getCurYear() }}
      <span class="text-green-theme">Breeding Plans</span>
    </div>

    <PlanItem
      v-for="(plan, idx) in plans"
      :key="idx"
      :item="plan"
      :class="idx % 2 === 0 ? 'bg-white' : 'bg-pink-theme'"
    />
  </div>
</template>
<script>
import { getPlanItems } from '~/derived-data'

export default {
  components: {
    PlanItem: () => import('~/components/plan/PlanItem.vue'),
  },
  provide: {
    items: getPlanItems,
  },
  data() {
    return {
      plans: getPlanItems,
    }
  },
  head: {
    title: 'Cat Plans | Miaumi Cattery',
  },
  methods: {
    getCurYear() {
      if (process.client) {
        return new Date().getFullYear()
      }

      return ''
    },
  },
}
</script>

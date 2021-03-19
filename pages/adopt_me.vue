<template>
  <div class="m-auto">
    <AdoptMeItem
      v-for="(item, idx) in items"
      :key="item.name"
      :item="item"
      data-aos="fade-up"
      :class="{ 'bg-blue-100': idx % 2 === 0 }"
    />
  </div>
</template>
<script>
import { getAvailableKittens } from '~/derived-data'

export default {
  components: {
    AdoptMeItem: () => import('~/components/adopt_me/AdoptMeItem'),
  },
  data() {
    return {
      items: getAvailableKittens,
    }
  },
}
</script>

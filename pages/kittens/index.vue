<template>
  <div class="container flex justify-center m-auto flex-wrap">
    <KittenItem v-for="item in items" :key="item.name" :item="item" />
  </div>
</template>
<script>
import { getKittens } from '~/derived-data'

export default {
  components: {
    KittenItem: () => import('~/components/kittens/KittenItem'),
  },
  data() {
    return {
      items: getKittens,
    }
  },
  head: {
    title: 'Kitten List ',
    meta: [
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Kitten List',
      },
    ],
  },
}
</script>

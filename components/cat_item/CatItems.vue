<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4"
  >
    <CatItem
      v-for="item in items"
      :key="item.name"
      :item="item"
      :type="type"
      data-aos="fade-up"
    />
  </div>
</template>
<script>
export default {
  components: {
    CatItem: () => import('~/components/cat_item/CatItem.vue'),
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      default: 'male',
    },
  },
}
</script>

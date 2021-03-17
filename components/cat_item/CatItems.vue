<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4"
  >
    <MaleItem
      v-for="item in items"
      :key="item.name"
      :item="item"
      :type="type"
    />
  </div>
</template>
<script>
export default {
  components: {
    MaleItem: () => import('~/components/cat_item/MaleItem'),
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

<template>
  <KittenDetail />
</template>

<script>
export default {
  components: {
    KittenDetail: () => import('~/components/kittens/KittenDetail'),
  },
}
</script>

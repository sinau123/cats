<template>
  <div>
    <div id="container" class="pt-24">
      <Navbar />
      <div class="min-h-full">
        <Nuxt />
      </div>
    </div>
    <FooterComp />
  </div>
</template>
<script>
export default {
  components: {
    Navbar: () => import('~/components/navbar/Navbar'),
    FooterComp: () => import('~/components/footer/Footer'),
  },
}
</script>
<style lang="less" scoped>
#container {
  min-height: calc(100vh - 200px);
}
</style>

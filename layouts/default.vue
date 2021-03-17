<template>
  <div class="bg-blue-50 min-h-screen">
    <Navbar />
    <Nuxt />
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
<style></style>

<template>
  <div class="bg-yellow-50 min-h-screen">
    <Navbar />
    <Nuxt />
  </div>
</template>
<script>
export default {
  components: {
    Navbar: () => import('~/components/navbar/Navbar'),
  },
}
</script>
<style></style>

<template>
  <div>
    <div class="text-blue-400 text-6xl pt-4 text-center font-pota">MIAUMI</div>
    <div class="text-blue-400 text-3xl font-bold mb-2 text-center">Cattery</div>
    <MobileNavbar :items="items" />

    <nav class="xs-only:hidden h-screen sm:h-auto mt-12 sm:mt-0 bg-blue-200">
      <div
        class="flex flex-col sm:flex-row list-reset m-0 w-full md:w-auto flex-wrap sm:items-center justify-center flex-grow bg-blue-200"
      >
        <div v-for="item in items" :key="item.name" class="sm:mx-1">
          <nuxt-link
            data-trigger
            :to="item.link"
            class="block py-1 px-4 lg:px-8 my-2"
            :exact="item.link === '/'"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { NavbarItem } from '~/models/navbar.js'
export default {
  components: {
    MobileNavbar: () => import('~/components/navbar/MobileNavbar'),
  },
  data() {
    return {
      items: [
        new NavbarItem('Home', '/'),
        new NavbarItem('Plans'),
        new NavbarItem('Males'),
        new NavbarItem('Females'),
        new NavbarItem('Adopt Me'),
        new NavbarItem('Kittens'),
        new NavbarItem('Contact Us'),
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.nuxt-link-active {
  @apply text-gray-50;
}
</style>

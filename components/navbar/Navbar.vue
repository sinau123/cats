<template>
  <div>
    <MobileNavbar
      class="fixed-navbar"
      :items="items"
      :class="{ 'hidden-navbar': !showNavbar }"
    />

    <nav
      class="fixed-navbar bg-white shadow-xl xs-only:hidden h-screen sm:h-auto mt-12 mb-20 sm:mt-0 m-auto py-2"
      :class="{ 'hidden-navbar': !showNavbar }"
    >
      <div
        class="flex flex-col sm:flex-row list-reset w-full md:w-auto flex-wrap sm:items-center m-auto flex-grow container px-3 2xl:px-0"
      >
        <LogoName />
        <div class="flex flex-1 justify-end">
          <div
            v-for="item in items"
            :key="item.name"
            class="sm:mx-1 md:pr-4 pr-1 last:pr-0"
          >
            <nuxt-link
              data-trigger
              :to="item.link"
              class="menu-item block py-4 font-semibold"
              :exact="item.link === '/'"
            >
              {{ item.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { NavbarItem } from '~/models/navbar.js'

const OFFSET = 30
export default {
  components: {
    MobileNavbar: () => import('~/components/navbar/MobileNavbar'),
    LogoName: () => import('~/components/navbar/LogoName'),
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
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: debounce(function () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
      this.showItems = false
    }, 100),
  },
}
</script>
<style lang="less" scoped>
.nuxt-link-active {
  @apply text-red-theme;
  position: relative;
}
.menu-item {
  &:after {
    content: '';
    display: block;
    position: absolute;
    z-index: 5;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    height: 4px;
    background-color: #f15958;
    transition: 300ms ease all;
    transform: scale(0);
    opacity: 0;
  }

  &.nuxt-link-active::after {
    opacity: 1;
    transform: scale(1);
  }
}

.fixed-navbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  z-index: 101;
  transform: translate3d(0, 0, 0);
  transition: 0.5s all ease-out;
}

&.hidden-navbar {
  transform: translate3d(0, -100%, 0);
}
</style>

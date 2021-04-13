<template>
  <div>
    <div class="sm:hidden w-full flex justify-end py-2 pr-4 bg-white">
      <LogoName />
      <div class="flex-1 flex justify-end items-center">
        <button
          class="flex justify-center items-center sm:hidden focus:outline-none text-center"
          type="button"
          @click="toggleNavbar"
        >
          <svg
            class="h-5 w-5 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      class="sm:hidden flex flex-col top-0 z-10 fixed transition-all duration-500 ease-in transform w-full overflow-y-auto h-screen bg-white"
      :class="!isOpen ? '-translate-x-full' : 'translate-x-0'"
    >
      <div class="sm:hidden w-full flex justify-end py-2 pr-4 bg-white">
        <div>
          <LogoName />
        </div>
        <div class="flex-1 flex justify-end items-center">
          <button
            class="hamburger flex justify-center items-center sm:hidden focus:outline-none text-center"
            type="button"
            @click="toggleNavbar"
          >
            <svg
              class="h-6 w-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="flex flex-1 flex-col list-reset m-0 w-full flex-wrap text-xl bg-white pr-3"
      >
        <div v-for="item in items" :key="item.name">
          <div class="sm:hidden text-right">
            <div>
              <nuxt-link
                :to="item.link"
                class="inline-block px-4 py-3"
                :exact="item.link === '/'"
              >
                {{ item.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {
    LogoName: () => import('~/components/navbar/LogoName'),
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    isOpen(val) {
      setTimeout(() => {
        if (val) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }
      }, 500)
    },
    $route() {
      this.isOpen = false
    },
  },

  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="less" scoped>
.nuxt-link-active {
  @apply text-red-theme;
}
</style>

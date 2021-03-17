<template>
  <div class="">
    <div class="sm:hidden w-full flex justify-end py-2 pr-4">
      <button
        class="hamburger flex justify-center items-center sm:hidden focus:outline-none text-center"
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
    <nav
      class="sm:hidden flex flex-col top-0 z-10 fixed transition-all duration-1000 ease-out transform w-full overflow-y-auto h-screen bg-blue-200"
      :class="
        !isOpen ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-1'
      "
    >
      <div class="p-4">
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
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex flex-1 flex-col list-reset m-0 w-full flex-wrap justify-center bg-blue-200"
      >
        <div v-for="item in items" :key="item.name">
          <div class="sm:hidden text-right">
            <div>
              <nuxt-link
                :to="item.link"
                class="inline-block px-4 py-5"
                :class="
                  $route.path === item.link
                    ? 'font-bold text-gray-50'
                    : 'font-normal'
                "
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
      if (val) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
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
.overlay {
  background: rgba(0, 0, 0, 0.6);
}
/* HAMBURGER MENU */

.hamburger {
  cursor: pointer;
  width: 32px;
  height: 32px;
  transition: all 0.25s;
}

.hamburger__top-bun,
.hamburger__bottom-bun {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: #000;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger:hover [class*='-bun'] {
  background: #333;
}

.hamburger__top-bun {
  transform: translateY(-5px);
}

.hamburger__bottom-bun {
  transform: translateY(3px);
}

.open {
  transform: rotate(90deg);
  transform: translateY(-1px);
}

.open .hamburger__top-bun {
  transform: rotate(45deg) translateY(0px);
}

.open .hamburger__bottom-bun {
  transform: rotate(-45deg) translateY(0px);
}
</style>

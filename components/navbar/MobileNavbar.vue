<template>
  <div class="xs-only:mb-14">
    <div class="sm:hidden fixed w-full flex justify-end py-2 pr-4 bg-blue-300">
      <button
        class="hamburger flex justify-center items-center sm:hidden focus:outline-none text-center"
        type="button"
        :class="isOpen ? 'open' : ''"
        @click="toggleNavbar"
      >
        <span class="hamburger__top-bun block"></span
        ><span class="hamburger__bottom-bun block"></span>
      </button>
    </div>
    <nav
      class="sm:hidden fixed transition-all transform w-full overflow-y-auto h-screen mt-12 bg-blue-300"
      :class="!isOpen ? 'translate-x-full' : 'translate-x-0'"
    >
      <div
        class="flex flex-col sm:flex-row list-reset m-0 w-full flex-wrap justify-center flex-grow bg-blue-300"
      >
        <div v-for="item in items" :key="item.name">
          <div class="sm:hidden">
            <div class="flex items-center border-b-2 px-4 py-2">
              <nuxt-link
                :to="item.link"
                class="block flex-1"
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

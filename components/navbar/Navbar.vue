<template>
  <nav
    class="fixed w-full sm:w-auto sm:static overflow-y-auto sm:overflow-y-hidden h-screen"
  >
    <div
      class="flex flex-col sm:flex-row list-reset m-0 w-full md:w-auto flex-wrap sm:items-center justify-center flex-grow bg-yellow-50"
    >
      <div v-for="item in items" :key="item.name" class="sm:mx-1">
        <CollapsibleNavbarItem :item="item" />
        <Tippy>
          <div>
            <nuxt-link
              data-trigger
              :to="item.link"
              class="hidden sm:block border-b-4 py-1 px-4 my-2 border-blue-500 hover:border-opacity-100"
              :class="
                $route.path === item.link
                  ? 'border-opacity-100'
                  : 'border-opacity-0'
              "
            >
              {{ item.getName() }}
            </nuxt-link>
            <div v-if="item.hasItems()" data-tippy class="bg-yellow-50">
              <div
                v-for="subitem in item.items"
                :key="subitem.name"
                class="w-52"
              >
                <nuxt-link
                  :to="subitem.getLinkPath(item.link)"
                  class="block px-4 py-2 border-b-2"
                >
                  {{ subitem.getName() }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </Tippy>
      </div>
    </div>
  </nav>
</template>

<script>
import { NavbarItem } from './navbar.js'
export default {
  components: {
    Tippy: () => import('~/components/Tippy'),
    CollapsibleNavbarItem: () =>
      import('~/components/navbar/CollapsibleNavbarItem'),
  },
  data() {
    return {
      items: [
        new NavbarItem('home', '/', []),
        new NavbarItem('ladies', '/ladies', [
          new NavbarItem('Natille Cats Avenue'),
          new NavbarItem('Florentine of Harmony Gardens'),
          new NavbarItem('Yagoda Lazy Town'),
        ]),
        new NavbarItem('gentlement', '/gentlement', [
          new NavbarItem('Casanova Cherry Land'),
          new NavbarItem('Goran Lazy Town'),
        ]),
        new NavbarItem('teens'),
        new NavbarItem('kittens', '/kittens', [
          new NavbarItem('j-wurf / j-Litter'),
          new NavbarItem('i-wurf / i-Litter'),
          new NavbarItem('h-wurf / h-Litter'),
          new NavbarItem('g-wurf / g-Litter'),
          new NavbarItem('f-wurf / f-Litter'),
          new NavbarItem('e-wurf / e-Litter'),
          new NavbarItem('d-wurf / d-Litter'),
          new NavbarItem('c-wurf / c-Litter'),
          new NavbarItem('b-wurf / b-Litter'),
        ]),
        new NavbarItem('information'),
        new NavbarItem('contact'),
      ],
    }
  },
}
</script>

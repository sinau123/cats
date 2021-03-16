<template>
  <div class="sm:hidden">
    <div class="flex items-center border-b-2 px-4 py-2">
      <nuxt-link
        :to="item.link"
        class="block flex-1"
        :class="$route.path === item.link ? 'font-bold' : 'font-normal'"
      >
        {{ item.getName() }}
      </nuxt-link>
      <span v-if="item.hasItems()">
        <a v-if="isOpen" class="block" @click="isOpen = !isOpen">
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
              d="M20 12H4"
            />
          </svg>
        </a>
        <a v-else class="block" @click="isOpen = !isOpen">
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </a>
      </span>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'">
      <div v-if="item.hasItems()" class="bg-yellow-50">
        <div v-for="subitem in item.items" :key="subitem.name" class="w-full">
          <nuxt-link
            :to="subitem.getLinkPath(item.link)"
            class="block px-4 py-2 border-b-2"
          >
            {{ subitem.getName() }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

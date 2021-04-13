<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="py-6">
    <div
      class="container m-auto flex lg:my-4 mt-4 mb-14 flex-col lg:flex-row text-center lg:text-left lg:items-end px-3"
    >
      <nuxt-link :to="item.getLink()">
        <img
          class="w-80 h-80 rounded-md shadow-2xl hover:shadow-3xl overflow-hidden m-auto object-cover"
          :src="item.getImg()"
          :alt="item.name"
        />
      </nuxt-link>
      <div class="flex-1 flex flex-col mt-4 lg:ml-4">
        <div>
          <div class="text-3xl font-playfair text-red-theme font-extrabold">
            {{ item.name }}
          </div>
          <div
            class="text-xl text-green-theme font-bold mb-4"
            v-html="
              item
                .getSimpleInfoStr()
                .replace(/\//g, `<span class='text-red-theme'>&bull;</span>`)
            "
          ></div>
          <div class="text-xl font-bold">
            Parent: {{ dad.name }} - {{ mom.name }}
          </div>
        </div>
        <div
          class="flex mt-4 lg:items-end justify-between flex-col-reverse lg:flex-row items-center"
        >
          <div class="mt-8 lg:mt-0">
            <nuxt-link
              :to="`/contact_us?subject=Adopt a kitten&body=I want to adopt '${item.name}'`"
            >
              <MyButton tag="div" class="shadow-3xl block px-4 py-2"
                >Book Kitten</MyButton
              >
            </nuxt-link>
          </div>
          <div class="flex">
            <nuxt-link :to="dad.getLink()" class="block hover:opacity-100">
              <img
                class="rounded-md sm:h-40 sm:w-40 h-32 w-32 object-cover hover:shadow-3xl shadow-md"
                :src="dad.getImg()"
                :alt="dad.name"
              />
            </nuxt-link>
            <nuxt-link :to="mom.getLink()" class="block hover:opacity-100">
              <img
                class="rounded-full sm:h-40 sm:w-40 h-32 w-32 object-cover hover:shadow-3xl shadow-md"
                :src="mom.getImg()"
                :alt="mom.name"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { KittenItem } from '~/models/kittenItem'
export default {
  props: {
    item: {
      type: KittenItem,
      required: true,
    },
  },
  computed: {
    dad() {
      return this.item.parent.male
    },
    mom() {
      return this.item.parent.female
    },
  },
}
</script>

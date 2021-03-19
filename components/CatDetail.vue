<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="item">
    <div
      class="shadow-3xl border-2 rounded-lg border-gray-600 md:w-96 md:h-96 w-80 h-80 mt-5 mb-9 m-auto overflow-hidden"
      :class="{ 'rounded-full border-pink-400': item.gender === 'female' }"
    >
      <img
        class="transition-transform duration-500 transform hover:scale-125 md:w-96 md:h-96 w-80 h-80 object-cover"
        :src="item.getImg()"
        alt=""
      />
    </div>

    <div class="font-bold text-center text-gray-700 m-4">
      <div class="text-3xl mb-4">{{ item.name }}</div>
      <div class="text-2xl text-blue-400" v-html="item.getInfoStr()"></div>
      <div class="text-4xl mt-16 mb-8">
        {{ item.gender === 'male' ? 'Father' : 'Mother' }} of Little KITTENs:
      </div>
      <div class="flex flex-wrap justify-center">
        <template v-if="kittens.length > 0">
          <div
            v-for="kitten in kittens"
            :key="kitten.name"
            class="shadow-3xl w-36 h-36 sm:w-48 sm:h-48 overflow-hidden rounded-full m-1 border-gray-500 border-2"
          >
            <img
              class="w-36 h-36 sm:w-48 sm:h-48 object-cover"
              :src="kitten.getImg()"
              :alt="kitten.name"
            />
          </div>
        </template>
        <template v-else>
          <div v-for="img in [1, 2, 3, 4, 5]" :key="img">
            <div
              class="shadow-3xl sh w-36 h-36 sm:w-48 sm:h-48 overflow-hidden rounded-full m-1 border-gray-500 border-2"
            >
              <img
                class="w-36 h-36 sm:w-48 sm:h-48 object-cover"
                :src="require('~/assets/img/coming_soon.png')"
                alt="coming soon"
              />
            </div>
          </div>
        </template>
      </div>
      <div class="container my-8 mt-16 m-auto">
        <div class="text-center text-3xl font-bold my-10">Gallery:</div>
        <VueSlickCarousel
          ref="main_carousel"
          :arrows="false"
          :draggable="false"
          :accessibility="false"
          :focus-on-select="true"
        >
          <div
            v-for="(img, idx) in item.getExtraImg()"
            :key="idx"
            class="text-center bg-gray-500"
          >
            <img
              class="h-96 sm:h-128 w-full m-auto object-scale-down pointer-events-none"
              :src="img"
              :alt="img"
            />
          </div>
        </VueSlickCarousel>
        <VueSlickCarousel
          ref="preview_carousel"
          class="shadow-3xl py-1"
          :slides-to-show="5"
          :focus-on-select="true"
          :center-mode="true"
          :arrows="false"
          :responsive="carouselResponsiveSetting"
          @beforeChange="nextMainCarousel"
        >
          <div
            v-for="(img, idx) in item.getExtraImg()"
            :key="idx"
            class="text-center bg-white outline-none cursor-pointer opacity-80 hover:opacity-100"
          >
            <img
              class="h-36 w-full m-auto object-cover bg-black pointer-events-none"
              :src="img"
              :alt="img"
            />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import { findCatByName } from '~/data/derivedCatData'
import { CatItem } from '~/models/catItem'

export default {
  components: {
    VueSlickCarousel: () => import('vue-slick-carousel'),
  },
  data() {
    return {
      item: null,
      carouselResponsiveSetting: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }
  },
  computed: {
    kittens() {
      return (this.item && this.item.getKittens()) || []
    },
  },
  created() {
    this.item = findCatByName(
      CatItem.getLowerNameFromRouteParam(this.$route.params.name)
    )
  },
  methods: {
    nextMainCarousel(_, idx) {
      this.$refs.main_carousel.goTo(idx)
    },
  },
}
</script>

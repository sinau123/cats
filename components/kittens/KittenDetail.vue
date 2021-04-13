<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="item">
    <div
      class="shadow-3xl rounded-lg md:w-96 md:h-96 w-80 h-80 mt-5 mb-9 m-auto overflow-hidden"
      :class="{ 'rounded-full ': item.gender === 'female' }"
    >
      <img
        class="transition-transform duration-500 transform hover:scale-125 md:w-96 md:h-96 w-80 h-80 object-cover"
        :src="item.getImg()"
        alt=""
      />
    </div>

    <div class="relative md:w-96 w-80 h-2 m-auto">
      <div
        v-if="item.available"
        class="bounced absolute bottom-4 right-4 md:-right-40 z-10"
      >
        <nuxt-link
          :to="`/contact_us?subject=Adopt a kitten&body=I want to adopt '${item.name}'`"
        >
          <MyButton tag="div" class="md:text-3xl shadow-3xl block md:px-8 py-2"
            >Book Kitten</MyButton
          >
        </nuxt-link>
      </div>
    </div>

    <div class="text-center m-4">
      <div class="text-3xl font-playfair text-red-theme font-extrabold">
        {{ item.name }}
      </div>
      <div
        class="text-2xl font-bold text-green-theme"
        v-html="
          item
            .getInfoStr()
            .replace(/\//g, `<span class='text-red-theme'>&bull;</span>`)
        "
      ></div>
      <div
        class="text-4xl font-playfair text-red-theme font-extrabold mt-16 my-4"
      >
        Parent
      </div>
      <div class="flex flex-wrap justify-center" data-aos="fade-up">
        <nuxt-link
          :to="dad.getLink()"
          class="block shadow-2xl hover:shadow-3xl w-36 h-36 sm:w-48 sm:h-48 overflow-hidden rounded-md m-1 border-gray-500 border-2"
        >
          <img
            class="w-36 h-36 sm:w-48 sm:h-48 object-cover"
            :src="dad.getImg()"
            :alt="dad.name"
          />
        </nuxt-link>
        <nuxt-link
          :to="mom.getLink()"
          class="block shadow-2xl hover:shadow-3xl w-36 h-36 sm:w-48 sm:h-48 overflow-hidden rounded-full m-1 border-gray-500 border-2"
        >
          <img
            class="w-36 h-36 sm:w-48 sm:h-48 object-cover"
            :src="mom.getImg()"
            :alt="mom.name"
          />
        </nuxt-link>
      </div>
      <div class="container m-auto">
        <div
          class="text-4xl text-center font-playfair text-red-theme font-extrabold mt-16 my-4"
        >
          Gallery
        </div>
        <VueSlickCarousel
          ref="main_carousel"
          :arrows="false"
          :draggable="false"
          :accessibility="false"
          :focus-on-select="true"
        >
          <div
            v-for="(img, idx) in item.getGallery()"
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
            v-for="(img, idx) in item.getGallery()"
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
import { findKittenByName } from '~/derived-data'
import { KittenItem } from '~/models/kittenItem'

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
    dad() {
      return this.item.parent.male
    },
    mom() {
      return this.item.parent.female
    },
  },
  created() {
    this.item = findKittenByName(
      KittenItem.getLowerNameFromRouteParam(this.$route.params.name)
    )
  },
  methods: {
    nextMainCarousel(_, idx) {
      this.$refs.main_carousel.goTo(idx)
    },
  },
}
</script>
<style lang="less" scoped>
.bounced {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
  animation-name: bounce;
  animation-timing-function: linear;

  &:hover {
    animation-play-state: paused;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

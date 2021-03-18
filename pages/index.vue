<template>
  <div
    class="flex flex-row justify-center items-center py-1 sm:py-2 m-auto container"
  >
    <div>
      <div class="relative">
        <img
          v-lazy-load
          class="text-center lg:w-4xl"
          :data-src="require('~/assets/img/cat-home.jpeg')"
          alt=""
        />
        <div
          class="absolute bottom-2 sm:bottom-4 p-2 sm:p-8 text-white font-bold"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            class="font-pota text-3xl sm:text-6xl md:max-w-xl text-shadow-xl"
          >
            from the best bloodlines
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            class="text-shadow text-base sm:text-2xl leading-4"
          >
            we developing posture and characteristics
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Home page description',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Miumi Cattery',
      },
    ],
  },
}
</script>

<style></style>

<template>
  <div class="">
    <div>
      <div class="relative">
        <div class="bg-image h-96 lg:h-192 sm:h-144"></div>
        <div
          class="absolute bottom-0 p-2 sm:p-8 font-bold bg-white w-full bg-opacity-75 overflow-x-hidden"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            class="font-playfair text-red-theme text-3xl sm:text-6xl mb-3 md:max-w-xl text-shadow-xl"
          >
            from the best bloodlines
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            class="text-shadow font-playfair text-green-theme text-base sm:text-2xl"
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
    title: 'Home | Miaumi Cattery',
    meta: [
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Miaumi Cattery',
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

<style>
.bg-image {
  background-image: url('~/assets/img/cat-home.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
</style>

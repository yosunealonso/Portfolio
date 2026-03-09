<script setup lang="ts">

import { RouterLink } from 'vue-router'

const carouselImages = [
  'carrusel1',
  'carrusel2',
  'carrusel3',
  'carrusel4',
  'carrusel5',
  'carrusel6',
  'carrusel7',
  'carrusel8',
  'carrusel9',
  'carrusel10'
]
</script>

<template>
  <section
    class="fixed inset-0 bg-cover bg-top bg-no-repeat h-screen flex items-center justify-center"
    style="background-image: url('/images/fondo.jpg');"
  >
     
    <div class="flex flex-col items-center justify-between h-full w-full pt-60 pb-30">

      <div class="text-center w-full">
        <p class="portfolio block text-2xl text-blue-800 tracking-wide font-sans hover:text-[#f0b1c3]">
          Portfolio de diseño e ilustración
        </p>
      </div>

      <div class="flex-1 flex items-center justify-center w-full">
        <h1 class="nombre block text-[30vw] md:text-[20vw] leading-none text-blue-800 text-center hover:text-[#f0b1c3]">
        Yosune Alonso
        </h1>
      </div>

    </div>

    <div class="absolute bottom-0 w-full overflow-hidden bg-white/80 backdrop-blur-sm border-blue-800">
  
  <div class="marquee flex">

    <RouterLink
      v-for="(image, index) in carouselImages"
      :key="'first-' + index"
      to="/works"
      class="shrink-0 w-40 lg:h-50 "
    >
      <img
        :src="`/images/${image}.jpg`"
        :alt="image"
        class="w-full h-full object-cover border border-blue-800"
      />
    </RouterLink>

    <RouterLink
      v-for="(image, index) in carouselImages"
      :key="'second-' + index"
      to="/works"
      class="shrink-0 w-40 lg:h-50"
    >
      <img
        :src="`/images/${image}.jpg`"
        :alt="image"
        class="w-full h-full object-cover border border-blue-800 "
      />
    </RouterLink>

    <RouterLink
      v-for="(image, index) in carouselImages"
      :key="'second-' + index"
      to="/works"
      class="shrink-0 w-40 lg:h-50"
    >
      <img
        :src="`/images/${image}.jpg`"
        :alt="image"
        class="w-full h-full object-cover border border-blue-800 "
      />
    </RouterLink>

  </div>

</div>

  </section>
</template>

<style scoped>

.marquee {
  animation: scrollLeft 25s linear infinite;
}

@keyframes scrollLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.nombre {
  font-family: 'bookeyed-jack', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.portfolio {
  font-family: "rotunda-variable",sans-serif;
  font-variation-settings: 'wght' 400;
}

</style>
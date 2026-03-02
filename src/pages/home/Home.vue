<script setup lang="ts">
import { works } from '@/data/works'
</script>

<template>
  <section
    class="fixed inset-0 bg-cover bg-top bg-no-repeat h-screen flex items-center justify-center"
    style="background-image: url('/images/fondo.jpg');"
  >
     
    <div class="flex flex-col items-center justify-between h-full w-full pt-40 pb-10">

      <div class="text-center w-full">
        <p class="portfolio block text-2xl text-blue-800 tracking-wide font-sans">
          Portfolio diseño e ilustración
        </p>
      </div>

      <div class="flex-1 flex items-center justify-center w-full">
        <h1 class="nombre block text-[30vw] sm:text-[30vw] md:text-[20vw] leading-none text-blue-800 text-center">
        Yosune Alonso
        </h1>
      </div>

    </div>

    <div class="absolute bottom-0 w-full overflow-hidden bg-white/80 backdrop-blur-sm">
      
      <div class="marquee flex">
        <div
          v-for="work in works"
          :key="'first-' + work.id"
          class="shrink-0 w-45 lg:w-50"
        >
          <img
            :src="work.image"
            :alt="work.title"
            class="w-full h-full object-cover"
          />
        </div>

        <div
          v-for="work in works"
          :key="'second-' + work.id"
          class="shrink-0"
        >
          <img
            :src="work.image"
            :alt="work.title"
            class="h-40 w-auto object-cover"
          />
        </div>

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
  font-family: "arial", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
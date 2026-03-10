<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import WorkCarousel from '@/components/WorkCarousel.vue'
import { ArrowLeft, Instagram, Music2 } from 'lucide-vue-next'
import { useWorks } from "@/composables/useWorks"

const route = useRoute()
const router = useRouter()

const { getWorkById } = useWorks()

const work = getWorkById(String(route.params.id))


const previousArea = route.query.area as string | undefined

const goBack = () => {
  router.push({
    name: "works",
    query: {
      area: previousArea || "todas"
    }
  })
}

</script>

<template>
  <section 
  class="portfolio px-6 py-12" v-if="work"
  style="background-image: url('/images/fondo.jpg')";>

    <button
      @click="goBack"
      class="group flex items-center gap-2 mb-12 text-sm uppercase tracking-wide text-gray-500 hover:text-black transition"
    >
      <ArrowLeft class="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      Volver
    </button>

    <div class="max-w-7xl mx-auto">

      <div class="flex flex-col lg:flex-row items-stretch">

      <div class="lg:w-1/2 flex flex-col justify-end pr-0 lg:pr-16 mb-12 lg:mb-0">

        <h1 class="nombre text-blue-800 text-6xl md:text-7xl lg:text-8xl font-bold mb-6 ">
            {{ work.title }}
          </h1>

          <p class="text-gray-600 text-base md:text-lg lg:text-lg mb-6 leading-relaxed max-w-md">
            {{ work.description }}
          </p>

          <p class="text-sm uppercase tracking-wide text-gray-400">
            Área: {{ work.area }}
          </p>

        </div>

        <div class="lg:w-1/2 w-full">
        <WorkCarousel
        :photos="work.images"
        basePath="/images"
        />

        </div>

      </div>

    </div>

    <div v-if="work.blocks" class="max-w-7xl mx-auto mt-20 space-y-10">

  <div v-for="(block, index) in work.blocks" :key="index">

    <!-- TEXTO -->
    <div v-if="block.type === 'text'" class="max-w-3xl">
      <p class="text-blue-800 text-2xl">
        {{ block.content }}
      </p>
    </div>

    <!-- CANVA -->
    <div v-if="block.type === 'canva'" class="w-full flex justify-start">

      <iframe
        :src="block.url"
        class="w-full max-w-7xl aspect-video rounded-xl border-0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>

    <!-- SOCIAL -->
    <div v-if="block.type === 'social'" class="flex flex-col gap-4 max-w-md">
      <a
        v-if="block.instagram"
        :href="block.instagram"
        target="_blank"
        class="flex items-center gap-2 text-blue-800 hover:text-blue-600 font-semibold"
      >
        <Instagram class="w-5 h-5" />
        Míralo en Instagram
      </a>

      <a
        v-if="block.tiktok"
        :href="block.tiktok"
        target="_blank"
        class="flex items-center gap-2 text-blue-800 hover:text-blue-600 font-semibold"
      >
        <music2 class="w-5 h-5" />
        Míralo en TikTok
      </a>
    </div>

      </div>

    </div>

    </section>

  <section v-else class="p-12">
    <h1 class="text-2xl">Proyecto no encontrado</h1>
  </section>
</template>

<style scoped>

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
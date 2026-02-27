<script setup lang="ts">
import { useRoute } from 'vue-router'
import { works } from '@/data/works'
import { computed } from 'vue'
import WorkCarousel from '@/components/WorkCarousel.vue'

const route = useRoute()

const work = computed(() => {
  const id = Number(route.params.id)
  return works.find(w => w.id === id)
})
</script>

<template>
  <section class="px-6 py-12" v-if="work">

    <WorkCarousel
  :photos="work.images"
  basePath="/images"
  />

    <h1 class="text-4xl font-bold mb-4">
      {{ work.title }}
    </h1>

    <p class="text-gray-600 mb-6">
      {{ work.description }}
    </p>

    <p class="text-sm uppercase tracking-wide text-gray-400">
      Área: {{ work.area }}
    </p>

  </section>

  <section v-else class="p-12">
    <h1 class="text-2xl">Proyecto no encontrado</h1>
  </section>
</template>
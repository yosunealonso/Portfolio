<script setup lang="ts">
import { useRoute } from 'vue-router'
import { works } from '@/data/works'
import { computed } from 'vue'
import WorkCarousel from '@/components/WorkCarousel.vue'
import { useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const previousArea = route.query.area as string | undefined
const previousPage = route.query.page as string | undefined

const work = computed(() => {
  const id = Number(route.params.id)
  return works.find(w => w.id === id)
})

const goBack = () => {
  router.push({
    name: 'works',
    query: {
    area: previousArea || 'todas',
    page: previousPage || 1
    }
  })
}

</script>

<template>
  <section 
  class="px-6 py-12" v-if="work"
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

        <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            {{ work.title }}
          </h1>

          <p class="text-gray-600 mb-6 leading-relaxed max-w-md">
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

    </section>

  <section v-else class="p-12">
    <h1 class="text-2xl">Proyecto no encontrado</h1>
  </section>
</template>
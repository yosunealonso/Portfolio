<script setup lang="ts">
import { ref, computed} from 'vue'
import { works } from '@/data/works'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'

const selectedArea = ref<'ilustración' | string>('ilustración')

const route = useRoute()

if (route.query.area) {
  selectedArea.value = route.query.area as string
}

const filteredWorks = computed(() => {
  if (selectedArea.value === 'todas') {
    return works
  }
  return works.filter(work => work.area === selectedArea.value)
})

</script>

<template>
  <section 
  class="portfolio px-6 py-12 min-h-screen"
  style="background-image: url('/images/fondo.jpg')";>

    <h1 class="nombre text-7xl text-blue-800 mb-4">Trabajos</h1>

    <!-- Filtros -->
    <div class="flex flex-wrap gap-4 mb-10">

      <button
      v-for="area in ['ilustración','diseño','proyectos']"
      :key="area"
      @click="selectedArea = area"
      class="px-4 py-2 rounded-lg capitalize"
      :class="selectedArea === area ? 'bg-[#f0b1c3] text-white' 
        : 'bg-white text-[#f0b1c3]'"
      >
      {{ area }}
    </button>
    <button
      @click="selectedArea = 'todas'"
      class="px-4 py-2 rounded-lg transition-colors"
      :class="selectedArea === 'todas' 
        ? 'bg-[#f0b1c3] text-white' 
        : 'bg-white text-[#f0b1c3]'"
    >
      Todas
    </button>
    
  </div>
  
  <!-- Grid -->
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    
      <RouterLink
        v-for="work in filteredWorks"
        :key="work.id"
        :to="{
          name: 'work-detail',
          params: { id: work.id },
          query: {
            area: selectedArea,
          }
        }"
        class="group relative overflow-hidden rounded-sm"
      >

        <!-- Imagen -->
        <img
          :src="work.image"
          :alt="work.title"
          class="
            w-full 
            aspect-4/5
            object-cover 
            transition-all 
            duration-500 
            group-hover:scale-110
          "
        />

        <!-- Overlay oscuro -->
        <div
          class="
            absolute inset-0 
            bg-black/0 
            transition-all 
            duration-500 
            group-hover:bg-white
          "
        ></div>

        <!-- Texto centrado -->
        <div
          class="
            absolute inset-0 
            flex flex-col 
            items-center 
            justify-center 
            text-center 
            px-4
            opacity-0 
            transition-all 
            duration-500 
            group-hover:opacity-100
          "
        >
          <h2 class="text-blue-800 text-lg font-semibold">
            {{ work.title }}
          </h2>

          <p class="text-blue-800 text-sm mt-2">
            {{ work.description }}
          </p>
        </div>

      </RouterLink>
    </div>

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
<script setup lang="ts">
import { ref, computed} from 'vue'
import { works } from '@/data/works'
import { Card, CardContent } from '@/components/ui/card'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const selectedArea = ref<'diseño' | string>('diseño')

const filteredWorks = computed(() => {
  if (selectedArea.value === 'todas') {
    return works
  }
  return works.filter(work => work.area === selectedArea.value)
})

const itemsPerPage = 8
const currentPage = ref(1)

const totalPages = computed(() =>
  Math.ceil(filteredWorks.value.length / itemsPerPage)
)

const paginatedWorks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredWorks.value.slice(start, end)
})

const route = useRoute()

if (route.query.area) {
  selectedArea.value = route.query.area as string
}

if (route.query.page) {
  currentPage.value = Number(route.query.page)
}

</script>

<template>
  <section class="px-6 py-12">

    <h1 class="nombre text-7xl text-blue-800 mb-4">Trabajos</h1>

    <!-- Filtros -->
    <div class="flex flex-wrap gap-4 mb-10">

      
      <button
      v-for="area in ['diseño','ilustración','proyectos','arte']"
      :key="area"
      @click="selectedArea = area"
      class="px-4 py-2 border rounded-lg capitalize"
      :class="selectedArea === area ? 'bg-black text-white' : ''"
      >
      {{ area }}
    </button>
    
    <button
      @click="selectedArea = 'todas'"
      class="px-4 py-2 border rounded-lg"
      :class="selectedArea === 'todas' ? 'bg-black text-white' : ''"
    >
      Todas
    </button>
  </div>
  
  <!-- Grid -->
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    
      <RouterLink
        v-for="work in paginatedWorks"
        :key="work.id"
        :to="{
          name: 'work-detail',
          params: { id: work.id },
          query: {
            area: selectedArea,
            page: currentPage
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
            aspect-[4/5] 
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
            group-hover:bg-black/60
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
          <h2 class="text-white text-lg font-semibold">
            {{ work.title }}
          </h2>

          <p class="text-white text-sm mt-2">
            {{ work.description }}
          </p>
        </div>

      </RouterLink>
    </div>

    <Pagination
  v-model:page="currentPage"
  :itemsPerPage="itemsPerPage"
  :total="filteredWorks.length"
  class="mt-12 flex justify-center"
>
  <PaginationContent>

    <PaginationPrevious />

    <PaginationItem
      v-for="page in totalPages"
      :key="page"
      :value="page"
    >
      {{ page }}
    </PaginationItem>

    <PaginationNext />

  </PaginationContent>
</Pagination>

  </section>
</template>

<style scoped>

.nombre {
  font-family: 'bookeyed-jack', sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
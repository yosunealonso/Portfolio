<script setup lang="ts">
import { ref, computed } from 'vue'
import { works } from '@/data/works'
import { Card, CardContent } from '@/components/ui/card'

const selectedArea = ref<'todas' | string>('todas')

const filteredWorks = computed(() => {
  if (selectedArea.value === 'todas') {
    return works
  }
  return works.filter(work => work.area === selectedArea.value)
})
</script>

<template>
  <section class="px-6 py-12">

    <h1 class="text-4xl font-bold mb-8">Trabajos</h1>

    <!-- Filtros -->
    <div class="flex flex-wrap gap-4 mb-10">

      <button
        @click="selectedArea = 'todas'"
        class="px-4 py-2 border rounded-lg"
        :class="selectedArea === 'todas' ? 'bg-black text-white' : ''"
      >
        Todas
      </button>

      <button
        v-for="area in ['diseño','ilustración','proyectos','arte']"
        :key="area"
        @click="selectedArea = area"
        class="px-4 py-2 border rounded-lg capitalize"
        :class="selectedArea === area ? 'bg-black text-white' : ''"
      >
        {{ area }}
      </button>

    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <Card
        v-for="work in filteredWorks"
        :key="work.id"
        class="cursor-pointer hover:shadow-xl transition"
      >
        <CardContent class="p-4">

          <img
            :src="work.image"
            :alt="work.title"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />

          <h2 class="text-xl font-semibold">
            {{ work.title }}
          </h2>

          <p class="text-gray-500 text-sm">
            {{ work.description }}
          </p>

        </CardContent>
      </Card>

    </div>

  </section>
</template>

<style>
</style>
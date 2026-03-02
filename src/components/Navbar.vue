<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Turntable, Layers, Rainbow, WandSparkles, Menu, X } from 'lucide-vue-next'

// Variable reactiva para abrir/cerrar menú móvil
const isOpen = ref(false)
const route = useRoute()

// Función para cerrar menú al navegar
const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full bg-white border-b">
    <div class="flex justify-between items-center px-6 py-1">

        <RouterLink
        to="/" @click="closeMenu">
        <img src="/images/logo.jpg" alt="Logo" class="h-12" />
        </RouterLink>

      <!-- Menú Desktop -->
      <div class="hidden md:flex gap-3">
        <RouterLink
          to="/"
          @click="closeMenu"
          :class="[
            'flex items-center gap-2 px-2 py-1.5 rounded text-white transition',
            route.path === '/' ? ' bg-blue-900' : 'font-normal bg-blue-700 hover:bg-blue-800'
          ]"
          style="font-family: Arial, sans-serif"
        >
          <Turntable class="w-4 h-4" />
          Inicio
        </RouterLink>

        <RouterLink
          to="/works"
          @click="closeMenu"
          :class="[
            'flex items-center gap-2 px-3 py-1.5 rounded text-white transition',
            route.path.startsWith('/works') ? ' bg-blue-900' : 'font-normal bg-blue-700 hover:bg-blue-800'
          ]"
          style="font-family: Arial, sans-serif"
        >
          <Layers class="w-4 h-4" />
          Trabajos
        </RouterLink>

        <RouterLink
          to="/about/bio"
          @click="closeMenu"
          :class="[
            'flex items-center gap-2 px-3 py-1.5 rounded text-white transition',
            route.path.startsWith('/about/bio') ? ' bg-blue-800' : 'font-normal bg-blue-700 hover:bg-blue-800'
          ]"
          style="font-family: Arial, sans-serif"
        >
          <Rainbow class="w-4 h-4" />
          Sobre mí
        </RouterLink>

        <RouterLink
          to="/contact"
          @click="closeMenu"
          :class="[
            'flex items-center gap-2 px-3 py-1.5 rounded text-white transition',
            route.path.startsWith('/contact') ? ' bg-blue-800' : 'font-normal bg-blue-700 hover:bg-blue-800'
          ]"
          style="font-family: Arial, sans-serif"
        >
          <WandSparkles class="w-4 h-4" />
          Contacto
        </RouterLink>
      </div>

      <!-- Botón hamburguesa (solo móvil) -->
      <button
        class="md:hidden text-blue-800"
        @click="isOpen = !isOpen"
      >
        <Menu v-if="!isOpen" />
        <X v-else />
      </button>
    </div>

    <!-- Menú móvil -->
    <div v-if="isOpen" class="flex flex-col gap-2 px-6 pb-6 md:hidden">
      <RouterLink
        to="/"
        @click="closeMenu"
        class="flex items-center gap-2 px-4 py-2 rounded text-blue-800 hover:text-blue-700 transition"
      >
        <Turntable class="w-4 h-4" />
        Inicio
      </RouterLink>
      <RouterLink
        to="/works"
        @click="closeMenu"
        class="flex items-center gap-2 px-4 py-2 rounded text-blue-800 hover:text-blue-700 transition"
      >
        <Layers class="w-4 h-4" />
        Trabajos
      </RouterLink>
      <RouterLink
        to="/about/bio"
        @click="closeMenu"
        class="flex items-center gap-2 px-4 py-2 rounded text-blue-800 hover:text-blue-700 transition"
      >
        <Rainbow class="w-4 h-4" />
        Sobre mí
      </RouterLink>
      <RouterLink
        to="/contact"
        @click="closeMenu"
        class="flex items-center gap-2 px-4 py-2 rounded text-blue-800 hover:text-blue-700 transition"
      >
        <WandSparkles class="w-4 h-4" />
        Contacto
      </RouterLink>
    </div>
  </nav>
</template>
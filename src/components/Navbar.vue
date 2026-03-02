<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Home, Briefcase, User, Mail, Menu, X } from 'lucide-vue-next'

// Variable reactiva para abrir/cerrar menú móvil
const isOpen = ref(false)

// Saber qué ruta está activa
const route = useRoute()

// Función para cerrar menú al navegar
const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full bg-white border-b">

    <div class="flex justify-between items-center px-6 py-4">

        <RouterLink
        to="/"
        class="text-xl font-bold hover:opacity-70 transition"
        >
        Yosune Alonso
        </RouterLink>

      <!-- Menú Desktop -->
      <div class="hidden md:flex gap-8">

        <RouterLink
          to="/"
          @click="closeMenu"
          :class="route.path === '/' ? 'text-pink-500 font-semibold' : 'hover:text-pink-400 transition'"
        >
          <div class="flex items-center gap-2">
            <Home class="w-4 h-4" />
            Inicio
          </div>
        </RouterLink>

        <RouterLink
          to="/works"
          @click="closeMenu"
          :class="route.path.startsWith('/works') ? 'text-pink-500 font-semibold' : 'hover:text-pink-400 transition'"
        >
          <div class="flex items-center gap-2">
            <Briefcase class="w-4 h-4" />
            Trabajos
          </div>
        </RouterLink>

        <RouterLink
          to="/about/bio"
          @click="closeMenu"
          :class="route.path.startsWith('/about/bio') ? 'text-pink-500 font-semibold' : 'hover:text-pink-400 transition'"
        >
          <div class="flex items-center gap-2">
            <User class="w-4 h-4" />
            Sobre mí
          </div>
        </RouterLink>

        <RouterLink
          to="/contact"
          @click="closeMenu"
          :class="route.path.startsWith('/contact') ? 'text-pink-500 font-semibold' : 'hover:text-pink-400 transition'"
        >
          <div class="flex items-center gap-2">
            <Mail class="w-4 h-4" />
            Contacto
          </div>
        </RouterLink>

      </div>

      <!-- Botón hamburguesa (solo móvil) -->
      <button
        class="md:hidden"
        @click="isOpen = !isOpen"
      >
        <Menu v-if="!isOpen" />
        <X v-else />
      </button>

    </div>

    <!-- Menú móvil -->
    <div
      v-if="isOpen"
      class="flex flex-col gap-4 px-6 pb-6 md:hidden"
    >
      <RouterLink to="/" @click="closeMenu">Inicio</RouterLink>
      <RouterLink to="/works" @click="closeMenu">Trabajos</RouterLink>
      <RouterLink to="/about" @click="closeMenu">Sobre mí</RouterLink>
      <RouterLink to="/contact" @click="closeMenu">Contacto</RouterLink>
    </div>

  </nav>
</template>
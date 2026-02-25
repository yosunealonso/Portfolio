<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Home, Briefcase, User, Mail } from 'lucide-vue-next'
</script>

<template>
  <nav class="flex justify-between items-center px-8 py-4 shadow-md">

    <h2 class="text-xl font-bold">
      YA
    </h2>

    <div class="flex gap-6 items-center">

      <RouterLink to="/" class="flex items-center gap-2 hover:text-pink-400 transition">
        <Home class="w-4 h-4" />
        Inicio
      </RouterLink>

      <RouterLink to="/works" class="flex items-center gap-2 hover:text-pink-400 transition">
        <Briefcase class="w-4 h-4" />
        Trabajos
      </RouterLink>

      <RouterLink to="/about" class="flex items-center gap-2 hover:text-pink-400 transition">
        <User class="w-4 h-4" />
        Sobre mí
      </RouterLink>

      <RouterLink to="/contact" class="flex items-center gap-2 hover:text-pink-400 transition">
        <Mail class="w-4 h-4" />
        Contacto
      </RouterLink>

    </div>
  </nav>
</template>

<style>

</style>
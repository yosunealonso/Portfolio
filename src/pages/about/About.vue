<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<section 
class="px-6 py-12"
style="background-image: url('/images/fondo.jpg');"">
  
    <h1 class="nombre text-7xl text-blue-800 mb-4">
      Sobre mí
    </h1>

    <div class="flex gap-6 border-b pb-4 mb-10">

      
      <RouterLink
        to="/about/bio"
        class="text-gray-600 hover:text-black transition"
        active-class="font-bold text-black border-b-2 border-black pb-1"
      >
        ¿Quién soy?
      </RouterLink>

      <RouterLink
        to="/about/skills"
        class="text-gray-600 hover:text-black transition"
        active-class="font-bold text-black border-b-2 border-black pb-1"
      >
        Habilidades
      </RouterLink>
      
    </div>

    <router-view />

  </section>
</template>

<style scoped>

.nombre {
  font-family: 'bookeyed-jack', sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
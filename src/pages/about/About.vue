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

    <div class="portfolio text-lg flex gap-6 pb-4 mb-10">

      
      <RouterLink
        to="/about/bio"
        class="text-[#f0b1c3] hover:text-[#e3849f] transition"
        active-class="font-bold border-b-2 border-[#e3849f] pb-1"
      >
        ¿Quién soy?
      </RouterLink>

      <RouterLink
        to="/about/skills"
        class="text-[#f0b1c3] hover:text-[#e3849f] transition"
        active-class="font-bold text-[#e3849f] border-b-2 border-[#e3849f] pb-1"
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

.portfolio {
  font-family: "rotunda-variable",sans-serif;
  font-variation-settings: 'wght' 400;
}

</style>
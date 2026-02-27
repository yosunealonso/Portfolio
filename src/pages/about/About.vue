<script setup lang="ts">
</script>

<template>
  <section class="p-10">
    <h1 class="text-4xl font-bold">Sobre mí</h1>

    <RouterLink to="/about/bio">Bio</RouterLink>
    <RouterLink to="/about/skills">Skills</RouterLink>

    <router-view />

  </section>
</template>

<style>
</style>
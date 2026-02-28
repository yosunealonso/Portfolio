<template>
   <section class=" px-0 py-0 max-w-6xl">

    <div class="items-start flex flex-col lg:flex-row gap-12">

      <!-- foto -->
      <div class="lg:w-1/2">
        <img
          src="/images/mifoto.jpeg"
          alt="Foto personal"
          class="w-full rounded-xl object-cover"
        />
      </div>

      <!-- derecha -->
      <div class="mt-auto lg:flex-1 flex flex-col gap-10 items-start">

        <!-- textos -->
        <div class="space-y-8 text-gray-700 leading-relaxed">

          <div>
            <h2 class="text-2xl font-bold mb-3">Hola</h2>
            <p>
              Soy diseñadora interesada en la narrativa visual,
              la ilustración y el diseño gráfico. Me interesa cómo
              el diseño puede generar emoción y memoria.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-3">Educación</h2>
            <p>
              Actualmente estudio Diseño y Tecnologías Creativas
              en la Universitat Politècnica de València.
              Desarrollo proyectos enfocados en identidad,
              comunicación visual y experiencias.
            </p>
          </div>

        </div>

        <!-- mapas -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="w-full aspect-[16/9] lg:aspect-[4/3]">
            <!-- Valencia -->
            <iframe
            class="w-full h-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.36257642603!2d-0.34890321281591796!3d39.48372673869381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488259073375%3A0xfb410ba707ca33c9!2sUPV%20-%20Facultat%20de%20Belles%20Arts!5e0!3m2!1sen!2ses!4v1771620983113!5m2!1sen!2ses"
            loading="lazy">
          </iframe>
        </div>

        <div class="w-full aspect-[16/9] lg:aspect-[4/3]">
          <!-- Bogotá -->
          <iframe
          class="w-full h-full rounded-xl"
          src="https://www.google.com/maps?q=Bogot%C3%A1&output=embed"
          loading="lazy">
        </iframe>
        </div>
        
        </div>

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
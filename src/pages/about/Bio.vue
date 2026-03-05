<template>
   <section class=" portfolio px-0 py-0 max-w-6xl">

    <div class="items-start flex flex-col lg:flex-row gap-12">

      <!-- foto -->
      <div class="lg:w-1/2">
        <img
          src="/images/mifoto1.png"
          alt="Foto personal"
          class="w-full rounded-xl object-cover hover:scale-110 hover:rotate-3 transition"
        />
      </div>

      <!-- derecha -->
      <div class="mt-auto lg:flex-1 flex flex-col gap-10 items-start">

        <!-- textos -->
        <div class="space-y-8 text-gray-700 leading-relaxed">

          <div>
            <h2 class="text-2xl font-bold mb-3 text-blue-800">Hola!</h2>
            <p>
              Soy Yosune - una estudiante de diseño interesada en la identidad visual,
              la ilustración, el diseño gráfico y las artes visuales. Me apasiona la dirección 
              de arte y el diseño relacionado con la industria musical, y me encantaría trabajar 
              en este campo.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-3 text-blue-800">Educación</h2>
            <p>
              Actualmente estudio segundo año de Diseño y Tecnologías Creativas
              en la Universitat Politècnica de València.
              A lo largo de la carrera he podido explorar múltiples áreas del diseño como:
              Teoría del color, dibujo técnico y anatómico, ilustración aplicada a múltiples contextos,
              modelado 3D, fotografía, producción audiovisual, estrategias de comunicación, 
              programación y animación digital.
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

.portfolio {
  font-family: "rotunda-variable",sans-serif;
  font-variation-settings: 'wght' 400;
}

</style>
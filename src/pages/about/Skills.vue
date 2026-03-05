<script setup lang="ts">
    import { BookOpen, Monitor, Globe, Star } from 'lucide-vue-next'
</script>


<template>
    
  <section class="max-w-6xl">

    <div class="portfolio grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">

      <div>
        <div class="flex items-center gap-3 mb-6 text-blue-800">
          <BookOpen class="w-6 h-6" />
          <h2 class="text-2xl font-bold ">Conocimientos</h2>
        </div>

        <ul class="space-y-3 text-gray-700">
          <li>• Diseño gráfico</li>
          <li>• Identidad visual</li>
          <li>• Diseño editorial</li>
          <li>• Tipografía</li>
          <li>• Ilustración</li>
          <li>• Dibujo digital</li>
          <li>• Postproducción audiovisual</li>
        </ul>
      </div>

      <div>
        <div class="flex items-center gap-3 mb-6 text-blue-800">
          <Monitor class="w-6 h-6" />
          <h2 class="text-2xl font-bold">Software</h2>
        </div>
        
        <div class="space-y-6">

          <div>
            <div class="flex items-center gap-4">
              <img src="/icons/procreate.png" class="w-8 h-8 object-contain" />
              <span class="font-medium">Procreate</span>
            </div>
  
            <div class="flex gap-1 mt-2">
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
            </div>
          </div>

          <div>
            <div class="flex items-center gap-4">
              <img src="/icons/illustrator.png" class="w-8 h-8 object-contain" />
              <span class="font-medium">Adobe Illustrator</span>
            </div>

            <div class="flex gap-1 mt-2">
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 text-gray-300" />
            </div>
          </div>

          <div>
            <div class="flex items-center gap-4">
              <img src="/icons/photoshop.png" class="w-8 h-8 object-contain" />
              <span class="font-medium">Adobe Photoshop</span>
            </div>

            <div class="flex gap-1 mt-2">
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 text-gray-300" />
            </div>
          </div>

          <div>
            <div class="flex items-center gap-4">
              <img src="/icons/indesign.png" class="w-8 h-8 object-contain" />
              <span class="font-medium">Adobe InDesign</span>
            </div>

            <div class="flex gap-1 mt-2">
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 text-gray-300" />
              <Star class="w-4 h-4 text-gray-300" />
            </div>
          </div>

          <div>
            <div class="flex items-center gap-4">
              <img src="/icons/premiere.png" class="w-8 h-8 object-contain" />
              <span class="font-medium">Adobe Premiere</span>
            </div>

            <div class="flex gap-1 mt-2">
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 text-gray-300" />
            </div>
          </div>


          <div>
            <div class="flex items-center gap-4">
              <img src="/icons/figma.webp" class="w-8 h-8 object-contain" />
              <span class="font-medium">Figma</span>
            </div>

            <div class="flex gap-1 mt-2">
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 text-gray-300" />
              <Star class="w-4 h-4 text-gray-300" />
              <Star class="w-4 h-4 text-gray-300" />
            </div>
          </div>

          <div>
            <div class="flex items-center gap-4">
              <img src="/icons/canva.svg" class="w-8 h-8 object-contain" />
              <span class="font-medium">Canva</span>
            </div>

            <div class="flex gap-1 mt-2">
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
              <Star class="w-4 h-4 fill-black" />
            </div>
          </div>

        </div>
      </div>

      <div>
        <div class="flex items-center gap-3 mb-6 text-blue-800">
          <Globe class="w-6 h-6" />
          <h2 class="text-2xl font-bold">Idiomas</h2>
        </div>

        <ul class="space-y-3 text-gray-700">
          <li>• Castellano — <strong>Nativa</strong></li>
          <li>• Inglés — <strong>C1</strong></li>
          <li>• Alemán — <strong>A2</strong></li>
        </ul>
      </div>

    </div>

  </section>
</template>


<style scoped>

.portfolio {
  font-family: "rotunda-variable",sans-serif;
  font-variation-settings: 'wght' 400;
}

</style>
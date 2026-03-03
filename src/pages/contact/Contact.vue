<script setup lang="ts">
import { ref } from 'vue'
import { Instagram, Mail } from 'lucide-vue-next'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

const selectedSubject = ref('')

</script>

<template>
  <section 
  class="px-6 py-12 min-h-screen flex flex-col"
  style="background-image: url('/images/fondo.jpg')";>

    <h1 class="nombre text-7xl text-blue-800 mb-4">Contacto</h1>

    <div class="flex flex-col-reverse lg:flex-row md:flex-col-reverse flex-1 gap-12 ">

      
      <!-- Columna izquierda -->
      <div class="lg:w-1/2 flex flex-col lg:justify-end pb-12">
        
        <div class="w-full md:max-w-xl lg:max-w-2xl ">
          <form class="space-y-6 bg-white p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl">
            
            <!-- Nombre -->
            <div class="space-y-2">
              <Label for="nombre">Nombre</Label>
              <Input id="nombre" required />
            </div>
            
            <!-- Email -->
            <div class="space-y-2">
              <Label for="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            
            <!-- Asunto -->
            <div class="space-y-2">
              <Label>Motivo</Label>
              <Select v-model="selectedSubject" required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un motivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="colaboracion">
                    Colaboración
                  </SelectItem>
                  <SelectItem value="proyecto">
                    Propuesta de proyecto
                  </SelectItem>
                  <SelectItem value="freelance">
                    Trabajo freelance
                  </SelectItem>
                  <SelectItem value="otro">
                    Otro
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <!-- Mensaje -->
            <div class="space-y-2">
              <Label for="mensaje">Mensaje</Label>
              <Textarea
              id="mensaje"
              rows="4"
              required
              />
            </div>
            
            <!-- Botón -->
            <Button
            type="submit"
            class="w-full bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300"
            >
            Enviar mensaje
          </Button>
          
        </form>
      </div>
    </div>
    <!-- Columna derecha -->
    <div class="lg:w-1/2 flex flex-col lg:justify-end pb-12 space-y-10">

      <!-- Instagram -->
      <a 
        href="https://instagram.com/png.not.found"
        target="_blank"
        class="font-medium group flex items-center gap-4 transition-all duration-300"
      >
        <Instagram class="w-6 h-6 transition-all duration-300 group-hover:text-pink-500 group-hover:-translate-y-1" />
        <span class="transition-all duration-300 group-hover:text-pink-500 group-hover:translate-x-1">
          @png.not.found
        </span>
      </a>

      <!-- Behance -->
      <a 
        href="https://behance.net/yosunealonso1"
        target="_blank"
        class="font-medium group flex items-center gap-4 transition-all duration-300"
      >
        <div class="w-6 h-6 flex items-center justify-center border rounded text-sm font-bold transition-all duration-300 group-hover:text-pink-500 group-hover:border-pink-500 group-hover:-translate-y-1">
          Be
        </div>
        <span class="transition-all duration-300 group-hover:text-pink-500 group-hover:translate-x-1">
          behance.net/yosunealonso1
        </span>
      </a>

      <!-- Email -->
      <a 
        href="mailto:png.not.foundd@gmail.com"
        class="font-medium group flex items-center gap-4 transition-all duration-300"
      >
        <Mail class="w-6 h-6 transition-all duration-300 group-hover:text-pink-500 group-hover:-translate-y-1" />
        <span class="transition-all duration-300 group-hover:text-pink-500 group-hover:translate-x-1">
          png.not.foundd@gmail.com
        </span>
      </a>

    </div>
    </div>

  </section>
</template>

<style scoped>

.nombre {
  font-family: 'bookeyed-jack', sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
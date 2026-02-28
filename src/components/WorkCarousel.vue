<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

interface Props {
  photos: string[]
  basePath: string
}

const props = defineProps<Props>()
</script>

<template>
  <Carousel
    class="w-full max-w-sm md:max-w-2xl lg:max-w-2xl mx-auto"
    :opts="{ loop: true }"
    :plugins="[Autoplay({ delay: 3000 })]"
  >
    <CarouselContent>

      <CarouselItem
        v-for="(photo, index) in props.photos"
        :key="index"
      >
        <Card class="border-none shadow-none">
          <CardContent class="p-0 aspect-4/3">
            <img
              :src="`${props.basePath}/${photo}.jpg`"
              :alt="`Image ${index + 1}`"
              class="w-full h-1xl object-cover rounded-xl"
            />
          </CardContent>
        </Card>
      </CarouselItem>

    </CarouselContent>

    <CarouselPrevious />
    <CarouselNext />

  </Carousel>
</template>
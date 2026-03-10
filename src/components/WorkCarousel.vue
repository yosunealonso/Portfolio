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
    class="w-full md:max-w-2xl mx-auto"
    :opts="{ loop: true }"
    :plugins="[Autoplay({ delay: 3000 })]"
  >
    <CarouselContent>

      <CarouselItem
        v-for="(photo, index) in props.photos"
        :key="index"
      >
        <Card class="border-none shadow-none">
          <CardContent class=" h-full">
            <img
              :src="`${props.basePath}/${photo}.jpg`"
              :alt="`Image ${index + 1}`"
              class="h-full object-cover rounded-xl"
            />
          </CardContent>
        </Card>
      </CarouselItem>

    </CarouselContent>

    <CarouselPrevious 
    class="left-2 md:-left-12"
    />
    <CarouselNext 
    class="right-2 md:-right-12"
    />

  </Carousel>
</template>
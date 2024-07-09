<template>
  <carousel wrap-around :autoplay="5000">
    <slide v-for="slide in 2" :key="slide">
      <img :src="slide - 1 ? banner01 : banner02" />
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import banner01 from "@/assets/img/banner01.png";
import banner02 from "@/assets/img/banner02.png";
</script>

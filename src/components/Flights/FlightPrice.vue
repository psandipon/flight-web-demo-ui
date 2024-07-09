<template>
  <div class="p-2 m-2 pt-0 mt-0">
    <span class="text-pink-800 font-bold">
      Only {{ flight.seatAvailability }} left
    </span>
    <br />
    Flight Price:
    <br />
    <span class="font-bold text-xl">
      {{ flight.price.amount }}
    </span>
    {{ flight.price.currency }}
  </div>
</template>

<script setup lang="ts">
import type { Flight } from "@/types";
defineProps<{
  flight: Flight;
}>();
</script>

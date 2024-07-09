<template>
  <div class="flex flex-wrap" v-if="filteredFlightList.length > 0">
    <div
      v-for="(flight, i) in filteredFlightList"
      :key="i"
      class="w-full md:w-1/2"
    >
      <FlightCard :flight="flight" />
    </div>
  </div>
  <div class="flex justify-end text-sm">
    ** Seat availability refers solely to the price indicated above.
  </div>
</template>

<script setup lang="ts">
import { useFlightStore } from "@/stores";
import { storeToRefs } from "pinia";
import FlightCard from "./FlightCard.vue";

const flightStore = useFlightStore();
const { filteredFlightList } = storeToRefs(flightStore);
</script>

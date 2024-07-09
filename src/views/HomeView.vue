<template>
  <AppCarousel class="mt-5" />

  <div class="flights-container">
    <div class="flights-container__section">
      <FlightsSearch />
    </div>
    <div
      class="flights-container__section"
      v-if="flightStore.filteredFlightList.length > 0"
    >
      <FlightsList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFlightStore } from "@/stores";
import { AppCarousel } from "@/components";
import { FlightsList, FlightsSearch } from "@/components/Flights";
const flightStore = useFlightStore();
</script>

<style scoped lang="postcss">
.flights-container {
  @apply flex flex-col items-center justify-center w-full;

  &__section {
    @apply w-full lg:w-11/12 xl:w-10/12;
    @apply p-2 my-3 shadow bg-gray-50;
  }
}
</style>
@/components/FlightsComponents

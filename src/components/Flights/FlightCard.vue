<template>
  <div class="flight-card">
    <div class="flight-card__body">
      <div class="flight-card__element direction-section">
        <div class="flex">
          <FlightLocation
            :location="flight.origin"
            :date="flight.departureDate"
          >
            <template #icon>
              From <AppIcon icon-name="departure" class="mx-2" />
            </template>
          </FlightLocation>
          <div class="m-5 mr-8">to</div>
          <FlightLocation
            :location="flight.destination"
            :date="flight.returnDate"
          >
            <template #icon>
              To <AppIcon icon-name="destination" class="mx-2" />
            </template>
          </FlightLocation>
        </div>
      </div>
      <div class="flight-card__element price-section">
        <FlightPrice :flight="flight" />
      </div>
    </div>

    <FlightLabel class="label offer" v-if="flight.offerType !== 'ExactMatch'">
      <template #icon> <AppIcon icon-name="coupon" /> </template>
      <template #text>
        {{ flight.offerType.replace(/([a-z])([A-Z])/g, "$1 $2") }}
      </template>
    </FlightLabel>

    <FlightLabel class="label cabin">
      <template #icon>
        <AppIcon :icon-name="getCabinIcon(flight.cabinCode)" />
      </template>
      <template #text>
        {{ `${showCabinType(flight.cabinCode)}` }}
      </template>
    </FlightLabel>
  </div>
</template>

<script setup lang="ts">
import { AppIcon } from "@/components";
import FlightLabel from "./FlightLabel.vue";
import FlightLocation from "./FlightLocation.vue";
import { Flight, CabinCodeValues } from "@/types";
import type { Icons } from "@/types";
import FlightPrice from "./FlightPrice.vue";

defineProps<{
  flight: Flight;
}>();

const showCabinType = (cabinCode: keyof typeof CabinCodeValues) =>
  CabinCodeValues[cabinCode];

const getCabinIcon = (cabinCode: keyof typeof CabinCodeValues): Icons => {
  type CabinIconMap = {
    m: Icons;
    f: Icons;
    c: Icons;
    p: Icons;
  };
  const iconMap: CabinIconMap = {
    m: "bag",
    f: "suitcase",
    c: "suitcases",
    p: "bags",
  };
  return iconMap[cabinCode];
};
</script>

<style scoped lang="postcss">
.flight-card {
  @apply bg-white shadow rounded relative mb-2 pb-0 md:pb-10 m-0 md:m-2;

  &__body {
    @apply flex flex-wrap justify-between ml-0 md:mr-2;
  }

  &__element {
    @apply w-full md:w-fit flex md:justify-center m-0 mt-3;
  }

  .direction-section {
    @apply mt-5 md:mt-1 justify-start;
    @apply p-2 m-2 pb-0 mb-0 md:px-2;
  }

  .price-section {
    @apply mb-0 md:mb-2;
  }

  .label {
    @apply absolute right-2;
  }

  .offer {
    @apply bottom-10 md:right-2 md:bottom-2;
  }

  .cabin {
    @apply bottom-2 md:left-2 md:border-t;
  }
}
</style>

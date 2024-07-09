<template>
  <div class="flight-search">
    <BaseComboInput
      v-model:value="searchParams.departure"
      label="Departure airport"
      placeholder="Select departure airport"
      :items="airportList"
      icon="departure"
      :clearable="true"
      :readonly="true"
      class="w--half"
    />
    <BaseComboInput
      v-model:value="searchParams.destination"
      label="Destination airport"
      placeholder="Select destination airport"
      :items="airportList"
      icon="destination"
      :clearable="true"
      :readonly="true"
      class="w--half"
    />
    <BaseDatePicker
      v-model:date="searchParams.departureDate"
      label="Outgoing flight"
      placeholder="Select outgoing flight date"
      icon="calendar"
      class="w--third"
    />
    <BaseDatePicker
      v-model:date="searchParams.returnDate"
      label="Return flight"
      placeholder="Select return flight date"
      icon="plus"
      class="w--third"
    />
    <div class="w--third grid content-end pb-1">
      <BaseButton label="Search for flight" @click="getFlightData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComboInput, BaseDatePicker, BaseButton } from "@/components";
import useNotification from "@/composables/notification";
import { useAirportStore, useFlightStore } from "@/stores";
import { storeToRefs } from "pinia";

const airportStore = useAirportStore();
const { airportList } = storeToRefs(airportStore);
const { fetchAirports } = airportStore;

fetchAirports();

const flightStore = useFlightStore();
const { filteredFlightList, flightSearchParams: searchParams } =
  storeToRefs(flightStore);
const { fetchFlights } = flightStore;

const { showError } = useNotification();

const getFlightData = async () => {
  const { departure, destination, departureDate, returnDate } =
    searchParams.value;

  if (!(departure.length > 0)) {
    showError("Error", "You must select departure airport");
    return;
  }

  if (!(destination.length > 0)) {
    showError("Error", "You must select destination airport");
    return;
  }

  await fetchFlights(departure, destination, departureDate, returnDate);
  if (!(filteredFlightList.value.length > 0))
    showError("Sorry", "No available flights with given info");
};
</script>

<style scoped lang="postcss">
.flight-search {
  @apply flex flex-wrap justify-normal;
  .w--half {
    @apply w-full md:w-1/2;
  }
  .w--third {
    @apply w-full md:w-1/3;
  }
}
</style>

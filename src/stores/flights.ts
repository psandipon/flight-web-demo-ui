import { Axios } from "@/services";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import type { Ref } from "vue";
import { Flight } from "@/types";

const useFlightStore = defineStore("flight", () => {
  const flightList: Ref<Flight[]> = ref([]);
  const flightSearchParams = reactive({
    departure: "",
    destination: "",
    departureDate: "",
    returnDate: "",
  });

  // Action
  const fetchFlights = async (
    departure: string,
    destination: string,
    departureDate: string,
    returnDate: string
  ) => {
    const response = await Axios.get(
      `/api/promotions/priceoffers/ond/${departure}/${destination}`,
      {
        params: {
          departureDate,
          returnDate,
        },
      }
    );

    // NOTE: More params can be added in the above api fetching process.
    // Here, api does not filter the returned data based on `departureDate` and `returnDate`.
    // As suggested in the task, doing frontend flitering.

    flightList.value = response.data;
    flightList.value.sort(
      (a, b) =>
        new Date(a.departureDate).getTime() -
        new Date(b.departureDate).getTime()
    );
  };

  // Getter
  const filteredFlightList = computed(() => {
    const { departureDate, returnDate } = flightSearchParams;

    if (departureDate.length === 0 && returnDate.length === 0) {
      return flightList.value;
    }
    // NOTE: here doing frontend filtering on `departureDate` and `returnDate`. More properties can also be added.
    return flightList.value.filter(
      (flight) =>
        (departureDate.length === 0 ||
          flight.departureDate === departureDate) &&
        (returnDate.length === 0 || flight.returnDate === returnDate)
    );
  });

  return { fetchFlights, flightList, filteredFlightList, flightSearchParams };
});

export default useFlightStore;

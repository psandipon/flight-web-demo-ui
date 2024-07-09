import { Axios } from "@/services";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";

const useAirportStore = defineStore("airport", () => {
  // NOTE: In real production word, airportList should be an array of object.
  const airportList: Ref<string[]> = ref([]);
  const fetchAirports = async () => {
    const response = await Axios.get(`/api/airports`);
    airportList.value = response.data;
  };

  return { fetchAirports, airportList };
});

export default useAirportStore;

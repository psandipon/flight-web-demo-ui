<template>
  <img :src="getIcon" :alt="iconName" />
</template>

<script setup lang="ts">
import { computed } from "vue";

import {
  search,
  departure,
  destination,
  close,
  profile,
  menu,
  plus,
  calendar,
  bag,
  bags,
  suitcases,
  suitcase,
  coupon,
} from "@/assets/icons";

const iconMap = {
  search,
  departure,
  destination,
  close,
  profile,
  menu,
  plus,
  calendar,
  bag,
  bags,
  suitcases,
  suitcase,
  coupon,
};

export type Icons = keyof typeof iconMap;

const props = defineProps<{
  iconName: Icons;
}>();

const getIcon = computed(() => iconMap[props.iconName]);
</script>

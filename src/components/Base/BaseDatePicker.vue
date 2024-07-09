<template>
  <div class="p-2 grid" v-bind="attrs">
    <label class="mb-1">{{ label }}</label>
    <div class="h-11">
      <VueDatePicker
        v-model="localDate"
        auto-apply
        :enable-time-picker="false"
        :placeholder="placeholder"
        model-type="yyyy-MM-dd"
        input-class-name="dp-custom-input"
      >
        <template #input-icon>
          <AppIcon class="input-slot-image" :icon-name="icon" />
        </template>
      </VueDatePicker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs, watchEffect } from "vue";
import { AppIcon } from "@/components";
import type { Icons } from "@/types";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const attrs = useAttrs();

defineProps<{
  date: string;
  placeholder?: string;
  label: string;
  icon: Icons;
}>();

const emit = defineEmits<{
  "update:date": [date: string];
}>();

const localDate = ref("");

watchEffect(() => {
  if (localDate.value) emit("update:date", localDate.value);
  else emit("update:date", "");
});
</script>

<style scoped lang="postcss">
.dp-custom-input {
  @apply h-11 pl-9 tracking-wide;
}
.input-slot-image {
  @apply ml-2.5 h-5;
}
</style>

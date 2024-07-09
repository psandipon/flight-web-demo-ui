<template>
  <div class="p-2">
    <button
      v-bind="attrs"
      class="base-button"
      :class="disabled && `base-button--disable`"
      :disabled="disabled"
      @click="emit('click')"
    >
      {{ label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
const attrs = useAttrs();
const { label = "label", disabled = false } = defineProps<{
  label: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  click: [];
}>();
</script>

<style lang="postcss" scoped>
.base-button {
  @apply w-full h-10 bg-pink-700 rounded-md text-white font-bold border;
  &--disable {
    @apply cursor-not-allowed opacity-70 bg-pink-900;
  }
}
.base-button:hover {
  @apply bg-pink-900;
}
</style>

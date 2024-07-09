<template>
  <div>
    <span class="flex text-sm">
      <slot name="icon"></slot>
    </span>
    <span class="text-lg font-bold">
      {{ location }}
    </span>
    <br />
    {{ date }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  location: string;
  date: string;
}>();
</script>

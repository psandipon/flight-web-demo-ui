<template>
  <AppHeader />
  <RouterView />
  <AppNotification v-bind="notification" @close="notification.show = false">
    <template #title> {{ notification.title }}</template>
    <template #description>
      {{ notification.description }}
    </template>
  </AppNotification>
</template>

<script setup lang="ts">
import { AppHeader, AppNotification } from "@/components";
import useNotification from "@/composables/notification";
const { notification } = useNotification();
</script>

<template>
  <transition name="app-notification__slide-fade">
    <div v-if="show" :class="['app-notification border-l-8', type]">
      <div class="app-notification__content">
        <h1 class="app-notification__content__title">
          <slot name="title"></slot>
        </h1>
        <p class="app-notification__content__description">
          <slot name="description"></slot>
        </p>
      </div>

      <AppIcon
        icon-name="close"
        class="h-6 w-auto pr-2 cursor-pointer"
        @click="emit('close')"
      />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { AppIcon } from "@/components";
import { NotificationType } from "@/types";

defineProps<{
  show: boolean;
  type: keyof typeof NotificationType;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>

<style lang="postcss" scoped>
.app-notification {
  @apply fixed top-20 right-3 z-50 w-full;
  @apply flex bg-gray-100 shadow-md p-4 max-w-lg rounded-md;

  &__icon {
    @apply w-auto;
  }

  &__content {
    @apply ml-6 flex-1;

    &__title {
      @apply leading-6 font-semibold;
    }

    &__description {
      @apply text-sm leading-5 font-normal mt-2;
    }
  }

  &.info {
    @apply border-blue-500 bg-blue-50;
  }

  &.success {
    @apply border-green-500 bg-green-50;
  }

  &.warning {
    @apply border-yellow-500 bg-yellow-50;
  }

  &.error {
    @apply border-red-500 bg-red-50;
  }

  &__slide-fade-enter-active {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &__slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  &__slide-fade-enter-from,
  &__slide-fade-leave-to {
    transform: translate(300px, 0);
    opacity: 0;
  }
}
</style>

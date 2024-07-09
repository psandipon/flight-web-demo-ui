<template>
  <header class="header bg-white">
    <nav class="header__nav" aria-label="Global">
      <AppLogo class="header__nav-logo" />

      <div class="header__nav-menu">
        <a
          v-for="link in navigationLinks"
          :key="link"
          href="#"
          class="header__nav-menu-link"
        >
          {{ link }}
        </a>
      </div>

      <div class="header__nav-actions">
        <button type="button" class="header__action">
          <AppIcon icon-name="search" class="h-5 mr-4" />
        </button>
        <button type="button" class="header__action">
          <AppIcon
            icon-name="profile"
            class="h-5 mr-4 header__action-img w-auto"
          />
        </button>
      </div>

      <div class="header__nav-mobile-menu">
        <AppIcon icon-name="profile" class="h-6 mr-4 w-auto" />
        <AppIcon icon-name="menu" class="h-6 w-auto pr-2 cursor-pointer" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { AppIcon, AppLogo } from "@/components";

// NOTE: In real production project, `navigationLinks` should be an array of object with needed properties.
const navigationLinks = [
  "Explore",
  "Book",
  "Information",
  "My trip",
  "Check-in",
];
</script>

<style scoped lang="postcss">
.header {
  @apply z-50 bg-white  sticky top-0 p-5 backdrop-blur-sm;

  &__nav {
    @apply flex justify-between lg:px-6;

    &-logo {
      @apply flex lg:flex-1;

      &-link {
        @apply -m-1.5 p-1.5;
      }
    }

    &-menu {
      @apply hidden lg:flex lg:gap-x-12 mt-1;

      &-link {
        @apply text-sm font-semibold leading-6 text-gray-900;
      }
    }

    &-actions {
      @apply hidden lg:flex lg:flex-1 lg:justify-end;
    }

    &-mobile-menu {
      @apply flex lg:hidden;
    }
  }
}
</style>

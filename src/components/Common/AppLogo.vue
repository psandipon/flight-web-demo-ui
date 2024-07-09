<template>
  <router-link to="/">
    <img
      class="header__logo-img h-10 -mt-3 w-auto"
      :src="logo"
      alt="Eurowing Logo"
    />
  </router-link>
</template>

<script setup lang="ts">
import logo from "@/assets/icons/logo.svg";
</script>

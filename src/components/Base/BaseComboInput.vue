<template>
  <div class="p-2 grid" v-bind="attrs">
    <label class="mb-0">{{ label }}</label>
    <div class="input-container">
      <AppIcon v-if="icon" class="pre-icon" :icon-name="icon" />
      <input
        v-model="inputValue"
        @focus="showDropdown"
        @click="showDropdown"
        :placeholder="placeholder"
        :readonly="readonly"
        ref="target"
        :class="IfValueInOptions && 'error'"
      />
      <AppIcon
        v-if="clearable && inputValue"
        class="post-icon"
        icon-name="close"
        @click="clearInput"
      />
      <div v-if="showDropdownMenu" class="dropdown-menu">
        <ul v-if="items.length > 0">
          <li
            v-for="(item, index) in items"
            :key="index"
            @click="selectItem(item)"
          >
            {{ item }}
          </li>
        </ul>
        <ul v-else>
          <li>Not found</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useAttrs, watch } from "vue";
import { AppIcon } from "@/components";
import { onClickOutside } from "@vueuse/core";
import type { Icons } from "@/types";

const attrs = useAttrs();

const props = defineProps<{
  value: string;
  placeholder: string;
  label: string;
  items: string[];
  icon?: Icons;
  clearable?: Boolean;
  readonly?: boolean;
}>();

const emit = defineEmits<{
  "update:value": [id: string]; // 3.3
}>();

const inputValue = ref(props.value);
const showDropdownMenu = ref(false);

const showDropdown = () => {
  showDropdownMenu.value = true;
};

const hideDropdown = () => {
  showDropdownMenu.value = false;
};

const target = ref(null);
onClickOutside(target, hideDropdown);

const selectItem = (item: string) => {
  inputValue.value = item;
  hideDropdown();
  emit("update:value", item);
};

const clearInput = () => {
  inputValue.value = "";
  emit("update:value", "");
};

watch(
  () => inputValue.value,
  () => {
    emit("update:value", inputValue.value);
  }
);

const IfValueInOptions = computed(() => {
  if (inputValue.value.length < 1) return false;
  return !props.items.includes(inputValue.value);
});
</script>

<style scoped lang="postcss">
.input-container {
  @apply relative mb-10;
  .pre-icon {
    @apply absolute top-0 left-0 z-10 h-5 m-2 mt-[.6rem];
  }
  .post-icon {
    @apply absolute top-0 right-0 z-10 h-5 m-2 mt-[.6rem] cursor-pointer;
  }
}

.input-container input {
  @apply absolute top-0 left-0;
  @apply w-full px-4 py-2 pl-8 text-gray-700 border focus:outline-none  focus:border-gray-400 rounded  h-[2.4rem];
  &::placeholder {
    @apply text-gray-400;
  }
}
.error {
  @apply border border-red-500;
}

.dropdown-menu {
  @apply absolute z-10 mt-12 bg-white border rounded-lg shadow-lg w-full;
}

.dropdown-menu ul {
  @apply py-2;
}

.dropdown-menu li {
  @apply px-4 py-2 cursor-pointer transition-colors hover:bg-gray-200;
}

.dropdown-menu-enter-active,
.dropdown-menu-leave-active {
  @apply opacity-0 scale-95;
  transition: opacity 0.2s, transform 0.2s;
}

.dropdown-menu-enter,
.dropdown-menu-leave-to {
  @apply opacity-100 scale-100;
}
</style>

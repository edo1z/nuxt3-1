<script setup lang="ts">
interface Props {
  label: string;
  type: string;
  placeholder?: string;
  autocomplete?: string;
  required?: boolean;
}
defineProps<Props>();
</script>

<template>
  <div>
    <label :for="label" class="sr-only">{{ label }}</label>
    <input
      :id="label"
      :name="label"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    />
  </div>
</template>

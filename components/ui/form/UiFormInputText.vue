<script setup lang="ts">
interface Props {
  label: string;
  type: string;
  modelValue: string;
  placeholder?: string;
  autocomplete?: string;
  required?: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);
const text = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
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
      class="rounded block w-full px-3 py-2 text-black"
      v-model="text"
    />
  </div>
</template>

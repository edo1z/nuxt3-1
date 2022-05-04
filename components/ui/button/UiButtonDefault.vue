<script setup lang="ts">
interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  textColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  icon?: Array<string> | null;
  title: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: "button",
  textColor: "text-white",
  bgColor: "bg-indigo-600",
  hoverBgColor: "bg-indigo-500",
  icon: null,
  title: "button",
});
let baseClass =
  "focus:ring-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2" +
  " relative w-full flex justify-center py-2 px-4 border border-transparent" +
  " text-sm font-medium rounded-md";
const btnClass = computed(() => {
  return `${props.textColor} ${props.bgColor} hover:${props.hoverBgColor} ${baseClass}`;
});
</script>

<template>
  <button :type="type" :class="btnClass">
    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
      <font-awesome-icon :icon="icon" />
    </span>
    {{ title }}
  </button>
</template>

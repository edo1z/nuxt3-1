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
  hoverBgColor: "hover:bg-indigo-500",
  icon: null,
  title: "button",
});
let baseClass =
  " relative w-full flex justify-center py-2 px-4 border-transparent" +
  " text-sm font-medium rounded-md";
const btnClass = computed(() => {
  return `${props.textColor} ${props.bgColor} ${props.hoverBgColor} ${baseClass}`;
});
</script>

<template>
  <button :type="type" :class="btnClass">
    <span class="absolute left-0 inset-y-0 flex items-center pl-3" v-if="icon">
      <font-awesome-icon :icon="icon" />
    </span>
    {{ title }}
  </button>
</template>

<template>
  <div>
    <NavbarDefault />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: "h-full dark",
  },
  bodyAttrs: {
    class: "h-full dark:bg-black dark:text-white",
  },
});
</script>

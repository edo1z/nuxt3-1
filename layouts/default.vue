<template>
  <div>
    <NavbarDefault />
    <div class="m-3">
      <slot />
    </div>
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

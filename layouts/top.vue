<template>
  <div>
    <NavbarTop />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: "dark",
  },
  bodyAttrs: {
    class: "dark:bg-black dark:text-white",
  },
});
</script>

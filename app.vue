<script setup>
console.log("start app");
onMounted(async () => {
  console.log("on mounted");
  initAuth();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

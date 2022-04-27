<template>
  <Head>
    <Title>TOPPAGE</Title>
    <Meta property="ogp:image" content="toppage.png" />
  </Head>
  <div>Top page</div>
  <ul>
    <li>
      <NuxtLink to="/user"> users </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/user/add"> create user </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/category"> categories </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/category/add"> create category </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/post"> posts </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/post/add"> create post </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/contact"> contact </NuxtLink>
    </li>
  </ul>
</template>

<script>
definePageMeta({
  layout: "top",
});
</script>

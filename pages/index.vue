<template>
  <div>
    <Head>
      <Title>TOPPAGE</Title>
      <Meta property="ogp:image" content="toppage.png" />
    </Head>
    <div class="font-bold mb-3 dark:text-cyan-300">Top page</div>
    <ul>
      <li>
        <NuxtLink to="/auth/sign-in"> sign in </NuxtLink>
      </li>
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
  </div>
</template>

<script>
definePageMeta({
  layout: "default",
});
</script>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
const conf = useRuntimeConfig();
const { data } = await useFetch(`${conf.apiUrl}/users`);
// FIXME
const users = data.value.result;
</script>

<template>
  <div>
    <div>Users Index</div>
    <p>API URL {{ conf.apiUrl }}</p>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Message</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.msg }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

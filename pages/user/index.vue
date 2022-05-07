<script setup lang="ts">
definePageMeta({
  layout: "default",
  middleware: ["auth"],
});
const { data: users } = await useFetch("/api/users");
</script>

<template>
  <div>
    <div>Users</div>
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

<script setup lang="ts">
definePageMeta({
  layout: "default",
  middleware: ["auth"],
});
const { data: users } = await useFetch("/api/users");
const hoge = async () => {
  const token = await getIdToken();
  console.log("token", token);
};
</script>

<template>
  <div>
    <div class="mb-2">Users</div>
    <table class="table-auto bg-slate-800 mb-3">
      <thead class="bg-slate-600">
        <tr>
          <td class="p-1">ID</td>
          <td class="p-1">Name</td>
          <td class="p-1">Message</td>
          <td class="p-1">Age</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" key="user.id">
          <td class="p-1">{{ user.id }}</td>
          <td class="p-1">{{ user.name }}</td>
          <td class="p-1">{{ user.msg }}</td>
          <td class="p-1">{{ user.age }}</td>
        </tr>
      </tbody>
    </table>

    <UiButtonDefault title="hoge" @click="hoge" />
  </div>
</template>

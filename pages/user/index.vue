<script setup lang="ts">
import { User } from "@/model/user";

definePageMeta({
  layout: "default",
  middleware: ["auth"],
});
const idToken = await getIdToken();
const conf = useRuntimeConfig();
// @ts-ignore
const { data: users }: { data: User[] } = await useFetch(
  `${conf.apiUrl}/users`,
  {
    headers: { Authorization: `Bearer ${idToken}` },
  }
);
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
  </div>
</template>

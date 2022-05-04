<template>
  <div>
    <Head>
      <Title>Sign In</Title>
    </Head>

    <div
      class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2
            class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white"
          >
            Sign in
          </h2>
        </div>
        <div class="mt-8 space-y-2">
          <UiFormInputText
            label="email"
            type="email"
            :required="true"
            placeholder="Email address"
          />
          <UiFormInputText
            label="password"
            type="password"
            :required="true"
            placeholder="Password"
            autocomplete="current-password"
          />
          <div>
            <UiButtonDefault type="submit" class="mt-5">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </UiButtonDefault>
          </div>
        </div>
        <hr />
        <UiButtonDefault type="submit" class="mt-5">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in with Google
        </UiButtonDefault>
        <UiButtonDefault type="submit" class="mt-5">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in with Twitter
        </UiButtonDefault>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from "@heroicons/vue/outline";
</script>

<script setup lang="ts">
const signInGoogle = signInWithGoogle;
const _signOut = signOut;
</script>

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
            <UiButtonDefault
              :icon="['fas', 'right-to-bracket']"
              title="Sign in"
            />
          </div>
        </div>
        <hr />
        <div class="space-y-3">
          <UiButtonDefault
            :icon="['fab', 'google']"
            title="Sign in with Google"
            bgColor="bg-blue-600"
            hoverBgColor="hover:bg-blue-500"
            @click="signInGoogle"
          />
          <UiButtonDefault
            :icon="['fab', 'twitter']"
            title="Sign in with Twitter"
            bgColor="bg-cyan-600"
            hoverBgColor="hover:bg-cyan-500"
          />
        </div>
        <hr />
        <div>
          <UiButtonDefault
            :icon="['fas', 'sign-out']"
            title="Sing Out"
            bgColor="bg-gray-600"
            hoverBgColor="hover:bg-gray-500"
            @click="_signOut"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="flex-1 flex flex-col justify-center items-center bg-gray-200">
    <span class="font-bold text-3xl text-slate-700 mb-2">Login</span>
    <div class="bg-white w-full md:w-96 h-auto p-6 rounded-md shadow-md">
      <div class="flex flex-col">
        <label for="username">Username</label>
        <input
          type="text"
          class="outline-none border border-slate-200 rounded-md p-2 placeholder:text-sm"
          placeholder="Username"
          name="username"
        />
        <label for="password" class="mt-4">Password</label>
        <input
          type="password"
          class="outline-none border border-slate-200 rounded-md p-2 placeholder:text-sm"
          placeholder="password"
          name="password"
        />
      </div>
      <button class="mt-6 w-full text-white bg-slate-800 p-2 rounded-md">
        Login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

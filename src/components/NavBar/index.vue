<template>
  <div class="w-full h-12 flex items-center bg-slate-800 justify-center">
    <ul class="flex text-white font-bold space-x-8">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Sign-up</router-link></li>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

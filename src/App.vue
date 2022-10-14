<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <RouterView />
  </div>
</template>

<script>
import NavBar from "./components/NavBar/index.vue";
export default { components: { NavBar } };
</script>

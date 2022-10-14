<template>
  <div class="flex-1 flex flex-col justify-center items-center bg-gray-200">
    <span class="font-bold text-3xl text-slate-700 mb-2">Register</span>
    <div class="bg-white w-full md:w-96 h-auto p-6 rounded-md shadow-md">
      <div class="flex flex-col">
        <label for="username">Username</label>
        <input
          v-model="uname"
          type="text"
          class="outline-none border border-slate-200 rounded-md p-2 placeholder:text-sm"
          placeholder="Username"
          name="username"
        />
        <label for="password" class="mt-4">Password</label>
        <input
          v-model="pw"
          type="password"
          class="outline-none border border-slate-200 rounded-md p-2 placeholder:text-sm"
          placeholder="password"
          name="password"
        />
        <label for="cfpassword" class="mt-4">Confirm password</label>
        <input
          v-model="confirmpw"
          type="password"
          class="outline-none border border-slate-200 rounded-md p-2 placeholder:text-sm"
          placeholder="confirm password"
          name="cfpassword"
        />
      </div>
      <span class="mt-4 flex justify-center bg-red-300 text-red-500">{{
        err
      }}</span>
      <button
        @click="signup"
        class="mt-6 w-full text-white bg-slate-800 p-2 rounded-md"
      >
        Register
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "RegisterView",
  setup() {
    const uname = ref("");
    const pw = ref("");
    const confirmpw = ref("");
    const err = ref("");

    const signup = () => {
      createUserWithEmailAndPassword(getAuth(), uname.value, pw.value)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
    };

    return {
      uname,
      pw,
      confirmpw,
      err,
      signup,
    };
  },
};
</script>

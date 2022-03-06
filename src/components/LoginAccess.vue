<template>
  <div>
    On teste le component login access
    <form class="login-box">
      <br />
      <input
        @keypress.enter="checkUserAccess()"
        type="text"
        id="username"
        name="username"
        placeholder="Username"
      /><br />
      <input
        @keypress.enter="checkUserAccess()"
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginAccess",
  methods: {
    checkUserAccess: function () {
  //     this.$store.commit("userToCheck", {
  //       username: document.getElementById('username'),
  //       password: document.getElementById('password')
  //     })
    }
  }
};
</script>

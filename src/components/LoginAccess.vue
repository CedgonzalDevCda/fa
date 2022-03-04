<template>
  <div>
    On teste le component login access
    <form class="login-box">
      <br />
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
      /><br />
      <input
        type="password"
        id="pass"
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
};
</script>

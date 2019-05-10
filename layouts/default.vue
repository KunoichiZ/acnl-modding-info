<template>
  <div>
    <Navbar></Navbar>
    <nuxt /><br />
    <Foot></Foot>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Foot from "~/components/Footer.vue";

export default {
  components: {
    Foot,
    Navbar
  }
};
</script>

<style>
@font-face {
  font-family: 'ACNL';
  src: url("/ACNL.otf");
}

body {
    font-family: 'ACNL';
}
</style>
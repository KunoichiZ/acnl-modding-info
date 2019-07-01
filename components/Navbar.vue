<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://www.acnl-modding.me"> Animal Crossing New Leaf Modding Info </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">Home </nuxt-link>

        <nuxt-link to="/installation" class="navbar-item">Plugin Installation </nuxt-link>

        <nuxt-link to="/cheatlist" class="navbar-item">Cheat List </nuxt-link>

        <nuxt-link to="/releases" class="navbar-item">Releases </nuxt-link>

        <nuxt-link to="/itemids" class="navbar-item">Item IDs </nuxt-link>

        <nuxt-link to="/guides" class="navbar-item">Guides </nuxt-link>

        <nuxt-link to="/jargon" class="navbar-item">Jargon </nuxt-link>

        <nuxt-link to="/faq" class="navbar-item">FAQ </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    data: function() {
        return {
            showNav: false
        }
    }
}
</script>

<style>
nav {
  background: url('/side_bg.png');
  border-radius: 15px;
}

.navbar a:hover {
  background: url('/side_bg.png');
  cursor: url('/cursor.cur'), auto;
}

.navbar-menu {
  background: url('/side_bg.png');
  border-radius: 15px;
}

.navbar-item:active {
    background: url('/bg_wood2.png');
    color: white;
}

.nuxt-link-exact-active {
    background: url('/bg_wood2.png');
    color: white;
}
</style>
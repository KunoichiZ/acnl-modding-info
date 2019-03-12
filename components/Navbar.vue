<template>
  <!-- @todo Add discord link to navbar
       @body Add Discord invite link to navbar https://discord.gg/EZSxqRr-->
       
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://www.kunoichiz.me/acnl-modding-info"> ACNL Modding Info </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">Home </nuxt-link>

        <nuxt-link to="/releases" class="navbar-item">Releases </nuxt-link>

        <nuxt-link to="/itemids" class="navbar-item">Item IDs </nuxt-link>

        <nuxt-link to="/guides" class="navbar-item">Guides </nuxt-link>

        <nuxt-link to="/jargon" class="navbar-item">Jargon </nuxt-link>

        <nuxt-link to="/faq" class="navbar-item">FAQ </nuxt-link>

        <nuxt-link to="/troubleshooting" class="navbar-item">Troubleshooting </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style>
nav {
  background: url('/side_bg.png');
}
</style>
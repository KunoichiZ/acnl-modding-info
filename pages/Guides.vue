<template>
  <section class="container has-text-centered">
    <br>
    <h1 class="title is-size-3">Guides</h1>
    These are guides to help people either obtain CFW or find out how to obtain the plugin.
    <br><br>
    <h1 class="title is-size-4">CFW Guide</h1>
    <div id="cfw">A complete guide on obtaining CFW can be found at <a href="https://3ds.hacks.guide/">https://3ds.hacks.guide/</a>. If you need help with obtaining CFW, please join the Please join the <a href="https://discord.gg/C29hYvh">Nintendo Homebrew Discord Server.</a></div>
    <br>
    <h1 class="title is-size-4">How to Obtain the Plugin</h1>
    There are a couple of ways to find the latest version of the plugin. 
    <div id="obtain">
      <ol>
        <li><nuxt-link to="/releases">Releases</nuxt-link>: This page will contain the latest version of the plugin.</li>
        <li>If you are on the ACNL Modding Discord Server, go to the #ntr-plugin-info channel and you should see the latest version of the plugin as the most recent post. Also, if you are in the server, you can use the bot command !plgupdates in the #bot-commands channel to gain access to the PlgUpdates role, which the mods will ping when there is a new update to the plugin.</li>
        <li>You can also go to the releases tab on the <a href="https://github.com/rydoginator/ACNL-NTR-Cheats/releases/latest">GitHub page for the ACNL Plugin</a> and find the latest release.</li>
      </ol>
      <br>
      Need more help on the plugin or with ACNL modding? Please join the ACNL Modding Discord Server.
      <br><a href="https://discord.gg/EZSxqRr"><img src="https://discordapp.com/api/guilds/275461571231219712/widget.png?style=banner3" alt="Join ACNL Modding Discord Server"/></a>
    </div>
     
    <!-- <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br> -->
      
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Guides - ACNL Modding Info'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'og-description', name: 'og:description', content: 'Guides' },
        { hid: 'og-title', property: 'og:title', content: this.title },
        { hid: 'og-site_name', property: 'og:site_name', content: 'ACNL Modding Info'}
      ]
    }
  }
}
</script>

<style scoped>
#cfw, #aserver {
  padding: 10px;
  background: url('/green_bg.png');
  width: 750px;
  border-radius: 25px;
  border-color: #a1cc00;
  border-width: 10px;
  margin: auto;
}

#obtain {
  padding: 10px;
  background: url('/pink_bg.png');
  width: 750px;
  border-radius: 25px;
  border-color: #a1cc00;
  border-width: 10px;
  margin: auto;
}

#nserver {
  padding: 10px;
  background: url('/blue_bg.png');
  width: 750px;
  border-radius: 25px;
  border-color: #a1cc00;
  border-width: 10px;
  margin: auto;
}

#obtain ol {
    /* list-style-type: disc; */
    list-style-position: inside;
    text-align: left;
}

@media (max-width: 1300px) {
  #cfw, #aserver {
    width: 475px;
    padding: 10px;
    border-radius: 25px;
    border-color: #a1cc00;
    border-width: 10px;
    margin: auto;
  }

  #obtain {
    width: 475px;
    padding: 10px;
    border-radius: 25px;
    border-color: #f58094;
    border-width: 10px;
    margin: auto;
  }

  #nserver {
    width: 475px;
    padding: 10px;
    border-radius: 25px;
    border-color: #41aed7;
    border-width: 10px;
    margin: auto;
  }
}
</style>

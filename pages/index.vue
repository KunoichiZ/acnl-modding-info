<template>
  <div class="container has-text-centered">
    <br><h1 class="title is-size-3">Animal Crossing: New Leaf Modding Information</h1>
    <br>This is the website repo for the ACNL Modding Information 
    <br>website for the ACNL Modding Discord Server.
    <br><br>
    The links above will take you to their respective pages. 
    <br>Descriptions of each pages are listed below.
    <br>
    <div id="pages">
      <ul>
        <li><nuxt-link to="/installation" class="link">Plugin Installation</nuxt-link>: This page will walk you through the plugin installation process.</li>
        <li><nuxt-link to="/cheatlist" class="link">Cheat List</nuxt-link>: This page lists all of the cheats available in the latest release of the plugin and gives the 3DS button combinations needed to activate some cheats.</li>
        <li><nuxt-link to="/releases" class="link">Releases</nuxt-link>: This page gives the releases of the plugin, with the latest on top.</li>
        <li><nuxt-link to="/itemids" class="link">Item IDs</nuxt-link>: This page lists the item IDs and the names of the items for the Text2Item cheat.</li>
        <li><nuxt-link to="/guides" class="link">Guides</nuxt-link>: This page gives guides on various topics, such as texture hacks.</li>
        <li><nuxt-link to="/jargon" class="link">Jargon</nuxt-link>: This page lists 3DS and ACNL jargon for those not in the know.</li>
        <li><nuxt-link to="/faq" class="link">Frequently Asked Questions</nuxt-link>: This page lists the frequently asked questions and gives answers to those questions.</li>
        
      </ul>
    </div>

    <br><br><h1 class="is-size-5">Questions about the site?</h1>
    <div id="questions">
      DM <b-tooltip label="AinoMinako#7220" dashed>@KunoichiZ</b-tooltip> on Discord.
    </div>

    <br><br><h1 class="is-size-5">Issues with the site or the content on it?</h1>
    <div id="issues">
      Open an <a href="https://github.com/KunoichiZ/acnl-modding-info/issues">issue</a> or make a <a href="https://github.com/KunoichiZ/acnl-modding-info/pulls">pull request</a>. When making a pull request, please test all code changes before submitting the pull request. Any changes that fail to build will be automatically rejected until they are fixed. For more information on issues and pull requests, please visit the <a href="https://github.com/KunoichiZ/acnl-modding-info/blob/master/.github/ISSUE_TEMPLATE.md">issue template</a> and the <a href="https://github.com/KunoichiZ/acnl-modding-info/blob/master/.github/PULL_REQUEST_TEMPLATE.md">pull request template</a>.
    </div>
    <br>
    <!-- <div>
      <img alt="GitHub stars" src="https://img.shields.io/github/stars/KunoichiZ/acnl-modding-info.svg?style=social">
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Home - ACNL Modding Info'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'og-description', name: 'og:description', content: 'Home' },
        { hid: 'og-title', property: 'og:title', content: this.title },
        { hid: 'og-site_name', property: 'og:site_name', content: 'ACNL Modding Info'}
      ]
    }
  }
}
</script>

<style scoped>
#pages {
  padding: 10px;
  background: url('/green_bg.png');
  width: 750px;
  border-radius: 25px;
  border-color: #a1cc00;
  border-width: 10px;
  margin: auto;
}

#questions {
  padding: 10px;
  background: url('/pink_bg.png');
  width: 750px;
  border-radius: 25px;
  border-color: #a1cc00;
  border-width: 10px;
  margin: auto;
}

#issues {
  padding: 10px;
  background: url('/blue_bg.png');
  width: 750px;
  border-radius: 25px;
  border-color: #a1cc00;
  border-width: 10px;
  margin: auto;
}

#pages ul {
    list-style-type: disc;
    list-style-position: inside;
    text-align: left;
}

@media (max-width: 1300px) {
  #pages {
    width: 475px;
    padding: 10px;
    border-radius: 25px;
    border-color: #a1cc00;
    border-width: 10px;
    margin: auto;
  }

  #questions {
    width: 475px;
    padding: 10px;
    border-radius: 25px;
    border-color: #f58094;
    border-width: 10px;
    margin: auto;
  }

  #issues {
    width: 475px;
    padding: 10px;
    border-radius: 25px;
    border-color: #41aed7;
    border-width: 10px;
    margin: auto;
  }
}
</style>
<template>
  <div class="container has-text-centered">
    <br><h1 class="is-size-3">Animal Crossing: New Leaf Modding Information</h1>
    <br>This is the website repo for the ACNL Modding Information 
    <br>website for the ACNL Modding Discord Server.
    <br><br>
    The links above will take you to their respective pages. 
    <br>Descriptions of each pages are listed below.
    <br>
    <div id="pages">
      <ul>
        <li><u><nuxt-link to="/installation">Plugin Installation</nuxt-link></u>: This page will walk you through the plugin installation process.</li>
        <li><u><nuxt-link to="/cheatlist">Cheat List</nuxt-link></u>: This page lists all of the cheats available in the latest release of the plugin and gives the 3DS button combinations needed to activate some cheats.</li>
        <li><u><nuxt-link to="/itemids">Item IDs</nuxt-link></u>: This page lists the item IDs and the names of the items for the Text2Item cheat.</li>
        <li><u><nuxt-link to="/jargon">Jargon</nuxt-link></u>: This page lists 3DS and ACNL jargon for those not in the know.</li>
        <li><u><nuxt-link to="/guides">Guides</nuxt-link></u>: This page gives guides on various topics, such as texture hacks.</li>
        <li><u><nuxt-link to="/faq">Frequently Asked Questions</nuxt-link></u>: This page lists the frequently asked questions and gives answers to those questions.</li>
        <li><u><nuxt-link to="/releases">Releases</nuxt-link></u>: This page gives the releases of the plugin, with the latest on top.</li>
      </ul>
    </div>

    <br><br><u>Questions about the site?</u>
    <div id="questions">
      DM <b-tooltip label="AinoMinako#7220" dashed>@KunoichiZ</b-tooltip> on Discord.
    </div>

    <br><br><u>Issues with the site or the content on it?</u>
    <div id="issues">
      Open an <a href="https://github.com/KunoichiZ/acnl-modding-info/issues">issue</a> or make a <a href="https://github.com/KunoichiZ/acnl-modding-info/pulls">pull request</a>. When making a pull request, please test all code changes before submitting the pull request. Any changes that fail to build will be automatically rejected until they are fixed. For more information on issues and pull requests, please visit the <a href="https://github.com/KunoichiZ/acnl-modding-info/blob/master/.github/ISSUE_TEMPLATE.md">issue template</a> and the <a href="https://github.com/KunoichiZ/acnl-modding-info/blob/master/.github/PULL_REQUEST_TEMPLATE.md">pull request template</a>.
    </div>
  </div>
</template>

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

</style>
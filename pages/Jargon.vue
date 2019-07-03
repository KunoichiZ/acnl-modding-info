<template>
  <section class="container has-text-centered">
    <br><h1 class="title is-size-3">Jargon</h1>
    <p>This is a table of terminology aka jargon related to both the 3DS and ACNL. Some of the terms aren't mentioned in the website itself, but are good to know regardless. Terms have been extracted from two GBAtemp links, the <a href="https://gbatemp.net/threads/glossary-of-common-3ds-hacking-terms.414430/">Glossary of Common 3DS Hacking Terms</a> and the <a href="https://wiki.gbatemp.net/wiki/3DS_Glossary">3DS Glossary</a> on the GBAtemp wiki.</p>
    <br>
    <b-tabs type="is-toggle-rounded" size="is-medium" position="is-centered" v-model="activeTab">
        <b-tab-item icon="gamepad" label="3DS Jargon">
            <jargon3DS></jargon3DS>
        </b-tab-item>

        <b-tab-item icon="leaf" label="ACNL Jargon">
            <jargonACNL></jargonACNL>
        </b-tab-item>
    </b-tabs>
     // TODO: Add CSS to Jargon tables

  </section>
</template>

<script>
import jargon3DS from "~/components/3DSJargonTable.vue";
import jargonACNL from "~/components/ACNLJargonTable.vue";

export default {
  components: {
    jargon3DS,
    jargonACNL
  }, 
  data () {
    return {
      title: '3DS and ACNL Jargon',
      activeTab: 0
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'og-description', name: 'og:description', content: '3DS and ACNL Jargon' },
        { hid: 'og-title', property: 'og:title', content: this.title },
        { hid: 'og-site_name', property: 'og:site_name', content: 'ACNL Modding Info'}
      ]
    }
  }
}
</script>

<style>

</style>

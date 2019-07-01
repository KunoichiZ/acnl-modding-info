<template>
  <section class="container has-text-centered">
    <div>
      <h1 class="is-size-3">Plugin Installation Guide</h1>
      <br>These are the steps needed to install the plugin. This also assumes you have Luma3DS v9.1 installed. v10.0 breaks NTR CFW.
      <br><br>
      <div id="steps">
        <ol>
          <li>Download the most recent version of <a href="https://github.com/Nanquitas/BootNTR/releases/tag/v2.12">BootNTR Selector</a> by Nanquitas.
          <br>You'll either want to download <code>BootNTRSelector-FONZD-Banner.cia</code> or <code>BootNTRSelector-PabloMK7-Banner.cia</code>. They are both the same .cia, except with different Home Menu banners.</li>
          <li>Download and extract the latest release of the <a href="https://cdn.discordapp.com/attachments/360861723361542144/496756775580598273/ACNL-NTR-Cheats.zip">ACNL Plugin</a>.</li>
          <li>Create a folder called <code>plugin</code> on the root of your 3DS's SD card.</li>
          <li>Move the correct ID folder from the unzipped folder <code>plugin</code> to your 3DS's plugin folder.
          <br>The title ID depends on your game and its region:
          <ul>
            <li id="image"><img src="https://cdn.discordapp.com/attachments/275462725688229888/498974563367911445/acnl.png"></li>
            <li>Orig EUR: <code>SD:/plugin/0004000000086400</code></li>
            <li>Orig USA: <code>SD:/plugin/0004000000086300</code></li>
            <li>Orig JPN: <code>SD:/plugin/0004000000086200</code></li>
            <li id="image"><img src="https://cdn.discordapp.com/attachments/275462725688229888/497798468379607041/acwa.png"></li>
            <li>WA EUR: <code>SD:/plugin/0004000000198F00</code></li>
            <li>WA USA: <code>SD:/plugin/0004000000198E00</code></li>
            <li>WA JPN: <code>SD:/plugin/0004000000198D00</code></li>
          </ul></li>
          <li>When you first open NTR, select the default path.</li>
          <li>After that, choose the NTR 3.6 option. You should now be in the home menu.</li>
          <li>Open your game, load up your character, and press Select. Whenever you want to use the cheats, you have to repeat these steps.</li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Plugin Installation Guide - ACNL Modding Info'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Installation Guide' }
      ]
    }
  }
}
</script>

<style scoped>
#steps {
  padding: 10px;
  background: url('/pink_bg.png');
  width: 750px;
  border-radius: 25px;
  border-color: #f58094;
  border-width: 10px;
  margin: auto;
}

#steps ul {
    list-style-type: disc;
    list-style-position: inside;
    text-align: left;
}

#steps ol {
    list-style-position: inside;
    text-align: left;
}

#image {
  list-style-type: none;
}

@media (max-width: 1300px) {
  #steps {
    width: 475px;
    padding: 10px;
    border-radius: 25px;
    border-color: #a1cc00;
    border-width: 10px;
    margin: auto;
  }
}

code {
  border-radius: 25px;
}
</style>

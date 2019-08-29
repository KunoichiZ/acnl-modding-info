<template>
    <div>
        <div class="container has-text-centered" id="credits">
            
            <h1 class="title is-size-1">Credits</h1>
            <p>This website wouldn't have been possible without several people.</p>
            <br>
            <h1 class="title is-size-3">Website Credits</h1>
            <ul>
                <li>All depedencies in <a href="https://github.com/KunoichiZ/acnl-modding-info/blob/master/package.json">package.json</a></li>
                <li><a href="https://github.com/AuroraWright">AuroraWright</a> for Luma3DS.</li>
                <li><a href="https://github.com/44670">cell9</a> for making BootNTR.</li>
                <li><a href="https://github.com/Nanquitas/BootNTR">Nanquitas</a> for his BootNTR Selector app and CTRPF.</li>
                <li><a href="http://www.objgen.com/html">ObjGen's Live HTML Generator</a> for helping make the Item ID tables easier to make.</li>
                <li><a href="https://github.com/rydoginator">Rydoginator</a> and <a href="https://github.com/Slattz">Slattz</a> for the NTR plugin. Slattz helped out a lot with various things for the plugin.</li>
                <li><a href="https://raw.githubusercontent.com/SirBeethoven/LeafHacks/gh-pages/pages/All.txt">SirBeethoven</a> for the master Item ID list.</li>
                <li><a href="https://gbatemp.net/members/immortalzypther.411956/">Vaccaria</a> and <a href="https://github.com/faizal101">Kuuhaku</a> for testing the site and for providing feedback. Kuuhaku also came up with the villagers to use in the FAQ page.</li>
            </ul>
            <br>
            <h1 class="title is-size-3">Plugin Credits</h1>
            <h1 class="title is-size-4">Main Developers</h1>
            <ul id="maindev">
                <li>rydoginator, Slattz lead developers</li>
                <li>Nanquitass backend developer/CTRPF</li>
                <li>Sc0tline - UI design + code creation</li>
                <li>WemI0 - code creation</li>
                <li>Levi - Code creation</li>
                <li>Conanac, 0ICED0, MrN0p, Kageshi - misc. cheat sharing</li>
                <li>cell9 - NTR</li>
            </ul>
            <br>
            <h1 class="title is-size-4">Discord Server Helpers</h1>
            <p>Thank you to the helpers for being active in plugin support and testing the plugin before releases.</p>
            <h1 class="title is-size-5">Current Helpers</h1>
            <ul id="currenthelpers">
                <li>BadRedStone#6669</li>
                <li>rydoginator#0001</li>
                <li>Lord DIO#3133</li>
                <li>Vaccaria#5883</li>
                <li>Kyotu#9120</li>
            </ul>
            <br>
            <h1 class="title is-size-5">Past Helpers</h1>
            <ul id="pasthelpers">
                <li>M-1</li>
                <li>Reece's Puffs</li>
                <li>baby onion</li>
                <li>~B O O P~</li>
                <li>&#x1f31e; &#x1f338; mercy &#x1f338;&#x1f31e;</li>
            </ul>
            <br>
            <h1 class="title is-size-4">Discord Server Admins</h1>
            <p>Thank you to the admins for keeping the server in order even with all the people in it.</p>
            <ul id="serveradmins">
                <li>rydoginator#0001</li>
                <li>Lord DIO#3133</li>
                <li>Vaccaria#5883</li>
                <li>Sc0tline#0412</li>
                <li>Wem#1443</li>
                <li>Nanquitas#9465</li>
            </ul>
            <br>
            <p>For anyone active and helping in plugin support, thank you as well.</p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Credits - ACNL Modding Info'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'og-description', name: 'og:description', content: 'Credits' },
        { hid: 'og-title', property: 'og:title', content: this.title },
        { hid: 'og-site_name', property: 'og:site_name', content: 'ACNL Modding Info'}
      ]
    }
  }
}
</script>

<style scoped>
#credits {
    background: url('/yellow_stripe_bg.png');
    margin-top: 5px;
    border-style: solid;
    border-color: #c69c86;
    border-radius: 25px;
    padding: 10px;
    width: 960px;
}

li {
    text-align: left;
    list-style-type: disc;
    list-style-position: inside;
}
</style>
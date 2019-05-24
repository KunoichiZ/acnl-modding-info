<template>
  <section class="container has-text-centered">
    <br>
    <div><h1 class="is-size-3">Cheat List</h1>
      <br>
      <div id="toc">
        <h6 class="subtitle is-6" id="toc-title">Table of Contents</h6>
        <ul>
          <li><a href="#save-file-cheats">Save File Cheats</a></li>
          <li><a href="#movement-cheats">Movement Cheats</a></li>
          <li><a href="#time-travel-cheats">Time Travel Cheats</a></li>
          <li><a href="#unlock-cheats">Unlock Cheats</a></li>
          <li><a href="#environment-cheats">Environment Cheats</a></li>
          <li><a href="#inventory-cheats">Inventory Cheats</a></li>
          <li><a href="#shop-cheats">Shop Cheats</a></li>
          <li><a href="#misc-cheats">Misc Cheats</a></li>
        </ul>
      </div>
      <br>
      <div id="save-file-cheats">
        <h3 class="is-size-5">Save File Cheats:</h3>
        <ul>
          <li>Set name to...</li>
          <li>Save Dumper</li>
          <li>Save Restore</li>
          <li>Change Town Fruit to...</li>
          <li>Change Town Grass to...</li>
          <li>Real Time Building Modifier</li>
        </ul>
      </div>
      <br>
      <div id="movement-cheats">
        <h3 class="is-size-5">Movement Cheats:</h3>
        <ul>
          <li>Coordinates Mod</li>
          <li>Touch Coordinates</li>
          <li>Teleport</li>
          <li>Walk Over Things <b-tag rounded>(DPAD UP+L)</b-tag></li>
          <li>Speed Hack</li>
          <li>Moon Jump</li>
          <li>Teleport to PWP</li>
        </ul>
      </div>
      <br>
      <div id="time-travel-cheats">
        <h3 class="is-size-5">Time Travel:</h3>
        <ul>
          <li>Time Machine</li>
          <li>Time Travel</li>
        </ul>
      </div>
      <br>
      <div id="unlock-cheats">
        <h3 class="is-size-5">Unlock:</h3>
        <ul>
          <li>100% Mayor Permit</li>
          <li>Unlock All PWPs</li>
          <li>Fill Out Encyclopedia</li>
          <li>Fill Out Emoticons</li>
          <li>Fill Out K.K. Songs</li>
          <li>Fill Out Catalog</li>
        </ul>
      </div>
      <br>
      <div id="environment-cheats">
        <h3 class="is-size-5">Environment:</h3>
        <ul>
          <li>R+A Cheats</li>
          <ul>
            <li>Remove All Items</li>
            <li>Remove All Weeds</li>
            <li>Water All Flowers</li>
            <li>Fill Grass</li>
            <li>Destroy Grass</li>
          </ul>
          <li>Real Time World Edit</li>
          <li>Search and Replace</li>
          <li>Flowers are Unbreakable <b-tag rounded>(DPAD RIGHT+R)</b-tag></li>
        </ul>
      </div>
      <br>
      <div id="inventory-cheats">
        <h3 class="is-size-5">Inventory Cheats:</h3>
        <ul>
          <li>Money Cheats</li>
          <ul>
            <li>Max/Infinite Bank</li>
            <li>Max/Infinite Wallet</li>
            <li>Max/Infinite Coupons</li>
            <li>Max/Infinite Island Medals</li>
            <li>Bells In Bank Don't Decrease</li>
            <li>Bells in Wallet Don't Decrease</li>
            <li>Coupons Don't Decrease</li>
            <li>Medals Don't Decrease</li>
            <li>Wallet Editor</li>
            <li>Bank Editor</li>
          </ul>
          <li>Text to Item <b-tag rounded>(DPAD RIGHT+X)</b-tag></li>
          <li>Duplicate <b-tag rounded>(R)</b-tag></li>
          <li>Pick Up Buried Items</li>
          <li>Inventory Box Extender</li>
          <li>Fossil Inspector</li>
        </ul>
      </div>
      <br>
      <div id="shop-cheats">
        <h3 class="is-size-5">Shop Cheats:</h3>
        <ul>
          <li>Nookling Upgrades</li>
          <li>Main Street Shops</li>
          <li>Shops Always Open</li>
          <li>Catalog to Pockets <b-tag rounded>(L)</b-tag></li>
        </ul>
      </div>
      <br>
      <div id="misc-cheats">
        <h3 class="is-size-5">Misc Cheats:</h3>
        <ul>
          <li>Ghost Mode <b-tag rounded>(DPAD UP+Y)</b-tag></li>
          <li>Camera Mod</li>
          <li>Country Spoofer <b-tag rounded>(B+L)</b-tag></li>
          <li>Custom Symbols Keyboard</li>
          <li>Keyboard Extender</li>
          <li>Fast Game Speed</li>
          <li>Item Form Changer</li>
          <li>Item Effect Changer</li>
          <li>Special NPC Changer</li>
          <li>Access Catalog & Storage Anywhere</li>
          <li>Emote ID Changer</li>
          <li>Amiibo Spoofer</li>
          <li>Pick Every Tour</li>
          <li>Unburying <b-tag rounded>(R)</b-tag></li>
          <li>Weed Pulling <b-tag rounded>(R)</b-tag></li>
          <li>Weather Mod</li>
          <li>Edit Every Pattern<b-tag rounded>(DPAD RIGHT+R)</b-tag></li>
          <li>Faint <b-tag rounded>(A+R)</b-tag></li>
          <li>Cherry Blossom Mod</li>
          <li>Confetti Mod</li>
        </ul>
      </div>
    </div>
      <br>
      // TODO: Add Button Commands to Necessary Commands
  </section>
</template>

<script>

</script>

<style scoped>
#save-file-cheats, #movement-cheats, #time-travel-cheats, #unlock-cheats, #environment-cheats, #shop-cheats, #misc-cheats, #inventory-cheats {
  text-align: left;
  margin-left: 60px;
}

ul {
  list-style-type: circle;
  margin-left: 20px;
}

#toc {
    padding: 10px;
    background: url('/brown_stripe_bg.png');
    width: 300px;
    border-radius: 25px;
    margin: auto;
    text-align: left;
    border-style: solid;
    border-color: #c69c86;
}

#toc ul {
    list-style-type: disc;
    list-style-position: inside;
}

#toc-title {
    text-align: center;
}
</style>

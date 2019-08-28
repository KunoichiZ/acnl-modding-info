<template>
  <section class="container">
    <ItemIDsMenu></ItemIDsMenu>
    <div>
      <br>
      <center><h1 class="title is-size-3">Item IDs</h1>
      
      <br><p id="text">Click a category on the left to display its items in the table below. You can view what each item looks like on <a href="http://moridb.com/">http://moridb.com/</a>. Item IDs starting with "00" and have a red background usually don't work with the text to item cheat and you need to use it with the RTWE (Real Time World Editor). Item IDs that have a green background can be put into your character's pockets.</p>
      
      <div class="box">
        <i class="fas fa-exclamation-triangle"></i> WARNING: The Clothes and Furniture tables are VERY LONG. There are a lot of clothes and furniture. <i class="fas fa-exclamation-triangle"></i>
      </div></center>
      
      <br><br><center><div id="top"><a href="#art">Art</a> | <a href="#catchables">Catchables</a> | <a href="#clothes">Clothes</a>  | <a href="#patterns">Custom Patterns</a> | <a href="#environment">Environmentals</a> | <a href="#fortunes">Fortune Cookies</a> | <a href="#fossils">Fossils</a> | <a href="#furniture">Furniture</a> | <a href="#fruit">Fruits</a> | <a href="#garden">Garden</a> | <a href="#gyroids">Gyroids</a> | <a href="#hra">HRA Exhibition</a> | <a href="#events">In-Game Events</a> | <a href="#sprites">Item Sprites</a> | <a href="#misc">Misc</a> | <a href="#npc">NPC Items</a> | <a href="#paper">Paper</a> | <a href="#pictures">Animal Pictures</a> | <a href="#songs">Songs</a> | <a href="#tools">Tools & Wearables</a> | <a href="#wallsCarpets">Wallpapers & Carpets</a></div></center>
      <br>
      <!-- <center><span id="art">Art (back to <a href="#top">categories</a>)-->
      <ArtTable></ArtTable>
      <br>
      <CatchablesTable></CatchablesTable>
      <br>
      <ClothesTable></ClothesTable>
      <br>
      <PatternsTable></PatternsTable>
      <br>
      <FortunesTable></FortunesTable>
      <br>
      <FossilsTable></FossilsTable>
      <br>
      <FruitTable></FruitTable>
      <br>
      <GardenTable></GardenTable>
      <br>
      <GyroidsTable></GyroidsTable>
      <br>
      <HRATable></HRATable>
      <br>
      <EnvironmentTable></EnvironmentTable>
      <br>
      <EventsTable></EventsTable>
      <br>
      <ItemSpritesTable></ItemSpritesTable>
      <br>
      <MiscTable></MiscTable>
      <br>
      <NPCItemsTable></NPCItemsTable>
      <br>
      <PaperTable></PaperTable>
      <br>
      <PicturesTable></PicturesTable>
      <br>
      <SongsTable></SongsTable>
      <br>
      <ToolsTable></ToolsTable>
    </div>
  </section>
</template>

<script>
import ArtTable from "~/components/ArtTable.vue";
import CatchablesTable from "~/components/CatchablesTable.vue";
import ItemIDsMenu from "~/components/ItemIDsMenu.vue";
import ClothesTable from "~/components/ClothesTable.vue";
import PatternsTable from "~/components/CustomPatternsTable.vue";
import EnvironmentTable from "~/components/EnvironmentTable.vue";
import FortunesTable from "~/components/FortunesTable.vue";
import FossilsTable from "~/components/FossilsTable.vue";
// import FurnitureTable from "~/components/FurnitureTable.vue";
import FruitTable from "~/components/FruitTable.vue";
import GardenTable from "~/components/GardenTable.vue";
import GyroidsTable from "~/components/GyroidsTable.vue";
import HRATable from "~/components/HRAExhibitionTable.vue";
import EventsTable from "~/components/InGameEventsTable.vue";
import ItemSpritesTable from "~/components/ItemSpritesTable.vue";
import MiscTable from "~/components/MiscTable.vue";
import NPCItemsTable from "~/components/NPCItemsTable.vue";
import PaperTable from "~/components/PaperTable.vue";
import PicturesTable from "~/components/PicturesTable.vue";
import SongsTable from "~/components/SongsTable.vue";
import ToolsTable from "~/components/ToolsTable.vue";
// import WallsCarpetsTable from "~/components/WallsCarpetsTable.vue";

export default {
  components: {
    ArtTable,
    CatchablesTable,
    ClothesTable,
    EnvironmentTable,
    EventsTable,
    FortunesTable,
    FossilsTable,
    FruitTable,
    GardenTable,
    GyroidsTable,
    HRATable,
    ItemIDsMenu,
    ItemSpritesTable,
    MiscTable,
    NPCItemsTable,
    PaperTable,
    PatternsTable,
    PicturesTable,
    SongsTable,
    ToolsTable
  },
  data () {
    return {
      title: 'Item IDs - ACNL Modding Info'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'og-description', name: 'og:description', content: 'Item IDs' },
        { hid: 'og-title', property: 'og:title', content: this.title },
        { hid: 'og-site_name', property: 'og:site_name', content: 'ACNL Modding Info'}
      ]
    }
  }
}
</script>

<style scoped>
html {
	scroll-behavior: smooth;
}

#text {
  margin-left: 325px;
  text-align: left;
}

table, td {
  border: 1px solid black;
  text-align: center;
}

th {
  border: 2px solid black;
  text-align: center;
}

table {
  margin: auto;
}

#top {
  display: none;
}

.box {
  background-color: yellow;
  margin-left: 325px;
  /* width: 950px; */
  text-align: center;
}
@media (max-width: 1000px) {
  .menu {
      display: none;
  }
  #top {
    display: inline-block;
    padding: 10px;
    background: url('/brown_stripe_bg.png');
    width: 450px;
    border-radius: 25px;
    margin: auto;
    text-align: left;
    border-style: solid;
    border-color: #c69c86;
  }
}
</style>

<template>
  <section class="container has-text-centered">
    <div>
      <br><h1 class="is-size-3">Item IDs</h1>
      <br>Click a category to display its items in the table below.
      <br><br><div id="top"><a href="#artInput">Art</a> | <a href="#catchablesInput">Catchables</a> | <a href="#clothesInput">Clothes</a> | <a href="#environmentInput">Environmentals</a> | <a href="#fortunesInput">Fortune Cookies</a> | <a href="#fossilsInput">Fossils</a> | <a href="#furnitureInput">Furniture</a> | <a href="#gyroidsInput">Gyroids</a> | <a href="#miscInput">Misc</a> | <a href="#picturesInput">Animal Pictures</a> | <a href="#songsInput">Songs</a> | <a href="#toolsInput">Tools & Wearables</a> | <a href="#wallsCarpetsInput">Wallpapers & Carpets</a></div>
      <!-- <br><input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for item names.."> -->
      <br><br>
      <ArtTable></ArtTable>
    </div>
  
    // TODO: Add Item IDs to table
    // TODO: Make table searchable
    // TODO: Color code items if the item can be pocketed (green if yes, red if no)
  </section>
</template>

<script>
import ArtTable from "~/components/ArtTable.vue";
// import CatchablesTable from "~/components/CatchablesTable.vue";
// import ClothesTable from "~/components/ClothesTable.vue";
// import EnvironmentTable from "~/components/EnvironmentTable.vue";
// import FortunesTable from "~/components/FortunesTable.vue";
// import FossilsTable from "~/components/FossilsTable.vue";
// import FurnitureTable from "~/components/FurnitureTable.vue";
// import GyroidsTable from "~/components/GyroidsTable.vue";
// import MiscTable from "~/components/MiscTable.vue";
// import PicturesTable from "~/components/PicturesTable.vue";
// import SongsTable from "~/components/SongsTable.vue";
// import ToolsTable from "~/components/ToolsTable.vue";
// import WallsCarpetsTable from "~/components/WallsCarpetsTable.vue";

export default {

  components: {
    ArtTable
  }
    
}
</script>

<style scoped>
/* b-table {
  width: 50%;
} */

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
</style>

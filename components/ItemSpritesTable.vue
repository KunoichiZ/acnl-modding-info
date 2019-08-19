 <template>
    <div id="spritesvue" class="container has-text-centered">
      <b-collapse class="card" aria-id="spritesTable" id="sprites" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="spritesTable">
                <p class="card-header-title is-centered">
                    Item Sprites
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <!-- <span id="sprites">Item Sprites  (back to <a href="#top">categories</a>)</span> -->
                  <input type="text" class="input is-rounded" id="spritesInput" v-on:keyup="spritesFunction()" placeholder="Search for item names..">
                  <br><br>
                  <table id="spritesTable">
                      <tr>
                        <th>Hex</th>
                        <th>Item Name</th>
                      </tr>
                      <tr>
                        <td>340C</td>
                        <td>Bronze Badge (Sprite)</td>
                      </tr>
                      <tr>
                        <td>340D</td>
                        <td>Silver Badge (Sprite)</td>
                      </tr>
                      <tr>
                        <td>340E</td>
                        <td>Gold Badge (Sprite)</td>
                      </tr>
                      <tr>
                        <td>340F</td>
                        <td>Map (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3410</td>
                        <td>TPC (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3411</td>
                        <td>Lost Book (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3412</td>
                        <td>Mail (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3413</td>
                        <td>Flower Seed (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3414</td>
                        <td>Basic Sapling (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3415</td>
                        <td>Cedar Sapling (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3416</td>
                        <td>Palm Sapling (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3417</td>
                        <td>Gold Trophy (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3418</td>
                        <td>Silver Trophy (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3419</td>
                        <td>Bronze Trophy (Sprite)</td>
                      </tr>
                      <tr>
                        <td>341E</td>
                        <td>Club Tortimer Form (Sprite)</td>
                      </tr>
                      <tr>
                        <td>341F</td>
                        <td>"Red Flowers" (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3420</td>
                        <td>"White Flowers" (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3421</td>
                        <td>"Yellow Flowers" (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3422</td>
                        <td>"Tulips" (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3423</td>
                        <td>"Pansies" (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3424</td>
                        <td>"Cosmos" (Sprite)</td>
                      </tr>
                      <tr>
                        <td>3425</td>
                        <td>"Roses" (Sprite)</td>
                      </tr>
                  </table>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
function spritesFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("spritesInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("spritesTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

export default {
methods: {
    spritesFunction
  }
}
</script>

<style scoped>
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

th, td {
    padding: 5px;
}

td {
  background-color: green;
  opacity: 0.5;
  color: white;
}

#spritesvue, .card {
    background: url('/green_bg.png');
    width: 325px;
    border-radius: 25px;
    border-color: #a1cc00;
    border-width: 10px;
    padding: 15px;
}

.card-header-title, .card-header {
  text-align: center;
  box-shadow: none;
}
</style>
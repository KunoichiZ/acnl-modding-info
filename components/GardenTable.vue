<template>
    <div id="gardenvue" class="container has-text-centered">
        <b-collapse class="card" aria-id="gardenTable" id="garden">
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="gardenTable">
                <p class="card-header-title is-centered">
                    Garden
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                    <!-- <span id="garden">garden  (back to <a href="#top">categories</a>)/span> -->
                    <input type="text" class="input is-rounded" id="gardenInput" v-on:keyup="gardenFunction()" placeholder="Search for item names..">
                    <br><br>
                    <table>
                        <tr>
                            <th>Hex</th>
                            <th>Item Name</th>
                        </tr>
                        <tr>
                            <td>202b</td>
                            <td>fertilizer</td>
                        </tr>
                        <tr>
                            <td>202c</td>
                            <td>sapling</td>
                        </tr>
                        <tr>
                            <td>202d</td>
                            <td>cedar sapling</td>
                        </tr>
                        <tr>
                            <td>202e</td>
                            <td>holly shoot</td>
                        </tr>
                        <tr>
                            <td>202f</td>
                            <td>pink azalea shoot</td>
                        </tr>
                        <tr>
                            <td>2030</td>
                            <td>white azalea shoot</td>
                        </tr>
                        <tr>
                            <td>2031</td>
                            <td>blue hydrangea shoot</td>
                        </tr>
                        <tr>
                            <td>2032</td>
                            <td>pink hydrangea shoot</td>
                        </tr>
                        <tr>
                            <td>2033</td>
                            <td>red hibiscus shoot</td>
                        </tr>
                        <tr>
                            <td>2034</td>
                            <td>y. hibiscus shoot</td>
                        </tr>
                        <tr>
                            <td>2035</td>
                            <td>sweet olive shoot</td>
                        </tr>
                        <tr>
                            <td>2036</td>
                            <td>present</td>
                        </tr>
                        <tr>
                            <td>2037</td>
                            <td>present for another villager (Sprite)</td>
                        </tr>
                        <tr>
                            <td>2038</td>
                            <td>red-tulip bag</td>
                        </tr>
                        <tr>
                            <td>2039</td>
                            <td>white-tulip bag</td>
                        </tr>
                        <tr>
                            <td>203a</td>
                            <td>yellow-tulip bag</td>
                        </tr>
                        <tr>
                            <td>203b</td>
                            <td>pink-tulip bag</td>
                        </tr>
                        <tr>
                            <td>203c</td>
                            <td>purple-tulip bag</td>
                        </tr>
                        <tr>
                            <td>203d</td>
                            <td>black-tulip bag</td>
                        </tr>
                        <tr>
                            <td>203e</td>
                            <td>orange-tulip bag</td>
                        </tr>
                        <tr>
                            <td>203f</td>
                            <td>white-pansy bag</td>
                        </tr>
                        <tr>
                            <td>2040</td>
                            <td>yellow-pansy bag</td>
                        </tr>
                        <tr>
                            <td>2041</td>
                            <td>red-pansy bag</td>
                        </tr>
                        <tr>
                            <td>2042</td>
                            <td>purple-pansy bag</td>
                        </tr>
                        <tr>
                            <td>2043</td>
                            <td>orange-pansy bag</td>
                        </tr>
                        <tr>
                            <td>2044</td>
                            <td>blue-pansy bag</td>
                        </tr>
                        <tr>
                            <td>2045</td>
                            <td>white-cosmos bag</td>
                        </tr>
                        <tr>
                            <td>2046</td>
                            <td>red-cosmos bag</td>
                        </tr>
                        <tr>
                            <td>2047</td>
                            <td>sun-cosmos bag</td>
                        </tr>
                        <tr>
                            <td>2048</td>
                            <td>pink-cosmos bag</td>
                        </tr>
                        <tr>
                            <td>2049</td>
                            <td>orange-cosmos bag</td>
                        </tr>
                        <tr>
                            <td>204a</td>
                            <td>black-cosmos bag</td>
                        </tr>
                        <tr>
                            <td>204b</td>
                            <td>red-rose bag</td>
                        </tr>
                        <tr>
                            <td>204c</td>
                            <td>white-rose bag</td>
                        </tr>
                        <tr>
                            <td>204d</td>
                            <td>yellow-rose bag</td>
                        </tr>
                        <tr>
                            <td>204e</td>
                            <td>pink-rose bag</td>
                        </tr>
                        <tr>
                            <td>204f</td>
                            <td>orange-rose bag</td>
                        </tr>
                        <tr>
                            <td>2050</td>
                            <td>purple-rose bag</td>
                        </tr>
                        <tr>
                            <td>2051</td>
                            <td>black-rose bag</td>
                        </tr>
                        <tr>
                            <td>2052</td>
                            <td>blue-rose bag</td>
                        </tr>
                        <tr>
                            <td>2053</td>
                            <td>gold-rose bag</td>
                        </tr>
                        <tr>
                            <td>2054</td>
                            <td>red-carnation bag</td>
                        </tr>
                        <tr>
                            <td>2055</td>
                            <td>pink-carnation bag</td>
                        </tr>
                        <tr>
                            <td>2056</td>
                            <td>white-carnation bag</td>
                        </tr>
                        <tr>
                            <td>2057</td>
                            <td>white-lily bag</td>
                        </tr>
                        <tr>
                            <td>2058</td>
                            <td>yellow-lily bag</td>
                        </tr>
                        <tr>
                            <td>2059</td>
                            <td>red-lily bag</td>
                        </tr>
                        <tr>
                            <td>205a</td>
                            <td>orange-lily bag</td>
                        </tr>
                        <tr>
                            <td>205b</td>
                            <td>pink-lily bag</td>
                        </tr>
                        <tr>
                            <td>205c</td>
                            <td>black-lily bag</td>
                        </tr>
                        <tr>
                            <td>205d</td>
                            <td>purple-violet bag</td>
                        </tr>
                        <tr>
                            <td>205e</td>
                            <td>blue-violet bag</td>
                        </tr>
                        <tr>
                            <td>205f</td>
                            <td>white-violet bag</td>
                        </tr>
                        <tr>
                            <td>2060</td>
                            <td>yellow-violet bag</td>
                        </tr>
                    </table>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
function gardenFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("gardenInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("gardenTable");
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
        gardenFunction
    }
}
</script>

<style scoped>
table, td, tr {
  border: 2px solid black;
  text-align: center;
}

th {
  border: 3px solid black;
  text-align: center;
}

table {
  margin: auto;
}

th, td {
    padding: 5px;
}

#gardenvue, .card {
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
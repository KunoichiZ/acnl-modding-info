<template>
    <div>
        <input type="text" id="catchablesInput" v-on:keyup="catchablesFunction()" placeholder="Search for item names..">
        <br><br>
        <table id="catchablesTable">
            <tr>
  	            <th colspan="2" id="catchables">Catchables (back to <a href="#top">categories</a>)</th>
            </tr>
            <tr>
  	            <th>Hex</th>
                <th>Item Name</th>
            </tr>
            <tr>
              <td>228e</td>
              <td>common butterfly</td>
            </tr>
            <tr>
              <td>228f</td>
              <td>yellow butterfly</td>
            </tr>
                <tr><td>2290</td>
                <td>tiger butterfly</td>
            </tr>
            <tr>
                <td>2291</td>
                <td>peacock butterfly</td>
            </tr>
            <tr>
                <td>2292</td>
                <td>monarch butterfly</td>
            </tr>
            <tr>
                <td>2293</td>
                <td>emperor butterfly</td>
            </tr>
            <tr>
                <td>2294</td>
                <td>agrias butterfly</td>
            </tr>
            <tr>
                <td>2295</td>
                <td>Raja B. butterfly</td>
            </tr>
            <tr>
                <td>2296</td>
                <td>birdwing butterfly</td>
            </tr>
            <tr>
                <td>2297</td>
                <td>moth</td>
            </tr>
            <tr>
                <td>2298</td>
                <td>oak silk moth</td>
            </tr>
            <tr>
                <td>2299</td>
                <td>honeybee</td>
            </tr>
            <tr>
                <td>229a</td>
                <td>bee</td>
            </tr>
            <tr>
                <td>229b</td>
                <td>long locust</td>
            </tr>
            <tr>
                <td>229c</td>
                <td>migratory locust</td>
            </tr>
            <tr>
                <td>229d</td>
                <td>rice grasshopper</td>
            </tr>
            <tr>
                <td>229e</td>
                <td>mantis</td>
            </tr>
            <tr>
                <td>229f</td>
                <td>orchid mantis</td>
            </tr>
            <tr>
                <td>22a0</td>
                <td>brown cicada</td>
            </tr>
            <tr>
                <td>22a1</td>
                <td>robust cicada</td>
            </tr>
            <tr>
                <td>22a2</td>
                <td>giant cicada</td>
            </tr>
            <tr>
                <td>22a3</td>
                <td>walker cicada</td>
            </tr>
            <tr>
                <td>22a4</td>
                <td>evening cicada</td>
            </tr>
            <tr>
                <td>22a5</td>
                <td>cicada shell</td>
            </tr>
            <tr>
                <td>22a6</td>
                <td>lantern fly</td>
            </tr>
            <tr>
                <td>22a7</td>
                <td>red dragonfly</td>
            </tr>
            <tr>
                <td>22a8</td>
                <td>darner dragonfly</td>
            </tr>
            <tr>
                <td>22a9</td>
                <td>banded dragonfly</td>
            </tr>
            <tr>
                <td>22aa</td>
                <td>petaltail dragonfly</td>
            </tr>
            <tr>
                <td>22ab</td>
                <td>ant</td>
            </tr>
            <tr>
                <td>22ac</td>
                <td>pondskater</td>
            </tr>
            <tr>
                <td>22ad</td>
                <td>diving beetle</td>
            </tr>
            <tr>
                <td>22ae</td>
                <td>stinkbug</td>
            </tr>
            <tr>
                <td>22af</td>
                <td>snail</td>
            </tr>
            <tr>
                <td>22b0</td>
                <td>cricket</td>
            </tr>
            <tr>
                <td>22b1</td>
                <td>bell cricket</td>
            </tr>
            <tr>
                <td>22b2</td>
                <td>grasshopper</td>
            </tr>
            <tr>
                <td>22b3</td>
                <td>mole cricket</td>
            </tr>
            <tr>
                <td>22b4</td>
                <td>walking leaf</td>
            </tr>
            <tr>
                <td>22b5</td>
                <td>walking stick</td>
            </tr>
            <tr>
                <td>22b6</td>
                <td>bagworm</td>
            </tr>
            <tr>
                <td>22b7</td>
                <td>ladybug</td>
            </tr>
            <tr>
                <td>22b8</td>
                <td>violin beetle</td>
            </tr>
            <tr>
                <td>22b9</td>
                <td>longhorn beetle</td>
            </tr>
            <tr>
                <td>22ba</td>
                <td>tiger beetle</td>
            </tr>
            <tr>
                <td>22bb</td>
                <td>dung beetle</td>
            </tr>
            <tr>
                <td>22bc</td>
                <td>wharf roach</td>
            </tr>
            <tr>
                <td>22bd</td>
                <td>hermit crab</td>
            </tr>
            <tr>
                <td>22be</td>
                <td>firefly</td>
            </tr>
        </table>
    </div>
</template>

<script>
function catchablesFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("catchablesInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("catchablesTable");
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
    catchablesFunction
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
</style>
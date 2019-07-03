<template>
    <div id="miscvue" class="container has-text-centered">
        <span id="misc">Miscellaneous <!-- (back to <a href="#top">categories</a>)--></span>
        <input type="text" class="input is-rounded" id="miscInput" v-on:keyup="miscFunction()" placeholder="Search for item names..">
        <br><br>
        <table id="miscTable">
            <tr>
              <th>Hex</th>
              <th>Item Name</th>
            </tr>
            <tr>
              <td>7FFE</td>
              <td>Empty</td>
            </tr>
            <tr>
              <td>7FFC</td>
              <td>Multispace Furniture</td>
            </tr>
            <tr>
              <td>3402</td>
              <td>Redd's cookie</td>
            </tr>
            <tr>
              <td>3403</td>
              <td>dud ticket</td>
            </tr>
            <tr>
              <td>3404</td>
              <td>flash ticket</td>
            </tr>
            <tr>
              <td>3405</td>
              <td>bang ticket</td>
            </tr>
            <tr>
              <td>3406</td>
              <td>sparkle ticket</td>
            </tr>
            <tr>
              <td>3407</td>
              <td>whiz ticket</td>
            </tr>
            <tr>
              <td>3408</td>
              <td>pow ticket</td>
            </tr>
            <tr>
              <td>3409</td>
              <td>crackle ticket</td>
            </tr>
            <tr>
              <td>340a</td>
              <td>kaboom ticket</td>
            </tr>
            <tr>
              <td>340b</td>
              <td>pop ticket</td>
            </tr>
            <tr>
              <td>338c</td>
              <td>coffee</td>
            </tr>
            <tr>
              <td>338d</td>
              <td>fizzy apple juice</td>
            </tr>
            <tr>
              <td>338e</td>
              <td>beans</td>
            </tr>
            <tr>
              <td>338f</td>
              <td>good-luck roll</td>
            </tr>
            <tr>
              <td>3390</td>
              <td>vanilla soft-serve</td>
            </tr>
            <tr>
              <td>3391</td>
              <td>choco soft-serve</td>
            </tr>
            <tr>
              <td>3392</td>
              <td>matcha soft-serve</td>
            </tr>
            <tr>
              <td>3393</td>
              <td>swirl soft-serve</td>
            </tr>
            <tr>
              <td>3394</td>
              <td>vanilla ice cream</td>
            </tr>
            <tr>
              <td>3395</td>
              <td>strawberry ice cream</td>
            </tr>
            <tr>
              <td>3396</td>
              <td>lemon double scoop</td>
            </tr>
            <tr>
              <td>3397</td>
              <td>mint double scoop</td>
            </tr>
            <tr>
              <td>3398</td>
              <td>blue glow wand</td>
            </tr>
            <tr>
              <td>3399</td>
              <td>green glow wand</td>
            </tr>
            <tr>
              <td>339a</td>
              <td>pink glow wand</td>
            </tr>
            <tr>
              <td>339b</td>
              <td>yellow glow wand</td>
            </tr>
            <tr>
              <td>339c</td>
              <td>Flower Fairy wand</td>
            </tr>
            <tr>
              <td>339d</td>
              <td>Kiki and Lala wand</td>
            </tr>
            <tr>
              <td>339e</td>
              <td>tweeter</td>
            </tr>
            <tr>
              <td>339f</td>
              <td>fountain firework</td>
            </tr>
            <tr>
              <td>33a0</td>
              <td>used firework</td>
            </tr>
            <tr>
              <td>33a1</td>
              <td>Santa bag</td>
            </tr>
            <tr>
              <td>33a2</td>
              <td>mystery bag</td>
            </tr>
            <tr>
              <td>33a3</td>
              <td>normal coffee beans</td>
            </tr>
            <tr>
              <td>33a4</td>
              <td>good coffee beans</td>
            </tr>
            <tr>
              <td>33a5</td>
              <td>superb coffee beans</td>
            </tr>
            <tr>
              <td>33a6</td>
              <td>chocolate coin</td>
            </tr>
        </table>
    </div>
</template>

<script>
function miscFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("miscInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("miscTable");
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
    miscFunction
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

#miscvue {
    /* background: url('/green_bg.png'); */
    width: 325px;
    border-radius: 25px;
    border-color: #a1cc00;
    border-width: 10px;
    padding: 15px;
}
</style>
<template>
    <div id="patternsvue" class="container has-text-centered">
        <span id="pattens">Custom Pattern Items <!-- (back to <a href="#top">categories</a>)--></span>
        <input type="text" class="input is-rounded" id="customPatternsInput" v-on:keyup="customPatternsFunction()" placeholder="Search for item names..">
        <br><br>
        <table id="customPatternsTable">
            <tr>
  	            <th>Hex</th>
                <th>Item Name</th>
            </tr>
            <tr>
              <td>33A7</td>
              <td>Custom Shirt</td>
            </tr>
            <tr>
              <td>33A8</td>
              <td>Pattern Easel</td>
            </tr>
            <tr>
              <td>33A9</td>
              <td>Pattern Wall Canvas</td>
            </tr>
            <tr>
              <td>33AA</td>
              <td>Custom Design Umbrella</td>
            </tr>
            <tr>
              <td>33AB</td>
              <td>Custom Design Horned Hat</td>
            </tr>
            <tr>
              <td>33AC</td>
              <td>Custom Design Female Hat</td>
            </tr>
            <tr>
              <td>33AD</td>
              <td>Custom Design Knit Hat</td>
            </tr>
            <tr>
              <td>33AE</td>
              <td>Custom Design T-Shirt</td>
            </tr>
            <tr>
              <td>33AF</td>
              <td>Custom Design Tank Shirt</td>
            </tr>
            <tr>
              <td>33B0</td>
              <td>Custom Design T-Shirt (Distorted Sleeves)</td>
            </tr>
            <tr>
              <td>33B1</td>
              <td>Custom Design Long Sleeve Shirt</td>
            </tr>
            <tr>
              <td>33B2</td>
              <td>Custom Design Tank Dress</td>
            </tr>
            <tr>
              <td>33B3</td>
              <td>Custom Design Sleeve Dress</td>
            </tr>
            <tr>
              <td>33B4</td>
              <td>Custom Design Long Sleeve Dress</td>
            </tr>
            <tr>
              <td>33B5</td>
              <td>Custom Design T-Shirt (Wall)</td>
            </tr>
            <tr>
              <td>33B6</td>
              <td>Custom Design Tank Shirt (Wall)</td>
            </tr>
            <tr>
              <td>33B7</td>
              <td>Custom Design T-Shirt (Distorted Sleeves) (Wall)</td>
            </tr>
            <tr>
              <td>33B8</td>
              <td>Custom Design Long Sleeve Shirt (Wall)</td>
            </tr>
            <tr>
              <td>33B9</td>
              <td>Custom Design Tank Dress (Wall)</td>
            </tr>
            <tr>
              <td>33BA</td>
              <td>Custom Design Sleeve Dress (Wall)</td>
            </tr>
            <tr>
              <td>33BB</td>
              <td>Custom Design Long Sleeve Dress (Wall)</td>
            </tr>
        </table>
    </div>
</template>

<script>
function customPatternsFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("customPatternsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("customPatternsTable");
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
        customPatternsFunction
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

#patternsvue {
    /* background: url('/green_bg.png'); */
    width: 325px;
    border-radius: 25px;
    border-color: #a1cc00;
    border-width: 10px;
    padding: 15px;
}
</style>
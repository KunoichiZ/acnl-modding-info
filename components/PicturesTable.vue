<template>
    <div>
        <input type="text" class="input" id="picturesInput" v-on:keyup="picturesFunction()" placeholder="Search for item names..">
        <br><br>
        <table id="picturesTable">
            <tr>
  	            <th colspan="2" id="pics">Pictures (back to <a href="#top">categories</a>)</th>
            </tr>
            <tr>
  	            <th>Hex</th>
                <th>Item Name</th>
            </tr>
            <!-- <tr>
                <td>30d2</td>
                <td>dynamic painting</td>
            </tr> -->
        </table>
    </div>
</template>

<script>
function picturesFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("picturesInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("picturesTable");
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
    picturesFunction
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
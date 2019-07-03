<template>
    <div id="eventsvue" class="container has-text-centered">
        <span id="events">In-Game Event Items <!-- (back to <a href="#top">categories</a>)--></span>
        <input type="text" class="input is-rounded" id="eventsInput" v-on:keyup="eventsFunction()" placeholder="Search for item names..">
        <br><br>
        <table id="eventsTable">
            <tr>
  	            <th>Hex</th>
                <th>Item Name</th>
            </tr>
            <tr>
              <td>341a</td>
              <td>bingo card</td>
            </tr>
            <tr>
              <td>341b</td>
              <td>expired bingo card</td>
            </tr>
            <tr>
              <td>341c</td>
              <td>time capsule</td>
            </tr>
            <tr>
              <td>341d</td>
              <td>scavenger-hunt list</td>
            </tr>
        </table>
    </div>
</template>

<script>
function eventsFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("eventsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("eventsTable");
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
      eventsFunction
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

#eventsvue {
    /* background: url('/green_bg.png'); */
    width: 325px;
    border-radius: 25px;
    border-color: #a1cc00;
    border-width: 10px;
    padding: 15px;
}
</style>
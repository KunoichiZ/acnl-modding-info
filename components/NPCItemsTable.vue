<template>
    <div id="npcvue" class="container has-text-centered">
      <b-collapse class="card" aria-id="npcTable" id="npc" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="npcTable">
                <p class="card-header-title is-centered">
                    NPC Items
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <!-- <span id="npc">NPC Items (back to <a href="#top">categories</a>)</span> -->
                  <input type="text" class="input is-rounded" id="npcInput" v-on:keyup="npcFunction()" placeholder="Search for item names..">
                  <br><br>
                  <table id="npcTable">
                      <tr>
                          <th>Hex</th>
                          <th>Item Name</th>
                      </tr>
                      <tr>
                        <td>33bc</td>
                        <td>signature sheet</td>
                      </tr>
                      <tr>
                        <td>33bd</td>
                        <td>petition form</td>
                      </tr>
                      <tr>
                        <td>33be</td>
                        <td>paper scrap</td>
                      </tr>
                      <tr>
                        <td>33bf</td>
                        <td>lost item [book]</td>
                      </tr>
                      <tr>
                        <td>33c0</td>
                        <td>lost item [pouch]</td>
                      </tr>
                      <tr>
                        <td>33c1</td>
                        <td>lost item [mitten]</td>
                      </tr>
                      <tr>
                        <td>33c2</td>
                        <td>lost item [paper bag]</td>
                      </tr>
                      <tr>
                        <td>33c3</td>
                        <td>book</td>
                      </tr>
                      <tr>
                        <td>33c4</td>
                        <td>pouch</td>
                      </tr>
                      <tr>
                        <td>33c5</td>
                        <td>mitten</td>
                      </tr>
                      <tr>
                        <td>33c6</td>
                        <td>paper bag</td>
                      </tr>
                      <tr>
                        <td>33c7</td>
                        <td>towel</td>
                      </tr>
                  </table>
                </div>
            </div>
            <!-- <footer class="card-footer">
                <a class="card-footer-item">Save</a>
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item">Delete</a>
            </footer> -->
        </b-collapse>
    </div>
</template>

<script>
function npcFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("npcInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("npcTable");
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
      npcFunction
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

#npcvue, .card {
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
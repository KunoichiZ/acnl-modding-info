<template>
    <div id="toolsvue" class="container has-text-centered">
      <b-collapse class="card" aria-id="toolsTable" id="tools" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="toolsTable">
                <p class="card-header-title is-centered">
                    Tools & Wearables
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <!-- <span id="tools">Tools & Wearables (back to <a href="#top">categories</a>)</span> -->
                  <input type="text" class="input is-rounded" id="toolsInput" v-on:keyup="toolsFunction()" placeholder="Search for item names..">
                  <br><br>
                  <table id="toolsTable">
                      <tr>
                          <th>Hex</th>
                          <th>Item Name</th>
                      </tr>
                      <tr>
                          <td>33c8</td>
                          <td>fortune cookie</td>
                      </tr>
                      <tr>
                          <td>334c</td>
                          <td>rental axe</td>
                      </tr>
                      <tr>
                          <td>334d</td>
                          <td>axe</td>
                      </tr>
                      <tr>
                          <td>334e</td>
                          <td>silver axe</td>
                        </tr>
                        <tr>
                          <td>334f</td>
                          <td>golden axe</td>
                        </tr>
                        <tr>
                          <td>3350</td>
                          <td>rental net</td>
                        </tr>
                        <tr>
                          <td>3351</td>
                          <td>net</td>
                        </tr>
                        <tr>
                          <td>3352</td>
                          <td>silver net</td>
                        </tr>
                        <tr>
                          <td>3353</td>
                          <td>golden net</td>
                        </tr>
                        <tr>
                          <td>3354</td>
                          <td>rental rod</td>
                        </tr>
                        <tr>
                          <td>3355</td>
                          <td>fishing rod</td>
                        </tr>
                        <tr>
                          <td>3356</td>
                          <td>silver rod</td>
                        </tr>
                        <tr>
                          <td>3357</td>
                          <td>golden rod</td>
                        </tr>
                        <tr>
                          <td>3358</td>
                          <td>rental shovel</td>
                        </tr>
                        <tr>
                          <td>3359</td>
                          <td>shovel</td>
                        </tr>
                        <tr>
                          <td>335a</td>
                          <td>silver shovel</td>
                        </tr>
                        <tr>
                          <td>335b</td>
                          <td>golden shovel</td>
                        </tr>
                        <tr>
                          <td>335c</td>
                          <td>rental can</td>
                        </tr>
                        <tr>
                          <td>335d</td>
                          <td>watering can</td>
                        </tr>
                        <tr>
                          <td>335e</td>
                          <td>silver can</td>
                        </tr>
                        <tr>
                          <td>335f</td>
                          <td>golden can</td>
                        </tr>
                        <tr>
                          <td>3360</td>
                          <td>rental slingshot</td>
                        </tr>
                        <tr>
                          <td>3361</td>
                          <td>slingshot</td>
                        </tr>
                        <tr>
                          <td>3362</td>
                          <td>silver slingshot</td>
                        </tr>
                        <tr>
                          <td>3363</td>
                          <td>golden slingshot</td>
                        </tr>
                        <tr>
                          <td>3364</td>
                          <td>rental toy hammer</td>
                        </tr>
                        <tr>
                          <td>3365</td>
                          <td>toy hammer</td>
                        </tr>
                        <tr>
                          <td>3366</td>
                          <td>megaphone</td>
                        </tr>
                        <tr>
                          <td>3367</td>
                          <td>timer</td>
                        </tr>
                        <tr>
                          <td>3368</td>
                          <td>sparkler</td>
                        </tr>
                        <tr>
                          <td>3369</td>
                          <td>roman candle</td>
                        </tr>
                        <tr>
                          <td>336a</td>
                          <td>party popper</td>
                        </tr>
                        <tr>
                          <td>336b</td>
                          <td>bubble wand</td>
                        </tr>
                        <tr>
                          <td>336c</td>
                          <td>bunny r. balloon</td>
                        </tr>
                        <tr>
                          <td>336d</td>
                          <td>bunny o. balloon</td>
                        </tr>
                        <tr>
                          <td>336e</td>
                          <td>bunny y. balloon</td>
                        </tr>
                        <tr>
                          <td>336f</td>
                          <td>bunny g. balloon</td>
                        </tr>
                        <tr>
                          <td>3370</td>
                          <td>bunny c. balloon</td>
                        </tr>
                        <tr>
                          <td>3371</td>
                          <td>bunny b. balloon</td>
                        </tr>
                        <tr>
                          <td>3372</td>
                          <td>bunny i. balloon</td>
                        </tr>
                        <tr>
                          <td>3373</td>
                          <td>bunny p. balloon</td>
                        </tr>
                        <tr>
                          <td>3374</td>
                          <td>red balloon</td>
                        </tr>
                        <tr>
                          <td>3375</td>
                          <td>orange balloon</td>
                        </tr>
                        <tr>
                          <td>3376</td>
                          <td>yellow balloon</td>
                        </tr>
                        <tr>
                          <td>3377</td>
                          <td>green balloon</td>
                        </tr>
                        <tr>
                          <td>3378</td>
                          <td>cyan balloon</td>
                        </tr>
                        <tr>
                          <td>3379</td>
                          <td>blue balloon</td>
                        </tr>
                        <tr>
                          <td>337a</td>
                          <td>indigo balloon</td>
                        </tr>
                        <tr>
                          <td>337b</td>
                          <td>pink balloon</td>
                        </tr>
                        <tr>
                          <td>337c</td>
                          <td>heart r. balloon</td>
                        </tr>
                        <tr>
                          <td>337d</td>
                          <td>heart o. balloon</td>
                        </tr>
                        <tr>
                          <td>337e</td>
                          <td>heart y. balloon</td>
                        </tr>
                        <tr>
                          <td>337f</td>
                          <td>heart g. balloon</td>
                        </tr>
                        <tr>
                          <td>3380</td>
                          <td>heart c. balloon</td>
                        </tr>
                        <tr>
                          <td>3381</td>
                          <td>heart b. balloon</td>
                        </tr>
                        <tr>
                          <td>3382</td>
                          <td>heart i. balloon</td>
                        </tr>
                        <tr>
                          <td>3383</td>
                          <td>heart p. balloon</td>
                        </tr>
                        <tr>
                          <td>3384</td>
                          <td>red pinwheel</td>
                        </tr>
                        <tr>
                          <td>3385</td>
                          <td>orange pinwheel</td>
                        </tr>
                        <tr>
                          <td>3386</td>
                          <td>yellow pinwheel</td>
                        </tr>
                        <tr>
                          <td>3387</td>
                          <td>green pinwheel</td>
                        </tr>
                        <tr>
                          <td>3388</td>
                          <td>cyan pinwheel</td>
                        </tr>
                        <tr>
                          <td>3389</td>
                          <td>blue pinwheel</td>
                        </tr>
                        <tr>
                          <td>338a</td>
                          <td>indigo pinwheel</td>
                        </tr>
                        <tr>
                          <td>338b</td>
                          <td>pink pinwheel</td>
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
function toolsFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("toolsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("toolsTable");
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
    toolsFunction
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

#toolsvue, .card {
    background: url('/pink_bg.png');
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
<template>
    <div id="hravue" class="container has-text-centered">
      <b-collapse class="card" aria-id="hraTable" id="hra" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="hraTable">
                <p class="card-header-title is-centered">
                    HRA Exhibition (Inside Only)
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <!-- <span id="hra">HRA Exhibition (Inside Only)(back to <a href="#top">categories</a>)</span> -->
                  <input type="text" class="input is-rounded" id="hraInput" v-on:keyup="hraFunction()" placeholder="Search for item names..">
                  <br><br>
                  <table id="hraTable">
                      <tr>
                          <th>Hex</th>
                          <th>Item Name</th>
                      </tr>
                      <tr>
                        <td>3426</td>
                        <td>red mailbox</td>
                      </tr>
                      <tr>
                        <td>3427</td>
                        <td>metal mailbox</td>
                      </tr>
                      <tr>
                        <td>3428</td>
                        <td>blue mailbox</td>
                      </tr>
                      <tr>
                        <td>3429</td>
                        <td>yellow mailbox</td>
                      </tr>
                      <tr>
                        <td>342a</td>
                        <td>orange mailbox</td>
                      </tr>
                      <tr>
                        <td>342b</td>
                        <td>green mailbox</td>
                      </tr>
                      <tr>
                        <td>342c</td>
                        <td>golden mailbox</td>
                      </tr>
                      <tr>
                        <td>342d</td>
                        <td>wooden mailbox</td>
                      </tr>
                      <tr>
                        <td>342e</td>
                        <td>white mailbox</td>
                      </tr>
                      <tr>
                        <td>342f</td>
                        <td>pink mailbox</td>
                      </tr>
                      <tr>
                        <td>3430</td>
                        <td>zen mailbox</td>
                      </tr>
                      <tr>
                        <td>3431</td>
                        <td>shabby mailbox</td>
                      </tr>
                      <tr>
                        <td>3432</td>
                        <td>stainless mailbox</td>
                      </tr>
                      <tr>
                        <td>3433</td>
                        <td>square mailbox</td>
                      </tr>
                      <tr>
                        <td>3434</td>
                        <td>light-blue mailbox</td>
                      </tr>
                      <tr>
                        <td>3435</td>
                        <td>cyan mailbox</td>
                      </tr>
                      <tr>
                        <td>3436</td>
                        <td>mermaid mailbox</td>
                      </tr>
                      <tr>
                        <td>3437</td>
                        <td>cabana mailbox</td>
                      </tr>
                      <tr>
                        <td>3438</td>
                        <td>fairy-tale mailbox</td>
                      </tr>
                      <tr>
                        <td>3439</td>
                        <td>royal mailbox</td>
                      </tr>
                      <tr>
                        <td>343a</td>
                        <td>barrel mailbox</td>
                      </tr>
                      <tr>
                        <td>343b</td>
                        <td>sweets mailbox</td>
                      </tr>
                      <tr>
                        <td>343c</td>
                        <td>arched circle door</td>
                      </tr>
                      <tr>
                        <td>343d</td>
                        <td>arched fish door</td>
                      </tr>
                      <tr>
                        <td>343e</td>
                        <td>arched astro door</td>
                      </tr>
                      <tr>
                        <td>343f</td>
                        <td>arched door</td>
                      </tr>
                      <tr>
                        <td>3440</td>
                        <td>arched yellow door</td>
                      </tr>
                      <tr>
                        <td>3441</td>
                        <td>arched metal door</td>
                      </tr>
                      <tr>
                        <td>3442</td>
                        <td>arched patched door</td>
                      </tr>
                      <tr>
                        <td>3443</td>
                        <td>arched sweets door</td>
                      </tr>
                      <tr>
                        <td>3444</td>
                        <td>arched mermaid door</td>
                      </tr>
                      <tr>
                        <td>3445</td>
                        <td>arched zen door</td>
                      </tr>
                      <tr>
                        <td>3446</td>
                        <td>arched cabin door</td>
                      </tr>
                      <tr>
                        <td>3447</td>
                        <td>arch fairy-tale door</td>
                      </tr>
                      <tr>
                        <td>3448</td>
                        <td>arched brown door</td>
                      </tr>
                      <tr>
                        <td>3449</td>
                        <td>arched green door</td>
                      </tr>
                      <tr>
                        <td>344a</td>
                        <td>arched heavy door</td>
                      </tr>
                      <tr>
                        <td>344b</td>
                        <td>arched blue door</td>
                      </tr>
                      <tr>
                        <td>344c</td>
                        <td>arched beige door</td>
                      </tr>
                      <tr>
                        <td>344d</td>
                        <td>arched imperial door</td>
                      </tr>
                      <tr>
                        <td>344e</td>
                        <td>arched pink door</td>
                      </tr>
                      <tr>
                        <td>344f</td>
                        <td>arched kiddie door</td>
                      </tr>
                      <tr>
                        <td>3450</td>
                        <td>arched bamboo door</td>
                      </tr>
                      <tr>
                        <td>3451</td>
                        <td>arched golden door</td>
                      </tr>
                      <tr>
                        <td>3452</td>
                        <td>basic door</td>
                      </tr>
                      <tr>
                        <td>3453</td>
                        <td>fish door</td>
                      </tr>
                      <tr>
                        <td>3454</td>
                        <td>astro door</td>
                      </tr>
                      <tr>
                        <td>3455</td>
                        <td>classic door</td>
                      </tr>
                      <tr>
                        <td>3456</td>
                        <td>yellow door</td>
                      </tr>
                      <tr>
                        <td>3457</td>
                        <td>metal door</td>
                      </tr>
                      <tr>
                        <td>3458</td>
                        <td>patched door</td>
                      </tr>
                      <tr>
                        <td>3459</td>
                        <td>sweets door</td>
                      </tr>
                      <tr>
                        <td>345a</td>
                        <td>mermaid door</td>
                      </tr>
                      <tr>
                        <td>345b</td>
                        <td>zen door</td>
                      </tr>
                      <tr>
                        <td>345c</td>
                        <td>cabin door</td>
                      </tr>
                      <tr>
                        <td>345d</td>
                        <td>fairy-tale door</td>
                      </tr>
                      <tr>
                        <td>345e</td>
                        <td>brown door</td>
                      </tr>
                      <tr>
                        <td>345f</td>
                        <td>green door</td>
                      </tr>
                      <tr>
                        <td>3460</td>
                        <td>heavy door</td>
                      </tr>
                      <tr>
                        <td>3461</td>
                        <td>blue door</td>
                      </tr>
                      <tr>
                        <td>3462</td>
                        <td>beige door</td>
                      </tr>
                      <tr>
                        <td>3463</td>
                        <td>imperial door</td>
                      </tr>
                      <tr>
                        <td>3464</td>
                        <td>pink door</td>
                      </tr>
                      <tr>
                        <td>3465</td>
                        <td>kiddie door</td>
                      </tr>
                      <tr>
                        <td>3466</td>
                        <td>bamboo door</td>
                      </tr>
                      <tr>
                        <td>3467</td>
                        <td>red roof</td>
                      </tr>
                      <tr>
                        <td>3468</td>
                        <td>green-tile roof</td>
                      </tr>
                      <tr>
                        <td>3469</td>
                        <td>blue-shingle roof</td>
                      </tr>
                      <tr>
                        <td>346a</td>
                        <td>astro roof</td>
                      </tr>
                      <tr>
                        <td>346b</td>
                        <td>kiddie roof</td>
                      </tr>
                      <tr>
                        <td>346c</td>
                        <td>black modern roof</td>
                      </tr>
                      <tr>
                        <td>346d</td>
                        <td>straw-thatched roof</td>
                      </tr>
                      <tr>
                        <td>346e</td>
                        <td>black-tile roof</td>
                      </tr>
                      <tr>
                        <td>346f</td>
                        <td>fairy-tale roof</td>
                      </tr>
                      <tr>
                        <td>3470</td>
                        <td>ranch roof</td>
                      </tr>
                      <tr>
                        <td>3471</td>
                        <td>shanty roof</td>
                      </tr>
                      <tr>
                        <td>3472</td>
                        <td>concrete roof</td>
                      </tr>
                      <tr>
                        <td>3473</td>
                        <td>sweets roof</td>
                      </tr>
                      <tr>
                        <td>3474</td>
                        <td>white roof</td>
                      </tr>
                      <tr>
                        <td>3475</td>
                        <td>purple-shingle roof</td>
                      </tr>
                      <tr>
                        <td>3476</td>
                        <td>black-straw roof</td>
                      </tr>
                      <tr>
                        <td>3477</td>
                        <td>mermaid roof</td>
                      </tr>
                      <tr>
                        <td>3478</td>
                        <td>simple blue roof</td>
                      </tr>
                      <tr>
                        <td>3479</td>
                        <td>purple roof</td>
                      </tr>
                      <tr>
                        <td>347a</td>
                        <td>pink roof</td>
                      </tr>
                      <tr>
                        <td>347b</td>
                        <td>black roof</td>
                      </tr>
                      <tr>
                        <td>347c</td>
                        <td>yellow roof</td>
                      </tr>
                      <tr>
                        <td>347d</td>
                        <td>fuchsia roof</td>
                      </tr>
                      <tr>
                        <td>347e</td>
                        <td>black-shingle roof</td>
                      </tr>
                      <tr>
                        <td>347f</td>
                        <td>brown roof</td>
                      </tr>
                      <tr>
                        <td>3480</td>
                        <td>grass roof</td>
                      </tr>
                      <tr>
                        <td>3481</td>
                        <td>stone roof</td>
                      </tr>
                      <tr>
                        <td>3482</td>
                        <td>mint fairy-tale roof</td>
                      </tr>
                      <tr>
                        <td>3483</td>
                        <td>uneven stone roof</td>
                      </tr>
                      <tr>
                        <td>3484</td>
                        <td>simple green roof</td>
                      </tr>
                      <tr>
                        <td>3485</td>
                        <td>simple gray roof</td>
                      </tr>
                      <tr>
                        <td>3486</td>
                        <td>golden roof</td>
                      </tr>
                      <tr>
                        <td>3487</td>
                        <td>blue roof</td>
                      </tr>
                      <tr>
                        <td>3488</td>
                        <td>yellow roof</td>
                      </tr>
                      <tr>
                        <td>3489</td>
                        <td>green roof</td>
                      </tr>
                      <tr>
                        <td>348a</td>
                        <td>rope fence</td>
                      </tr>
                      <tr>
                        <td>348b</td>
                        <td>picket fence</td>
                      </tr>
                      <tr>
                        <td>348c</td>
                        <td>country fence</td>
                      </tr>
                      <tr>
                        <td>348d</td>
                        <td>hedge</td>
                      </tr>
                      <tr>
                        <td>348e</td>
                        <td>pink mermaid fence</td>
                      </tr>
                      <tr>
                        <td>348f</td>
                        <td>blue mermaid fence</td>
                      </tr>
                      <tr>
                        <td>3490</td>
                        <td>red-brick fence</td>
                      </tr>
                      <tr>
                        <td>3491</td>
                        <td>gray-brick fence</td>
                      </tr>
                      <tr>
                        <td>3492</td>
                        <td>pink fence</td>
                      </tr>
                      <tr>
                        <td>3493</td>
                        <td>fairy-tale fence</td>
                      </tr>
                      <tr>
                        <td>3494</td>
                        <td>corral fence</td>
                      </tr>
                      <tr>
                        <td>3495</td>
                        <td>curvy fence</td>
                      </tr>
                      <tr>
                        <td>3496</td>
                        <td>blue fence</td>
                      </tr>
                      <tr>
                        <td>3497</td>
                        <td>fancy fence</td>
                      </tr>
                      <tr>
                        <td>3498</td>
                        <td>zen fence</td>
                      </tr>
                      <tr>
                        <td>3499</td>
                        <td>barbed-wire fence</td>
                      </tr>
                      <tr>
                        <td>349a</td>
                        <td>sweets fence</td>
                      </tr>
                      <tr>
                        <td>349b</td>
                        <td>concrete fence</td>
                      </tr>
                      <tr>
                        <td>349c</td>
                        <td>shanty fence</td>
                      </tr>
                      <tr>
                        <td>349d</td>
                        <td>bamboo fence</td>
                      </tr>
                      <tr>
                        <td>349e</td>
                        <td>sculpted hedge</td>
                      </tr>
                      <tr>
                        <td>349f</td>
                        <td>cinder-block wall</td>
                      </tr>
                      <tr>
                        <td>34a0</td>
                        <td>golden fence</td>
                      </tr>
                      <tr>
                        <td>34a1</td>
                        <td>brick exterior</td>
                      </tr>
                      <tr>
                        <td>34a2</td>
                        <td>exotic exterior</td>
                      </tr>
                      <tr>
                        <td>34a3</td>
                        <td>cobblestone exterior</td>
                      </tr>
                      <tr>
                        <td>34a4</td>
                        <td>astro exterior</td>
                      </tr>
                      <tr>
                        <td>34a5</td>
                        <td>kiddie exterior</td>
                      </tr>
                      <tr>
                        <td>34a6</td>
                        <td>simple exterior</td>
                      </tr>
                      <tr>
                        <td>34a7</td>
                        <td>cabana exterior</td>
                      </tr>
                      <tr>
                        <td>34a8</td>
                        <td>zen exterior</td>
                      </tr>
                      <tr>
                        <td>34a9</td>
                        <td>fairy-tale exterior</td>
                      </tr>
                      <tr>
                        <td>34aa</td>
                        <td>cabin exterior</td>
                      </tr>
                      <tr>
                        <td>34ab</td>
                        <td>shanty exterior</td>
                      </tr>
                      <tr>
                        <td>34ac</td>
                        <td>concrete exterior</td>
                      </tr>
                      <tr>
                        <td>34ad</td>
                        <td>sweets exterior</td>
                      </tr>
                      <tr>
                        <td>34ae</td>
                        <td>white-brick exterior</td>
                      </tr>
                      <tr>
                        <td>34af</td>
                        <td>chalet exterior</td>
                      </tr>
                      <tr>
                        <td>34b0</td>
                        <td>brown-brick exterior</td>
                      </tr>
                      <tr>
                        <td>34b1</td>
                        <td>mermaid exterior</td>
                      </tr>
                      <tr>
                        <td>34b2</td>
                        <td>red-barn exterior</td>
                      </tr>
                      <tr>
                        <td>34b3</td>
                        <td>blue chalet exterior</td>
                      </tr>
                      <tr>
                        <td>34b4</td>
                        <td>pink exterior</td>
                      </tr>
                      <tr>
                        <td>34b5</td>
                        <td>blue exterior</td>
                      </tr>
                      <tr>
                        <td>34b6</td>
                        <td>orange exterior</td>
                      </tr>
                      <tr>
                        <td>34b7</td>
                        <td>garden exterior</td>
                      </tr>
                      <tr>
                        <td>34b8</td>
                        <td>yellow exterior</td>
                      </tr>
                      <tr>
                        <td>34b9</td>
                        <td>white exterior</td>
                      </tr>
                      <tr>
                        <td>34ba</td>
                        <td>stucco exterior</td>
                      </tr>
                      <tr>
                        <td>34bb</td>
                        <td>stone exterior</td>
                      </tr>
                      <tr>
                        <td>34bc</td>
                        <td>melon exterior</td>
                      </tr>
                      <tr>
                        <td>34bd</td>
                        <td>earthy exterior</td>
                      </tr>
                      <tr>
                        <td>34be</td>
                        <td>fancy exterior</td>
                      </tr>
                      <tr>
                        <td>34bf</td>
                        <td>black exterior</td>
                      </tr>
                      <tr>
                        <td>34c0</td>
                        <td>golden exterior</td>
                      </tr>
                      <tr>
                        <td>34c1</td>
                        <td>colorful gravel</td>
                      </tr>
                      <tr>
                        <td>34c2</td>
                        <td>stone pavement</td>
                      </tr>
                      <tr>
                        <td>34c3</td>
                        <td>brick pavement</td>
                      </tr>
                      <tr>
                        <td>34c4</td>
                        <td>pebble pavement</td>
                      </tr>
                      <tr>
                        <td>34c5</td>
                        <td>square pavement</td>
                      </tr>
                      <tr>
                        <td>34c6</td>
                        <td>concrete pavement</td>
                      </tr>
                      <tr>
                        <td>34c7</td>
                        <td>blue-brick pavement</td>
                      </tr>
                      <tr>
                        <td>34c8</td>
                        <td>pink pavement</td>
                      </tr>
                      <tr>
                        <td>34c9</td>
                        <td>brown pavement</td>
                      </tr>
                      <tr>
                        <td>34ca</td>
                        <td>mansion</td>
                      </tr>
                      <tr>
                        <td>34cb</td>
                        <td>zen castle</td>
                      </tr>
                      <tr>
                        <td>34cc</td>
                        <td>castle</td>
                      </tr>
                      <tr>
                        <td>34cd</td>
                        <td>modern house</td>
                      </tr>
                  </table>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
function hraFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("hraInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("hraTable");
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
      hraFunction
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

#hravue, .card {
    background: url('/pink_bg.png');
    width: 325px;
    border-radius: 25px;
    border-color: #f58094;
    border-width: 10px;
    padding: 15px;
}

.card-header-title, .card-header {
  text-align: center;
  box-shadow: none;
}
</style>
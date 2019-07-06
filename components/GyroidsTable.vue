<template>
    <div id="gyroidsvue" class="container has-text-centered">
        <span id="gyroids">Gyroids <!-- (back to <a href="#top">categories</a>)--></span>
        <input type="text" class="input is-rounded" id="gyroidsInput" v-on:keyup="gyroidsFunction()" placeholder="Search for item names..">
        <br><br>
        <table id="gyroidsTable">
            <tr>
              <th>Hex</th>
              <th>Item Name</th>
            </tr>
            <tr>
              <td>295c</td>
              <td>mega clankoid</td>
            </tr>
            <tr>
              <td>295d</td>
              <td>clankoid</td>
            </tr>
            <tr>
              <td>295e</td>
              <td>mini clankoid</td>
            </tr>
            <tr>
              <td>295f</td>
              <td>tall clankoid</td>
            </tr>
            <tr>
              <td>2960</td>
              <td>squat dingloid</td>
            </tr>
            <tr>
              <td>2961</td>
              <td>mega dingloid</td>
            </tr>
            <tr>
              <td>2962</td>
              <td>dingloid</td>
            </tr>
            <tr>
              <td>2963</td>
              <td>mini dingloid</td>
            </tr>
            <tr>
              <td>2964</td>
              <td>wee dingloid</td>
            </tr>
            <tr>
              <td>2965</td>
              <td>tall dingloid</td>
            </tr>
            <tr>
              <td>2966</td>
              <td>mega percoloid</td>
            </tr>
            <tr>
              <td>2967</td>
              <td>tall percoloid</td>
            </tr>
            <tr>
              <td>2968</td>
              <td>mega oombloid</td>
            </tr>
            <tr>
              <td>2969</td>
              <td>oombloid</td>
            </tr>
            <tr>
              <td>296a</td>
              <td>mini oombloid</td>
            </tr>
            <tr>
              <td>296b</td>
              <td>tall oombloid</td>
            </tr>
            <tr>
              <td>296c</td>
              <td>rhythmoid</td>
            </tr>
            <tr>
              <td>296d</td>
              <td>mini rhythmoid</td>
            </tr>
            <tr>
              <td>296e</td>
              <td>mega puffoid</td>
            </tr>
            <tr>
              <td>296f</td>
              <td>mini puffoid</td>
            </tr>
            <tr>
              <td>2970</td>
              <td>tall puffoid</td>
            </tr>
            <tr>
              <td>2971</td>
              <td>mega lullaboid</td>
            </tr>
            <tr>
              <td>2972</td>
              <td>lullaboid</td>
            </tr>
            <tr>
              <td>2973</td>
              <td>mini lullaboid</td>
            </tr>
            <tr>
              <td>2974</td>
              <td>tall lullaboid</td>
            </tr>
            <tr>
              <td>2975</td>
              <td>mega sproid</td>
            </tr>
            <tr>
              <td>2976</td>
              <td>sproid</td>
            </tr>
            <tr>
              <td>2977</td>
              <td>mini sproid</td>
            </tr>
            <tr>
              <td>2978</td>
              <td>tall sproid</td>
            </tr>
            <tr>
              <td>2979</td>
              <td>mega bowtoid</td>
            </tr>
            <tr>
              <td>297a</td>
              <td>bowtoid</td>
            </tr>
            <tr>
              <td>297b</td>
              <td>mini bowtoid</td>
            </tr>
            <tr>
              <td>297c</td>
              <td>tall bowtoid</td>
            </tr>
            <tr>
              <td>297d</td>
              <td>mega tootoid</td>
            </tr>
            <tr>
              <td>297e</td>
              <td>tootoid</td>
            </tr>
            <tr>
              <td>297f</td>
              <td>mini tootoid</td>
            </tr>
            <tr>
              <td>2980</td>
              <td>mega plinkoid</td>
            </tr>
            <tr>
              <td>2981</td>
              <td>plinkoid</td>
            </tr>
            <tr>
              <td>2982</td>
              <td>mini plinkoid</td>
            </tr>
            <tr>
              <td>2983</td>
              <td>mega dekkoid</td>
            </tr>
            <tr>
              <td>2984</td>
              <td>dekkoid</td>
            </tr>
            <tr>
              <td>2985</td>
              <td>mini dekkoid</td>
            </tr>
            <tr>
              <td>2986</td>
              <td>mega buzzoid</td>
            </tr>
            <tr>
              <td>2987</td>
              <td>buzzoid</td>
            </tr>
            <tr>
              <td>2988</td>
              <td>mini buzzoid</td>
            </tr>
            <tr>
              <td>2989</td>
              <td>tall buzzoid</td>
            </tr>
            <tr>
              <td>298a</td>
              <td>mega drilloid</td>
            </tr>
            <tr>
              <td>298b</td>
              <td>drilloid</td>
            </tr>
            <tr>
              <td>298c</td>
              <td>mini drilloid</td>
            </tr>
            <tr>
              <td>298d</td>
              <td>mega echoid</td>
            </tr>
            <tr>
              <td>298e</td>
              <td>mini echoid</td>
            </tr>
            <tr>
              <td>298f</td>
              <td>tall echoid</td>
            </tr>
            <tr>
              <td>2990</td>
              <td>mega lamentoid</td>
            </tr>
            <tr>
              <td>2991</td>
              <td>lamentoid</td>
            </tr>
            <tr>
              <td>2992</td>
              <td>mini lamentoid</td>
            </tr>
            <tr>
              <td>2993</td>
              <td>tall lamentoid</td>
            </tr>
            <tr>
              <td>2994</td>
              <td>mega strumboid</td>
            </tr>
            <tr>
              <td>2995</td>
              <td>strumboid</td>
            </tr>
            <tr>
              <td>2996</td>
              <td>mini strumboid</td>
            </tr>
            <tr>
              <td>2997</td>
              <td>tall strumboid</td>
            </tr>
            <tr>
              <td>2998</td>
              <td>mega croakoid</td>
            </tr>
            <tr>
              <td>2999</td>
              <td>croakoid</td>
            </tr>
            <tr>
              <td>299a</td>
              <td>mini croakoid</td>
            </tr>
            <tr>
              <td>299b</td>
              <td>tall croakoid</td>
            </tr>
            <tr>
              <td>299c</td>
              <td>mega fizzoid</td>
            </tr>
            <tr>
              <td>299d</td>
              <td>mini fizzoid</td>
            </tr>
            <tr>
              <td>299e</td>
              <td>mega squelchoid</td>
            </tr>
            <tr>
              <td>299f</td>
              <td>squelchoid</td>
            </tr>
            <tr>
              <td>29a0</td>
              <td>mini squelchoid</td>
            </tr>
            <tr>
              <td>29a1</td>
              <td>mega howloid</td>
            </tr>
            <tr>
              <td>29a2</td>
              <td>howloid</td>
            </tr>
            <tr>
              <td>29a3</td>
              <td>mini howloid</td>
            </tr>
            <tr>
              <td>29a4</td>
              <td>mega nebuloid</td>
            </tr>
            <tr>
              <td>29a5</td>
              <td>squat nebuloid</td>
            </tr>
            <tr>
              <td>29a6</td>
              <td>nebuloid</td>
            </tr>
            <tr>
              <td>29a7</td>
              <td>mini nebuloid</td>
            </tr>
            <tr>
              <td>29a8</td>
              <td>tall nebuloid</td>
            </tr>
            <tr>
              <td>29a9</td>
              <td>slim nebuloid</td>
            </tr>
            <tr>
              <td>29aa</td>
              <td>mega gongoid</td>
            </tr>
            <tr>
              <td>29ab</td>
              <td>gongoid</td>
            </tr>
            <tr>
              <td>29ac</td>
              <td>mini gongoid</td>
            </tr>
            <tr>
              <td>29ad</td>
              <td>tall gongoid</td>
            </tr>
            <tr>
              <td>29ae</td>
              <td>mega poltergoid</td>
            </tr>
            <tr>
              <td>29af</td>
              <td>poltergoid</td>
            </tr>
            <tr>
              <td>29b0</td>
              <td>mini poltergoid</td>
            </tr>
            <tr>
              <td>29b1</td>
              <td>tall poltergoid</td>
            </tr>
            <tr>
              <td>29b2</td>
              <td>metatoid</td>
            </tr>
            <tr>
              <td>29b3</td>
              <td>mini metatoid</td>
            </tr>
            <tr>
              <td>29b4</td>
              <td>mega bovoid</td>
            </tr>
            <tr>
              <td>29b5</td>
              <td>tall bovoid</td>
            </tr>
            <tr>
              <td>29b6</td>
              <td>mega oboid</td>
            </tr>
            <tr>
              <td>29b7</td>
              <td>oboid</td>
            </tr>
            <tr>
              <td>29b8</td>
              <td>tall oboid</td>
            </tr>
            <tr>
              <td>29b9</td>
              <td>mega dinkoid</td>
            </tr>
            <tr>
              <td>29ba</td>
              <td>mini dinkoid</td>
            </tr>
            <tr>
              <td>29bb</td>
              <td>mega harmonoid</td>
            </tr>
            <tr>
              <td>29bc</td>
              <td>harmonoid</td>
            </tr>
            <tr>
              <td>29bd</td>
              <td>mini harmonoid</td>
            </tr>
            <tr>
              <td>29be</td>
              <td>tall harmonoid</td>
            </tr>
            <tr>
              <td>29bf</td>
              <td>tall droploid</td>
            </tr>
            <tr>
              <td>29c0</td>
              <td>mega sputnoid</td>
            </tr>
            <tr>
              <td>29c1</td>
              <td>sputnoid</td>
            </tr>
            <tr>
              <td>29c2</td>
              <td>mini sputnoid</td>
            </tr>
            <tr>
              <td>29c3</td>
              <td>tall sputnoid</td>
            </tr>
            <tr>
              <td>29c4</td>
              <td>mega alloid</td>
            </tr>
            <tr>
              <td>29c5</td>
              <td>mini alloid</td>
            </tr>
            <tr>
              <td>29c6</td>
              <td>tall alloid</td>
            </tr>
            <tr>
              <td>29c7</td>
              <td>mega timpanoid</td>
            </tr>
            <tr>
              <td>29c8</td>
              <td>timpanoid</td>
            </tr>
            <tr>
              <td>29c9</td>
              <td>mini timpanoid</td>
            </tr>
            <tr>
              <td>29ca</td>
              <td>tall timpanoid</td>
            </tr>
            <tr>
              <td>29cb</td>
              <td>gargloid</td>
            </tr>
            <tr>
              <td>29cc</td>
              <td>mini gargloid</td>
            </tr>
            <tr>
              <td>29cd</td>
              <td>tall gargloid</td>
            </tr>
            <tr>
              <td>29ce</td>
              <td>warbloid</td>
            </tr>
            <tr>
              <td>29cf</td>
              <td>mini warbloid</td>
            </tr>
            <tr>
              <td>29d0</td>
              <td>tall warbloid</td>
            </tr>
            <tr>
              <td>29d1</td>
              <td>mega freakoid</td>
            </tr>
            <tr>
              <td>29d2</td>
              <td>mini freakoid</td>
            </tr>
            <tr>
              <td>29d3</td>
              <td>mega quazoid</td>
            </tr>
            <tr>
              <td>29d4</td>
              <td>quazoid</td>
            </tr>
            <tr>
              <td>29d5</td>
              <td>mini quazoid</td>
            </tr>
            <tr>
              <td>29d6</td>
              <td>tall quazoid</td>
            </tr>
            <tr>
              <td>29d7</td>
              <td>slim quazoid</td>
            </tr>
            <tr>
              <td>29d8</td>
              <td>mega rustoid</td>
            </tr>
            <tr>
              <td>29d9</td>
              <td>rustoid</td>
            </tr>
            <tr>
              <td>29da</td>
              <td>mini rustoid</td>
            </tr>
            <tr>
              <td>29db</td>
              <td>mega brewstoid</td>
            </tr>
            <tr>
              <td>29dc</td>
              <td>mini brewstoid</td>
            </tr>
            <tr>
              <td>29dd</td>
              <td>tall brewstoid</td>
            </tr>
            <tr>
              <td>29de</td>
              <td>brewstoid</td>
            </tr>
        </table>
    </div>
</template>

<script>
function gyroidsFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("gyroidsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("gyroidsTable");
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
      gyroidsFunction
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

#gyroidsvue {
    /* background: url('/green_bg.png'); */
    width: 325px;
    border-radius: 25px;
    border-color: #a1cc00;
    border-width: 10px;
    padding: 15px;
}
</style>
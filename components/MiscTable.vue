<template>
    <div id="miscvue" class="container has-text-centered">
      <b-collapse class="card" aria-id="miscTable" id="misc" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="miscTable">
                <p class="card-header-title is-centered">
                    Miscellaneous
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <!-- <span id="misc">Miscellaneous (back to <a href="#top">categories</a>)</span> -->
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
                      <tr>
                        <td>2089</td>
                        <td>wrapping paper</td>
                      </tr>
                      <tr>
                        <td>208a</td>
                        <td>medicine</td>
                      </tr>
                      <tr>
                        <td>208b</td>
                        <td>chocolate heart</td>
                      </tr>
                      <tr>
                        <td>208c</td>
                        <td>pearl-oyster shell</td>
                      </tr>
                      <tr>
                        <td>208d</td>
                        <td>conch shell</td>
                      </tr>
                      <tr>
                        <td>208e</td>
                        <td>giant-clam shell</td>
                      </tr>
                      <tr>
                        <td>208f</td>
                        <td>coral</td>
                      </tr>
                      <tr>
                        <td>2090</td>
                        <td>venus-comb shell</td>
                      </tr>
                      <tr>
                        <td>2091</td>
                        <td>scallop shell</td>
                      </tr>
                      <tr>
                        <td>2092</td>
                        <td>sea-snail shell</td>
                      </tr>
                      <tr>
                        <td>2093</td>
                        <td>cowrie shell</td>
                      </tr>
                      <tr>
                        <td>2094</td>
                        <td>sand dollar</td>
                      </tr>
                      <tr>
                        <td>2095</td>
                        <td>oyster shell</td>
                      </tr>
                      <tr>
                        <td>2096</td>
                        <td>candy</td>
                      </tr>
                      <tr>
                        <td>2097</td>
                        <td>lollipop</td>
                      </tr>
                      <tr>
                        <td>2098</td>
                        <td>elegant mushroom</td>
                      </tr>
                      <tr>
                        <td>2099</td>
                        <td>round mushroom</td>
                      </tr>
                      <tr>
                        <td>209a</td>
                        <td>skinny mushroom</td>
                      </tr>
                      <tr>
                        <td>209b</td>
                        <td>flat mushroom</td>
                      </tr>
                      <tr>
                        <td>209c</td>
                        <td>rare mushroom</td>
                      </tr>
                      <tr>
                        <td>209d</td>
                        <td>famous mushroom</td>
                      </tr>
                      <tr>
                        <td>209e</td>
                        <td>beehive</td>
                      </tr>
                      <tr>
                        <td>209f</td>
                        <td>pitfall seed</td>
                      </tr>
                      <tr>
                        <td>20a0</td>
                        <td>tricky pitfall seed</td>
                      </tr>
                      <tr>
                        <td>20a1</td>
                        <td>gold nugget</td>
                      </tr>
                      <tr>
                        <td>20a2</td>
                        <td>silver nugget</td>
                      </tr>
                      <tr>
                        <td>20a3</td>
                        <td>ruby</td>
                      </tr>
                      <tr>
                        <td>20a4</td>
                        <td>sapphire</td>
                      </tr>
                      <tr>
                        <td>20a5</td>
                        <td>emerald</td>
                      </tr>
                      <tr>
                        <td>20a6</td>
                        <td>amethyst</td>
                      </tr>
                      <tr>
                        <td>20a7</td>
                        <td>butter</td>
                      </tr>
                      <tr>
                        <td>20a8</td>
                        <td>milk</td>
                      </tr>
                      <tr>
                        <td>20a9</td>
                        <td>vinegar</td>
                      </tr>
                      <tr>
                        <td>20aa</td>
                        <td>flour</td>
                      </tr>
                      <tr>
                        <td>20ab</td>
                        <td>sugar</td>
                      </tr>
                      <tr>
                        <td>20ac</td>
                        <td>100 Bells</td>
                      </tr>
                      <tr>
                        <td>20ad</td>
                        <td>200 Bells</td>
                      </tr>
                      <tr>
                        <td>20ae</td>
                        <td>300 Bells</td>
                      </tr>
                      <tr>
                        <td>20af</td>
                        <td>400 Bells</td>
                      </tr>
                      <tr>
                        <td>20b0</td>
                        <td>500 Bells</td>
                      </tr>
                      <tr>
                        <td>20b1</td>
                        <td>600 Bells</td>
                      </tr>
                      <tr>
                        <td>20b2</td>
                        <td>700 Bells</td>
                      </tr>
                      <tr>
                        <td>20b3</td>
                        <td>800 Bells</td>
                      </tr>
                      <tr>
                        <td>20b4</td>
                        <td>900 Bells</td>
                      </tr>
                      <tr>
                        <td>20b5</td>
                        <td>1,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20b6</td>
                        <td>2,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20b7</td>
                        <td>3,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20b8</td>
                        <td>4,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20b9</td>
                        <td>5,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20ba</td>
                        <td>6,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20bb</td>
                        <td>7,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20bc</td>
                        <td>8,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20bd</td>
                        <td>9,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20be</td>
                        <td>10,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20bf</td>
                        <td>11,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20c0</td>
                        <td>12,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20c1</td>
                        <td>13,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20c2</td>
                        <td>14,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20c3</td>
                        <td>15,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20c4</td>
                        <td>16,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20c5</td>
                        <td>17,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20c6</td>
                        <td>18,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20c7</td>
                        <td>19,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20c8</td>
                        <td>20,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20c9</td>
                        <td>21,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20ca</td>
                        <td>22,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20cb</td>
                        <td>23,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20cc</td>
                        <td>24,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20cd</td>
                        <td>25,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20ce</td>
                        <td>26,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20cf</td>
                        <td>27,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20d0</td>
                        <td>28,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20d1</td>
                        <td>29,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20d2</td>
                        <td>30,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20d3</td>
                        <td>31,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20d4</td>
                        <td>32,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20d5</td>
                        <td>33,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20d6</td>
                        <td>34,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20d7</td>
                        <td>35,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20d8</td>
                        <td>36,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20d9</td>
                        <td>37,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20da</td>
                        <td>38,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20db</td>
                        <td>39,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20dc</td>
                        <td>40,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20dd</td>
                        <td>41,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20de</td>
                        <td>42,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20df</td>
                        <td>43,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20e0</td>
                        <td>44,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20e1</td>
                        <td>45,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20e2</td>
                        <td>46,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20e3</td>
                        <td>47,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20e4</td>
                        <td>48,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20e5</td>
                        <td>49,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20e6</td>
                        <td>50,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20e7</td>
                        <td>51,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20e8</td>
                        <td>52,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20e9</td>
                        <td>53,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20ea</td>
                        <td>54,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20eb</td>
                        <td>55,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20ec</td>
                        <td>56,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20ed</td>
                        <td>57,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20ee</td>
                        <td>58,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20ef</td>
                        <td>59,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20f0</td>
                        <td>60,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20f1</td>
                        <td>61,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20f2</td>
                        <td>62,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20f3</td>
                        <td>63,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20f4</td>
                        <td>64,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20f5</td>
                        <td>65,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20f6</td>
                        <td>66,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20f7</td>
                        <td>67,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20f8</td>
                        <td>68,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20f9</td>
                        <td>69,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20fa</td>
                        <td>70,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20fb</td>
                        <td>71,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20fc</td>
                        <td>72,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20fd</td>
                        <td>73,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20fe</td>
                        <td>74,000 Bells</td>
                      </tr>
                      <tr>
                        <td>20ff</td>
                        <td>75,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2100</td>
                        <td>76,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2101</td>
                        <td>77,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2102</td>
                        <td>78,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2103</td>
                        <td>79,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2104</td>
                        <td>80,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2105</td>
                        <td>81,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2106</td>
                        <td>82,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2107</td>
                        <td>83,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2108</td>
                        <td>84,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2109</td>
                        <td>85,000 Bells</td>
                      </tr>
                      <tr>
                        <td>210a</td>
                        <td>86,000 Bells</td>
                      </tr>
                      <tr>
                        <td>210b</td>
                        <td>87,000 Bells</td>
                      </tr>
                      <tr>
                        <td>210c</td>
                        <td>88,000 Bells</td>
                      </tr>
                      <tr>
                        <td>210d</td>
                        <td>89,000 Bells</td>
                      </tr>
                      <tr>
                        <td>210e</td>
                        <td>90,000 Bells</td>
                      </tr>
                      <tr>
                        <td>210f</td>
                        <td>91,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2110</td>
                        <td>92,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2111</td>
                        <td>93,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2112</td>
                        <td>94,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2113</td>
                        <td>95,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2114</td>
                        <td>96,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2115</td>
                        <td>97,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2116</td>
                        <td>98,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2117</td>
                        <td>99,000 Bells</td>
                      </tr>
                      <tr>
                        <td>2118</td>
                        <td>earth egg</td>
                      </tr>
                      <tr>
                        <td>2119</td>
                        <td>tree egg</td>
                      </tr>
                      <tr>
                        <td>211a</td>
                        <td>stone egg</td>
                      </tr>
                      <tr>
                        <td>211b</td>
                        <td>sky egg</td>
                      </tr>
                      <tr>
                        <td>211c</td>
                        <td>winning ticket</td>
                      </tr>
                      <tr>
                        <td>211d</td>
                        <td>grand-prize ticket</td>
                      </tr>
                      <tr>
                        <td>202a</td>
                        <td>fossil</td>
                      </tr>
                  </table>
                </div>
            </div>
        </b-collapse>
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

td {
  background-color: green;
  opacity: 0.5;
  color: white;
}

#miscvue, .card {
    background: url('/pink_bg.png');
    width: 350px;
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
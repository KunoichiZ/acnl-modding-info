<template>
    <div id="artvue" class="container has-text-centered">
        <b-collapse class="card" aria-id="artTable" id="art">
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="artTable">
                <p class="card-header-title is-centered">
                    Art
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                    <!-- <span id="art">Art  (back to <a href="#top">categories</a>)/span> -->
                    <input type="text" class="input is-rounded" id="artInput" v-on:keyup="artFunction()" placeholder="Search for item names..">
                    <br><br>
                    <table>
                        <tr>
                            <th>Hex</th>
                            <th>Item Name</th>
                        </tr>
                        <tr>
                            <td>30d2</td>
                            <td>dynamic painting</td>
                        </tr>
                        <tr>
                            <td>30d3</td>
                            <td>solemn painting</td>
                        </tr>
                        <tr>
                            <td>30d4</td>
                            <td>quaint painting</td>
                        </tr>
                        <tr>
                            <td>30d5</td>
                            <td>basic painting</td>
                        </tr>
                        <tr>
                            <td>30d6</td>
                            <td>famous painting</td>
                        </tr>
                        <tr>
                            <td>30d7</td>
                            <td>perfect painting</td>
                        </tr>
                        <tr>
                            <td>30d8</td>
                            <td>amazing painting</td>
                        </tr>
                        <tr>
                            <td>30d9</td>
                            <td>nice painting</td>
                        </tr>
                        <tr>
                            <td>30da</td>
                            <td>moving painting</td>
                        </tr>
                        <tr>
                            <td>30db</td>
                            <td>common painting</td>
                        </tr>
                        <tr>
                            <td>30dc</td>
                            <td>flowery painting</td>
                        </tr>
                        <tr>
                            <td>30dd</td>
                            <td>warm painting</td>
                        </tr>
                        <tr>
                            <td>30de</td>
                            <td>jolly painting</td>
                        </tr>
                        <tr>
                            <td>30df</td>
                            <td>fine painting</td>
                        </tr>
                        <tr>
                            <td>30e0</td>
                            <td>scary painting</td>
                        </tr>
                        <tr>
                            <td>30e1</td>
                            <td>proper painting</td>
                        </tr>
                        <tr>
                            <td>30e2</td>
                            <td>neutral painting</td>
                        </tr>
                        <tr>
                            <td>30e3</td>
                            <td>worthy painting</td>
                        </tr>
                        <tr>
                            <td>30e4</td>
                            <td>calm painting</td>
                        </tr>
                        <tr>
                            <td>30e5</td>
                            <td>moody painting</td>
                        </tr>
                        <tr>
                            <td>30e6</td>
                            <td>wistful painting</td>
                        </tr>
                        <tr>
                            <td>30e7</td>
                            <td>serene painting</td>
                        </tr>
                        <tr>
                            <td>30e8</td>
                            <td>scenic painting</td>
                        </tr>
                        <tr>
                            <td>30e9</td>
                            <td>wild painting</td>
                        </tr>
                        <tr>
                            <td>30ea</td>
                            <td>graceful painting</td>
                        </tr>
                        <tr>
                            <td>30eb</td>
                            <td>beautiful painting</td>
                        </tr>
                        <tr>
                            <td>30ec</td>
                            <td>valiant statue</td>
                        </tr>
                        <tr>
                            <td>30ed</td>
                            <td>gallant statue</td>
                        </tr>
                        <tr>
                            <td>30ee</td>
                            <td>robust statue</td>
                        </tr>
                        <tr>
                            <td>30ef</td>
                            <td>great statue</td>
                        </tr>
                        <tr>
                            <td>30f0</td>
                            <td>mystic statue</td>
                        </tr>
                        <tr>
                            <td>30f1</td>
                            <td>ancient statue</td>
                        </tr>
                        <tr>
                            <td>30f2</td>
                            <td>motherly statue</td>
                        </tr>
                        <tr>
                            <td>30f3</td>
                            <td>dynamic painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30f4</td>
                            <td>solemn painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30f5</td>
                            <td>quaint painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30f6</td>
                            <td>basic painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30f7</td>
                            <td>famous painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30f8</td>
                            <td>amazing painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30f9</td>
                            <td>moving painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30fa</td>
                            <td>jolly painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30fb</td>
                            <td>scary painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30fc</td>
                            <td>neutral painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30fd</td>
                            <td>wistful painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30fe</td>
                            <td>serene painting (fake)</td>
                        </tr>
                        <tr>
                            <td>30ff</td>
                            <td>wild painting (fake)</td>
                        </tr>
                        <tr>
                            <td>3100</td>
                            <td>graceful painting (fake)</td>
                        </tr>
                        <tr>
                            <td>3101</td>
                            <td>beautiful statue (fake)</td>
                        </tr>
                        <tr>
                            <td>3102</td>
                            <td>valiant statue (fake)</td>
                        </tr>
                        <tr>
                            <td>3103</td>
                            <td>gallant statue (fake)</td>
                        </tr>
                        <tr>
                            <td>3104</td>
                            <td>robust statue (fake)</td>
                        </tr>
                        <tr>
                            <td>3105</td>
                            <td>great statue (fake)</td>
                        </tr>
                        <tr>
                            <td>3106</td>
                            <td>mystic statue (fake)</td>
                        </tr>
                        <tr>
                            <td>3107</td>
                            <td>ancient statue (fake)</td>
                        </tr>
                        <tr>
                            <td>3108</td>
                            <td>motherly statue (fake)</td>
                        </tr>
                        <tr>
                            <td>3109</td>
                            <td>dynamic painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>310a</td>
                            <td>solemn painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>310b</td>
                            <td>quaint painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>310c</td>
                            <td>basic painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>310d</td>
                            <td>famous painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3109</td>
                            <td>perfect painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>310f</td>
                            <td>amazing painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3110</td>
                            <td>nice painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3111</td>
                            <td>moving painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3112</td>
                            <td>common painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3113</td>
                            <td>flowery painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3114</td>
                            <td>warm painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3115</td>
                            <td>jolly painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3116</td>
                            <td>fine painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3117</td>
                            <td>scary painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3118</td>
                            <td>proper painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3119</td>
                            <td>neutral painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>311a</td>
                            <td>worthy painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>311b</td>
                            <td>calm painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>311c</td>
                            <td>moody painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>311d</td>
                            <td>wistful painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>311e</td>
                            <td>serene painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>311f</td>
                            <td>scenic painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3120</td>
                            <td>wild painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3121</td>
                            <td>graceful painting (Wall)</td>
                        </tr>
                        <tr>
                            <td>3122</td>
                            <td>dynamic painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>3123</td>
                            <td>solemn painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>3124</td>
                            <td>quaint painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>3125</td>
                            <td>basic painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>3126</td>
                            <td>famous painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>3127</td>
                            <td>amazing painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>3128</td>
                            <td>moving painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>3129</td>
                            <td>jolly painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>312A</td>
                            <td>scary painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>312B</td>
                            <td>neutral painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>312C</td>
                            <td>wistful painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>312D</td>
                            <td>serene painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>312E</td>
                            <td>wild painting (fake) (Wall)</td>
                        </tr>
                        <tr>
                            <td>312F</td>
                            <td>graceful painting (fake) (Wall)</td>
                        </tr>
                    </table>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
function artFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("artInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("artTable");
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
        artFunction
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

#artvue, .card {
    background: url('/green_bg.png');
    width: 350px;
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
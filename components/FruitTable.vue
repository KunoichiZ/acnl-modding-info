<template>
    <div id="fruitvue" class="container has-text-centered">
        <span id="fruits">Fruits <!-- (back to <a href="#top">categories</a>)--></span>
        <input type="text" class="input is-rounded" id="fruitInput" v-on:keyup="fruitFunction()" placeholder="Search for item names..">
        <br><br>
        <table id="fruitTable">
            <tr>
              <th>Hex</th>
              <th>Item Name</th>
            </tr>
            <tr>
                <td>2018</td>
                <td>apples</td>
            </tr>
            <tr>
                <td>2019</td>
                <td>oranges</td>
            </tr>
            <tr>
                <td>201a</td>
                <td>pears</td>
            </tr>
            <tr>
                <td>201b</td>
                <td>peaches</td>
            </tr>
            <tr>
                <td>201c</td>
                <td>cherries</td>
            </tr>
            <tr>
                <td>201d</td>
                <td>coconuts</td>
            </tr>
            <tr>
                <td>201e</td>
                <td>durians</td>
            </tr>
            <tr>
                <td>201f</td>
                <td>lemons</td>
            </tr>
            <tr>
                <td>2020</td>
                <td>lychees</td>
            </tr>
            <tr>
                <td>2021</td>
                <td>mangoes</td>
            </tr>
            <tr>
                <td>2022</td>
                <td>persimmons</td>
            </tr>
            <tr>
                <td>2023</td>
                <td>bananas</td>
            </tr>
            <tr>
                <td>2024</td>
                <td>bamboo shoots</td>
            </tr>
            <tr>
                <td>2025</td>
                <td>perfect apples</td>
            </tr>
            <tr>
                <td>2026</td>
                <td>perfect oranges</td>
            </tr>
            <tr>
                <td>2027</td>
                <td>perfect pears</td>
            </tr>
            <tr>
                <td>2028</td>
                <td>perfect peaches</td>
            </tr>
            <tr>
                <td>2029</td>
                <td>perfect cherries</td>
            </tr>
            <tr>
                <td>2001</td>
                <td>apple</td>
            </tr>
            <tr>
                <td>2002</td>
                <td>orange</td>
            </tr>
            <tr>
                <td>2003</td>
                <td>pear</td>
            </tr>
            <tr>
                <td>2004</td>
                <td>peach</td>
            </tr>
            <tr>
                <td>2005</td>
                <td>cherry</td>
            </tr>
            <tr>
                <td>2006</td>
                <td>coconut</td>
            </tr>
            <tr>
                <td>2007</td>
                <td>durian</td>
            </tr>
            <tr>
                <td>2008</td>
                <td>lemon</td>
            </tr>
            <tr>
                <td>2009</td>
                <td>lychee</td>
            </tr>
            <tr>
                <td>200a</td>
                <td>mango</td>
            </tr>
            <tr>
                <td>200b</td>
                <td>persimmon</td>
            </tr>
            <tr>
                <td>200c</td>
                <td>banana</td>
            </tr>
            <tr>
                <td>200d</td>
                <td>bamboo shoot</td>
            </tr>
            <tr>
                <td>200e</td>
                <td>perfect apple</td>
            </tr>
            <tr>
                <td>200f</td>
                <td>perfect orange</td>
            </tr>
            <tr>
                <td>2010</td>
                <td>perfect pear</td>
            </tr>
            <tr>
                <td>2011</td>
                <td>perfect peach</td>
            </tr>
            <tr>
                <td>2012</td>
                <td>perfect cherry</td>
            </tr>
            <tr>
                <td>2013</td>
                <td>rotten apple</td>
            </tr>
            <tr>
                <td>2014</td>
                <td>rotten orange</td>
            </tr>
            <tr>
                <td>2015</td>
                <td>rotten pear</td>
            </tr>
            <tr>
                <td>2016</td>
                <td>rotten peach</td>
            </tr>
            <tr>
                <td>2017</td>
                <td>rotten cherry</td>
            </tr>
            <tr>
                <td>2283</td>
                <td>10 turnips</td>
            </tr>
            <tr>
                <td>2284</td>
                <td>20 turnips</td>
            </tr>
            <tr>
                <td>2285</td>
                <td>30 turnips</td>
            </tr>
            <tr>
                <td>2286</td>
                <td>40 turnips</td>
            </tr>
            <tr>
                <td>2287</td>
                <td>50 turnips</td>
            </tr>
            <tr>
                <td>2288</td>
                <td>60 turnips</td>
            </tr>
            <tr>
                <td>2289</td>
                <td>70 turnips</td>
            </tr>
            <tr>
                <td>228a</td>
                <td>80 turnips</td>
            </tr>
            <tr>
                <td>228b</td>
                <td>90 turnips</td>
            </tr>
            <tr>
                <td>228c</td>
                <td>100 turnips</td>
            </tr>
            <tr>
                <td>228d</td>
                <td>spoiled turnips</td>
            </tr>
        </table>
    </div>
</template>

<script>
function fruitFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("fruitInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("fruitTable");
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
      fruitFunction
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

#fruitvue {
    /* background: url('/green_bg.png'); */
    width: 325px;
    border-radius: 25px;
    border-color: #a1cc00;
    border-width: 10px;
    padding: 15px;
}
</style>
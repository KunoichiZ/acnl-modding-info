<template>
    <div id="fortunevue" class="container has-text-centered">
      <b-collapse class="card" aria-id="fortunesTable" id="fortunes" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="fortunesTable">
                <p class="card-header-title is-centered">
                    Fortune Cookies&nbsp;<span class="top-text">(back to <a href="#top">categories</a>)</span>
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <!-- <span id="fortunes">Fortune Cookies(back to <a href="#top">categories</a>)</span> -->
                  <input type="text" class="input is-rounded" id="fortunesInput" v-on:keyup="fortunesFunction()" placeholder="Search for item names..">
                  <br><br>
                  <table id="fortunesTable">
                      <tr>
                        <th>Hex</th>
                        <th>Item Name</th>
                      </tr>
                      <tbody>
                        <tr>
                          <td>33c8</td>
                          <td>fortune cookie</td>
                        </tr>
                        <tr>
                          <td>33c9</td>
                          <td>fortune #1</td>
                        </tr>
                        <tr>
                          <td>33ca</td>
                          <td>fortune #2</td>
                        </tr>
                        <tr>
                          <td>33cb</td>
                          <td>fortune #3</td>
                        </tr>
                        <tr>
                          <td>33cc</td>
                          <td>fortune #46</td>
                        </tr>
                        <tr>
                          <td>33cd</td>
                          <td>fortune #5</td>
                        </tr>
                        <tr>
                          <td>33ce</td>
                          <td>fortune #49</td>
                        </tr>
                        <tr>
                          <td>33cf</td>
                          <td>fortune #7</td>
                        </tr>
                        <tr>
                          <td>33d0</td>
                          <td>fortune #8</td>
                        </tr>
                        <tr>
                          <td>33d1</td>
                          <td>fortune #9</td>
                        </tr>
                        <tr>
                          <td>33d2</td>
                          <td>fortune #10</td>
                        </tr>
                        <tr>
                          <td>33d3</td>
                          <td>fortune #11</td>
                        </tr>
                        <tr>
                          <td>33d4</td>
                          <td>fortune #12</td>
                        </tr>
                        <tr>
                          <td>33d5</td>
                          <td>fortune #13</td>
                        </tr>
                        <tr>
                          <td>33d6</td>
                          <td>fortune #14</td>
                        </tr>
                        <tr>
                          <td>33d7</td>
                          <td>fortune #15</td>
                        </tr>
                        <tr>
                          <td>33d8</td>
                          <td>fortune #50</td>
                        </tr>
                        <tr>
                          <td>33d9</td>
                          <td>fortune #17</td>
                        </tr>
                        <tr>
                          <td>33da</td>
                          <td>fortune #18</td>
                        </tr>
                        <tr>
                          <td>33db</td>
                          <td>fortune #19</td>
                        </tr>
                        <tr>
                          <td>33dc</td>
                          <td>fortune #20</td>
                        </tr>
                        <tr>
                          <td>33dd</td>
                          <td>fortune #21</td>
                        </tr>
                        <tr>
                          <td>33de</td>
                          <td>fortune #22</td>
                        </tr>
                        <tr>
                          <td>33df</td>
                          <td>fortune #23</td>
                        </tr>
                        <tr>
                          <td>33e0</td>
                          <td>fortune #24</td>
                        </tr>
                        <tr>
                          <td>33e1</td>
                          <td>fortune #25</td>
                        </tr>
                        <tr>
                          <td>33e2</td>
                          <td>fortune #26</td>
                        </tr>
                        <tr>
                          <td>33e3</td>
                          <td>fortune #27</td>
                        </tr>
                        <tr>
                          <td>33e4</td>
                          <td>fortune #28</td>
                        </tr>
                        <tr>
                          <td>33e5</td>
                          <td>fortune #29</td>
                        </tr>
                        <tr>
                          <td>33e6</td>
                          <td>fortune #48</td>
                        </tr>
                        <tr>
                          <td>33e7</td>
                          <td>fortune #31</td>
                        </tr>
                        <tr>
                          <td>33e8</td>
                          <td>fortune #32</td>
                        </tr>
                        <tr>
                          <td>33e9</td>
                          <td>fortune #33</td>
                        </tr>
                        <tr>
                          <td>33ea</td>
                          <td>fortune #34</td>
                        </tr>
                        <tr>
                          <td>33eb</td>
                          <td>fortune #35</td>
                        </tr>
                        <tr>
                          <td>33ec</td>
                          <td>fortune #36</td>
                        </tr>
                        <tr>
                          <td>33ed</td>
                          <td>fortune #37</td>
                        </tr>
                        <tr>
                          <td>33ee</td>
                          <td>fortune #47</td>
                        </tr>
                        <tr>
                          <td>33ef</td>
                          <td>fortune #39</td>
                        </tr>
                        <tr>
                          <td>33f0</td>
                          <td>fortune #40</td>
                        </tr>
                        <tr>
                          <td>33f1</td>
                          <td>fortune #41</td>
                        </tr>
                        <tr>
                          <td>33f2</td>
                          <td>fortune #42</td>
                        </tr>
                        <tr>
                          <td>33f3</td>
                          <td>fortune #43</td>
                        </tr>
                        <tr>
                          <td>33f4</td>
                          <td>fortune #44</td>
                        </tr>
                        <tr>
                          <td>33f5</td>
                          <td>fortune #45</td>
                        </tr>
                        <tr>
                          <td>33f6</td>
                          <td>fortune #4</td>
                        </tr>
                        <tr>
                          <td>33f7</td>
                          <td>fortune #38</td>
                        </tr>
                        <tr>
                          <td>33f8</td>
                          <td>fortune #30</td>
                        </tr>
                        <tr>
                          <td>33f9</td>
                          <td>fortune #6</td>
                        </tr>
                        <tr>
                          <td>33fa</td>
                          <td>fortune #16</td>
                        </tr>
                        <tr>
                          <td>33fb</td>
                          <td>fortune #51</td>
                        </tr>
                        <tr>
                          <td>33fc</td>
                          <td>fortune #52</td>
                        </tr>
                        <tr>
                          <td>33fd</td>
                          <td>fortune #53</td>
                        </tr>
                        <tr>
                          <td>33fe</td>
                          <td>fortune #54</td>
                        </tr>
                        <tr>
                          <td>33ff</td>
                          <td>fortune #55</td>
                        </tr>
                        <tr>
                          <td>3400</td>
                          <td>fortune #56</td>
                        </tr>
                        <tr>
                          <td>3401</td>
                          <td>fortune #57</td>
                        </tr>
                      </tbody>
                  </table>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
function fortunesFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("fortunesInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("fortunesTable");
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
      fortunesFunction
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

.top-text {
    display: none;
}

#fortunevue, .card {
    background: url('/blue_bg.png');
    width: 350px;
    border-radius: 25px;
    border-color: #41aed7;
    border-width: 10px;
    padding: 15px;
}

.card-header-title, .card-header {
  text-align: center;
  box-shadow: none;
}

@media (max-width: 1000px) {
    .top-text {
        display: inline;
    }
}
</style>
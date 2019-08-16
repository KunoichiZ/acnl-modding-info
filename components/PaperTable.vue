<template>
    <div id="papervue" class="container has-text-centered">
      <b-collapse class="card" aria-id="paperTable" id="paper" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="paperTable">
                <p class="card-header-title is-centered">
                    Paper
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <input type="text" class="input is-rounded" id="paperInput" v-on:keyup="paperFunction()" placeholder="Search for item names..">
                  <br><br>
                  <table id="paperTable">
                      <tr>
                        <th>Hex</th>
                        <th>Item Name</th>
                      </tr>
                      <tr>
                        <td>223f</td>
                        <td>butterfly paper</td>
                      </tr>
                      <tr>
                        <td>2240</td>
                        <td>airmail paper</td>
                      </tr>
                      <tr>
                        <td>2241</td>
                        <td>New Year's cards</td>
                      </tr>
                      <tr>
                        <td>2242</td>
                        <td>lacy paper</td>
                      </tr>
                      <tr>
                        <td>2243</td>
                        <td>cloudy paper</td>
                      </tr>
                      <tr>
                        <td>2244</td>
                        <td>petal paper</td>
                      </tr>
                      <tr>
                        <td>2245</td>
                        <td>snowy paper</td>
                      </tr>
                      <tr>
                        <td>2246</td>
                        <td>maple-leaf paper</td>
                      </tr>
                      <tr>
                        <td>2247</td>
                        <td>lined paper</td>
                      </tr>
                      <tr>
                        <td>2248</td>
                        <td>notebook paper</td>
                      </tr>
                      <tr>
                        <td>2249</td>
                        <td>flowery paper</td>
                      </tr>
                      <tr>
                        <td>224a</td>
                        <td>polka-dot paper</td>
                      </tr>
                      <tr>
                        <td>224b</td>
                        <td>weathered paper</td>
                      </tr>
                      <tr>
                        <td>224c</td>
                        <td>ribbon paper</td>
                      </tr>
                      <tr>
                        <td>224d</td>
                        <td>sparkly paper</td>
                      </tr>
                      <tr>
                        <td>224e</td>
                        <td>vine paper</td>
                      </tr>
                      <tr>
                        <td>224f</td>
                        <td>formal paper</td>
                      </tr>
                      <tr>
                        <td>2250</td>
                        <td>snowman paper</td>
                      </tr>
                      <tr>
                        <td>2251</td>
                        <td>card paper</td>
                      </tr>
                      <tr>
                        <td>2252</td>
                        <td>leopard paper</td>
                      </tr>
                      <tr>
                        <td>2253</td>
                        <td>cow paper</td>
                      </tr>
                      <tr>
                        <td>2254</td>
                        <td>camouflage paper</td>
                      </tr>
                      <tr>
                        <td>2255</td>
                        <td>hamburger paper</td>
                      </tr>
                      <tr>
                        <td>2256</td>
                        <td>piano paper</td>
                      </tr>
                      <tr>
                        <td>2257</td>
                        <td>Nook paper</td>
                      </tr>
                      <tr>
                        <td>2258</td>
                        <td>birthday card</td>
                      </tr>
                      <tr>
                        <td>2259</td>
                        <td>four-leaf paper</td>
                      </tr>
                      <tr>
                        <td>225a</td>
                        <td>academy paper</td>
                      </tr>
                      <tr>
                        <td>225b</td>
                        <td>lovely paper</td>
                      </tr>
                      <tr>
                        <td>225c</td>
                        <td>rainbow paper</td>
                      </tr>
                      <tr>
                        <td>225d</td>
                        <td>hieroglyph paper</td>
                      </tr>
                      <tr>
                        <td>225e</td>
                        <td>lotus paper</td>
                      </tr>
                      <tr>
                        <td>225f</td>
                        <td>tile paper</td>
                      </tr>
                      <tr>
                        <td>2260</td>
                        <td>mosaic paper</td>
                      </tr>
                      <tr>
                        <td>2261</td>
                        <td>elegant paper</td>
                      </tr>
                      <tr>
                        <td>2262</td>
                        <td>town-view paper</td>
                      </tr>
                      <tr>
                        <td>2263</td>
                        <td>imperial paper</td>
                      </tr>
                      <tr>
                        <td>2264</td>
                        <td>ocean paper</td>
                      </tr>
                      <tr>
                        <td>2265</td>
                        <td>industrial paper</td>
                      </tr>
                      <tr>
                        <td>2266</td>
                        <td>fireworks paper</td>
                      </tr>
                      <tr>
                        <td>2267</td>
                        <td>floral paper</td>
                      </tr>
                      <tr>
                        <td>2268</td>
                        <td>mushroom paper</td>
                      </tr>
                      <tr>
                        <td>2269</td>
                        <td>star paper</td>
                      </tr>
                      <tr>
                        <td>226a</td>
                        <td>composer paper</td>
                      </tr>
                      <tr>
                        <td>226b</td>
                        <td>bathtub paper</td>
                      </tr>
                      <tr>
                        <td>226c</td>
                        <td>SMB3 paper</td>
                      </tr>
                      <tr>
                        <td>226d</td>
                        <td>cool paper</td>
                      </tr>
                      <tr>
                        <td>226e</td>
                        <td>forest paper</td>
                      </tr>
                      <tr>
                        <td>226f</td>
                        <td>bubble paper</td>
                      </tr>
                      <tr>
                        <td>2270</td>
                        <td>buttercup paper</td>
                      </tr>
                      <tr>
                        <td>2271</td>
                        <td>tartan paper</td>
                      </tr>
                      <tr>
                        <td>2272</td>
                        <td>plaid paper</td>
                      </tr>
                      <tr>
                        <td>2273</td>
                        <td>lemon-lime paper</td>
                      </tr>
                      <tr>
                        <td>2274</td>
                        <td>crater paper</td>
                      </tr>
                      <tr>
                        <td>2275</td>
                        <td>bejeweled paper</td>
                      </tr>
                      <tr>
                        <td>2276</td>
                        <td>geometric paper</td>
                      </tr>
                      <tr>
                        <td>2277</td>
                        <td>southwest paper</td>
                      </tr>
                      <tr>
                        <td>2278</td>
                        <td>night-sky paper</td>
                      </tr>
                      <tr>
                        <td>2279</td>
                        <td>chic paper</td>
                      </tr>
                      <tr>
                        <td>227a</td>
                        <td>goldfish paper</td>
                      </tr>
                      <tr>
                        <td>227b</td>
                        <td>Halloween paper</td>
                      </tr>
                      <tr>
                        <td>227c</td>
                        <td>gallery paper</td>
                      </tr>
                      <tr>
                        <td>227d</td>
                        <td>museum paper</td>
                      </tr>
                      <tr>
                        <td>227e</td>
                        <td>post-office paper</td>
                      </tr>
                      <tr>
                        <td>227f</td>
                        <td>campground paper</td>
                      </tr>
                      <tr>
                        <td>2280</td>
                        <td>Nook's Homes paper</td>
                      </tr>
                      <tr>
                        <td>2281</td>
                        <td>Nintendo paper</td>
                      </tr>
                      <tr>
                        <td>2282</td>
                        <td>melody paper</td>
                      </tr>
                  </table>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
function paperFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("paperInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("paperTable");
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
      paperFunction
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

#papervue, .card {
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
/* pink background */
</style>
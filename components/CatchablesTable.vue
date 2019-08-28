<template>
    <div id="catchablesvue" class="container has-text-centered">
        <b-collapse class="card" aria-id="catchablesTable" id="catchables" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="catchablesTable">
                <p class="card-header-title is-centered">
                    Catchables
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                    <!-- <span id="catchables">Catchables (back to <a href="#top">categories</a>)</span> -->
                    <input type="text" class="input is-rounded" id="catchablesInput" v-on:keyup="catchablesFunction()" placeholder="Search for item names..">
                    <br><br>
                    <table>
                        <tr>
                            <th>Hex</th>
                            <th>Item Name</th>
                        </tr>
                        <tr>
                        <td>228e</td>
                        <td>common butterfly</td>
                        </tr>
                        <tr>
                        <td>228f</td>
                        <td>yellow butterfly</td>
                        </tr>
                            <tr><td>2290</td>
                            <td>tiger butterfly</td>
                        </tr>
                        <tr>
                            <td>2291</td>
                            <td>peacock butterfly</td>
                        </tr>
                        <tr>
                            <td>2292</td>
                            <td>monarch butterfly</td>
                        </tr>
                        <tr>
                            <td>2293</td>
                            <td>emperor butterfly</td>
                        </tr>
                        <tr>
                            <td>2294</td>
                            <td>agrias butterfly</td>
                        </tr>
                        <tr>
                            <td>2295</td>
                            <td>Raja B. butterfly</td>
                        </tr>
                        <tr>
                            <td>2296</td>
                            <td>birdwing butterfly</td>
                        </tr>
                        <tr>
                            <td>2297</td>
                            <td>moth</td>
                        </tr>
                        <tr>
                            <td>2298</td>
                            <td>oak silk moth</td>
                        </tr>
                        <tr>
                            <td>2299</td>
                            <td>honeybee</td>
                        </tr>
                        <tr>
                            <td>229a</td>
                            <td>bee</td>
                        </tr>
                        <tr>
                            <td>229b</td>
                            <td>long locust</td>
                        </tr>
                        <tr>
                            <td>229c</td>
                            <td>migratory locust</td>
                        </tr>
                        <tr>
                            <td>229d</td>
                            <td>rice grasshopper</td>
                        </tr>
                        <tr>
                            <td>229e</td>
                            <td>mantis</td>
                        </tr>
                        <tr>
                            <td>229f</td>
                            <td>orchid mantis</td>
                        </tr>
                        <tr>
                            <td>22a0</td>
                            <td>brown cicada</td>
                        </tr>
                        <tr>
                            <td>22a1</td>
                            <td>robust cicada</td>
                        </tr>
                        <tr>
                            <td>22a2</td>
                            <td>giant cicada</td>
                        </tr>
                        <tr>
                            <td>22a3</td>
                            <td>walker cicada</td>
                        </tr>
                        <tr>
                            <td>22a4</td>
                            <td>evening cicada</td>
                        </tr>
                        <tr>
                            <td>22a5</td>
                            <td>cicada shell</td>
                        </tr>
                        <tr>
                            <td>22a6</td>
                            <td>lantern fly</td>
                        </tr>
                        <tr>
                            <td>22a7</td>
                            <td>red dragonfly</td>
                        </tr>
                        <tr>
                            <td>22a8</td>
                            <td>darner dragonfly</td>
                        </tr>
                        <tr>
                            <td>22a9</td>
                            <td>banded dragonfly</td>
                        </tr>
                        <tr>
                            <td>22aa</td>
                            <td>petaltail dragonfly</td>
                        </tr>
                        <tr>
                            <td>22ab</td>
                            <td>ant</td>
                        </tr>
                        <tr>
                            <td>22ac</td>
                            <td>pondskater</td>
                        </tr>
                        <tr>
                            <td>22ad</td>
                            <td>diving beetle</td>
                        </tr>
                        <tr>
                            <td>22ae</td>
                            <td>stinkbug</td>
                        </tr>
                        <tr>
                            <td>22af</td>
                            <td>snail</td>
                        </tr>
                        <tr>
                            <td>22b0</td>
                            <td>cricket</td>
                        </tr>
                        <tr>
                            <td>22b1</td>
                            <td>bell cricket</td>
                        </tr>
                        <tr>
                            <td>22b2</td>
                            <td>grasshopper</td>
                        </tr>
                        <tr>
                            <td>22b3</td>
                            <td>mole cricket</td>
                        </tr>
                        <tr>
                            <td>22b4</td>
                            <td>walking leaf</td>
                        </tr>
                        <tr>
                            <td>22b5</td>
                            <td>walking stick</td>
                        </tr>
                        <tr>
                            <td>22b6</td>
                            <td>bagworm</td>
                        </tr>
                        <tr>
                            <td>22b7</td>
                            <td>ladybug</td>
                        </tr>
                        <tr>
                            <td>22b8</td>
                            <td>violin beetle</td>
                        </tr>
                        <tr>
                            <td>22b9</td>
                            <td>longhorn beetle</td>
                        </tr>
                        <tr>
                            <td>22ba</td>
                            <td>tiger beetle</td>
                        </tr>
                        <tr>
                            <td>22bb</td>
                            <td>dung beetle</td>
                        </tr>
                        <tr>
                            <td>22bc</td>
                            <td>wharf roach</td>
                        </tr>
                        <tr>
                            <td>22bd</td>
                            <td>hermit crab</td>
                        </tr>
                        <tr>
                            <td>22be</td>
                            <td>firefly</td>
                        </tr>
                        <tr>
                            <td>22bf</td>
                            <td>fruit beetle</td>
                        </tr>
                        <tr>
                            <td>22c0</td>
                            <td>scarab beetle</td>
                        </tr>
                        <tr>
                            <td>22c1</td>
                            <td>jewel beetle</td>
                        </tr>
                        <tr>
                            <td>22c2</td>
                            <td>miyama stag</td>
                        </tr>
                        <tr>
                            <td>22c3</td>
                            <td>saw stag</td>
                        </tr>
                        <tr>
                            <td>22c4</td>
                            <td>giant stag</td>
                        </tr>            
                        <tr>
                            <td>22c5</td>
                            <td>rainbow stag</td>
                        </tr>
                        <tr>
                            <td>22c6</td>
                            <td>cyclommatus stag</td>
                        </tr>
                        <tr>
                            <td>22c7</td>
                            <td>golden stag</td>
                        </tr>
                        <tr>
                            <td>22c8</td>
                            <td>horned dynastid</td>
                        </tr>
                        <tr>
                            <td>22c9</td>
                            <td>horned atlas</td>
                        </tr>
                        <tr>
                            <td>22ca</td>
                            <td>horned elephant</td>
                        </tr>
                        <tr>
                            <td>22cb</td>
                            <td>horned hercules</td>
                        </tr>
                        <tr>
                            <td>22cc</td>
                            <td>goliath beetle</td>
                        </tr>
                        <tr>
                            <td>22cd</td>
                            <td>flea</td>
                        </tr>
                        <tr>
                            <td>22ce</td>
                            <td>pill bug</td>
                        </tr>
                        <tr>
                            <td>22cf</td>
                            <td>mosquito</td>
                        </tr>
                        <tr>
                            <td>22d0</td>
                            <td>fly</td>
                        </tr>
                        <tr>
                            <td>22d1</td>
                            <td>house centipede</td>
                        </tr>
                        <tr>
                            <td>22d2</td>
                            <td>centipede</td>
                        </tr>
                        <tr>
                            <td>22d3</td>
                            <td>spider</td></tr>
                        <tr>
                            <td>22d4</td>
                            <td>tarantula</td></tr>
                        <tr>
                            <td>22d5</td>
                            <td>scorpion</td></tr>
                        <tr>
                            <td>22d6</td>
                            <td>snowflake</td></tr>
                        <tr>
                            <td>22d7</td>
                            <td>red feather</td></tr>
                        <tr>
                            <td>22d8</td>
                            <td>blue feather</td></tr>
                        <tr>
                            <td>22d9</td>
                            <td>green feather</td>
                        </tr>
                        <tr>
                            <td>22da</td>
                            <td>yellow feather</td>
                        </tr>
                        <tr>
                            <td>22db</td>
                            <td>purple feather</td>
                            </tr>
                        <tr>
                            <td>22dc</td>
                            <td>white feather</td>
                        </tr>
                        <tr>
                            <td>22dd</td>
                            <td>pink feather</td>
                        </tr>
                        <tr>
                            <td>22de</td>
                            <td>rainbow feather</td>
                        </tr>
                        <tr>
                            <td>22df</td>
                            <td>good-luck charm</td>
                        </tr>
                        <tr>
                            <td>22e1</td>
                            <td>bitterling</td>
                        </tr>
                        <tr>
                            <td>22e2</td>
                            <td>pale chub</td>
                        </tr>
                        <tr>
                            <td>22e3</td>
                            <td>crucian carp</td>
                        </tr>
                        <tr>
                            <td>22e4</td>
                            <td>dace</td>
                        </tr>
                        <tr>
                            <td>22e5</td>
                            <td>barbel steed</td>
                        </tr>
                        <tr>
                            <td>22e6</td>
                            <td>carp</td>
                        </tr>
                        <tr>
                            <td>22e7</td>
                            <td>koi</td>
                        </tr>
                        <tr>
                            <td>22e8</td>
                            <td>goldfish</td>
                        </tr>
                        <tr>
                            <td>22e9</td>
                            <td>pop-eyed goldfish</td>
                        </tr>
                        <tr>
                            <td>22ea</td>
                            <td>killifish</td>
                        </tr>
                        <tr>
                            <td>22eb</td>
                            <td>crawfish</td>
                        </tr>
                        <tr>
                            <td>22ec</td>
                            <td>soft-shelled turtle</td>
                        </tr>
                        <tr>
                            <td>22ed</td>
                            <td>tadpole</td>
                        </tr>
                        <tr>
                            <td>22ee</td>
                            <td>frog</td>
                        </tr>
                        <tr>
                            <td>22ef</td>
                            <td>freshwater goby</td>
                        </tr>
                        <tr>
                            <td>22f0</td>
                            <td>loach</td>
                        </tr>
                        <tr>
                            <td>22f1</td>
                            <td>catfish</td>
                        </tr>
                        <tr>
                            <td>22f2</td>
                            <td>eel</td>
                        </tr>
                        <tr>
                            <td>22f3</td>
                            <td>giant snakehead</td>
                        </tr>
                        <tr>
                            <td>22f4</td>
                            <td>bluegill</td>
                        </tr>
                        <tr>
                            <td>22f5</td>
                            <td>yellow perch</td>
                        </tr>
                        <tr>
                            <td>22f6</td>
                            <td>black bass</td>
                        </tr>
                        <tr>
                            <td>22f7</td>
                            <td>pike</td>
                        </tr>
                        <tr>
                            <td>22f8</td>
                            <td>pond smelt</td>
                        </tr>
                        <tr>
                            <td>22f9</td>
                            <td>sweetfish</td>
                        </tr>
                        <tr>
                            <td>22fa</td>
                            <td>cherry salmon</td>
                        </tr>
                        <tr>
                            <td>22fb</td>
                            <td>char</td>
                        </tr>
                        <tr>
                            <td>22fc</td>
                            <td>rainbow trout</td>
                        </tr>
                        <tr>
                            <td>22fd</td>
                            <td>stringfish</td>
                        </tr>
                        <tr>
                            <td>22fe</td>
                            <td>salmon</td>
                        </tr>
                        <tr>
                            <td>22ff</td>
                            <td>king salmon</td>
                        </tr>
                        <tr>
                            <td>2300</td>
                            <td>mitten crab</td>
                        </tr>
                        <tr>
                            <td>2301</td>
                            <td>guppy</td>
                        </tr>
                        <tr>
                            <td>2302</td>
                            <td>nibble fish</td>
                        </tr>
                        <tr>
                            <td>2303</td>
                            <td>angelfish</td>
                        </tr>
                        <tr>
                            <td>2304</td>
                            <td>neon tetra</td>
                        </tr>
                        <tr>
                            <td>2305</td>
                            <td>piranha</td>
                        </tr>
                        <tr>
                            <td>2306</td>
                            <td>arowana</td>
                        </tr>
                        <tr>
                            <td>2307</td>
                            <td>dorado</td>
                        </tr>
                        <tr>
                            <td>2308</td>
                            <td>gar</td>
                        </tr>
                        <tr>
                            <td>2309</td>
                            <td>arapaima</td>
                        </tr>
                        <tr>
                            <td>230a</td>
                            <td>saddled bichir</td>
                        </tr>
                        <tr>
                            <td>230b</td>
                            <td>sea butterfly</td>
                        </tr>
                        <tr>
                            <td>230c</td>
                            <td>sea horse</td>
                        </tr>
                        <tr>
                            <td>230d</td>
                            <td>clown fish</td>
                        </tr>
                        <tr>
                            <td>230e</td>
                            <td>surgeonfish</td>
                        </tr>
                        <tr>
                            <td>230f</td>
                            <td>butterfly fish</td>
                        </tr>
                        <tr>
                            <td>2310</td>
                            <td>Napoleonfish</td>
                        </tr>
                        <tr>
                            <td>2311</td>
                            <td>zebra turkeyfish</td>
                        </tr>
                        <tr>
                            <td>2312</td>
                            <td>blowfish</td>
                        </tr>
                        <tr>
                            <td>2313</td>
                            <td>puffer fish</td>
                        </tr>
                        <tr>
                            <td>2314</td>
                            <td>horse mackerel</td>
                        </tr>
                        <tr>
                            <td>2315</td>
                            <td>barred knifejaw</td>
                        </tr>
                        <tr>
                            <td>2316</td>
                            <td>sea bass</td>
                        </tr>
                        <tr>
                            <td>2317</td>
                            <td>red snapper</td>
                        </tr>
                        <tr>
                            <td>2318</td>
                            <td>dab</td>
                        </tr>
                        <tr>
                            <td>2319</td>
                            <td>olive flounder</td>
                        </tr>
                        <tr>
                            <td>231a</td>
                            <td>squid</td>
                        </tr>
                        <tr>
                            <td>231b</td>
                            <td>moray eel</td>
                        </tr>
                        <tr>
                            <td>231c</td>
                            <td>ribbon eel</td>
                        </tr>
                        <tr>
                            <td>231d</td>
                            <td>football fish</td>
                        </tr>
                        <tr>
                            <td>231e</td>
                            <td>tuna</td>
                        </tr>
                        <tr>
                            <td>231f</td>
                            <td>blue marlin</td>
                        </tr>
                        <tr>
                            <td>2320</td>
                            <td>giant trevally</td>
                        </tr>
                        <tr>
                            <td>2321</td>
                            <td>ray</td>
                        </tr>
                        <tr>
                            <td>2322</td>
                            <td>ocean sunfish</td>
                        </tr>
                        <tr>
                            <td>2323</td>
                            <td>hammerhead shark</td>
                        </tr>
                        <tr>
                            <td>2324</td>
                            <td>shark</td>
                        </tr>
                        <tr>
                            <td>2325</td>
                            <td>saw shark</td>
                        </tr>
                        <tr>
                            <td>2326</td>
                            <td>whale shark</td>
                        </tr>
                        <tr>
                            <td>2327</td>
                            <td>oarfish</td>
                        </tr>
                        <tr>
                            <td>2328</td>
                            <td>coelacanth</td>
                        </tr>
                        <tr>
                            <td>2329</td>
                            <td>empty can</td>
                        </tr>
                        <tr>
                            <td>232a</td>
                            <td>boot</td>
                        </tr>
                        <tr>
                            <td>232b</td>
                            <td>old tire</td>
                        </tr>
                        <tr>
                            <td>232c</td>
                            <td>water egg</td>
                        </tr>
                        <tr>
                            <td>232d</td>
                            <td>seaweed</td>
                        </tr>
                        <tr>
                            <td>232e</td>
                            <td>sea grapes</td>
                        </tr>
                        <tr>
                            <td>232f</td>
                            <td>sea urchin</td>
                        </tr>
                        <tr>
                            <td>2330</td>
                            <td>acorn barnacle</td>
                        </tr>
                        <tr>
                            <td>2331</td>
                            <td>oyster</td>
                        </tr>
                        <tr>
                            <td>2332</td>
                            <td>turban shell</td>
                        </tr>
                        <tr>
                            <td>2333</td>
                            <td>abalone</td>
                        </tr>
                        <tr>
                            <td>2334</td>
                            <td>ear shell</td>
                        </tr>
                        <tr>
                            <td>2335</td>
                            <td>clam</td>
                        </tr>
                        <tr>
                            <td>2336</td>
                            <td>pearl oyster</td>
                        </tr>
                        <tr>
                            <td>2337</td>
                            <td>scallop</td>
                        </tr>
                        <tr>
                            <td>2338</td>
                            <td>sea anemone</td>
                        </tr>
                        <tr>
                            <td>2339</td>
                            <td>sea star</td>
                        </tr>
                        <tr>
                            <td>233a</td>
                            <td>sea cucumber</td>
                        </tr>
                        <tr>
                            <td>233b</td>
                            <td>sea slug</td>
                        </tr>
                        <tr>
                            <td>233c</td>
                            <td>flatworm</td>
                        </tr>
                        <tr>
                            <td>233d</td>
                            <td>mantis shrimp</td>
                        </tr>
                        <tr>
                            <td>233e</td>
                            <td>sweet shrimp</td>
                        </tr>
                        <tr>
                            <td>233f</td>
                            <td>tiger prawn</td>
                        </tr>
                        <tr>
                            <td>2340</td>
                            <td>spiny lobster</td>
                        </tr>
                        <tr>
                            <td>2341</td>
                            <td>lobster</td>
                        </tr>
                        <tr>
                            <td>2342</td>
                            <td>snow crab</td>
                        </tr>
                        <tr>
                            <td>2343</td>
                            <td>horsehair crab</td>
                        </tr>
                        <tr>
                            <td>2344</td>
                            <td>red king crab</td>
                        </tr>
                        <tr>
                            <td>2345</td>
                            <td>spider crab</td>
                        </tr>
                        <tr>
                            <td>2346</td>
                            <td>octopus</td>
                        </tr>
                        <tr>
                            <td>2347</td>
                            <td>spotted garden eel</td>
                        </tr>
                        <tr>
                            <td>2348</td>
                            <td>chambered nautilus</td>
                        </tr>
                        <tr><td>2349</td><td>horseshoe crab</td>
                        </tr>
                        <tr>
                            <td>234a</td>
                            <td>giant isopod</td>
                        </tr>
                        <tr>
                            <td>234b</td>
                            <td>deep-sea egg</td>
                        </tr>
                    </table>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
function catchablesFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("catchablesInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("catchablesTable");
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
        catchablesFunction
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

#catchablesvue, .card {
    background: url('/pink_bg.png');
    width: 350px;
    border-radius: 25px;
    border-color: #dc4a63;
    border-width: 15px;
    padding: 15px;
}

.card-header-title, .card-header {
  text-align: center;
  box-shadow: none;
}
</style>
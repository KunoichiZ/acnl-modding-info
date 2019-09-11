<template>
    <div id="wallscarpetvue" class="container has-text-centered">
      <b-collapse class="card" aria-id="wallsCarpetsTable" id="wallsCarpets">
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="wallsCarpetsTable">
                <p class="card-header-title is-centered">
                    Wallpapers & Carpets
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <input type="text" class="input is-rounded" id="wallsCarpetsInput" v-on:keyup="wallsCarpetsFunction()" placeholder="Search for item names..">
                  <br><br>
                  <table id="wallsCarpetsTable">
                      <tr>
                          <th>Hex</th>
                          <th>Item Name</th>
                      </tr>
                      <tr>
                        <td>234c</td>
                        <td>exotic wall</td>
                      </tr>
                      <tr>
                        <td>234d</td>
                        <td>lovely wall</td>
                      </tr>
                      <tr>
                        <td>234e</td>
                        <td>classic wall</td>
                      </tr>
                      <tr>
                        <td>234f</td>
                        <td>ranch wall</td>
                      </tr>
                      <tr>
                        <td>2350</td>
                        <td>cabana wall</td>
                      </tr>
                      <tr>
                        <td>2351</td>
                        <td>blue wall</td>
                      </tr>
                      <tr>
                        <td>2352</td>
                        <td>modern wall</td>
                      </tr>
                      <tr>
                        <td>2353</td>
                        <td>regal wall</td>
                      </tr>
                      <tr>
                        <td>2354</td>
                        <td>green wall</td>
                      </tr>
                      <tr>
                        <td>2355</td>
                        <td>cabin wall</td>
                      </tr>
                      <tr>
                        <td>2356</td>
                        <td>kiddie wall</td>
                      </tr>
                      <tr>
                        <td>2357</td>
                        <td>robo-wall</td>
                      </tr>
                      <tr>
                        <td>2358</td>
                        <td>snowman wall</td>
                      </tr>
                      <tr>
                        <td>2359</td>
                        <td>forest wall</td>
                      </tr>
                      <tr>
                        <td>235a</td>
                        <td>Pavé wall</td>
                      </tr>
                      <tr>
                        <td>235b</td>
                        <td>egg wall</td>
                      </tr>
                      <tr>
                        <td>235c</td>
                        <td>spooky wall</td>
                      </tr>
                      <tr>
                        <td>235d</td>
                        <td>harvest wall</td>
                      </tr>
                      <tr>
                        <td>235e</td>
                        <td>Jingle wall</td>
                      </tr>
                      <tr>
                        <td>235f</td>
                        <td>princess wall</td>
                      </tr>
                      <tr>
                        <td>2360</td>
                        <td>Gracie wallpaper</td>
                      </tr>
                      <tr>
                        <td>2361</td>
                        <td>sweets wall</td>
                      </tr>
                      <tr>
                        <td>2362</td>
                        <td>gorgeous wall</td>
                      </tr>
                      <tr>
                        <td>2363</td>
                        <td>western vista</td>
                      </tr>
                      <tr>
                        <td>2364</td>
                        <td>lunar horizon</td>
                      </tr>
                      <tr>
                        <td>2365</td>
                        <td>blue tarp</td>
                      </tr>
                      <tr>
                        <td>2366</td>
                        <td>ringside seating</td>
                      </tr>
                      <tr>
                        <td>2367</td>
                        <td>backyard fence</td>
                      </tr>
                      <tr>
                        <td>2368</td>
                        <td>playroom wall</td>
                      </tr>
                      <tr>
                        <td>2369</td>
                        <td>sea view</td>
                      </tr>
                      <tr>
                        <td>236a</td>
                        <td>lab wall</td>
                      </tr>
                      <tr>
                        <td>236b</td>
                        <td>classroom wall</td>
                      </tr>
                      <tr>
                        <td>236c</td>
                        <td>bathhouse wall</td>
                      </tr>
                      <tr>
                        <td>236d</td>
                        <td>pastel-dot wall</td>
                      </tr>
                      <tr>
                        <td>236e</td>
                        <td>parlor wall</td>
                      </tr>
                      <tr>
                        <td>236f</td>
                        <td>mod wall</td>
                      </tr>
                      <tr>
                        <td>2370</td>
                        <td>kitschy wall</td>
                      </tr>
                      <tr>
                        <td>2371</td>
                        <td>groovy wall</td>
                      </tr>
                      <tr>
                        <td>2372</td>
                        <td>backgammon wall</td>
                      </tr>
                      <tr>
                        <td>2373</td>
                        <td>mosaic wall</td>
                      </tr>
                      <tr>
                        <td>2374</td>
                        <td>blue-trim wall</td>
                      </tr>
                      <tr>
                        <td>2375</td>
                        <td>plaster wall</td>
                      </tr>
                      <tr>
                        <td>2376</td>
                        <td>chic wall</td>
                      </tr>
                      <tr>
                        <td>2377</td>
                        <td>ornate wall</td>
                      </tr>
                      <tr>
                        <td>2378</td>
                        <td>citrus wall</td>
                      </tr>
                      <tr>
                        <td>2379</td>
                        <td>rose wall</td>
                      </tr>
                      <tr>
                        <td>237a</td>
                        <td>old brick wall</td>
                      </tr>
                      <tr>
                        <td>237b</td>
                        <td>shoji screen</td>
                      </tr>
                      <tr>
                        <td>237c</td>
                        <td>gold screen wall</td>
                      </tr>
                      <tr>
                        <td>237d</td>
                        <td>tearoom wall</td>
                      </tr>
                      <tr>
                        <td>237e</td>
                        <td>modern screen</td>
                      </tr>
                      <tr>
                        <td>237f</td>
                        <td>garden wall</td>
                      </tr>
                      <tr>
                        <td>2380</td>
                        <td>mortar wall</td>
                      </tr>
                      <tr>
                        <td>2381</td>
                        <td>stone wall</td>
                      </tr>
                      <tr>
                        <td>2382</td>
                        <td>concrete wall</td>
                      </tr>
                      <tr>
                        <td>2383</td>
                        <td>basement wall</td>
                      </tr>
                      <tr>
                        <td>2384</td>
                        <td>shanty wall</td>
                      </tr>
                      <tr>
                        <td>2385</td>
                        <td>wood paneling</td>
                      </tr>
                      <tr>
                        <td>2386</td>
                        <td>floral wall</td>
                      </tr>
                      <tr>
                        <td>2387</td>
                        <td>kitchen wall</td>
                      </tr>
                      <tr>
                        <td>2388</td>
                        <td>music-room wall</td>
                      </tr>
                      <tr>
                        <td>2389</td>
                        <td>manor wall</td>
                      </tr>
                      <tr>
                        <td>238a</td>
                        <td>office wall</td>
                      </tr>
                      <tr>
                        <td>238b</td>
                        <td>plaza wall</td>
                      </tr>
                      <tr>
                        <td>238c</td>
                        <td>lattice wall</td>
                      </tr>
                      <tr>
                        <td>238d</td>
                        <td>stately wall</td>
                      </tr>
                      <tr>
                        <td>238e</td>
                        <td>imperial wall</td>
                      </tr>
                      <tr>
                        <td>238f</td>
                        <td>arched window</td>
                      </tr>
                      <tr>
                        <td>2390</td>
                        <td>bamboo wall</td>
                      </tr>
                      <tr>
                        <td>2391</td>
                        <td>ivy wall</td>
                      </tr>
                      <tr>
                        <td>2392</td>
                        <td>ancient wall</td>
                      </tr>
                      <tr>
                        <td>2393</td>
                        <td>exquisite wall</td>
                      </tr>
                      <tr>
                        <td>2394</td>
                        <td>tent wall</td>
                      </tr>
                      <tr>
                        <td>2395</td>
                        <td>industrial wall</td>
                      </tr>
                      <tr>
                        <td>2396</td>
                        <td>library wall</td>
                      </tr>
                      <tr>
                        <td>2397</td>
                        <td>illusion wall</td>
                      </tr>
                      <tr>
                        <td>2398</td>
                        <td>meadow vista</td>
                      </tr>
                      <tr>
                        <td>2399</td>
                        <td>tropical vista</td>
                      </tr>
                      <tr>
                        <td>239a</td>
                        <td>desert vista</td>
                      </tr>
                      <tr>
                        <td>239b</td>
                        <td>chain-link fence</td>
                      </tr>
                      <tr>
                        <td>239c</td>
                        <td>tree-lined wall</td>
                      </tr>
                      <tr>
                        <td>239d</td>
                        <td>sky wall</td>
                      </tr>
                      <tr>
                        <td>239e</td>
                        <td>cityscape wall</td>
                      </tr>
                      <tr>
                        <td>239f</td>
                        <td>dirt-clod wall</td>
                      </tr>
                      <tr>
                        <td>23a0</td>
                        <td>common wall</td>
                      </tr>
                      <tr>
                        <td>23a1</td>
                        <td>old wallpaper</td>
                      </tr>
                      <tr>
                        <td>23a2</td>
                        <td>mushroom mural</td>
                      </tr>
                      <tr>
                        <td>23a3</td>
                        <td>creepy wall</td>
                      </tr>
                      <tr>
                        <td>23a4</td>
                        <td>dotted wall</td>
                      </tr>
                      <tr>
                        <td>23a5</td>
                        <td>ramshackle wall</td>
                      </tr>
                      <tr>
                        <td>23a6</td>
                        <td>sporty wall</td>
                      </tr>
                      <tr>
                        <td>23a7</td>
                        <td>golden wall</td>
                      </tr>
                      <tr>
                        <td>23a8</td>
                        <td>jungle wall</td>
                      </tr>
                      <tr>
                        <td>23a9</td>
                        <td>underwater wall</td>
                      </tr>
                      <tr>
                        <td>23aa</td>
                        <td>dig-site wall</td>
                      </tr>
                      <tr>
                        <td>23ab</td>
                        <td>paintball wall</td>
                      </tr>
                      <tr>
                        <td>23ac</td>
                        <td>marine pop wall</td>
                      </tr>
                      <tr>
                        <td>23ad</td>
                        <td>ice wall</td>
                      </tr>
                      <tr>
                        <td>23ae</td>
                        <td>sloppy wall</td>
                      </tr>
                      <tr>
                        <td>23af</td>
                        <td>sci-fi wall</td>
                      </tr>
                      <tr>
                        <td>23b0</td>
                        <td>rococo wall</td>
                      </tr>
                      <tr>
                        <td>23b1</td>
                        <td>butterfly wall</td>
                      </tr>
                      <tr>
                        <td>23b2</td>
                        <td>modern wood wall</td>
                      </tr>
                      <tr>
                        <td>23b3</td>
                        <td>mermaid wall</td>
                      </tr>
                      <tr>
                        <td>23b4</td>
                        <td>sleek wall</td>
                      </tr>
                      <tr>
                        <td>23b5</td>
                        <td>card wall</td>
                      </tr>
                      <tr>
                        <td>23b6</td>
                        <td>stripe wall</td>
                      </tr>
                      <tr>
                        <td>23b7</td>
                        <td>alpine wall</td>
                      </tr>
                      <tr>
                        <td>23b8</td>
                        <td>neutral wall</td>
                      </tr>
                      <tr>
                        <td>23b9</td>
                        <td>ski-slope wall</td>
                      </tr>
                      <tr>
                        <td>23ba</td>
                        <td>balloon wall</td>
                      </tr>
                      <tr>
                        <td>23bb</td>
                        <td>astro wall</td>
                      </tr>
                      <tr>
                        <td>23bc</td>
                        <td>flower pop wall</td>
                      </tr>
                      <tr>
                        <td>23bd</td>
                        <td>cheese wall</td>
                      </tr>
                      <tr>
                        <td>23be</td>
                        <td>red tile wall</td>
                      </tr>
                      <tr>
                        <td>23bf</td>
                        <td>maze wall</td>
                      </tr>
                      <tr>
                        <td>23c0</td>
                        <td>autumn wall</td>
                      </tr>
                      <tr>
                        <td>23c1</td>
                        <td>palace wall</td>
                      </tr>
                      <tr>
                        <td>23c2</td>
                        <td>party wall</td>
                      </tr>
                      <tr>
                        <td>23c3</td>
                        <td>paw-print wall</td>
                      </tr>
                      <tr>
                        <td>23c4</td>
                        <td>summit wall</td>
                      </tr>
                      <tr>
                        <td>23c5</td>
                        <td>skyscraper wall</td>
                      </tr>
                      <tr>
                        <td>23c6</td>
                        <td>exhibit-room wall</td>
                      </tr>
                      <tr>
                        <td>23c7</td>
                        <td>museum wall</td>
                      </tr>
                      <tr>
                        <td>23c8</td>
                        <td>notebook wall</td>
                      </tr>
                      <tr>
                        <td>23c9</td>
                        <td>recycle-shop wall</td>
                      </tr>
                      <tr>
                        <td>23ca</td>
                        <td>convenient wall</td>
                      </tr>
                      <tr>
                        <td>23cb</td>
                        <td>supermarket wall</td>
                      </tr>
                      <tr>
                        <td>23cc</td>
                        <td>home-center wall</td>
                      </tr>
                      <tr>
                        <td>23cd</td>
                        <td>department wall</td>
                      </tr>
                      <tr>
                        <td>23ce</td>
                        <td>Gracie wall</td>
                      </tr>
                      <tr>
                        <td>23cf</td>
                        <td>Gracie wall (2)</td>
                      </tr>
                      <tr>
                        <td>23d0</td>
                        <td>Gracie wall (3)</td>
                      </tr>
                      <tr>
                        <td>23d1</td>
                        <td>basic wall</td>
                      </tr>
                      <tr>
                        <td>23d2</td>
                        <td>hallway wall</td>
                      </tr>
                      <tr>
                        <td>23d3</td>
                        <td>white tile wall</td>
                      </tr>
                      <tr>
                        <td>23d4</td>
                        <td>stadium wall</td>
                      </tr>
                      <tr>
                        <td>23d5</td>
                        <td>train-window wall</td>
                      </tr>
                      <tr>
                        <td>23d6</td>
                        <td>waiting-room wall</td>
                      </tr>
                      <tr>
                        <td>23d7</td>
                        <td>steel-frame wall</td>
                      </tr>
                      <tr>
                        <td>23d8</td>
                        <td>café-curtain wall</td>
                      </tr>
                      <tr>
                        <td>23d9</td>
                        <td>white brick wall</td>
                      </tr>
                      <tr>
                        <td>23da</td>
                        <td>bamboo-grove wall</td>
                      </tr>
                      <tr>
                        <td>23db</td>
                        <td>rice-paddy wall</td>
                      </tr>
                      <tr>
                        <td>23dc</td>
                        <td>magma-cavern wall</td>
                      </tr>
                      <tr>
                        <td>23dd</td>
                        <td>ocean-horizon wall</td>
                      </tr>
                      <tr>
                        <td>23de</td>
                        <td>Hello Kitty wall</td>
                      </tr>
                      <tr>
                        <td>23df</td>
                        <td>My Melody wall</td>
                      </tr>
                      <tr>
                        <td>23e0</td>
                        <td>Pompompurin wall</td>
                      </tr>
                      <tr>
                        <td>23e1</td>
                        <td>Kiki and Lala wall</td>
                      </tr>
                      <tr>
                        <td>23e2</td>
                        <td>Cinnamoroll wall</td>
                      </tr>
                      <tr>
                        <td>23e3</td>
                        <td>Kerokerokeroppi wall</td>
                      </tr>
                      <tr>
                        <td>23e4</td>
                        <td>Hyrule wall</td>
                      </tr>
                      <tr>
                        <td>23e5</td>
                        <td>ink-splattered wall</td>
                      </tr>
                      <tr>
                        <td>23e6</td>
                        <td>Inkopolis wall</td>
                      </tr>
                      <tr>
                        <td>23e7</td>
                        <td>fruit-panel wall</td>
                      </tr>
                      <tr>
                        <td>23e8</td>
                        <td>Fueki wall</td>
                      </tr>
                      <tr>
                        <td>23ea</td>
                        <td>polka-dot wall</td>
                      </tr>
                      <tr>
                        <td>23eb</td>
                        <td>exotic rug</td>
                      </tr>
                      <tr>
                        <td>23ec</td>
                        <td>lovely carpet</td>
                      </tr>
                      <tr>
                        <td>23ed</td>
                        <td>classic carpet</td>
                      </tr>
                      <tr>
                        <td>23ee</td>
                        <td>ranch flooring</td>
                      </tr>
                      <tr>
                        <td>23ef</td>
                        <td>cabana flooring</td>
                      </tr>
                      <tr>
                        <td>23f0</td>
                        <td>blue flooring</td>
                      </tr>
                      <tr>
                        <td>23f1</td>
                        <td>modern tile</td>
                      </tr>
                      <tr>
                        <td>23f2</td>
                        <td>regal carpet</td>
                      </tr>
                      <tr>
                        <td>23f3</td>
                        <td>green rug</td>
                      </tr>
                      <tr>
                        <td>23f4</td>
                        <td>cabin rug</td>
                      </tr>
                      <tr>
                        <td>23f5</td>
                        <td>kiddie carpet</td>
                      </tr>
                      <tr>
                        <td>23f6</td>
                        <td>robo-floor</td>
                      </tr>
                      <tr>
                        <td>23f7</td>
                        <td>snowman carpet</td>
                      </tr>
                      <tr>
                        <td>23f8</td>
                        <td>forest floor</td>
                      </tr>
                      <tr>
                        <td>23f9</td>
                        <td>Pavé floor</td>
                      </tr>
                      <tr>
                        <td>23fa</td>
                        <td>egg floor</td>
                      </tr>
                      <tr>
                        <td>23fb</td>
                        <td>spooky carpet</td>
                      </tr>
                      <tr>
                        <td>23fc</td>
                        <td>harvest rug</td>
                      </tr>
                      <tr>
                        <td>23fd</td>
                        <td>Jingle carpet</td>
                      </tr>
                      <tr>
                        <td>23fe</td>
                        <td>princess carpet</td>
                      </tr>
                      <tr>
                        <td>23ff</td>
                        <td>Gracie carpet</td>
                      </tr>
                      <tr>
                        <td>2400</td>
                        <td>sweets floor</td>
                      </tr>
                      <tr>
                        <td>2401</td>
                        <td>gorgeous floor</td>
                      </tr>
                      <tr>
                        <td>2402</td>
                        <td>western desert</td>
                      </tr>
                      <tr>
                        <td>2403</td>
                        <td>lunar surface</td>
                      </tr>
                      <tr>
                        <td>2404</td>
                        <td>closed road</td>
                      </tr>
                      <tr>
                        <td>2405</td>
                        <td>boxing-ring mat</td>
                      </tr>
                      <tr>
                        <td>2406</td>
                        <td>backyard lawn</td>
                      </tr>
                      <tr>
                        <td>2407</td>
                        <td>playroom rug</td>
                      </tr>
                      <tr>
                        <td>2408</td>
                        <td>ship deck</td>
                      </tr>
                      <tr>
                        <td>2409</td>
                        <td>lab floor</td>
                      </tr>
                      <tr>
                        <td>240a</td>
                        <td>classroom floor</td>
                      </tr>
                      <tr>
                        <td>240b</td>
                        <td>bath tile</td>
                      </tr>
                      <tr>
                        <td>240c</td>
                        <td>pastel-dot rug</td>
                      </tr>
                      <tr>
                        <td>240d</td>
                        <td>checkered tile</td>
                      </tr>
                      <tr>
                        <td>240e</td>
                        <td>ceramic tile</td>
                      </tr>
                      <tr>
                        <td>240f</td>
                        <td>diner tile</td>
                      </tr>
                      <tr>
                        <td>2410</td>
                        <td>kitschy tile</td>
                      </tr>
                      <tr>
                        <td>2411</td>
                        <td>red tile</td>
                      </tr>
                      <tr>
                        <td>2412</td>
                        <td>mosaic tile</td>
                      </tr>
                      <tr>
                        <td>2413</td>
                        <td>chessboard rug</td>
                      </tr>
                      <tr>
                        <td>2414</td>
                        <td>plaza tile</td>
                      </tr>
                      <tr>
                        <td>2415</td>
                        <td>palace tile</td>
                      </tr>
                      <tr>
                        <td>2416</td>
                        <td>imperial tile</td>
                      </tr>
                      <tr>
                        <td>2417</td>
                        <td>kitchen tile</td>
                      </tr>
                      <tr>
                        <td>2418</td>
                        <td>stone tile</td>
                      </tr>
                      <tr>
                        <td>2419</td>
                        <td>charcoal tile</td>
                      </tr>
                      <tr>
                        <td>241a</td>
                        <td>tatami</td>
                      </tr>
                      <tr>
                        <td>241b</td>
                        <td>planked tatami</td>
                      </tr>
                      <tr>
                        <td>241c</td>
                        <td>mossy carpet</td>
                      </tr>
                      <tr>
                        <td>241d</td>
                        <td>sand garden</td>
                      </tr>
                      <tr>
                        <td>241e</td>
                        <td>slate flooring</td>
                      </tr>
                      <tr>
                        <td>241f</td>
                        <td>concrete floor</td>
                      </tr>
                      <tr>
                        <td>2420</td>
                        <td>basement floor</td>
                      </tr>
                      <tr>
                        <td>2421</td>
                        <td>parquet floor</td>
                      </tr>
                      <tr>
                        <td>2422</td>
                        <td>old board floor</td>
                      </tr>
                      <tr>
                        <td>2423</td>
                        <td>kitchen flooring</td>
                      </tr>
                      <tr>
                        <td>2424</td>
                        <td>music-room floor</td>
                      </tr>
                      <tr>
                        <td>2425</td>
                        <td>office flooring</td>
                      </tr>
                      <tr>
                        <td>2426</td>
                        <td>opulent rug</td>
                      </tr>
                      <tr>
                        <td>2427</td>
                        <td>plush carpet</td>
                      </tr>
                      <tr>
                        <td>2428</td>
                        <td>ornate rug</td>
                      </tr>
                      <tr>
                        <td>2429</td>
                        <td>fancy carpet</td>
                      </tr>
                      <tr>
                        <td>242a</td>
                        <td>exquisite rug</td>
                      </tr>
                      <tr>
                        <td>242b</td>
                        <td>tent rug</td>
                      </tr>
                      <tr>
                        <td>242c</td>
                        <td>tartan rug</td>
                      </tr>
                      <tr>
                        <td>242d</td>
                        <td>round carpet</td>
                      </tr>
                      <tr>
                        <td>242e</td>
                        <td>citrus carpet</td>
                      </tr>
                      <tr>
                        <td>242f</td>
                        <td>cowhide rug</td>
                      </tr>
                      <tr>
                        <td>2430</td>
                        <td>birch flooring</td>
                      </tr>
                      <tr>
                        <td>2431</td>
                        <td>plank flooring</td>
                      </tr>
                      <tr>
                        <td>2432</td>
                        <td>bamboo flooring</td>
                      </tr>
                      <tr>
                        <td>2433</td>
                        <td>steel flooring</td>
                      </tr>
                      <tr>
                        <td>2434</td>
                        <td>shanty mat</td>
                      </tr>
                      <tr>
                        <td>2435</td>
                        <td>ancient tile</td>
                      </tr>
                      <tr>
                        <td>2436</td>
                        <td>illusion floor</td>
                      </tr>
                      <tr>
                        <td>2437</td>
                        <td>daisy meadow</td>
                      </tr>
                      <tr>
                        <td>2438</td>
                        <td>tropical floor</td>
                      </tr>
                      <tr>
                        <td>2439</td>
                        <td>Saharah's desert</td>
                      </tr>
                      <tr>
                        <td>243a</td>
                        <td>sandlot</td>
                      </tr>
                      <tr>
                        <td>243b</td>
                        <td>sidewalk</td>
                      </tr>
                      <tr>
                        <td>243c</td>
                        <td>cloud flooring</td>
                      </tr>
                      <tr>
                        <td>243d</td>
                        <td>common floor</td>
                      </tr>
                      <tr>
                        <td>243e</td>
                        <td>old flooring</td>
                      </tr>
                      <tr>
                        <td>243f</td>
                        <td>block floor</td>
                      </tr>
                      <tr>
                        <td>2440</td>
                        <td>creepy floor</td>
                      </tr>
                      <tr>
                        <td>2441</td>
                        <td>ramshackle floor</td>
                      </tr>
                      <tr>
                        <td>2442</td>
                        <td>sporty floor</td>
                      </tr>
                      <tr>
                        <td>2443</td>
                        <td>golden carpet</td>
                      </tr>
                      <tr>
                        <td>2444</td>
                        <td>hopscotch floor</td>
                      </tr>
                      <tr>
                        <td>2445</td>
                        <td>wildflower floor</td>
                      </tr>
                      <tr>
                        <td>2446</td>
                        <td>jungle floor</td>
                      </tr>
                      <tr>
                        <td>2447</td>
                        <td>underwater floor</td>
                      </tr>
                      <tr>
                        <td>2448</td>
                        <td>dig-site floor</td>
                      </tr>
                      <tr>
                        <td>2449</td>
                        <td>paintball floor</td>
                      </tr>
                      <tr>
                        <td>244a</td>
                        <td>ladybug carpet</td>
                      </tr>
                      <tr>
                        <td>244b</td>
                        <td>ice floor</td>
                      </tr>
                      <tr>
                        <td>244c</td>
                        <td>sloppy carpet</td>
                      </tr>
                      <tr>
                        <td>244d</td>
                        <td>sci-fi floor</td>
                      </tr>
                      <tr>
                        <td>244e</td>
                        <td>modern wood flooring</td>
                      </tr>
                      <tr>
                        <td>244f</td>
                        <td>mermaid carpet</td>
                      </tr>
                      <tr>
                        <td>2450</td>
                        <td>sleek carpet</td>
                      </tr>
                      <tr>
                        <td>2451</td>
                        <td>card carpet</td>
                      </tr>
                      <tr>
                        <td>2452</td>
                        <td>stripe carpet</td>
                      </tr>
                      <tr>
                        <td>2453</td>
                        <td>neutral floor</td>
                      </tr>
                      <tr>
                        <td>2454</td>
                        <td>ski-slope floor</td>
                      </tr>
                      <tr>
                        <td>2455</td>
                        <td>balloon floor</td>
                      </tr>
                      <tr>
                        <td>2456</td>
                        <td>astro floor</td>
                      </tr>
                      <tr>
                        <td>2457</td>
                        <td>flower pop carpet</td>
                      </tr>
                      <tr>
                        <td>2458</td>
                        <td>marine pop floor</td>
                      </tr>
                      <tr>
                        <td>2459</td>
                        <td>cheese floor</td>
                      </tr>
                      <tr>
                        <td>245a</td>
                        <td>maze floor</td>
                      </tr>
                      <tr>
                        <td>245b</td>
                        <td>autumn floor</td>
                      </tr>
                      <tr>
                        <td>245c</td>
                        <td>rococo floor</td>
                      </tr>
                      <tr>
                        <td>245d</td>
                        <td>alpine rug</td>
                      </tr>
                      <tr>
                        <td>245e</td>
                        <td>notebook floor</td>
                      </tr>
                      <tr>
                        <td>245f</td>
                        <td>dotted rug</td>
                      </tr>
                      <tr>
                        <td>2460</td>
                        <td>exhibit-room floor</td>
                      </tr>
                      <tr>
                        <td>2461</td>
                        <td>museum floor</td>
                      </tr>
                      <tr>
                        <td>2462</td>
                        <td>recycle-shop floor</td>
                      </tr>
                      <tr>
                        <td>2463</td>
                        <td>convenient floor</td>
                      </tr>
                      <tr>
                        <td>2464</td>
                        <td>market floor</td>
                      </tr>
                      <tr>
                        <td>2465</td>
                        <td>home-center floor</td>
                      </tr>
                      <tr>
                        <td>2466</td>
                        <td>department floor</td>
                      </tr>
                      <tr>
                        <td>2467</td>
                        <td>Gracie floor</td>
                      </tr>
                      <tr>
                        <td>2468</td>
                        <td>Gracie floor (2)</td>
                      </tr>
                      <tr>
                        <td>2469</td>
                        <td>Gracie floor (3)</td>
                      </tr>
                      <tr>
                        <td>246a</td>
                        <td>terrace rug</td>
                      </tr>
                      <tr>
                        <td>246b</td>
                        <td>yellow flooring</td>
                      </tr>
                      <tr>
                        <td>246c</td>
                        <td>monochrome floor</td>
                      </tr>
                      <tr>
                        <td>246d</td>
                        <td>pink wood floor</td>
                      </tr>
                      <tr>
                        <td>246e</td>
                        <td>natural wood floor</td>
                      </tr>
                      <tr>
                        <td>246f</td>
                        <td>stone-tile floor</td>
                      </tr>
                      <tr>
                        <td>2470</td>
                        <td>parquet floor</td>
                      </tr>
                      <tr>
                        <td>2471</td>
                        <td>white tile floor</td>
                      </tr>
                      <tr>
                        <td>2472</td>
                        <td>panel carpet floor</td>
                      </tr>
                      <tr>
                        <td>2473</td>
                        <td>arched brick floor</td>
                      </tr>
                      <tr>
                        <td>2474</td>
                        <td>flagstone floor</td>
                      </tr>
                      <tr>
                        <td>2475</td>
                        <td>terra-cotta floor</td>
                      </tr>
                      <tr>
                        <td>2476</td>
                        <td>tatami floor</td>
                      </tr>
                      <tr>
                        <td>2477</td>
                        <td>herringbone floor</td>
                      </tr>
                      <tr>
                        <td>2478</td>
                        <td>school-hall floor</td>
                      </tr>
                      <tr>
                        <td>2479</td>
                        <td>water floor</td>
                      </tr>
                      <tr>
                        <td>247a</td>
                        <td>pavement floor</td>
                      </tr>
                      <tr>
                        <td>247b</td>
                        <td>lobby floor</td>
                      </tr>
                      <tr>
                        <td>247c</td>
                        <td>field floor</td>
                      </tr>
                      <tr>
                        <td>247d</td>
                        <td>galaxy floor</td>
                      </tr>
                      <tr>
                        <td>247e</td>
                        <td>lava floor</td>
                      </tr>
                      <tr>
                        <td>247f</td>
                        <td>oil-stained floor</td>
                      </tr>
                      <tr>
                        <td>2480</td>
                        <td>fancy tile floor</td>
                      </tr>
                      <tr>
                        <td>2481</td>
                        <td>block flooring</td>
                      </tr>
                      <tr>
                        <td>2482</td>
                        <td>sandy-beach floor</td>
                      </tr>
                      <tr>
                        <td>2483</td>
                        <td>dirt floor</td>
                      </tr>
                      <tr>
                        <td>2484</td>
                        <td>wooden-deck floor</td>
                      </tr>
                      <tr>
                        <td>2485</td>
                        <td>white wood floor</td>
                      </tr>
                      <tr>
                        <td>2486</td>
                        <td>Hello Kitty floor</td>
                      </tr>
                      <tr>
                        <td>2487</td>
                        <td>My Melody floor</td>
                      </tr>
                      <tr>
                        <td>2488</td>
                        <td>Pompompurin floor</td>
                      </tr>
                      <tr>
                        <td>2489</td>
                        <td>Kiki and Lala floor</td>
                      </tr>
                      <tr>
                        <td>248a</td>
                        <td>Cinnamoroll floor</td>
                      </tr>
                      <tr>
                        <td>248b</td>
                        <td>gray patterned floor</td>
                      </tr>
                      <tr>
                        <td>248c</td>
                        <td>Zelda floor</td>
                      </tr>
                      <tr>
                        <td>248d</td>
                        <td>ink-splattered floor</td>
                      </tr>
                      <tr>
                        <td>248e</td>
                        <td>Inkopolis floor</td>
                      </tr>
                      <tr>
                        <td>248f</td>
                        <td>fruit-panel floor</td>
                      </tr>
                      <tr>
                        <td>2490</td>
                        <td>Fueki floor</td>
                      </tr>
                      <tr>
                        <td>2491</td>
                        <td>gallery floor</td>
                      </tr>
                      <tr>
                        <td>2492</td>
                        <td>observatory floor</td>
                      </tr>
                  </table>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
function wallsCarpetsFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("wallsCarpetsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("wallsCarpetsTable");
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
    wallsCarpetsFunction
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

#wallscarpetvue, .card {
    background: url('/blue_bg.png');
    width: 350px;
    border-radius: 25px;
    border-color: #41aed7;
    border-width: 15px;
    padding: 15px;
}

.card-header-title, .card-header {
  text-align: center;
  box-shadow: none;
}
</style>
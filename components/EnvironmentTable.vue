<template>
    <div id="environmentvue" class="container has-text-centered">
      <b-collapse class="card" aria-id="environmentTable" id="environment" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="environmentTable">
                <p class="card-header-title is-centered">
                    Environmentals
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <input type="text" class="input is-rounded" id="environmentInput" v-on:keyup="environmentFunction()" placeholder="Search for item names..">
                  <br><br>
                  <table id="environmentTable">
                      <tr>
                        <th>Hex</th>
                        <th>Item Name</th>
                      </tr>
                      <tr>
                        <td>0080</td>
                        <td>holly bush (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0081</td>
                        <td>holly bush (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0082</td>
                        <td>holly bush</td>
                      </tr>
                      <tr>
                        <td>0083</td>
                        <td>pink azalea bush (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0084</td>
                        <td>pink azalea bush (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0085</td>
                        <td>pink azalea bush</td>
                      </tr>
                      <tr>
                        <td>0086</td>
                        <td>white azalea bush (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0087</td>
                        <td>white azalea bush (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0088</td>
                        <td>white azalea bush</td>
                      </tr>
                      <tr>
                        <td>0089</td>
                        <td>blue hydrangea bush (growing 1)</td>
                      </tr>
                      <tr>
                        <td>008a</td>
                        <td>blue hydrangea bush (growing 2)</td>
                      </tr>
                      <tr>
                        <td>008b</td>
                        <td>blue hydrangea bush</td>
                      </tr>
                      <tr>
                        <td>008c</td>
                        <td>pink hydrangea bush (growing 1)</td>
                      </tr>
                      <tr>
                        <td>008d</td>
                        <td>pink hydrangea bush (growing 2)</td>
                      </tr>
                      <tr>
                        <td>008e</td>
                        <td>pink hydrangea bush</td>
                      </tr>
                      <tr>
                        <td>008f</td>
                        <td>red hibiscus bush (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0090</td>
                        <td>red hibiscus bush (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0091</td>
                        <td>red hibiscus bush</td>
                      </tr>
                      <tr>
                        <td>0092</td>
                        <td>yellow hibiscus bush (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0093</td>
                        <td>yellow hibiscus bush (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0094</td>
                        <td>yellow hibiscus bush</td>
                      </tr>
                      <tr>
                        <td>0095</td>
                        <td>sweet olive bush (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0096</td>
                        <td>sweet olive bush (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0097</td>
                        <td>sweet olive bush</td>
                      </tr>
                      <tr>
                        <td>003a</td>
                        <td>apple tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>003b</td>
                        <td>apple tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>003c</td>
                        <td>apple tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>003d</td>
                        <td>apple tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>003e</td>
                        <td>apple tree</td>
                      </tr>
                      <tr>
                        <td>003f</td>
                        <td>orange tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0040</td>
                        <td>orange tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0041</td>
                        <td>orange tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>0042</td>
                        <td>orange tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>0043</td>
                        <td>orange tree</td>
                      </tr>
                      <tr>
                        <td>0044</td>
                        <td>pear tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0045</td>
                        <td>pear tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0046</td>
                        <td>pear tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>0047</td>
                        <td>pear tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>0048</td>
                        <td>pear tree</td>
                      </tr>
                      <tr>
                        <td>0049</td>
                        <td>peaches tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>004a</td>
                        <td>peaches tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>004b</td>
                        <td>peaches tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>004c</td>
                        <td>peaches tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>004d</td>
                        <td>peaches tree</td>
                      </tr>
                      <tr>
                        <td>004e</td>
                        <td>cherry tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>004f</td>
                        <td>cherry tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0050</td>
                        <td>cherry tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>0051</td>
                        <td>cherry tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>0052</td>
                        <td>cherry tree</td>
                      </tr>
                      <tr>
                        <td>0053</td>
                        <td>durian tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0054</td>
                        <td>durian tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0055</td>
                        <td>durian tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>0056</td>
                        <td>durian tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>0057</td>
                        <td>durian tree</td>
                      </tr>
                      <tr>
                        <td>0058</td>
                        <td>lemon tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0059</td>
                        <td>lemon tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>005a</td>
                        <td>lemon tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>005b</td>
                        <td>lemon tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>005c</td>
                        <td>lemon tree</td>
                      </tr>
                      <tr>
                        <td>005d</td>
                        <td>lychee tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>005e</td>
                        <td>lychee tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>005f</td>
                        <td>lychee tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>0060</td>
                        <td>lychee tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>0061</td>
                        <td>lychee tree</td>
                      </tr>
                      <tr>
                        <td>0062</td>
                        <td>mango tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0063</td>
                        <td>mango tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0064</td>
                        <td>mango tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>0065</td>
                        <td>mango tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>0066</td>
                        <td>mango tree</td>
                      </tr>
                      <tr>
                        <td>0067</td>
                        <td>persimmons tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0068</td>
                        <td>persimmons tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0069</td>
                        <td>persimmons tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>006a</td>
                        <td>persimmons tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>006b</td>
                        <td>persimmons tree</td>
                      </tr>
                      <tr>
                        <td>006c</td>
                        <td>money tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>006d</td>
                        <td>money tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>006e</td>
                        <td>money tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>006f</td>
                        <td>money tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>0070</td>
                        <td>money tree</td>
                      </tr>
                      <tr>
                        <td>0071</td>
                        <td>tree (item)</td>
                      </tr>
                      <tr>
                        <td>0072</td>
                        <td>tree (bees)</td>
                      </tr>
                      <tr>
                        <td>0073</td>
                        <td>tree (money 1)</td>
                      </tr>
                      <tr>
                        <td>0074</td>
                        <td>tree (money 2)</td>
                      </tr>
                      <tr>
                        <td>0075</td>
                        <td>tree (egg)</td>
                      </tr>
                      <tr>
                        <td>0076</td>
                        <td>cedar (item)</td>
                      </tr>
                      <tr>
                        <td>0077</td>
                        <td>cedar (bees)</td>
                      </tr>
                      <tr>
                        <td>0078</td>
                        <td>cedar (money 1)</td>
                      </tr>
                      <tr>
                        <td>0079</td>
                        <td>cedar (money 2)</td>
                      </tr>
                      <tr>
                        <td>007a</td>
                        <td>cedar (egg)</td>
                      </tr>
                      <tr>
                        <td>007b</td>
                        <td>cedar (xmas)</td>
                      </tr>
                      <tr>
                        <td>009d</td>
                        <td>Pattern</td>
                      </tr>
                      <tr>
                        <td>009e</td>
                        <td>Hole</td>
                      </tr>
                      <tr>
                        <td>0001</td>
                        <td>wilted bush</td>
                      </tr>
                      <tr>
                        <td>0002</td>
                        <td>wilted tree</td>
                      </tr>
                      <tr>
                        <td>0003</td>
                        <td>wilted cedar tree</td>
                      </tr>
                      <tr>
                        <td>0004</td>
                        <td>wilted palm tree</td>
                      </tr>
                      <tr>
                        <td>0005</td>
                        <td>wilted bamboo</td>
                      </tr>
                      <tr>
                        <td>0006</td>
                        <td>dead perfect tree</td>
                      </tr>
                      <tr>
                        <td>0007</td>
                        <td>cut tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0008</td>
                        <td>cut tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0009</td>
                        <td>cut tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>000a</td>
                        <td>tree stump</td>
                      </tr>
                      <tr>
                        <td>000b</td>
                        <td>tree stump (heart)</td>
                      </tr>
                      <tr>
                        <td>000c</td>
                        <td>tree stump (butterfly)</td>
                      </tr>
                      <tr>
                        <td>000d</td>
                        <td>tree stump (citrus)</td>
                      </tr>
                      <tr>
                        <td>000e</td>
                        <td>tree stump (Redd's leaf)</td>
                      </tr>
                      <tr>
                        <td>000f</td>
                        <td>tree stump (cross)</td>
                      </tr>
                      <tr>
                        <td>0010</td>
                        <td>tree stump (triforce)</td>
                      </tr>
                      <tr>
                        <td>0011</td>
                        <td>cut cedar (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0012</td>
                        <td>cut cedar (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0013</td>
                        <td>cut cedar (growing 3)</td>
                      </tr>
                      <tr>
                        <td>0014</td>
                        <td>cedar stump</td>
                      </tr>
                      <tr>
                        <td>0015</td>
                        <td>cedar stump (star)</td>
                      </tr>
                      <tr>
                        <td>0016</td>
                        <td>cedar stump (cat)</td>
                      </tr>
                      <tr>
                        <td>0017</td>
                        <td>cedar stump (flower)</td>
                      </tr>
                      <tr>
                        <td>0018</td>
                        <td>cedar stump (leaf)</td>
                      </tr>
                      <tr>
                        <td>0019</td>
                        <td>cedar stump (musical note)</td>
                      </tr>
                      <tr>
                        <td>001a</td>
                        <td>cedar stump (clover)</td>
                      </tr>
                      <tr>
                        <td>001b</td>
                        <td>cut palm tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>001c</td>
                        <td>cut palm tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>001d</td>
                        <td>cut palm tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>001e</td>
                        <td>palm tree stump</td>
                      </tr>
                      <tr>
                        <td>001f</td>
                        <td>cut bamboo (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0020</td>
                        <td>cut bamboo (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0021</td>
                        <td>cut bamboo (growing 3)</td>
                      </tr>
                      <tr>
                        <td>0022</td>
                        <td>tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0023</td>
                        <td>tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0024</td>
                        <td>tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>0025</td>
                        <td>tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>0026</td>
                        <td>tree</td>
                      </tr>
                      <tr>
                        <td>0027</td>
                        <td>cedar (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0028</td>
                        <td>cedar (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0029</td>
                        <td>cedar (growing 3)</td>
                      </tr>
                      <tr>
                        <td>002a</td>
                        <td>cedar (growing 4)</td>
                      </tr>
                      <tr>
                        <td>002b</td>
                        <td>cedar</td>
                      </tr>
                      <tr>
                        <td>002c</td>
                        <td>coconut palm tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>002d</td>
                        <td>coconut palm tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>002e</td>
                        <td>coconut palm tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>002f</td>
                        <td>coconut palm tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>0030</td>
                        <td>coconut palm tree</td>
                      </tr>
                      <tr>
                        <td>0031</td>
                        <td>banana palm tree (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0032</td>
                        <td>banana palm tree (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0033</td>
                        <td>banana palm tree (growing 3)</td>
                      </tr>
                      <tr>
                        <td>0034</td>
                        <td>banana palm tree (growing 4)</td>
                      </tr>
                      <tr>
                        <td>0035</td>
                        <td>banana palm tree</td>
                      </tr>
                      <tr>
                        <td>0036</td>
                        <td>bamboo (growing 1)</td>
                      </tr>
                      <tr>
                        <td>0037</td>
                        <td>bamboo (growing 2)</td>
                      </tr>
                      <tr>
                        <td>0038</td>
                        <td>bamboo (growing 3)</td>
                      </tr>
                      <tr>
                        <td>0039</td>
                        <td>bamboo</td>
                      </tr>
                      <tr>
                        <td class="green">2061</td>
                        <td class="green">Uni-Directional Chair (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">2062</td>
                        <td class="green">Café Dining Chair (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">2063</td>
                        <td class="green">Town Hall Chair (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">2064</td>
                        <td class="green">Unknown Two-Seated Chair 1 (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">2065</td>
                        <td class="green">Unknown Two-Seated Chair 2 (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">2066</td>
                        <td class="green">Campsite Log Seat (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">2067</td>
                        <td class="green">RV Right Chair (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">2068</td>
                        <td class="green">RV Left Chair (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">2069</td>
                        <td class="green">RV Unk Chair (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">206A</td>
                        <td class="green">Campsite Tree Stump (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">206B</td>
                        <td class="green">Campsite Hammock (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">206C</td>
                        <td class="green">Dream Suite Bed (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">206D</td>
                        <td class="green">Dream Suite Couch (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">206E</td>
                        <td class="green">Unknown Big Bed (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">206F</td>
                        <td class="green">Museum Cushion Chair (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">2073</td>
                        <td class="green">RV Radio (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">2074</td>
                        <td class="green">DJ K.K. Table</td>
                      </tr>
                      <tr>
                        <td class="green">2075</td>
                        <td class="green">1x1 Museum Item Podium (Fossils)</td>
                      </tr>
                      <tr>
                        <td class="green">2076</td>
                        <td class="green">1x2 Museum Item Stand (Dinosaurs)</td>
                      </tr>
                      <tr>
                        <td class="green">2077</td>
                        <td class="green">2x2 Museum Item Stand (Dinosaurs)</td>
                      </tr>
                      <tr>
                        <td class="green">2078</td>
                        <td class="green">Unknown Wallpaper</td>
                      </tr>
                      <tr>
                        <td class="green">2079</td>
                        <td class="green">1x1 Shops Item Hangup</td>
                      </tr>
                      <tr>
                        <td class="green">207A</td>
                        <td class="green">1x2 Shops Item Hangup</td>
                      </tr>
                      <tr>
                        <td class="green">207B</td>
                        <td class="green">Retail Chair (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">207C</td>
                        <td class="green">Island Hut Chair (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">207D</td>
                        <td class="green">Harvey's Chair (Invisible)</td>
                      </tr>
                      <tr>
                        <td class="green">207E</td>
                        <td class="green">Moving Boxes</td>
                      </tr>
                      <tr>
                        <td class="green">207F</td>
                        <td class="green">Moving Boxes Medium</td>
                      </tr>
                      <tr>
                        <td class="green">2080</td>
                        <td class="green">Moving Boxes Large</td>
                      </tr>
                      <tr>
                        <td class="green">2081</td>
                        <td class="green">Train Station Locker</td>
                      </tr>
                      <tr>
                        <td class="green">2082</td>
                        <td class="green">Museum Locker</td>
                      </tr>
                      <tr>
                        <td class="green">2083</td>
                        <td class="green">General Sold-Out Sign</td>
                      </tr>
                      <tr>
                        <td class="green">2084</td>
                        <td class="green">Gracie Sold-Out Sign</td>
                      </tr>
                      <tr>
                        <td class="green">2085</td>
                        <td class="green">Retail Sold-Out Sign</td>
                      </tr>
                      <tr>
                        <td class="green">2086</td>
                        <td class="green">Nooklings Sold-Out Sign (Wall)</td>
                      </tr>
                      <tr>
                        <td class="green">2087</td>
                        <td class="green">Gracie Sold-Out Sign (Wall)</td>
                      </tr>
                      <tr>
                        <td class="green">2088</td>
                        <td class="green">Redd Sold-Out Sign</td>
                      </tr>
                      <tr>
                        <td>00ce</td>
                        <td>red tulips (wilted)</td>
                      </tr>
                      <tr>
                        <td>00cf</td>
                        <td>white tulips (wilted)</td>
                      </tr>
                      <tr>
                        <td>00d0</td>
                        <td>yellow tulips (wilted)</td>
                      </tr>
                      <tr>
                        <td>00d1</td>
                        <td>pink tulips (wilted)</td>
                      </tr>
                      <tr>
                        <td>00d2</td>
                        <td>purple tulips (wilted)</td>
                      </tr>
                      <tr>
                        <td>00d3</td>
                        <td>black tulips (wilted)</td>
                      </tr>
                      <tr>
                        <td>00d4</td>
                        <td>orange tulips (wilted)</td>
                      </tr>
                      <tr>
                        <td>00d5</td>
                        <td>white pansies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00d6</td>
                        <td>yellow pansies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00d7</td>
                        <td>red pansies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00d8</td>
                        <td>purple pansies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00d9</td>
                        <td>orange pansies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00da</td>
                        <td>blue pansies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00db</td>
                        <td>white cosmos (wilted)</td>
                      </tr>
                      <tr>
                        <td>00dc</td>
                        <td>red cosmos (wilted)</td>
                      </tr>
                      <tr>
                        <td>00dd</td>
                        <td>yellow cosmos (wilted)</td>
                      </tr>
                      <tr>
                        <td>00de</td>
                        <td>pink cosmos (wilted)</td>
                      </tr>
                      <tr>
                        <td>00df</td>
                        <td>orange cosmos (wilted)</td>
                      </tr>
                      <tr>
                        <td>00e0</td>
                        <td>black cosmos (wilted)</td>
                      </tr>
                      <tr>
                        <td>00e1</td>
                        <td>red roses (wilted)</td>
                      </tr>
                      <tr>
                        <td>00e2</td>
                        <td>white roses (wilted)</td>
                      </tr>
                      <tr>
                        <td>00e3</td>
                        <td>yellow roses (wilted)</td>
                      </tr>
                      <tr>
                        <td>00e4</td>
                        <td>pink roses (wilted)</td>
                      </tr>
                      <tr>
                        <td>00e5</td>
                        <td>orange roses (wilted)</td>
                      </tr>
                      <tr>
                        <td>00e6</td>
                        <td>purple roses (wilted)</td>
                      </tr>
                      <tr>
                        <td>00e7</td>
                        <td>black roses (wilted)</td>
                      </tr>
                      <tr>
                        <td>00e8</td>
                        <td>blue roses (wilted)</td>
                      </tr>
                      <tr>
                        <td>00e9</td>
                        <td>gold roses (wilted)</td>
                      </tr>
                      <tr>
                        <td>00ea</td>
                        <td>red carnations (wilted)</td>
                      </tr>
                      <tr>
                        <td>00eb</td>
                        <td>pink carnations (wilted)</td>
                      </tr>
                      <tr>
                        <td>00ec</td>
                        <td>white carnations (wilted)</td>
                      </tr>
                      <tr>
                        <td>00ed</td>
                        <td>white lilies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00ee</td>
                        <td>yellow lilies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00ef</td>
                        <td>red lilies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00f0</td>
                        <td>orange lilies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00f1</td>
                        <td>pink lilies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00f2</td>
                        <td>black lilies (wilted)</td>
                      </tr>
                      <tr>
                        <td>00f3</td>
                        <td>purple violets (wilted)</td>
                      </tr>
                      <tr>
                        <td>00f4</td>
                        <td>blue violets (wilted)</td>
                      </tr>
                      <tr>
                        <td>00f5</td>
                        <td>white violets (wilted)</td>
                      </tr>
                      <tr>
                        <td>00f6</td>
                        <td>yellow violets (wilted)</td>
                      </tr>
                      <tr>
                        <td>00f7</td>
                        <td>Jacob's ladder (wilted)</td>
                      </tr>
                      <tr>
                        <td>00f8</td>
                        <td>rafflesia (wilted)</td>
                      </tr>
                      <tr>
                        <td>009f</td>
                        <td>red tulips</td>
                      </tr>
                      <tr>
                        <td>00a0</td>
                        <td>white tulips</td>
                      </tr>
                      <tr>
                        <td>00a1</td>
                        <td>yellow tulips</td>
                      </tr>
                      <tr>
                        <td>00a2</td>
                        <td>pink tulips</td>
                      </tr>
                      <tr>
                        <td>00a3</td>
                        <td>purple tulips</td>
                      </tr>
                      <tr>
                        <td>00a4</td>
                        <td>black tulips</td>
                      </tr>
                      <tr>
                        <td>00a5</td>
                        <td>orange tulips</td>
                      </tr>
                      <tr>
                        <td>00a6</td>
                        <td>white pansies</td>
                      </tr>
                      <tr>
                        <td>00a7</td>
                        <td>yellow pansies</td>
                      </tr>
                      <tr>
                        <td>00a8</td>
                        <td>red pansies</td>
                      </tr>
                      <tr>
                        <td>00a9</td>
                        <td>purple pansies</td>
                      </tr>
                      <tr>
                        <td>00aa</td>
                        <td>orange pansies</td>
                      </tr>
                      <tr>
                        <td>00ab</td>
                        <td>blue pansies</td>
                      </tr>
                      <tr>
                        <td>00ac</td>
                        <td>white cosmos</td>
                      </tr>
                      <tr>
                        <td>00ad</td>
                        <td>red cosmos</td>
                      </tr>
                      <tr>
                        <td>00ae</td>
                        <td>yellow cosmos</td>
                      </tr>
                      <tr>
                        <td>00af</td>
                        <td>pink cosmos</td>
                      </tr>
                      <tr>
                        <td>00b0</td>
                        <td>orange cosmos</td>
                      </tr>
                      <tr>
                        <td>00b1</td>
                        <td>black cosmos</td>
                      </tr>
                      <tr>
                        <td>00b2</td>
                        <td>red roses</td>
                      </tr>
                      <tr>
                        <td>00b3</td>
                        <td>white roses</td>
                      </tr>
                      <tr>
                        <td>00b4</td>
                        <td>yellow roses</td>
                      </tr>
                      <tr>
                        <td>00b5</td>
                        <td>pink roses</td>
                      </tr>
                      <tr>
                        <td>00b6</td>
                        <td>orange roses</td>
                      </tr>
                      <tr>
                        <td>00b7</td>
                        <td>purple roses</td>
                      </tr>
                      <tr>
                        <td>00b8</td>
                        <td>black roses</td>
                      </tr>
                      <tr>
                        <td>00b9</td>
                        <td>blue roses</td>
                      </tr>
                      <tr>
                        <td>00ba</td>
                        <td>gold roses</td>
                      </tr>
                      <tr>
                        <td>00bb</td>
                        <td>red carnations</td>
                      </tr>
                      <tr>
                        <td>00bc</td>
                        <td>pink carnations</td>
                      </tr>
                      <tr>
                        <td>00bd</td>
                        <td>white carnations</td>
                      </tr>
                      <tr>
                        <td>00be</td>
                        <td>white lilies</td>
                      </tr>
                      <tr>
                        <td>00bf</td>
                        <td>yellow lilies</td>
                      </tr>
                      <tr>
                        <td>00c0</td>
                        <td>red lilies</td>
                      </tr>
                      <tr>
                        <td>00c1</td>
                        <td>orange lilies</td>
                      </tr>
                      <tr>
                        <td>00c2</td>
                        <td>pink lilies</td>
                      </tr>
                      <tr>
                        <td>00c3</td>
                        <td>black lilies</td>
                      </tr>
                      <tr>
                        <td>00c4</td>
                        <td>purple violets</td>
                      </tr>
                      <tr>
                        <td>00c5</td>
                        <td>blue violets</td>
                      </tr>
                      <tr>
                        <td>00c6</td>
                        <td>white violets</td>
                      </tr>
                      <tr>
                        <td>00c7</td>
                        <td>yellow violets</td>
                      </tr>
                      <tr>
                        <td>00c8</td>
                        <td>Jacob's ladder</td>
                      </tr>
                      <tr>
                        <td>00c9</td>
                        <td>lucky clovers</td>
                      </tr>
                      <tr>
                        <td>00ca</td>
                        <td>dandelions</td>
                      </tr>
                      <tr>
                        <td>00cb</td>
                        <td>dandelion puffs</td>
                      </tr>
                      <tr>
                        <td>00cc</td>
                        <td>clovers (weed)</td>
                      </tr>
                      <tr>
                        <td>00cd</td>
                        <td>rafflesia</td>
                      </tr>
                      <tr>
                        <td>0098</td>
                        <td>rock (A)</td>
                      </tr>
                      <tr>
                        <td>0099</td>
                        <td>rock (B)</td>
                      </tr>
                      <tr>
                        <td>009a</td>
                        <td>rock (C)</td>
                      </tr>
                      <tr>
                        <td>009b</td>
                        <td>rock (D)</td>
                      </tr>
                      <tr>
                        <td>009c</td>
                        <td>rock (E)</td>
                      </tr>
                      <tr>
                        <td>007c</td>
                        <td>weed (A)</td>
                      </tr>
                      <tr>
                        <td>007d</td>
                        <td>weed (B)</td>
                      </tr>
                      <tr>
                        <td>007e</td>
                        <td>weed (C)</td>
                      </tr>
                      <tr>
                        <td>007f</td>
                        <td>weed (D)</td>
                      </tr>
                  </table>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
function environmentFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("environmentInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("environmentTable");
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
      environmentFunction
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
  background-color: grey;
  opacity: 0.5;
  color: white;
}

.green {
  background-color: green;
}

#environmentvue, .card {
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
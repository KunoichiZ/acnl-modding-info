<template>
    <div id="picturevue" class="container has-text-centered">
      <b-collapse class="card" aria-id="picturesTable" id="pictures" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="picturesTable">
                <p class="card-header-title is-centered">
                    Pictures
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <!-- <span id="pictures">Pictures (back to <a href="#top">categories</a>)</span> -->
                  <input type="text" class="input is-rounded" id="picturesInput" v-on:keyup="picturesFunction()" placeholder="Search for item names..">
                  <br><br>
                  <table id="picturesTable">
                      <tr>
                        <th>Hex</th>
                        <th>Item Name</th>
                      </tr>
                      <tr>
                        <td>3316</td>
                        <td>pic of Cyrus</td>
                      </tr>
                      <tr>
                        <td>3317</td>
                        <td>pic of Reese</td>
                      </tr>
                      <tr>
                        <td>3318</td>
                        <td>pic of Chip</td>
                      </tr>
                      <tr>
                        <td>3319</td>
                        <td>pic of Phineas</td>
                      </tr>
                      <tr>
                        <td>331a</td>
                        <td>pic of Joan</td>
                      </tr>
                      <tr>
                        <td>331b</td>
                        <td>pic of Katrina</td>
                      </tr>
                      <tr>
                        <td>331c</td>
                        <td>pic of Nat</td>
                      </tr>
                      <tr>
                        <td>331d</td>
                        <td>pic of Saharah</td>
                      </tr>
                      <tr>
                        <td>331e</td>
                        <td>pic of K.K.</td>
                      </tr>
                      <tr>
                        <td>331f</td>
                        <td>pic of Redd</td>
                      </tr>
                      <tr>
                        <td>3320</td>
                        <td>pic of Gracie</td>
                      </tr>
                      <tr>
                        <td>3321</td>
                        <td>pic of Labelle</td>
                      </tr>
                      <tr>
                        <td>3322</td>
                        <td>pic of Mabel</td>
                      </tr>
                      <tr>
                        <td>3323</td>
                        <td>pic of Sable</td>
                      </tr>
                      <tr>
                        <td>3324</td>
                        <td>pic of Grams</td>
                      </tr>
                      <tr>
                        <td>3325</td>
                        <td>pic of Leilani</td>
                      </tr>
                      <tr>
                        <td>3326</td>
                        <td>pic of Kapp'n</td>
                      </tr>
                      <tr>
                        <td>3327</td>
                        <td>pic of Leila</td>
                      </tr>
                      <tr>
                        <td>3328</td>
                        <td>pic of Tommy</td>
                      </tr>
                      <tr>
                        <td>3329</td>
                        <td>pic of Timmy</td>
                      </tr>
                      <tr>
                        <td>332a</td>
                        <td>pic of Porter</td>
                      </tr>
                      <tr>
                        <td>332b</td>
                        <td>pic of Don Resetti</td>
                      </tr>
                      <tr>
                        <td>332c</td>
                        <td>pic of Resetti</td>
                      </tr>
                      <tr>
                        <td>332d</td>
                        <td>pic of Lyle</td>
                      </tr>
                      <tr>
                        <td>332e</td>
                        <td>pic of Blathers</td>
                      </tr>
                      <tr>
                        <td>332f</td>
                        <td>pic of Celeste</td>
                      </tr>
                      <tr>
                        <td>3330</td>
                        <td>pic of Pavé</td>
                      </tr>
                      <tr>
                        <td>3331</td>
                        <td>pic of Pelly</td>
                      </tr>
                      <tr>
                        <td>3332</td>
                        <td>pic of Phyllis</td>
                      </tr>
                      <tr>
                        <td>3333</td>
                        <td>pic of Brewster</td>
                      </tr>
                      <tr>
                        <td>3334</td>
                        <td>pic of Jack</td>
                      </tr>
                      <tr>
                        <td>3335</td>
                        <td>pic of Booker</td>
                      </tr>
                      <tr>
                        <td>3336</td>
                        <td>pic of Pete</td>
                      </tr>
                      <tr>
                        <td>3337</td>
                        <td>pic of Copper</td>
                      </tr>
                      <tr>
                        <td>3338</td>
                        <td>pic of Harriet</td>
                      </tr>
                      <tr>
                        <td>3339</td>
                        <td>pic of Tom Nook</td>
                      </tr>
                      <tr>
                        <td>333a</td>
                        <td>pic of Gulliver</td>
                      </tr>
                      <tr>
                        <td>333b</td>
                        <td>pic of Pascal</td>
                      </tr>
                      <tr>
                        <td>333c</td>
                        <td>pic of Kicks</td>
                      </tr>
                      <tr>
                        <td>333d</td>
                        <td>pic of Isabelle</td>
                      </tr>
                      <tr>
                        <td>333e</td>
                        <td>pic of Tortimer</td>
                      </tr>
                      <tr>
                        <td>333f</td>
                        <td>pic of Franklin</td>
                      </tr>
                      <tr>
                        <td>3340</td>
                        <td>pic of Shrunk</td>
                      </tr>
                      <tr>
                        <td>3341</td>
                        <td>pic of Rover</td>
                      </tr>
                      <tr>
                        <td>3342</td>
                        <td>pic of Leif</td>
                      </tr>
                      <tr>
                        <td>3343</td>
                        <td>pic of Blanca</td>
                      </tr>
                      <tr>
                        <td>3344</td>
                        <td>pic of Luna</td>
                      </tr>
                      <tr>
                        <td>3345</td>
                        <td>pic of DJ KK</td>
                      </tr>
                      <tr>
                        <td>3346</td>
                        <td>pic of Katie</td>
                      </tr>
                      <tr>
                        <td>3347</td>
                        <td>pic of Zipper</td>
                      </tr>
                      <tr>
                        <td>3348</td>
                        <td>pic of Jingle</td>
                      </tr>
                      <tr>
                        <td>3349</td>
                        <td>pic of Digby</td>
                      </tr>
                      <tr>
                        <td>334a</td>
                        <td>pic of Wendell</td>
                      </tr>
                      <tr>
                        <td>334b</td>
                        <td>pic of Lottie</td>
                      </tr>
                      <tr>
                        <td>3187</td>
                        <td>pic of Cyrano</td>
                      </tr>
                      <tr>
                        <td>3188</td>
                        <td>pic of Antonio</td>
                      </tr>
                      <tr>
                        <td>3189</td>
                        <td>pic of Pango</td>
                      </tr>
                      <tr>
                        <td>318a</td>
                        <td>pic of Anabelle</td>
                      </tr>
                      <tr>
                        <td>318b</td>
                        <td>pic of Snooty</td>
                      </tr>
                      <tr>
                        <td>318c</td>
                        <td>pic of Annalisa</td>
                      </tr>
                      <tr>
                        <td>318d</td>
                        <td>pic of Olaf</td>
                      </tr>
                      <tr>
                        <td>318e</td>
                        <td>pic of Teddy</td>
                      </tr>
                      <tr>
                        <td>318f</td>
                        <td>pic of Pinky</td>
                      </tr>
                      <tr>
                        <td>3190</td>
                        <td>pic of Curt</td>
                      </tr>
                      <tr>
                        <td>3191</td>
                        <td>pic of Chow</td>
                      </tr>
                      <tr>
                        <td>3192</td>
                        <td>pic of Nate</td>
                      </tr>
                      <tr>
                        <td>3193</td>
                        <td>pic of Groucho</td>
                      </tr>
                      <tr>
                        <td>3194</td>
                        <td>pic of Tutu</td>
                      </tr>
                      <tr>
                        <td>3195</td>
                        <td>pic of Ursala</td>
                      </tr>
                      <tr>
                        <td>3196</td>
                        <td>pic of Grizzly</td>
                      </tr>
                      <tr>
                        <td>3197</td>
                        <td>pic of Paula</td>
                      </tr>
                      <tr>
                        <td>3198</td>
                        <td>pic of Ike</td>
                      </tr>
                      <tr>
                        <td>3199</td>
                        <td>pic of Charlise</td>
                      </tr>
                      <tr>
                        <td>319a</td>
                        <td>pic of Beardo</td>
                      </tr>
                      <tr>
                        <td>319b</td>
                        <td>pic of Klaus</td>
                      </tr>
                      <tr>
                        <td>319c</td>
                        <td>pic of Jay</td>
                      </tr>
                      <tr>
                        <td>319d</td>
                        <td>pic of Robin</td>
                      </tr>
                      <tr>
                        <td>319e</td>
                        <td>pic of Anchovy</td>
                      </tr>
                      <tr>
                        <td>319f</td>
                        <td>pic of Twiggy</td>
                      </tr>
                      <tr>
                        <td>31a0</td>
                        <td>pic of Jitters</td>
                      </tr>
                      <tr>
                        <td>31a1</td>
                        <td>pic of Piper</td>
                      </tr>
                      <tr>
                        <td>31a2</td>
                        <td>pic of Admiral</td>
                      </tr>
                      <tr>
                        <td>31a3</td>
                        <td>pic of Midge</td>
                      </tr>
                      <tr>
                        <td>31a4</td>
                        <td>pic of Jakey</td>
                      </tr>
                      <tr>
                        <td>31a5</td>
                        <td>pic of Lucha</td>
                      </tr>
                      <tr>
                        <td>31a6</td>
                        <td>pic of Jacques</td>
                      </tr>
                      <tr>
                        <td>31a7</td>
                        <td>pic of Peck</td>
                      </tr>
                      <tr>
                        <td>31a8</td>
                        <td>pic of Sparro</td>
                      </tr>
                      <tr>
                        <td>31a9</td>
                        <td>pic of Medli</td>
                      </tr>
                      <tr>
                        <td>31aa</td>
                        <td>pic of Angus</td>
                      </tr>
                      <tr>
                        <td>31ab</td>
                        <td>pic of Rodeo</td>
                      </tr>
                      <tr>
                        <td>31ac</td>
                        <td>pic of Stu</td>
                      </tr>
                      <tr>
                        <td>31ad</td>
                        <td>pic of T-Bone</td>
                      </tr>
                      <tr>
                        <td>31ae</td>
                        <td>pic of Coach</td>
                      </tr>
                      <tr>
                        <td>31af</td>
                        <td>pic of Vic</td>
                      </tr>
                      <tr>
                        <td>31b0</td>
                        <td>pic of Bob</td>
                      </tr>
                      <tr>
                        <td>31b1</td>
                        <td>pic of Mitzi</td>
                      </tr>
                      <tr>
                        <td>31b2</td>
                        <td>pic of Rosie</td>
                      </tr>
                      <tr>
                        <td>31b3</td>
                        <td>pic of Olivia</td>
                      </tr>
                      <tr>
                        <td>31b4</td>
                        <td>pic of Kiki</td>
                      </tr>
                      <tr>
                        <td>31b5</td>
                        <td>pic of Tangy</td>
                      </tr>
                      <tr>
                        <td>31b6</td>
                        <td>pic of Punchy</td>
                      </tr>
                      <tr>
                        <td>31b7</td>
                        <td>pic of Purrl</td>
                      </tr>
                      <tr>
                        <td>31b8</td>
                        <td>pic of Moe</td>
                      </tr>
                      <tr>
                        <td>31b9</td>
                        <td>pic of Kabuki</td>
                      </tr>
                      <tr>
                        <td>31ba</td>
                        <td>pic of Kid Cat</td>
                      </tr>
                      <tr>
                        <td>31bb</td>
                        <td>pic of Monique</td>
                      </tr>
                      <tr>
                        <td>31bc</td>
                        <td>pic of Tabby</td>
                      </tr>
                      <tr>
                        <td>31bd</td>
                        <td>pic of Stinky</td>
                      </tr>
                      <tr>
                        <td>31be</td>
                        <td>pic of Kitty</td>
                      </tr>
                      <tr>
                        <td>31bf</td>
                        <td>pic of Tom</td>
                      </tr>
                      <tr>
                        <td>31c0</td>
                        <td>pic of Merry</td>
                      </tr>
                      <tr>
                        <td>31c1</td>
                        <td>pic of Felicity</td>
                      </tr>
                      <tr>
                        <td>31c2</td>
                        <td>pic of Lolly</td>
                      </tr>
                      <tr>
                        <td>31c3</td>
                        <td>pic of Ankha</td>
                      </tr>
                      <tr>
                        <td>31c4</td>
                        <td>pic of Rudy</td>
                      </tr>
                      <tr>
                        <td>31c5</td>
                        <td>pic of Katt</td>
                      </tr>
                      <tr>
                        <td>31c6</td>
                        <td>pic of Felyne</td>
                      </tr>
                      <tr>
                        <td>31c7</td>
                        <td>pic of Bluebear</td>
                      </tr>
                      <tr>
                        <td>31c8</td>
                        <td>pic of Maple</td>
                      </tr>
                      <tr>
                        <td>31c9</td>
                        <td>pic of Poncho</td>
                      </tr>
                      <tr>
                        <td>31ca</td>
                        <td>pic of Pudge</td>
                      </tr>
                      <tr>
                        <td>31cb</td>
                        <td>pic of Kody</td>
                      </tr>
                      <tr>
                        <td>31cc</td>
                        <td>pic of Stitches</td>
                      </tr>
                      <tr>
                        <td>31cd</td>
                        <td>pic of Vladimir</td>
                      </tr>
                      <tr>
                        <td>31ce</td>
                        <td>pic of Murphy</td>
                      </tr>
                      <tr>
                        <td>31cf</td>
                        <td>pic of Olive</td>
                      </tr>
                      <tr>
                        <td>31d0</td>
                        <td>pic of Cheri</td>
                      </tr>
                      <tr>
                        <td>31d1</td>
                        <td>pic of June</td>
                      </tr>
                      <tr>
                        <td>31d2</td>
                        <td>pic of Pekoe</td>
                      </tr>
                      <tr>
                        <td>31d3</td>
                        <td>pic of Chester</td>
                      </tr>
                      <tr>
                        <td>31d4</td>
                        <td>pic of Barold</td>
                      </tr>
                      <tr>
                        <td>31d5</td>
                        <td>pic of Tammy</td>
                      </tr>
                      <tr>
                        <td>31d6</td>
                        <td>pic of Marty</td>
                      </tr>
                      <tr>
                        <td>31d7</td>
                        <td>pic of Goose</td>
                      </tr>
                      <tr>
                        <td>31d8</td>
                        <td>pic of Benedict</td>
                      </tr>
                      <tr>
                        <td>31d9</td>
                        <td>pic of Egbert</td>
                      </tr>
                      <tr>
                        <td>31da</td>
                        <td>pic of Ava</td>
                      </tr>
                      <tr>
                        <td>31db</td>
                        <td>pic of Becky</td>
                      </tr>
                      <tr>
                        <td>31dc</td>
                        <td>pic of Plucky</td>
                      </tr>
                      <tr>
                        <td>31dd</td>
                        <td>pic of Knox</td>
                      </tr>
                      <tr>
                        <td>31de</td>
                        <td>pic of Broffina</td>
                      </tr>
                      <tr>
                        <td>31df</td>
                        <td>pic of Ken</td>
                      </tr>
                      <tr>
                        <td>31e0</td>
                        <td>pic of Patty</td>
                      </tr>
                      <tr>
                        <td>31e1</td>
                        <td>pic of Tipper</td>
                      </tr>
                      <tr>
                        <td>31e2</td>
                        <td>pic of Norma</td>
                      </tr>
                      <tr>
                        <td>31e3</td>
                        <td>pic of Naomi</td>
                      </tr>
                      <tr>
                        <td>31e4</td>
                        <td>pic of Alfonso</td>
                      </tr>
                      <tr>
                        <td>31e5</td>
                        <td>pic of Alli</td>
                      </tr>
                      <tr>
                        <td>31e6</td>
                        <td>pic of Boots</td>
                      </tr>
                      <tr>
                        <td>31e7</td>
                        <td>pic of Del</td>
                      </tr>
                      <tr>
                        <td>31e8</td>
                        <td>pic of Sly</td>
                      </tr>
                      <tr>
                        <td>31e9</td>
                        <td>pic of Gayle</td>
                      </tr>
                      <tr>
                        <td>31ea</td>
                        <td>pic of Drago</td>
                      </tr>
                      <tr>
                        <td>31eb</td>
                        <td>pic of Fauna</td>
                      </tr>
                      <tr>
                        <td>31ec</td>
                        <td>pic of Bam</td>
                      </tr>
                      <tr>
                        <td>31ed</td>
                        <td>pic of Zell</td>
                      </tr>
                      <tr>
                        <td>31ee</td>
                        <td>pic of Bruce</td>
                      </tr>
                      <tr>
                        <td>31ef</td>
                        <td>pic of Deirdre</td>
                      </tr>
                      <tr>
                        <td>31f0</td>
                        <td>pic of Lopez</td>
                      </tr>
                      <tr>
                        <td>31f1</td>
                        <td>pic of Fuchsia</td>
                      </tr>
                      <tr>
                        <td>31f2</td>
                        <td>pic of Beau</td>
                      </tr>
                      <tr>
                        <td>31f3</td>
                        <td>pic of Diana</td>
                      </tr>
                      <tr>
                        <td>31f4</td>
                        <td>pic of Erik</td>
                      </tr>
                      <tr>
                        <td>31f5</td>
                        <td>pic of Chelsea</td>
                      </tr>
                      <tr>
                        <td>31f6</td>
                        <td>pic of Goldie</td>
                      </tr>
                      <tr>
                        <td>31f7</td>
                        <td>pic of Butch</td>
                      </tr>
                      <tr>
                        <td>31f8</td>
                        <td>pic of Lucky</td>
                      </tr>
                      <tr>
                        <td>31f9</td>
                        <td>pic of Biskit</td>
                      </tr>
                      <tr>
                        <td>31fa</td>
                        <td>pic of Bones</td>
                      </tr>
                      <tr>
                        <td>31fb</td>
                        <td>pic of Portia</td>
                      </tr>
                      <tr>
                        <td>31fc</td>
                        <td>pic of Walker</td>
                      </tr>
                      <tr>
                        <td>31fd</td>
                        <td>pic of Daisy</td>
                      </tr>
                      <tr>
                        <td>31fe</td>
                        <td>pic of Cookie</td>
                      </tr>
                      <tr>
                        <td>31ff</td>
                        <td>pic of Maddie</td>
                      </tr>
                      <tr>
                        <td>3200</td>
                        <td>pic of Bea</td>
                      </tr>
                      <tr>
                        <td>3201</td>
                        <td>pic of Mac</td>
                      </tr>
                      <tr>
                        <td>3202</td>
                        <td>pic of Marcel</td>
                      </tr>
                      <tr>
                        <td>3203</td>
                        <td>pic of Benjamin</td>
                      </tr>
                      <tr>
                        <td>3204</td>
                        <td>pic of Cherry</td>
                      </tr>
                      <tr>
                        <td>3205</td>
                        <td>pic of Shep</td>
                      </tr>
                      <tr>
                        <td>3206</td>
                        <td>pic of Bill</td>
                      </tr>
                      <tr>
                        <td>3207</td>
                        <td>pic of Joey</td>
                      </tr>
                      <tr>
                        <td>3208</td>
                        <td>pic of Pate</td>
                      </tr>
                      <tr>
                        <td>3209</td>
                        <td>pic of Maelle</td>
                      </tr>
                      <tr>
                        <td>320a</td>
                        <td>pic of Deena</td>
                      </tr>
                      <tr>
                        <td>320b</td>
                        <td>pic of Pompom</td>
                      </tr>
                      <tr>
                        <td>320c</td>
                        <td>pic of Mallary</td>
                      </tr>
                      <tr>
                        <td>320d</td>
                        <td>pic of Freckles</td>
                      </tr>
                      <tr>
                        <td>320e</td>
                        <td>pic of Derwin</td>
                      </tr>
                      <tr>
                        <td>320f</td>
                        <td>pic of Drake</td>
                      </tr>
                      <tr>
                        <td>3210</td>
                        <td>pic of Scoot</td>
                      </tr>
                      <tr>
                        <td>3211</td>
                        <td>pic of Weber</td>
                      </tr>
                      <tr>
                        <td>3212</td>
                        <td>pic of Miranda</td>
                      </tr>
                      <tr>
                        <td>3213</td>
                        <td>pic of Ketchup</td>
                      </tr>
                      <tr>
                        <td>3214</td>
                        <td>pic of Gloria</td>
                      </tr>
                      <tr>
                        <td>3215</td>
                        <td>pic of Molly</td>
                      </tr>
                      <tr>
                        <td>3216</td>
                        <td>pic of Quillson</td>
                      </tr>
                      <tr>
                        <td>3217</td>
                        <td>pic of Opal</td>
                      </tr>
                      <tr>
                        <td>3218</td>
                        <td>pic of Dizzy</td>
                      </tr>
                      <tr>
                        <td>3219</td>
                        <td>pic of Big Top</td>
                      </tr>
                      <tr>
                        <td>321a</td>
                        <td>pic of Eloise</td>
                      </tr>
                      <tr>
                        <td>321b</td>
                        <td>pic of Margie</td>
                      </tr>
                      <tr>
                        <td>321c</td>
                        <td>pic of Paolo</td>
                      </tr>
                      <tr>
                        <td>321d</td>
                        <td>pic of Axel</td>
                      </tr>
                      <tr>
                        <td>321e</td>
                        <td>pic of Ellie</td>
                      </tr>
                      <tr>
                        <td>321f</td>
                        <td>pic of Tucker</td>
                      </tr>
                      <tr>
                        <td>3220</td>
                        <td>pic of Tia</td>
                      </tr>
                      <tr>
                        <td>3221</td>
                        <td>pic of Chai</td>
                      </tr>
                      <tr>
                        <td>3222</td>
                        <td>pic of Lily</td>
                      </tr>
                      <tr>
                        <td>3223</td>
                        <td>pic of Ribbot</td>
                      </tr>
                      <tr>
                        <td>3224</td>
                        <td>pic of Frobert</td>
                      </tr>
                      <tr>
                        <td>3225</td>
                        <td>pic of Camofrog</td>
                      </tr>
                      <tr>
                        <td>3226</td>
                        <td>pic of Drift</td>
                      </tr>
                      <tr>
                        <td>3227</td>
                        <td>pic of Wart Jr.</td>
                      </tr>
                      <tr>
                        <td>3228</td>
                        <td>pic of Puddles</td>
                      </tr>
                      <tr>
                        <td>3229</td>
                        <td>pic of Jeremiah</td>
                      </tr>
                      <tr>
                        <td>322a</td>
                        <td>pic of Tad</td>
                      </tr>
                      <tr>
                        <td>322b</td>
                        <td>pic of Cousteau</td>
                      </tr>
                      <tr>
                        <td>322c</td>
                        <td>pic of Huck</td>
                      </tr>
                      <tr>
                        <td>322d</td>
                        <td>pic of Prince</td>
                      </tr>
                      <tr>
                        <td>322e</td>
                        <td>pic of Jambette</td>
                      </tr>
                      <tr>
                        <td>322f</td>
                        <td>pic of Raddle</td>
                      </tr>
                      <tr>
                        <td>3230</td>
                        <td>pic of Gigi</td>
                      </tr>
                      <tr>
                        <td>3231</td>
                        <td>pic of Croque</td>
                      </tr>
                      <tr>
                        <td>3232</td>
                        <td>pic of Diva</td>
                      </tr>
                      <tr>
                        <td>3233</td>
                        <td>pic of Henry</td>
                      </tr>
                      <tr>
                        <td>3234</td>
                        <td>pic of Chevre</td>
                      </tr>
                      <tr>
                        <td>3235</td>
                        <td>pic of Nan</td>
                      </tr>
                      <tr>
                        <td>3236</td>
                        <td>pic of Billy</td>
                      </tr>
                      <tr>
                        <td>3237</td>
                        <td>pic of Gruff</td>
                      </tr>
                      <tr>
                        <td>3238</td>
                        <td>pic of Velma</td>
                      </tr>
                      <tr>
                        <td>3239</td>
                        <td>pic of Kidd</td>
                      </tr>
                      <tr>
                        <td>323a</td>
                        <td>pic of Pashmina</td>
                      </tr>
                      <tr>
                        <td>323b</td>
                        <td>pic of Cesar</td>
                      </tr>
                      <tr>
                        <td>323c</td>
                        <td>pic of Peewee</td>
                      </tr>
                      <tr>
                        <td>323d</td>
                        <td>pic of Boone</td>
                      </tr>
                      <tr>
                        <td>323e</td>
                        <td>pic of Louie</td>
                      </tr>
                      <tr>
                        <td>323f</td>
                        <td>pic of Boyd</td>
                      </tr>
                      <tr>
                        <td>3240</td>
                        <td>pic of Violet</td>
                      </tr>
                      <tr>
                        <td>3241</td>
                        <td>pic of Al</td>
                      </tr>
                      <tr>
                        <td>3242</td>
                        <td>pic of Rocket</td>
                      </tr>
                      <tr>
                        <td>3243</td>
                        <td>pic of Hans</td>
                      </tr>
                      <tr>
                        <td>3244</td>
                        <td>pic of Rilla</td>
                      </tr>
                      <tr>
                        <td>3245</td>
                        <td>pic of Hamlet</td>
                      </tr>
                      <tr>
                        <td>3246</td>
                        <td>pic of Apple</td>
                      </tr>
                      <tr>
                        <td>3247</td>
                        <td>pic of Graham</td>
                      </tr>
                      <tr>
                        <td>3248</td>
                        <td>pic of Rodney</td>
                      </tr>
                      <tr>
                        <td>3249</td>
                        <td>pic of Soleil</td>
                      </tr>
                      <tr>
                        <td>324a</td>
                        <td>pic of Clay</td>
                      </tr>
                      <tr>
                        <td>324b</td>
                        <td>pic of Flurry</td>
                      </tr>
                      <tr>
                        <td>324c</td>
                        <td>pic of Hamphrey</td>
                      </tr>
                      <tr>
                        <td>324d</td>
                        <td>pic of Holden (Unused)</td>
                      </tr>
                      <tr>
                        <td>324e</td>
                        <td>pic of Rocco</td>
                      </tr>
                      <tr>
                        <td>324f</td>
                        <td>pic of Bubbles</td>
                      </tr>
                      <tr>
                        <td>3250</td>
                        <td>pic of Bertha</td>
                      </tr>
                      <tr>
                        <td>3251</td>
                        <td>pic of Biff</td>
                      </tr>
                      <tr>
                        <td>3252</td>
                        <td>pic of Bitty</td>
                      </tr>
                      <tr>
                        <td>3253</td>
                        <td>pic of Harry</td>
                      </tr>
                      <tr>
                        <td>3254</td>
                        <td>pic of Hippeux</td>
                      </tr>
                      <tr>
                        <td>3255</td>
                        <td>pic of Buck</td>
                      </tr>
                      <tr>
                        <td>3256</td>
                        <td>pic of Victoria</td>
                      </tr>
                      <tr>
                        <td>3257</td>
                        <td>pic of Savannah</td>
                      </tr>
                      <tr>
                        <td>3258</td>
                        <td>pic of Elmer</td>
                      </tr>
                      <tr>
                        <td>3259</td>
                        <td>pic of Roscoe</td>
                      </tr>
                      <tr>
                        <td>325a</td>
                        <td>pic of Winnie</td>
                      </tr>
                      <tr>
                        <td>325b</td>
                        <td>pic of Ed</td>
                      </tr>
                      <tr>
                        <td>325c</td>
                        <td>pic of Cleo</td>
                      </tr>
                      <tr>
                        <td>325d</td>
                        <td>pic of Peaches</td>
                      </tr>
                      <tr>
                        <td>325e</td>
                        <td>pic of Annalise</td>
                      </tr>
                      <tr>
                        <td>325f</td>
                        <td>pic of Clyde</td>
                      </tr>
                      <tr>
                        <td>3260</td>
                        <td>pic of Colton</td>
                      </tr>
                      <tr>
                        <td>3261</td>
                        <td>pic of Papi</td>
                      </tr>
                      <tr>
                        <td>3262</td>
                        <td>pic of Julian</td>
                      </tr>
                      <tr>
                        <td>3263</td>
                        <td>pic of Filly (Unused)</td>
                      </tr>
                      <tr>
                        <td>3264</td>
                        <td>pic of Epona</td>
                      </tr>
                      <tr>
                        <td>3265</td>
                        <td>pic of Yuka</td>
                      </tr>
                      <tr>
                        <td>3266</td>
                        <td>pic of Alice</td>
                      </tr>
                      <tr>
                        <td>3267</td>
                        <td>pic of Melba</td>
                      </tr>
                      <tr>
                        <td>3268</td>
                        <td>pic of Sydney</td>
                      </tr>
                      <tr>
                        <td>3269</td>
                        <td>pic of Gonzo</td>
                      </tr>
                      <tr>
                        <td>326a</td>
                        <td>pic of Ozzie</td>
                      </tr>
                      <tr>
                        <td>326b</td>
                        <td>pic of Canberra</td>
                      </tr>
                      <tr>
                        <td>326c</td>
                        <td>pic of Lyman</td>
                      </tr>
                      <tr>
                        <td>326d</td>
                        <td>pic of Eugene</td>
                      </tr>
                      <tr>
                        <td>326e</td>
                        <td>pic of Kitt</td>
                      </tr>
                      <tr>
                        <td>326f</td>
                        <td>pic of Mathilda</td>
                      </tr>
                      <tr>
                        <td>3270</td>
                        <td>pic of Carrie</td>
                      </tr>
                      <tr>
                        <td>3271</td>
                        <td>pic of Astrid</td>
                      </tr>
                      <tr>
                        <td>3272</td>
                        <td>pic of Sylvia</td>
                      </tr>
                      <tr>
                        <td>3273</td>
                        <td>pic of Walt</td>
                      </tr>
                      <tr>
                        <td>3274</td>
                        <td>pic of Rooney</td>
                      </tr>
                      <tr>
                        <td>3275</td>
                        <td>pic of Marcie</td>
                      </tr>
                      <tr>
                        <td>3276</td>
                        <td>pic of Bud</td>
                      </tr>
                      <tr>
                        <td>3277</td>
                        <td>pic of Elvis</td>
                      </tr>
                      <tr>
                        <td>3278</td>
                        <td>pic of Rex</td>
                      </tr>
                      <tr>
                        <td>3279</td>
                        <td>pic of Leopold</td>
                      </tr>
                      <tr>
                        <td>327a</td>
                        <td>pic of Mott</td>
                      </tr>
                      <tr>
                        <td>327b</td>
                        <td>pic of Rory</td>
                      </tr>
                      <tr>
                        <td>327c</td>
                        <td>pic of Lionel</td>
                      </tr>
                      <tr>
                        <td>327d</td>
                        <td>pic of Nana</td>
                      </tr>
                      <tr>
                        <td>327e</td>
                        <td>pic of Simon</td>
                      </tr>
                      <tr>
                        <td>327f</td>
                        <td>pic of Tammi</td>
                      </tr>
                      <tr>
                        <td>3280</td>
                        <td>pic of Monty</td>
                      </tr>
                      <tr>
                        <td>3281</td>
                        <td>pic of Elise</td>
                      </tr>
                      <tr>
                        <td>3282</td>
                        <td>pic of Flip</td>
                      </tr>
                      <tr>
                        <td>3283</td>
                        <td>pic of Shari</td>
                      </tr>
                      <tr>
                        <td>3284</td>
                        <td>pic of Deli</td>
                      </tr>
                      <tr>
                        <td>3285</td>
                        <td>pic of Dora</td>
                      </tr>
                      <tr>
                        <td>3286</td>
                        <td>pic of Limberg</td>
                      </tr>
                      <tr>
                        <td>3287</td>
                        <td>pic of Bella</td>
                      </tr>
                      <tr>
                        <td>3288</td>
                        <td>pic of Bree</td>
                      </tr>
                      <tr>
                        <td>3289</td>
                        <td>pic of Samson</td>
                      </tr>
                      <tr>
                        <td>328a</td>
                        <td>pic of Rod</td>
                      </tr>
                      <tr>
                        <td>328b</td>
                        <td>pic of Candi</td>
                      </tr>
                      <tr>
                        <td>328c</td>
                        <td>pic of Rizzo</td>
                      </tr>
                      <tr>
                        <td>328d</td>
                        <td>pic of Anicotti</td>
                      </tr>
                      <tr>
                        <td>328e</td>
                        <td>pic of Broccolo</td>
                      </tr>
                      <tr>
                        <td>328f</td>
                        <td>pic of Moose</td>
                      </tr>
                      <tr>
                        <td>3290</td>
                        <td>pic of Bettina</td>
                      </tr>
                      <tr>
                        <td>3291</td>
                        <td>pic of Greta</td>
                      </tr>
                      <tr>
                        <td>3292</td>
                        <td>pic of Penelope</td>
                      </tr>
                      <tr>
                        <td>3293</td>
                        <td>pic of Chadder</td>
                      </tr>
                      <tr>
                        <td>3294</td>
                        <td>pic of Octavian</td>
                      </tr>
                      <tr>
                        <td>3295</td>
                        <td>pic of Marina</td>
                      </tr>
                      <tr>
                        <td>3296</td>
                        <td>pic of Zucker</td>
                      </tr>
                      <tr>
                        <td>3297</td>
                        <td>pic of Inkwell</td>
                      </tr>
                      <tr>
                        <td>3298</td>
                        <td>pic of Queenie</td>
                      </tr>
                      <tr>
                        <td>3299</td>
                        <td>pic of Gladys</td>
                      </tr>
                      <tr>
                        <td>329a</td>
                        <td>pic of Sandy</td>
                      </tr>
                      <tr>
                        <td>329b</td>
                        <td>pic of Sprocket</td>
                      </tr>
                      <tr>
                        <td>329c</td>
                        <td>pic of Julia</td>
                      </tr>
                      <tr>
                        <td>329d</td>
                        <td>pic of Cranston</td>
                      </tr>
                      <tr>
                        <td>329e</td>
                        <td>pic of Phil</td>
                      </tr>
                      <tr>
                        <td>329f</td>
                        <td>pic of Blanche</td>
                      </tr>
                      <tr>
                        <td>32a0</td>
                        <td>pic of Flora</td>
                      </tr>
                      <tr>
                        <td>32a1</td>
                        <td>pic of Phoebe</td>
                      </tr>
                      <tr>
                        <td>32a2</td>
                        <td>pic of Apollo</td>
                      </tr>
                      <tr>
                        <td>32a3</td>
                        <td>pic of Amelia</td>
                      </tr>
                      <tr>
                        <td>32a4</td>
                        <td>pic of Pierce</td>
                      </tr>
                      <tr>
                        <td>32a5</td>
                        <td>pic of Buzz</td>
                      </tr>
                      <tr>
                        <td>32a6</td>
                        <td>pic of Avery</td>
                      </tr>
                      <tr>
                        <td>32a7</td>
                        <td>pic of Frank</td>
                      </tr>
                      <tr>
                        <td>32a8</td>
                        <td>pic of Sterling</td>
                      </tr>
                      <tr>
                        <td>32a9</td>
                        <td>pic of Keaton</td>
                      </tr>
                      <tr>
                        <td>32aa</td>
                        <td>pic of Celia</td>
                      </tr>
                      <tr>
                        <td>32ab</td>
                        <td>pic of Aurora</td>
                      </tr>
                      <tr>
                        <td>32ac</td>
                        <td>pic of Roald</td>
                      </tr>
                      <tr>
                        <td>32ad</td>
                        <td>pic of Cube</td>
                      </tr>
                      <tr>
                        <td>32ae</td>
                        <td>pic of Hopper</td>
                      </tr>
                      <tr>
                        <td>32af</td>
                        <td>pic of Friga</td>
                      </tr>
                      <tr>
                        <td>32b0</td>
                        <td>pic of Gwen</td>
                      </tr>
                      <tr>
                        <td>32b1</td>
                        <td>pic of Puck</td>
                      </tr>
                      <tr>
                        <td>32b2</td>
                        <td>pic of Wade</td>
                      </tr>
                      <tr>
                        <td>32b3</td>
                        <td>pic of Boomer</td>
                      </tr>
                      <tr>
                        <td>32b4</td>
                        <td>pic of Iggly</td>
                      </tr>
                      <tr>
                        <td>32b5</td>
                        <td>pic of Tex</td>
                      </tr>
                      <tr>
                        <td>32b6</td>
                        <td>pic of Flo</td>
                      </tr>
                      <tr>
                        <td>32b7</td>
                        <td>pic of Sprinkles</td>
                      </tr>
                      <tr>
                        <td>32b8</td>
                        <td>pic of Curly</td>
                      </tr>
                      <tr>
                        <td>32b9</td>
                        <td>pic of Truffles</td>
                      </tr>
                      <tr>
                        <td>32ba</td>
                        <td>pic of Rasher</td>
                      </tr>
                      <tr>
                        <td>32bb</td>
                        <td>pic of Hugh</td>
                      </tr>
                      <tr>
                        <td>32bc</td>
                        <td>pic of Lucy</td>
                      </tr>
                      <tr>
                        <td>32bd</td>
                        <td>pic of Crackle</td>
                      </tr>
                      <tr>
                        <td>32be</td>
                        <td>pic of Cobb</td>
                      </tr>
                      <tr>
                        <td>32bf</td>
                        <td>pic of Boris</td>
                      </tr>
                      <tr>
                        <td>32c0</td>
                        <td>pic of Maggie</td>
                      </tr>
                      <tr>
                        <td>32c1</td>
                        <td>pic of Peggy</td>
                      </tr>
                      <tr>
                        <td>32c2</td>
                        <td>pic of Gala</td>
                      </tr>
                      <tr>
                        <td>32c3</td>
                        <td>pic of Chops</td>
                      </tr>
                      <tr>
                        <td>32c4</td>
                        <td>pic of Kevin</td>
                      </tr>
                      <tr>
                        <td>32c5</td>
                        <td>pic of Pancetti</td>
                      </tr>
                      <tr>
                        <td>32c6</td>
                        <td>pic of Agnes</td>
                      </tr>
                      <tr>
                        <td>32c7</td>
                        <td>pic of Ganon</td>
                      </tr>
                      <tr>
                        <td>32c8</td>
                        <td>pic of Bunnie</td>
                      </tr>
                      <tr>
                        <td>32c9</td>
                        <td>pic of Dotty</td>
                      </tr>
                      <tr>
                        <td>32ca</td>
                        <td>pic of Coco</td>
                      </tr>
                      <tr>
                        <td>32cb</td>
                        <td>pic of Snake</td>
                      </tr>
                      <tr>
                        <td>32cc</td>
                        <td>pic of Gaston</td>
                      </tr>
                      <tr>
                        <td>32cd</td>
                        <td>pic of Gabi</td>
                      </tr>
                      <tr>
                        <td>32ce</td>
                        <td>pic of Pippy</td>
                      </tr>
                      <tr>
                        <td>32cf</td>
                        <td>pic of Tiffany</td>
                      </tr>
                      <tr>
                        <td>32d0</td>
                        <td>pic of Genji</td>
                      </tr>
                      <tr>
                        <td>32d1</td>
                        <td>pic of Ruby</td>
                      </tr>
                      <tr>
                        <td>32d2</td>
                        <td>pic of Doc</td>
                      </tr>
                      <tr>
                        <td>32d3</td>
                        <td>pic of Claude</td>
                      </tr>
                      <tr>
                        <td>32d4</td>
                        <td>pic of Francine</td>
                      </tr>
                      <tr>
                        <td>32d5</td>
                        <td>pic of Chrissy</td>
                      </tr>
                      <tr>
                        <td>32d6</td>
                        <td>pic of Hopkins</td>
                      </tr>
                      <tr>
                        <td>32d7</td>
                        <td>pic of O'Hare</td>
                      </tr>
                      <tr>
                        <td>32d8</td>
                        <td>pic of Carmen</td>
                      </tr>
                      <tr>
                        <td>32d9</td>
                        <td>pic of Bonbon</td>
                      </tr>
                      <tr>
                        <td>32da</td>
                        <td>pic of Cole</td>
                      </tr>
                      <tr>
                        <td>32db</td>
                        <td>pic of Mira</td>
                      </tr>
                      <tr>
                        <td>32dc</td>
                        <td>pic of Toby</td>
                      </tr>
                      <tr>
                        <td>32dd</td>
                        <td>pic of Tank</td>
                      </tr>
                      <tr>
                        <td>32de</td>
                        <td>pic of Rhonda</td>
                      </tr>
                      <tr>
                        <td>32df</td>
                        <td>pic of Spike</td>
                      </tr>
                      <tr>
                        <td>32e0</td>
                        <td>pic of Hornsby</td>
                      </tr>
                      <tr>
                        <td>32e1</td>
                        <td>pic of Merengue</td>
                      </tr>
                      <tr>
                        <td>32e2</td>
                        <td>pic of Renée</td>
                      </tr>
                      <tr>
                        <td>32e3</td>
                        <td>pic of Vesta</td>
                      </tr>
                      <tr>
                        <td>32e4</td>
                        <td>pic of Baabara</td>
                      </tr>
                      <tr>
                        <td>32e5</td>
                        <td>pic of Eunice</td>
                      </tr>
                      <tr>
                        <td>32e6</td>
                        <td>pic of Stella</td>
                      </tr>
                      <tr>
                        <td>32e7</td>
                        <td>pic of Cashmere</td>
                      </tr>
                      <tr>
                        <td>32e8</td>
                        <td>pic of Willow</td>
                      </tr>
                      <tr>
                        <td>32e9</td>
                        <td>pic of Curlos</td>
                      </tr>
                      <tr>
                        <td>32ea</td>
                        <td>pic of Wendy</td>
                      </tr>
                      <tr>
                        <td>32eb</td>
                        <td>pic of Timbra</td>
                      </tr>
                      <tr>
                        <td>32ec</td>
                        <td>pic of Frita</td>
                      </tr>
                      <tr>
                        <td>32ed</td>
                        <td>pic of Muffy</td>
                      </tr>
                      <tr>
                        <td>32ee</td>
                        <td>pic of Pietro</td>
                      </tr>
                      <tr>
                        <td>32ef</td>
                        <td>pic of Étoile</td>
                      </tr>
                      <tr>
                        <td>32f0</td>
                        <td>pic of Peanut</td>
                      </tr>
                      <tr>
                        <td>32f1</td>
                        <td>pic of Blaire</td>
                      </tr>
                      <tr>
                        <td>32f2</td>
                        <td>pic of Filbert</td>
                      </tr>
                      <tr>
                        <td>32f3</td>
                        <td>pic of Pecan</td>
                      </tr>
                      <tr>
                        <td>32f4</td>
                        <td>pic of Nibbles</td>
                      </tr>
                      <tr>
                        <td>32f5</td>
                        <td>pic of Agent S</td>
                      </tr>
                      <tr>
                        <td>32f6</td>
                        <td>pic of Caroline</td>
                      </tr>
                      <tr>
                        <td>32f7</td>
                        <td>pic of Sally</td>
                      </tr>
                      <tr>
                        <td>32f8</td>
                        <td>pic of Static</td>
                      </tr>
                      <tr>
                        <td>32f9</td>
                        <td>pic of Mint</td>
                      </tr>
                      <tr>
                        <td>32fa</td>
                        <td>pic of Ricky</td>
                      </tr>
                      <tr>
                        <td>32fb</td>
                        <td>pic of Cally</td>
                      </tr>
                      <tr>
                        <td>32fc</td>
                        <td>pic of Tasha</td>
                      </tr>
                      <tr>
                        <td>32fd</td>
                        <td>pic of Sylvana</td>
                      </tr>
                      <tr>
                        <td>32fe</td>
                        <td>pic of Poppy</td>
                      </tr>
                      <tr>
                        <td>32ff</td>
                        <td>pic of Sheldon</td>
                      </tr>
                      <tr>
                        <td>3300</td>
                        <td>pic of Marshal</td>
                      </tr>
                      <tr>
                        <td>3301</td>
                        <td>pic of Hazel</td>
                      </tr>
                      <tr>
                        <td>3302</td>
                        <td>pic of Cece</td>
                      </tr>
                      <tr>
                        <td>3303</td>
                        <td>pic of Viché</td>
                      </tr>
                      <tr>
                        <td>3304</td>
                        <td>pic of Rolf</td>
                      </tr>
                      <tr>
                        <td>3305</td>
                        <td>pic of Rowan</td>
                      </tr>
                      <tr>
                        <td>3306</td>
                        <td>pic of Tybalt</td>
                      </tr>
                      <tr>
                        <td>3307</td>
                        <td>pic of Bangle</td>
                      </tr>
                      <tr>
                        <td>3308</td>
                        <td>pic of Leonardo</td>
                      </tr>
                      <tr>
                        <td>3309</td>
                        <td>pic of Claudia</td>
                      </tr>
                      <tr>
                        <td>330a</td>
                        <td>pic of Bianca</td>
                      </tr>
                      <tr>
                        <td>330b</td>
                        <td>pic of Chief</td>
                      </tr>
                      <tr>
                        <td>330c</td>
                        <td>pic of Lobo</td>
                      </tr>
                      <tr>
                        <td>330d</td>
                        <td>pic of Wolfgang</td>
                      </tr>
                      <tr>
                        <td>330e</td>
                        <td>pic of Whitney</td>
                      </tr>
                      <tr>
                        <td>330f</td>
                        <td>pic of Dobie</td>
                      </tr>
                      <tr>
                        <td>3310</td>
                        <td>pic of Freya</td>
                      </tr>
                      <tr>
                        <td>3311</td>
                        <td>pic of Fang</td>
                      </tr>
                      <tr>
                        <td>3312</td>
                        <td>pic of Vivian</td>
                      </tr>
                      <tr>
                        <td>3313</td>
                        <td>pic of Skye</td>
                      </tr>
                      <tr>
                        <td>3314</td>
                        <td>pic of Kyle</td>
                      </tr>
                      <tr>
                        <td>3315</td>
                        <td>pic of Wolf Link</td>
                      </tr>
                  </table>
                </div>
            </div>
            <!-- <footer class="card-footer">
                <a class="card-footer-item">Save</a>
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item">Delete</a>
            </footer> -->
        </b-collapse>
    </div>
</template>

<script>
function picturesFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("picturesInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("picturesTable");
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
    picturesFunction
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

#picturevue, .card {
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
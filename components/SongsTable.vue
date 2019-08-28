<template>
    <div id="songsvue" class="container has-text-centered">
      <b-collapse class="card" aria-id="songsTable" id="songs" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="songsTable">
                <p class="card-header-title is-centered">
                    Songs
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                <input type="text" class="input is-rounded" id="songsInput" v-on:keyup="songsFunction()" placeholder="Search for item names..">
                <br><br>
                <table id="songsTable">
                    <tr>
                        <th>Hex</th>
                        <th>Item Name</th>
                    </tr>
                    <tr>
                        <td>212b</td>
                        <td>K.K. Chorale</td>
                      </tr>
                      <tr>
                        <td>212c</td>
                        <td>K.K. March</td>
                      </tr>
                      <tr>
                        <td>212d</td>
                        <td>K.K. Waltz</td>
                      </tr>
                      <tr>
                        <td>212e</td>
                        <td>K.K. Swing</td>
                      </tr>
                      <tr>
                        <td>212f</td>
                        <td>K.K. Jazz</td>
                      </tr>
                      <tr>
                        <td>2130</td>
                        <td>K.K. Fusion</td>
                      </tr>
                      <tr>
                        <td>2131</td>
                        <td>K.K. Étude</td>
                      </tr>
                      <tr>
                        <td>2132</td>
                        <td>K.K. Lullaby</td>
                      </tr>
                      <tr>
                        <td>2133</td>
                        <td>K.K. Aria</td>
                      </tr>
                      <tr>
                        <td>2134</td>
                        <td>K.K. Samba</td>
                      </tr>
                      <tr>
                        <td>2135</td>
                        <td>K.K. Bossa</td>
                      </tr>
                      <tr>
                        <td>2136</td>
                        <td>K.K. Calypso</td>
                      </tr>
                      <tr>
                        <td>2137</td>
                        <td>K.K. Salsa</td>
                      </tr>
                      <tr>
                        <td>2138</td>
                        <td>K.K. Mambo</td>
                      </tr>
                      <tr>
                        <td>2139</td>
                        <td>K.K. Reggae</td>
                      </tr>
                      <tr>
                        <td>213a</td>
                        <td>K.K. Ska</td>
                      </tr>
                      <tr>
                        <td>213b</td>
                        <td>K.K. Tango</td>
                      </tr>
                      <tr>
                        <td>213c</td>
                        <td>K.K. Faire</td>
                      </tr>
                      <tr>
                        <td>213d</td>
                        <td>Aloha K.K.</td>
                      </tr>
                      <tr>
                        <td>213e</td>
                        <td>Lucky K.K.</td>
                      </tr>
                      <tr>
                        <td>213f</td>
                        <td>K.K. Condor</td>
                      </tr>
                      <tr>
                        <td>2140</td>
                        <td>K.K. Steppe</td>
                      </tr>
                      <tr>
                        <td>2141</td>
                        <td>Imperial K.K.</td>
                      </tr>
                      <tr>
                        <td>2142</td>
                        <td>K.K. Casbah</td>
                      </tr>
                      <tr>
                        <td>2143</td>
                        <td>K.K. Safari</td>
                      </tr>
                      <tr>
                        <td>2144</td>
                        <td>K.K. Folk</td>
                      </tr>
                      <tr>
                        <td>2145</td>
                        <td>K.K. Rock</td>
                      </tr>
                      <tr>
                        <td>2146</td>
                        <td>Rockin' K.K.</td>
                      </tr>
                      <tr>
                        <td>2147</td>
                        <td>K.K. Ragtime</td>
                      </tr>
                      <tr>
                        <td>2148</td>
                        <td>K.K. Gumbo</td>
                      </tr>
                      <tr>
                        <td>2149</td>
                        <td>The K. Funk</td>
                      </tr>
                      <tr>
                        <td>214a</td>
                        <td>K.K. Blues</td>
                      </tr>
                      <tr>
                        <td>214b</td>
                        <td>Soulful K.K.</td>
                      </tr>
                      <tr>
                        <td>214c</td>
                        <td>K.K. Soul</td>
                      </tr>
                      <tr>
                        <td>214d</td>
                        <td>K.K. Cruisin'</td>
                      </tr>
                      <tr>
                        <td>214e</td>
                        <td>K.K. Love Song</td>
                      </tr>
                      <tr>
                        <td>214f</td>
                        <td>K.K. D&B</td>
                      </tr>
                      <tr>
                        <td>2150</td>
                        <td>K.K. Technopop</td>
                      </tr>
                      <tr>
                        <td>2151</td>
                        <td>DJ K.K.</td>
                      </tr>
                      <tr>
                        <td>2152</td>
                        <td>Only Me</td>
                      </tr>
                      <tr>
                        <td>2153</td>
                        <td>K.K. Country</td>
                      </tr>
                      <tr>
                        <td>2154</td>
                        <td>Surfin' K.K.</td>
                      </tr>
                      <tr>
                        <td>2155</td>
                        <td>K.K. Ballad</td>
                      </tr>
                      <tr>
                        <td>2156</td>
                        <td>Comrade K.K.</td>
                      </tr>
                      <tr>
                        <td>2157</td>
                        <td>K.K. Lament</td>
                      </tr>
                      <tr>
                        <td>2158</td>
                        <td>Go K.K. Rider</td>
                      </tr>
                      <tr>
                        <td>2159</td>
                        <td>K.K. Dirge</td>
                      </tr>
                      <tr>
                        <td>215a</td>
                        <td>K.K. Western</td>
                      </tr>
                      <tr>
                        <td>215b</td>
                        <td>Mr. K.K.</td>
                      </tr>
                      <tr>
                        <td>215c</td>
                        <td>Café K.K.</td>
                      </tr>
                      <tr>
                        <td>215d</td>
                        <td>K.K. Parade</td>
                      </tr>
                      <tr>
                        <td>215e</td>
                        <td>Señor K.K.</td>
                      </tr>
                      <tr>
                        <td>215f</td>
                        <td>K.K. Song</td>
                      </tr>
                      <tr>
                        <td>2160</td>
                        <td>I Love You</td>
                      </tr>
                      <tr>
                        <td>2161</td>
                        <td>Two Days Ago</td>
                      </tr>
                      <tr>
                        <td>2162</td>
                        <td>My Place</td>
                      </tr>
                      <tr>
                        <td>2163</td>
                        <td>Forest Life</td>
                      </tr>
                      <tr>
                        <td>2164</td>
                        <td>To the Edge</td>
                      </tr>
                      <tr>
                        <td>2165</td>
                        <td>Pondering</td>
                      </tr>
                      <tr>
                        <td>2166</td>
                        <td>K.K. Dixie</td>
                      </tr>
                      <tr>
                        <td>2167</td>
                        <td>K.K. Marathon</td>
                      </tr>
                      <tr>
                        <td>2168</td>
                        <td>King K.K.</td>
                      </tr>
                      <tr>
                        <td>2169</td>
                        <td>Mountain Song</td>
                      </tr>
                      <tr>
                        <td>216a</td>
                        <td>Marine Song 2001</td>
                      </tr>
                      <tr>
                        <td>216b</td>
                        <td>Neapolitan</td>
                      </tr>
                      <tr>
                        <td>216c</td>
                        <td>Steep Hill</td>
                      </tr>
                      <tr>
                        <td>216d</td>
                        <td>K.K. Rockabilly</td>
                      </tr>
                      <tr>
                        <td>216e</td>
                        <td>Agent K.K.</td>
                      </tr>
                      <tr>
                        <td>216f</td>
                        <td>K.K. Rally</td>
                      </tr>
                      <tr>
                        <td>2170</td>
                        <td>K.K. Metal</td>
                      </tr>
                      <tr>
                        <td>2171</td>
                        <td>Stale Cupcakes</td>
                      </tr>
                      <tr>
                        <td>2172</td>
                        <td>Spring Blossoms</td>
                      </tr>
                      <tr>
                        <td>2173</td>
                        <td>Wandering</td>
                      </tr>
                      <tr>
                        <td>2174</td>
                        <td>K.K. House</td>
                      </tr>
                      <tr>
                        <td>2175</td>
                        <td>K.K. Sonata</td>
                      </tr>
                      <tr>
                        <td>2176</td>
                        <td>Hypno K.K.</td>
                      </tr>
                      <tr>
                        <td>2177</td>
                        <td>K.K. Stroll</td>
                      </tr>
                      <tr>
                        <td>2178</td>
                        <td>K.K. Island</td>
                      </tr>
                      <tr>
                        <td>2179</td>
                        <td>Space K.K.</td>
                      </tr>
                      <tr>
                        <td>217a</td>
                        <td>K.K. Adventure</td>
                      </tr>
                      <tr>
                        <td>217b</td>
                        <td>K.K. Oasis</td>
                      </tr>
                      <tr>
                        <td>217c</td>
                        <td>K.K. Bazaar</td>
                      </tr>
                      <tr>
                        <td>217d</td>
                        <td>K.K. Milonga</td>
                      </tr>
                      <tr>
                        <td>217e</td>
                        <td>K.K. Groove</td>
                      </tr>
                      <tr>
                        <td>217f</td>
                        <td>K.K. Jongara</td>
                      </tr>
                      <tr>
                        <td>2180</td>
                        <td>K.K. Flamenco</td>
                      </tr>
                      <tr>
                        <td>2181</td>
                        <td>K.K. Moody</td>
                      </tr>
                      <tr>
                        <td>2182</td>
                        <td>Bubblegum K.K.</td>
                      </tr>
                      <tr>
                        <td>2183</td>
                        <td>K.K. Synth</td>
                      </tr>
                      <tr>
                        <td>2184</td>
                        <td>K.K. Disco</td>
                      </tr>
                      <tr>
                        <td>2185</td>
                        <td>K.K. Birthday</td>
                      </tr>
                      <tr>
                        <td>2189</td>
                        <td>K.K. Chorale (Wall)</td>
                      </tr>
                      <tr>
                        <td>218a</td>
                        <td>K.K. March (Wall)</td>
                      </tr>
                      <tr>
                        <td>218b</td>
                        <td>K.K. Waltz (Wall)</td>
                      </tr>
                      <tr>
                        <td>218c</td>
                        <td>K.K. Swing (Wall)</td>
                      </tr>
                      <tr>
                        <td>218d</td>
                        <td>K.K. Jazz (Wall)</td>
                      </tr>
                      <tr>
                        <td>218e</td>
                        <td>K.K. Fusion (Wall)</td>
                      </tr>
                      <tr>
                        <td>218f</td>
                        <td>K.K. Étude (Wall)</td>
                      </tr>
                      <tr>
                        <td>2190</td>
                        <td>K.K. Lullaby (Wall)</td>
                      </tr>
                      <tr>
                        <td>2191</td>
                        <td>K.K. Aria (Wall)</td>
                      </tr>
                      <tr>
                        <td>2192</td>
                        <td>K.K. Samba (Wall)</td>
                      </tr>
                      <tr>
                        <td>2193</td>
                        <td>K.K. Bossa (Wall)</td>
                      </tr>
                      <tr>
                        <td>2194</td>
                        <td>K.K. Calypso (Wall)</td>
                      </tr>
                      <tr>
                        <td>2195</td>
                        <td>K.K. Salsa (Wall)</td>
                      </tr>
                      <tr>
                        <td>2196</td>
                        <td>K.K. Mambo (Wall)</td>
                      </tr>
                      <tr>
                        <td>2197</td>
                        <td>K.K. Reggae (Wall)</td>
                      </tr>
                      <tr>
                        <td>2198</td>
                        <td>K.K. Ska (Wall)</td>
                      </tr>
                      <tr>
                        <td>2199</td>
                        <td>K.K. Tango (Wall)</td>
                      </tr>
                      <tr>
                        <td>219a</td>
                        <td>K.K. Faire (Wall)</td>
                      </tr>
                      <tr>
                        <td>219b</td>
                        <td>Aloha K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>219c</td>
                        <td>Lucky K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>219d</td>
                        <td>K.K. Condor (Wall)</td>
                      </tr>
                      <tr>
                        <td>219e</td>
                        <td>K.K. Steppe (Wall)</td>
                      </tr>
                      <tr>
                        <td>219f</td>
                        <td>Imperial K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21a0</td>
                        <td>K.K. Casbah (Wall)</td>
                      </tr>
                      <tr>
                        <td>21a1</td>
                        <td>K.K. Safari (Wall)</td>
                      </tr>
                      <tr>
                        <td>21a2</td>
                        <td>K.K. Folk (Wall)</td>
                      </tr>
                      <tr>
                        <td>21a3</td>
                        <td>K.K. Rock (Wall)</td>
                      </tr>
                      <tr>
                        <td>21a4</td>
                        <td>Rockin' K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21a5</td>
                        <td>K.K. Ragtime (Wall)</td>
                      </tr>
                      <tr>
                        <td>21a6</td>
                        <td>K.K. Gumbo (Wall)</td>
                      </tr>
                      <tr>
                        <td>21a7</td>
                        <td>The K. Funk (Wall)</td>
                      </tr>
                      <tr>
                        <td>21a8</td>
                        <td>K.K. Blues (Wall)</td>
                      </tr>
                      <tr>
                        <td>21a9</td>
                        <td>Soulful K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21aa</td>
                        <td>K.K. Soul (Wall)</td>
                      </tr>
                      <tr>
                        <td>21ab</td>
                        <td>K.K. Cruisin' (Wall)</td>
                      </tr>
                      <tr>
                        <td>21ac</td>
                        <td>K.K. Love Song (Wall)</td>
                      </tr>
                      <tr>
                        <td>21ad</td>
                        <td>K.K. D&B (Wall)</td>
                      </tr>
                      <tr>
                        <td>21ae</td>
                        <td>K.K. Technopop (Wall)</td>
                      </tr>
                      <tr>
                        <td>21af</td>
                        <td>DJ K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21b0</td>
                        <td>Only Me (Wall)</td>
                      </tr>
                      <tr>
                        <td>21b1</td>
                        <td>K.K. Country (Wall)</td>
                      </tr>
                      <tr>
                        <td>21b2</td>
                        <td>Surfin' K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21b3</td>
                        <td>K.K. Ballad (Wall)</td>
                      </tr>
                      <tr>
                        <td>21b4</td>
                        <td>Comrade K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21b5</td>
                        <td>K.K. Lament (Wall)</td>
                      </tr>
                      <tr>
                        <td>21b6</td>
                        <td>Go K.K. Rider (Wall)</td>
                      </tr>
                      <tr>
                        <td>21b7</td>
                        <td>K.K. Dirge (Wall)</td>
                      </tr>
                      <tr>
                        <td>21b8</td>
                        <td>K.K. Western (Wall)</td>
                      </tr>
                      <tr>
                        <td>21b9</td>
                        <td>Mr. K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21ba</td>
                        <td>Café K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21bb</td>
                        <td>K.K. Parade (Wall)</td>
                      </tr>
                      <tr>
                        <td>21bc</td>
                        <td>Señor K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21bd</td>
                        <td>K.K. Song (Wall)</td>
                      </tr>
                      <tr>
                        <td>21be</td>
                        <td>I Love You (Wall)</td>
                      </tr>
                      <tr>
                        <td>21bf</td>
                        <td>Two Days Ago (Wall)</td>
                      </tr>
                      <tr>
                        <td>21c0</td>
                        <td>My Place (Wall)</td>
                      </tr>
                      <tr>
                        <td>21c1</td>
                        <td>Forest Life (Wall)</td>
                      </tr>
                      <tr>
                        <td>21c2</td>
                        <td>To the Edge (Wall)</td>
                      </tr>
                      <tr>
                        <td>21c3</td>
                        <td>Pondering (Wall)</td>
                      </tr>
                      <tr>
                        <td>21c4</td>
                        <td>K.K. Dixie (Wall)</td>
                      </tr>
                      <tr>
                        <td>21c5</td>
                        <td>K.K. Marathon (Wall)</td>
                      </tr>
                      <tr>
                        <td>21c6</td>
                        <td>King K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21c7</td>
                        <td>Mountain Song (Wall)</td>
                      </tr>
                      <tr>
                        <td>21c8</td>
                        <td>Marine Song 2001 (Wall)</td>
                      </tr>
                      <tr>
                        <td>21c9</td>
                        <td>Neapolitan (Wall)</td>
                      </tr>
                      <tr>
                        <td>21ca</td>
                        <td>Steep Hill (Wall)</td>
                      </tr>
                      <tr>
                        <td>21cb</td>
                        <td>K.K. Rockabilly (Wall)</td>
                      </tr>
                      <tr>
                        <td>21cc</td>
                        <td>Agent K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21cd</td>
                        <td>K.K. Rally (Wall)</td>
                      </tr>
                      <tr>
                        <td>21ce</td>
                        <td>K.K. Metal (Wall)</td>
                      </tr>
                      <tr>
                        <td>21cf</td>
                        <td>Stale Cupcakes (Wall)</td>
                      </tr>
                      <tr>
                        <td>21d0</td>
                        <td>Spring Blossoms (Wall)</td>
                      </tr>
                      <tr>
                        <td>21d1</td>
                        <td>Wandering (Wall)</td>
                      </tr>
                      <tr>
                        <td>21d2</td>
                        <td>K.K. House (Wall)</td>
                      </tr>
                      <tr>
                        <td>21d3</td>
                        <td>K.K. Sonata (Wall)</td>
                      </tr>
                      <tr>
                        <td>21d4</td>
                        <td>Hypno K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21d5</td>
                        <td>K.K. Stroll (Wall)</td>
                      </tr>
                      <tr>
                        <td>21d6</td>
                        <td>K.K. Island (Wall)</td>
                      </tr>
                      <tr>
                        <td>21d7</td>
                        <td>Space K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21d8</td>
                        <td>K.K. Adventure (Wall)</td>
                      </tr>
                      <tr>
                        <td>21d9</td>
                        <td>K.K. Oasis (Wall)</td>
                      </tr>
                      <tr>
                        <td>21da</td>
                        <td>K.K. Bazaar (Wall)</td>
                      </tr>
                      <tr>
                        <td>21db</td>
                        <td>K.K. Milonga (Wall)</td>
                      </tr>
                      <tr>
                        <td>21dc</td>
                        <td>K.K. Groove (Wall)</td>
                      </tr>
                      <tr>
                        <td>21dd</td>
                        <td>K.K. Jongara (Wall)</td>
                      </tr>
                      <tr>
                        <td>21de</td>
                        <td>K.K. Flamenco (Wall)</td>
                      </tr>
                      <tr>
                        <td>21df</td>
                        <td>K.K. Moody (Wall)</td>
                      </tr>
                      <tr>
                        <td>21e0</td>
                        <td>Bubblegum K.K. (Wall)</td>
                      </tr>
                      <tr>
                        <td>21e1</td>
                        <td>K.K. Synth (Wall)</td>
                      </tr>
                      <tr>
                        <td>21e2</td>
                        <td>K.K. Disco (Wall)</td>
                      </tr>
                      <tr>
                        <td>21e3</td>
                        <td>K.K. Birthday (Wall)</td>
                      </tr>
                      <tr>
                        <td>21e4</td>
                        <td>K.K. Chorale (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21e5</td>
                        <td>K.K. March (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21e6</td>
                        <td>K.K. Waltz (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21e7</td>
                        <td>K.K. Swing (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21e8</td>
                        <td>K.K. Jazz (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21e9</td>
                        <td>K.K. Fusion (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21ea</td>
                        <td>K.K. Étude (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21eb</td>
                        <td>K.K. Lullaby (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21ec</td>
                        <td>K.K. Aria (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21ed</td>
                        <td>K.K. Samba (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21ee</td>
                        <td>K.K. Bossa (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21ef</td>
                        <td>K.K. Calypso (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21f0</td>
                        <td>K.K. Salsa (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21f1</td>
                        <td>K.K. Mambo (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21f2</td>
                        <td>K.K. Reggae (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21f3</td>
                        <td>K.K. Ska (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21f4</td>
                        <td>K.K. Tango (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21f5</td>
                        <td>K.K. Faire (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21f6</td>
                        <td>Aloha K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21f7</td>
                        <td>Lucky K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21f8</td>
                        <td>K.K. Condor (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21f9</td>
                        <td>K.K. Steppe (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21fa</td>
                        <td>Imperial K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21fb</td>
                        <td>K.K. Casbah (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21fc</td>
                        <td>K.K. Safari (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21fd</td>
                        <td>K.K. Folk (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21fe</td>
                        <td>K.K. Rock (Music Box)</td>
                      </tr>
                      <tr>
                        <td>21ff</td>
                        <td>Rockin' K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2200</td>
                        <td>K.K. Ragtime (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2201</td>
                        <td>K.K. Gumbo (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2202</td>
                        <td>The K. Funk (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2203</td>
                        <td>K.K. Blues (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2204</td>
                        <td>Soulful K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2205</td>
                        <td>K.K. Soul (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2206</td>
                        <td>K.K. Cruisin' (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2207</td>
                        <td>K.K. Love Song (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2208</td>
                        <td>K.K. D&B (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2209</td>
                        <td>K.K. Technopop (Music Box)</td>
                      </tr>
                      <tr>
                        <td>220a</td>
                        <td>DJ K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>220b</td>
                        <td>Only Me (Music Box)</td>
                      </tr>
                      <tr>
                        <td>220c</td>
                        <td>K.K. Country (Music Box)</td>
                      </tr>
                      <tr>
                        <td>220d</td>
                        <td>Surfin' K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>220e</td>
                        <td>K.K. Ballad (Music Box)</td>
                      </tr>
                      <tr>
                        <td>220f</td>
                        <td>Comrade K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2210</td>
                        <td>K.K. Lament (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2211</td>
                        <td>Go K.K. Rider (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2212</td>
                        <td>K.K. Dirge (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2213</td>
                        <td>K.K. Western (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2214</td>
                        <td>Mr. K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2215</td>
                        <td>Café K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2216</td>
                        <td>K.K. Parade (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2217</td>
                        <td>Señor K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2218</td>
                        <td>K.K. Song (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2219</td>
                        <td>I Love You (Music Box)</td>
                      </tr>
                      <tr>
                        <td>221a</td>
                        <td>Two Days Ago (Music Box)</td>
                      </tr>
                      <tr>
                        <td>221b</td>
                        <td>My Place (Music Box)</td>
                      </tr>
                      <tr>
                        <td>221c</td>
                        <td>Forest Life (Music Box)</td>
                      </tr>
                      <tr>
                        <td>221d</td>
                        <td>To the Edge (Music Box)</td>
                      </tr>
                      <tr>
                        <td>221e</td>
                        <td>Pondering (Music Box)</td>
                      </tr>
                      <tr>
                        <td>221f</td>
                        <td>K.K. Dixie (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2220</td>
                        <td>K.K. Marathon (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2221</td>
                        <td>King K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2222</td>
                        <td>Mountain Song (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2223</td>
                        <td>Marine Song 2001 (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2224</td>
                        <td>Neapolitan (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2225</td>
                        <td>Steep Hill (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2226</td>
                        <td>K.K. Rockabilly (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2227</td>
                        <td>Agent K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2228</td>
                        <td>K.K. Rally (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2229</td>
                        <td>K.K. Metal (Music Box)</td>
                      </tr>
                      <tr>
                        <td>222a</td>
                        <td>Stale Cupcakes (Music Box)</td>
                      </tr>
                      <tr>
                        <td>222b</td>
                        <td>Spring Blossoms (Music Box)</td>
                      </tr>
                      <tr>
                        <td>222c</td>
                        <td>Wandering (Music Box)</td>
                      </tr>
                      <tr>
                        <td>222d</td>
                        <td>K.K. House (Music Box)</td>
                      </tr>
                      <tr>
                        <td>222e</td>
                        <td>K.K. Sonata (Music Box)</td>
                      </tr>
                      <tr>
                        <td>222f</td>
                        <td>Hypno K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2230</td>
                        <td>K.K. Stroll (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2231</td>
                        <td>K.K. Island (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2232</td>
                        <td>Space K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2233</td>
                        <td>K.K. Adventure (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2234</td>
                        <td>K.K. Oasis (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2235</td>
                        <td>K.K. Bazaar (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2236</td>
                        <td>K.K. Milonga (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2237</td>
                        <td>K.K. Groove (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2238</td>
                        <td>K.K. Jongara (Music Box)</td>
                      </tr>
                      <tr>
                        <td>2239</td>
                        <td>K.K. Flamenco (Music Box)</td>
                      </tr>
                      <tr>
                        <td>223a</td>
                        <td>K.K. Moody (Music Box)</td>
                      </tr>
                      <tr>
                        <td>223b</td>
                        <td>Bubblegum K.K. (Music Box)</td>
                      </tr>
                      <tr>
                        <td>223c</td>
                        <td>K.K. Synth (Music Box)</td>
                      </tr>
                      <tr>
                        <td>223d</td>
                        <td>K.K. Disco (Music Box)</td>
                      </tr>
                      <tr>
                        <td>223e</td>
                        <td>K.K. Birthday (Music Box)</td>
                      </tr>
                </table>
              </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
function songsFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("songsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("songsTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      console.log(txtValue);
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
    songsFunction
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

#songsvue, .card {
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
</style>
<template>
    <div id="fossilvue" class="container has-text-centered">
      <b-collapse class="card" aria-id="fossilsTable" id="fossils" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="fossilsTable">
                <p class="card-header-title is-centered">
                    Fossils
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <!-- <span id="fossils">Fossils (back to <a href="#top">categories</a>)</span> -->
                  <input type="text" class="input is-rounded" id="fossilsInput" v-on:keyup="fossilsFunction()" placeholder="Search for item names..">
                  <br><br>
                  <table id="fossilsTable">
                      <tr>
                          <th>Hex</th>
                          <th>Item Name</th>
                        </tr>
                        <tr>
                          <td>3130</td>
                          <td>amber</td>
                        </tr>
                        <tr>
                          <td>3131</td>
                          <td>ammonite</td>
                        </tr>
                        <tr>
                          <td>3132</td>
                          <td>coprolite</td>
                        </tr>
                        <tr>
                          <td>3133</td>
                          <td>dinosaur egg</td>
                        </tr>
                        <tr>
                          <td>3134</td>
                          <td>fern fossil</td>
                        </tr>
                        <tr>
                          <td>3135</td>
                          <td>dinosaur track</td>
                        </tr>
                        <tr>
                          <td>3136</td>
                          <td>archaeopteryx</td>
                        </tr>
                        <tr>
                          <td>3137</td>
                          <td>Peking man</td>
                        </tr>
                        <tr>
                          <td>3138</td>
                          <td>shark tooth</td>
                        </tr>
                        <tr>
                          <td>3139</td>
                          <td>trilobite</td>
                        </tr>
                        <tr>
                          <td>313a</td>
                          <td>T. rex skull</td>
                        </tr>
                        <tr>
                          <td>313b</td>
                          <td>T. rex torso</td>
                        </tr>
                        <tr>
                          <td>313c</td>
                          <td>T. rex tail</td>
                        </tr>
                        <tr>
                          <td>313d</td>
                          <td>tricera skull</td>
                        </tr>
                        <tr>
                          <td>313e</td>
                          <td>tricera torso</td>
                        </tr>
                        <tr>
                          <td>313f</td>
                          <td>tricera tail</td>
                        </tr>
                        <tr>
                          <td>3140</td>
                          <td>mammoth skull</td>
                        </tr>
                        <tr>
                          <td>3141</td>
                          <td>mammoth torso</td>
                        </tr>
                        <tr>
                          <td>3142</td>
                          <td>ankylo skull</td>
                        </tr>
                        <tr>
                          <td>3143</td>
                          <td>ankylo torso</td>
                        </tr>
                        <tr>
                          <td>3144</td>
                          <td>ankylo tail</td>
                        </tr>
                        <tr>
                          <td>3145</td>
                          <td>apato skull</td>
                        </tr>
                        <tr>
                          <td>3146</td>
                          <td>apato torso</td>
                        </tr>
                        <tr>
                          <td>3147</td>
                          <td>apato tail</td>
                        </tr>
                        <tr>
                          <td>3148</td>
                          <td>dimetrodon skull</td>
                        </tr>
                        <tr>
                          <td>3149</td>
                          <td>dimetrodon torso</td>
                        </tr>
                        <tr>
                          <td>314a</td>
                          <td>dimetrodon tail</td>
                        </tr>
                        <tr>
                          <td>314b</td>
                          <td>iguanodon skull</td>
                        </tr>
                        <tr>
                          <td>314c</td>
                          <td>iguanodon torso</td>
                        </tr>
                        <tr>
                          <td>314d</td>
                          <td>iguanodon tail</td>
                        </tr>
                        <tr>
                          <td>314e</td>
                          <td>sabertooth skull</td>
                        </tr>
                        <tr>
                          <td>314f</td>
                          <td>sabertooth torso</td>
                        </tr>
                        <tr>
                          <td>3150</td>
                          <td>pachysaurus skull</td>
                        </tr>
                        <tr>
                          <td>3151</td>
                          <td>pachysaurus torso</td>
                        </tr>
                        <tr>
                          <td>3152</td>
                          <td>pachysaurus tail</td>
                        </tr>
                        <tr>
                          <td>3153</td>
                          <td>parasaur skull</td>
                        </tr>
                        <tr>
                          <td>3154</td>
                          <td>parasaur torso</td>
                        </tr>
                        <tr>
                          <td>3155</td>
                          <td>parasaur tail</td>
                        </tr>
                        <tr>
                          <td>3156</td>
                          <td>diplo skull</td>
                        </tr>
                        <tr>
                          <td>3157</td>
                          <td>diplo neck</td>
                        </tr>
                        <tr>
                          <td>3158</td>
                          <td>diplo chest</td>
                        </tr>
                        <tr>
                          <td>3159</td>
                          <td>diplo hip</td>
                        </tr>
                        <tr>
                          <td>315a</td>
                          <td>diplo tail</td>
                        </tr>
                        <tr>
                          <td>315b</td>
                          <td>plesio skull</td>
                        </tr>
                        <tr>
                          <td>315c</td>
                          <td>plesio neck</td>
                        </tr>
                        <tr>
                          <td>315d</td>
                          <td>plesio torso</td>
                        </tr>
                        <tr>
                          <td>315e</td>
                          <td>stego skull</td>
                        </tr>
                        <tr>
                          <td>315f</td>
                          <td>stego torso</td>
                        </tr>
                        <tr>
                          <td>3160</td>
                          <td>stego tail</td>
                        </tr>
                        <tr>
                          <td>3161</td>
                          <td>ptera skull</td>
                        </tr>
                        <tr>
                          <td>3162</td>
                          <td>ptera left wing</td>
                        </tr>
                        <tr>
                          <td>3163</td>
                          <td>ptera right wing</td>
                        </tr>
                        <tr>
                          <td>3164</td>
                          <td>ichthyo skull</td>
                        </tr>
                        <tr>
                          <td>3165</td>
                          <td>ichthyo torso</td>
                        </tr>
                        <tr>
                          <td>3166</td>
                          <td>raptor skull</td>
                        </tr>
                        <tr>
                          <td>3167</td>
                          <td>raptor torso</td>
                        </tr>
                        <tr>
                          <td>3168</td>
                          <td>styraco skull</td>
                        </tr>
                        <tr>
                          <td>3169</td>
                          <td>styraco torso</td>
                        </tr>
                        <tr>
                          <td>316a</td>
                          <td>styraco tail</td>
                        </tr>
                        <tr>
                          <td>316b</td>
                          <td>spino skull</td>
                        </tr>
                        <tr>
                          <td>316c</td>
                          <td>spino torso</td>
                        </tr>
                        <tr>
                          <td>316d</td>
                          <td>spino tail</td>
                        </tr>
                        <tr>
                          <td>316e</td>
                          <td>megacero skull</td>
                        </tr>
                        <tr>
                          <td>316f</td>
                          <td>megacero torso</td>
                        </tr>
                        <tr>
                          <td>3170</td>
                          <td>megacero tail</td>
                        </tr>
                        <tr>
                          <td>3171</td>
                          <td>archelon skull</td>
                        </tr>
                        <tr>
                          <td>3172</td>
                          <td>archelon torso</td>
                        </tr>
                        <tr>
                          <td>3173</td>
                          <td>T. rex model</td>
                        </tr>
                        <tr>
                          <td>3174</td>
                          <td>tricera model</td>
                        </tr>
                        <tr>
                          <td>3175</td>
                          <td>mammoth model</td>
                        </tr>
                        <tr>
                          <td>3176</td>
                          <td>ankylo model</td>
                        </tr>
                        <tr>
                          <td>3177</td>
                          <td>apato model</td>
                        </tr>
                        <tr>
                          <td>3178</td>
                          <td>dimetrodon model</td>
                        </tr>
                        <tr>
                          <td>3179</td>
                          <td>iguanodon model</td>
                        </tr>
                        <tr>
                          <td>317a</td>
                          <td>sabertooth model</td>
                        </tr>
                        <tr>
                          <td>317b</td>
                          <td>pachysaurus model</td>
                        </tr>
                        <tr>
                          <td>317c</td>
                          <td>parasaur model</td>
                        </tr>
                        <tr>
                          <td>317d</td>
                          <td>diplo model</td>
                        </tr>
                        <tr>
                          <td>317e</td>
                          <td>plesio model</td>
                        </tr>
                        <tr>
                          <td>317f</td>
                          <td>stego model</td>
                        </tr>
                        <tr>
                          <td>3180</td>
                          <td>ptera model</td>
                        </tr>
                        <tr>
                          <td>3181</td>
                          <td>ichthyo model</td>
                        </tr>
                        <tr>
                          <td>3182</td>
                          <td>raptor model</td>
                        </tr>
                        <tr>
                          <td>3183</td>
                          <td>styraco model</td>
                        </tr>
                        <tr>
                          <td>3184</td>
                          <td>spino model</td>
                        </tr>
                        <tr>
                          <td>3185</td>
                          <td>megacero model</td>
                        </tr>
                        <tr>
                          <td>3186</td>
                          <td>archelon model</td>
                        </tr>
                  </table>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
function fossilsFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("fossilsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("fossilsTable");
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
      fossilsFunction
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

#fossilvue, .card {
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
</style>
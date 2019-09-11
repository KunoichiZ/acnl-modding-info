<template>
    <aside class="menu">
        <p class="menu-label">
            Item ID Categories
        </p>
        <ul class="menu-list">
            <ul>
                <li><a href="#art" @click="selected = 1" :class="{highlight:selected == 1}">Art</a></li>
                <li><a href="#catchables" @click="selected = 2" :class="{highlight:selected == 2}">Catchables</a></li>
                <li><a href="#clothes" @click="selected = 3" :class="{highlight:selected == 3}">Clothes</a></li>
                <li><a href="#patterns" @click="selected = 4" :class="{highlight:selected == 4}">Custom Patterns</a></li>
                <li><a href="#environment" @click="selected = 5" :class="{highlight:selected == 5}">Environmentals</a></li>
                <li><a href="#fortunes" @click="selected = 6" :class="{highlight:selected == 6}">Fortune Cookies</a></li>
                <li><a href="#fossils" @click="selected = 7" :class="{highlight:selected == 7}">Fossils</a></li>
                <li><a href="#fruit" @click="selected = 8" :class="{highlight:selected == 8}">Fruits</a></li>
                <li><a href="#furniture" @click="selected = 9" :class="{highlight:selected == 9}">Furniture</a></li>
                <li><a href="#garden" @click="selected = 10" :class="{highlight:selected == 10}">Garden</a></li>
                <li><a href="#gyroids" @click="selected = 11" :class="{highlight:selected == 11}">Gyroids</a></li>
                <li><a href="#hra" @click="selected = 12" :class="{highlight:selected == 12}">HRA Exhibition (Inside Only)</a></li>
                <li><a href="#events" @click="selected = 13" :class="{highlight:selected == 13}">In-Game Events</a></li>
                <li><a href="#sprites" @click="selected = 14" :class="{highlight:selected == 14}">Item Sprites</a></li>
                <li><a href="#misc" @click="selected = 15" :class="{highlight:selected == 15}">Misc</a></li>
                <li><a href="#npc" @click="selected = 16" :class="{highlight:selected == 16}">NPC Items</a></li>
                <li><a href="#paper" @click="selected = 17" :class="{highlight:selected == 17}">Paper</a></li>
                <li><a href="#pictures" @click="selected = 18" :class="{highlight:selected == 18}">Pictures</a></li>
                <li><a href="#songs" @click="selected = 19" :class="{highlight:selected == 19}">Songs</a></li>
                <li><a href="#tools" @click="selected = 20" :class="{highlight:selected == 20}">Tools & Wearables</a></li>
                <!-- <li><a href="#wallsCarpets" id="link-wallsCarpets" @click="selected = 21" :class="{highlight:selected == 21}">Wallpapers & Carpets</a></li> -->
            </ul>
        </ul>
    </aside>
</template>

<script>

export default {
    data: function() {
        return {
            selected: undefined
        }
    }
}
</script>

<style scoped>
.menu {
    margin-top: 5px;
    position: absolute;
    position: fixed;
    overflow: auto;
    border-style: solid;
    border-color: #c69c86;
    border-radius: 25px;
    padding: 10px;
    background: url('/yellow_stripe_bg.png');
    /* width: 500px; */
    height: 810px;
    overflow-y:hidden;
}

/* .menu-label {
    text-decoration: underline;
} */


.highlight {
  background: url('/brown_stripe_bg.png');
  border-radius: 25px;
}

a:hover {
    border-radius: 25px;
    background: url('/bg_inner.png');
}

.red {
    color: red;
}

.green {
    color: green;
}
</style>
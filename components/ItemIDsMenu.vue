<template>
    <aside class="menu">
        <p class="menu-label">
            Item ID Categories
        </p>
        <ul class="menu-list">
            <ul>
                <li><a href="#art" id="link-art" @click="selected = 1" :class="{highlight:selected == 1}">Art</a></li>
                <li><a href="#catchables" id="link-catchables" @click="selected = 2" :class="{highlight:selected == 2}">Catchables</a></li>
                <!-- <li><a href="#clothes" id="link-clothes" @click="selected = 3" :class="{highlight:selected == 3}">Clothes</a></li>-->
                <li><a href="#patterns" id="link-patterns" @click="selected = 4" :class="{highlight:selected == 4}">Custom Patterns</a></li>
                <!--<li><a href="#environment" id="link-environment" @click="selected = 5" :class="{highlight:selected == 5}">Environmentals</a></li>-->
                <li><a href="#fortunes" id="link-fortunes" @click="selected = 6" :class="{highlight:selected == 6}">Fortune Cookies</a></li>
                <li><a href="#fossils" id="link-fossils" @click="selected = 7" :class="{highlight:selected == 7}">Fossils</a></li>
                <!--<li><a href="#furniture" id="link-furniture" @click="selected = 8" :class="{highlight:selected == 8}">Furniture</a></li>-->
                <li><a href="#fruit" id="link-fruit" @click="selected = 9" :class="{highlight:selected == 9}">Fruits</a></li>
                <!--<li><a href="#garden" id="link-garden" @click="selected = 10" :class="{highlight:selected == 10}">Garden</a></li>-->
                <li><a href="#gyroids" id="link-gyroids" @click="selected = 11" :class="{highlight:selected == 11}">Gyroids</a></li>
                <li><a href="#hra" id="link-hra" @click="selected = 12" :class="{highlight:selected == 12}">HRA Exhibition (Inside Only)</a></li>
                <li><a href="#events" id="link-events" @click="selected = 13" :class="{highlight:selected == 13}">In-Game Events</a></li>
                <li><a href="#sprites" id="link-sprites" @click="selected = 14" :class="{highlight:selected == 14}">Item Sprites</a></li>
                <li><a href="#misc" id="link-misc" @click="selected = 15" :class="{highlight:selected == 15}">Misc</a></li>
                <li><a href="#npc" id="link-npc" @click="selected = 16" :class="{highlight:selected == 16}">NPC Items</a></li>
                <!--<li><a href="#paper" id="link-paper" @click="selected = 17" :class="{highlight:selected == 17}">Paper</a></li>
                <li><a href="#pictures" id="link-pictures" @click="selected = 18" :class="{highlight:selected == 18}">Pictures</a></li>
                <li><a href="#songs" id="link-songs" @click="selected = 19" :class="{highlight:selected == 19}">Songs</a></li> -->
                <li><a href="#tools" id="link-tools" @click="selected = 20" :class="{highlight:selected == 20}">Tools & Wearables</a></li>
                <!--<li><a href="#wallsCarpets" id="link-wallsCarpets" @click="selected = 21" :class="{highlight:selected == 21}">Wallpapers & Carpets</a></li> -->
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
    margin-top: 0px;
    position: fixed;
    overflow: auto;
    border-style: solid;
    border-color: #c69c86;
    border-radius: 25px;
    padding: 10px;
    background: url('/yellow_stripe_bg.png');
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
</style>
<template>
    <aside class="menu">
        <p class="menu-label">
            Item ID Categories
        </p>
        <ul class="menu-list">
            <ul>
                <li><a href="#art" id="link-art" @click="selected = 1" :class="{highlight:selected == 1}">Art</a></li>
                <li><a href="#catchables" id="link-catchables" @click="selected = 2" :class="{highlight:selected == 2}">Catchables</a></li>
                <!-- <li><a href="#clothesInput"  id="link-clothes">Clothes</a></li>
                <li><a href="#environmentInput" id="link-environment">Environmentals</a></li>
                <li><a href="#fortunesInput" id="link-fortunes">Fortune Cookies</a></li>
                <li><a href="#fossilsInput" id="link-fossils">Fossils</a></li>
                <li><a href="#furnitureInput" id="link-furniture">Furniture</a></li>
                <li><a href="#gyroidsInput" id="link-gyroids">Gyroids</a></li>
                <li><a href="#miscInput" id="link-misc">Misc</a></li>
                <li><a href="#picturesInput" id="link-pictures">Animal Pictures</a></li>
                <li><a href="#songsInput"  id="link-songs">Songs</a></li>
                <li><a href="#toolsInput" id="link-tools">Tools & Wearables</a></li>
                <li><a href="#wallsCarpetsInput" id="link-wallsCarpets">Wallpapers & Carpets</a></li> -->
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
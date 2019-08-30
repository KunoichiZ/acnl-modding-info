<template>
    <div class="container has-text-centered">
        <br>
        <h1 class="title is-size-3">Animal Crossing: New Leaf NTR Plugin FAQ</h1>
        <br><p><b>Always make sure to make a backup of your save data!</b> You can use this: <a href="https://github.com/J-D-K/JKSM/releases/latest">JKSM</a> or <a href="https://github.com/FlagBrew/Checkpoint/releases/latest">Checkpoint</a>.</p>
        <br>
        <div id="toc">
            <h6 class="subtitle is-6" id="toc-title">Table of Contents</h6>
            <ul>
                <li><a href="#homeButtonDisabled">Why is the home button disabled?</a></li>
                <li><a href="#cheatsMissing">There are some cheats missing, where are they? (What is the Quick Menu and how do I access it?)</a></li>
                <li><a href="#seedOnline">What is seeding and why is it against the rules?</a></li>
                <li><a href="#gameFroze">My game froze while pressing R+X, how do I fix it?</a></li>
                <li><a href="#collisions">There is no collision after placing a building!</a></li>
                <li><a href="#cfw">How do I get CFW on my 3DS?</a></li>
                <li><a href="#cheatNotWorking">How do I use [any] cheat? (A cheat isn't working!)</a></li>
                <li><a href="#ctrpf">What is CTRPF?</a></li>
                <li><a href="#source">Where is the source code?</a></li>
                <li><a href="#editExternally">How can I edit my save externally?</a></li>
                <li><a href="#itemX">Can I have item X??</a></li>
                <li><a href="#showcasePerms">Can I have permission to post in #mod-showcasing?</a></li>
                <li><a href="#devTalk">What's #dev-talk for?</a></li>
                <li><a href="#serverIdea">I have an idea for the server!</a></li>
                <li><a href="#plgSetup">Plugin Setup Guide</a></li>
                <li><a href="#hairGuide">Hair Guide</a></li>
                <li><a href="#buildingSizeGuide">For use with marc's save editor (Building Size Guide)</a></li>
                <li><a href="#pwpDimGuide">PWP Dimensions Guide</a></li>
                <li><a href="#styleColorGuide">Hair Style and Color Guide</a></li>
                <li><a href="#movingInFaceGuide">Moving in Face Guide</a></li>
                <li><a href="#eyeColorGuide">Eye Color Guide</a></li>
                <li><a href="#text2item">My text to item isn't working!</a></li>
                <li><a href="#text2item2">But there's actually no other code further down!</a></li>
                <li><a href="#question">But what if my question isn't located here?</a></li>
            </ul>
        </div>
        <br>
        <discord-messages>
            <discord-message user="zell" id="homeButtonDisabled">
                Why is the home button disabled?
            </discord-message>
            <discord-message user="isabelle">
                You have an outdated version of the plugin; as of v4.1.1, it is no longer disabled.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="cole" id="cheatsMissing">
                There are some cheats missing, where are they? (What is the Quick Menu and how do I access it?)
            </discord-message>
            <discord-message user="isabelle">
                Most likely in the Quick Menu: hold <b>R + X</b> for about one second to enter the Quick Menu with additional cheats.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="anchovy" id="seedOnline">
                What is seeding and why is it against the rules?
            </discord-message>
            <discord-message user="isabelle">
                Seeding is the act of modifying towns online and it is against the rules to preserve the towns of people who don't have CFW. 
                <br>Seeding can include any cheat that modifies online towns in a way that is not normal to the game, examples would be: putting objects normally impossible into a town (rocks, buildings, weeds), putting objects without the limits of the original object (growing a tree instantly, dropping a tree onto cement), putting items into your inventory when they normally can't go there (trees, rocks), or even removing items from a town (removing rocks, removing trees, removing buildings, etc.)
                <br>If someone has a seeder, they can permanently ruin the town of someone online, and this plugin was not created to help with that. 
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="beau" id="gameFroze">
                My game froze while pressing R+X, how do I fix it?
            </discord-message>
            <discord-message user="isabelle">
                Press "X+Y" and and then exit and it should unfreeze.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="simon" id="collisions">
                There is no collision after placing a building!
            </discord-message>
            <discord-message user="isabelle">
                Save and quit and the collision should be fixed.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="walker" id="cfw">
                How do I get CFW on my 3DS?
            </discord-message>
            <discord-message user="isabelle">
                Follow the guide provided at <a href="https://3ds.hacks.guide/">https://3ds.hacks.guide</a>. CFW is not possible on 11.5+ without a third party purchase.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="tom" id="cheatNotWorking">
                How do I use [any] cheat? (A cheat isn't working!)
            </discord-message>
            <discord-message user="isabelle">
                Press on the blue i icon on the bottom screen, a note should pop up with information and instructions on the provided cheat.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="drift" id="ctrpf">
                What is CTRPF?
            </discord-message>
            <discord-message user="isabelle">
                It stands for CTR-Plugin-Framework. Citra is the codename of the 3DS, and CTR is short for it (blame Nintendo for making it complicated.) This is the core of the plugin that gives you the nice UI and all these features, and is provided to you by Nanquitas.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="hopper" id="source">
                Where is the source code?
            </discord-message>
            <discord-message user="isabelle">
                As it’s a decision of Nanquitas to keep the source closed while CTRPF is in beta, I will respect his decision and keep it closed source until the time comes that he lets us open source. It is a closed beta for developers to develop “CTRPF plugins” so if you really wanted to develop a plugin, I suggest using BlankCheatMenu <a href="http://bit.ly/blankCHTMenu">http://bit.ly/blankCHTMenu</a> or forking the already open source version of the plugin <a href="http://bit.ly/OS-ACNL-plg">http://bit.ly/OS-ACNL-plg</a>.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="butch" id="editExternally">
                How can I edit my save externally?
            </discord-message>
            <discord-message user="isabelle">
                None of these will work online, you will need to dump your save with JKSM or Checkpoint
                <br><br>Here's the online save editor:
                <br><a href="http://www.marcrobledo.com/acnl-editor/">http://www.marcrobledo.com/acnl-editor/</a>

                <br>Here's the downloadable save editor:
                <br><a href="https://github.com/Cuyler36/ACSE/releases/latest">https://github.com/Cuyler36/ACSE/releases/latest</a>

                <br>Here's the last downloadable save editor:
                <br><a href="https://github.com/Mega-Mew/NLSE/releases/latest">https://github.com/Mega-Mew/NLSE/releases/latest</a>
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="octavian" id="itemX">
                Can I have free items?
            </discord-message>
            <discord-message user="isabelle">
                Try asking in #item-request on the Discord server, somebody may be willing to fulfil your request.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="vic" id="showcasePerms">
                Can I have permission to post in #mod-showcasing?
            </discord-message>
            <discord-message user="isabelle">
                Just contact an <mention id="admin">Admin</mention>, show them what you want to post and they'll decide if you have permission. You'll be given the role <mention id="modCreator">Mod Creator</mention> if it's decided you can post in #mod-showcasing.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="cherry" id="devTalk">
                What's #dev-talk for?
            </discord-message>
            <discord-message user="isabelle">
                This channel is for <mention id="pluginDev">Plugin Dev</mention> to communicate about development on the ACNL Multi Cheat Plugin. It's viewable to everybody and aims to give insight into the development process of the plugin. 
               <br>Currently only a few people are <mention id="pluginDev">Plugin Dev</mention>, though this may be changing soon, so stay tuned I guess.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="mira" id="serverIdea">
                I have an idea for the server!
            </discord-message>
            <discord-message user="isabelle">
                All ideas are welcome and we'd love to hear them! Post them in #server-suggestions &#128578;
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="plgSetup">
               Plugin Setup Guide
               <br><img src="~/assets/images/plgsetupguide.jpg">
               <br>Credit to <mention id="helpers"><b-tooltip label="Lord DIO#3133" dashed>Lord DIO</b-tooltip></mention>
               <br>Written version located here: <nuxt-link to="/installation">Plugin Installation</nuxt-link>
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="hairGuide">
               Hair Guide
               <br><img src="~/assets/images/Shampoodle_Hair_Color_Guide.png">
               <br>Credit to <a href="https://pourricrossing.tumblr.com/post/64088861361/source-httpwwwmegapirateninjascom201306ani">pourricrossing</a> on tumblr.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="buildingSizeGuide">
               For use with marc's save editor (Building Size Guide)
               <br><img src="~/assets/images/Online_Save_Editor_Building_Dimensions_Guide.jpg">
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="pwpDimGuide">
               PWP Dimensions Guide
               <br><img src="~/assets/images/Alternate_Online_Save_Editor_Building_Dimensions_Guide_by_Trinsid8133.png">
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="styleColorGuide">
               Hair Style and Color Guide
               <br><img src="~/assets/images/Shampoodle_Hair_Style_Guide.png">
               <br>Colors
               <br><img src="~/assets/images/Shampoodle_Hair_Color_Guide.png">
               <br>Credit to <a href="https://pourricrossing.tumblr.com/post/64088861361/source-httpwwwmegapirateninjascom201306ani">pourricrossing</a> on tumblr.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="movingInFaceGuide">
               Moving in Face Guide
               <br><img src="~/assets/images/Moving_in_Look_Guide.png">
               <br>Credit to <a href="https://pourricrossing.tumblr.com/post/64088861361/source-httpwwwmegapirateninjascom201306ani">pourricrossing</a> on tumblr.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="eyeColorGuide">
               Eye Color Guide
               <br><img src="~/assets/images/Sham_Poodle_Contacts_Guide.png">
               <br>Credit to <a href="https://pourricrossing.tumblr.com/post/64088861361/source-httpwwwmegapirateninjascom201306ani">pourricrossing</a> on tumblr.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="hazel" id="text2item">
                My text to item isn't working!
            </discord-message>
            <discord-message user="isabelle">
               Don't use item IDs that start with 00, there will be another one for it further down the page (Use CTRL + F to find it by name). Item IDs can be found on the <nuxt-link to="/itemids">Item IDs</nuxt-link> page.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="purrl" id="text2item2">
                But there's actually no other code further down!
            </discord-message>
            <discord-message user="isabelle">
               That means you're looking for an item that doesn't go in the inventory (Like the rafflesia)
               <br>Use the RTWE (!rtwe in #bot-commands for instructions) with the codes that start with 00.
               <br>If you want an item that doesn't go into your inventory to be in your inventory, that's seeding and it breaks one of our rules.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="miranda" id="question">
                But what if my question isn't located here?
            </discord-message>
            <discord-message user="isabelle">
               Then please join the Discord server.
               <br><a href="https://discord.gg/EZSxqRr"><img src="https://discordapp.com/api/guilds/275461571231219712/widget.png?style=banner3" alt="Join Discord Server"/></a>
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
      </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'FAQ - ACNL Modding Info'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'og-description', name: 'og:description', content: 'FAQ' },
        { hid: 'og-title', property: 'og:title', content: this.title },
        { hid: 'og-site_name', property: 'og:site_name', content: 'ACNL Modding Info'}
      ]
    }
  }
}
</script>

<style scoped>
.discord-messages {
    width: 600px;
    margin: auto;
    /* font-family: 'ACNL'; */
    font-family: 'Open Sans', sans-serif;
    /* font-family: 'Whitney', sans-serif; */
    text-align: left;
    font-size: 15px;
    border-radius: 25px;
}

.discord-author-info {
    font-weight: bold;
    color: white;
}

#toc {
    padding: 10px;
    background: url('/brown_stripe_bg.png');
    width: 1000px;
    border-radius: 25px;
    margin: auto;
    text-align: left;
    border-style: solid;
    border-color: #c69c86;
}

#toc ul {
    list-style-type: disc;
    list-style-position: inside;
}

#toc-title {
    text-align: center;
}

#admin {
    color: #e72c2c;
}

#modCreator {
    color: #00afff;
}

#pluginDev {
    color: #a600ff;
}

#helpers {
    color: #daa520;
}

@media (max-width: 1300px) {
  #toc {
    width: 475px;
  }
  .discord-messages, .discord-message {
    width: 475px;
  }
}
</style>

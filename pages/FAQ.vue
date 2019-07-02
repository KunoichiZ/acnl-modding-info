<template>
    <div class="container has-text-centered">
        <h1 class="is-size-3">Animal Crossing: New Leaf NTR Plugin FAQ</h1>
        <br><p><b>Always make sure to make a backup of your save data!</b> You can use this: <a href="https://github.com/J-D-K/JKSM/releases/latest">JKSM</a> or <a href="https://github.com/FlagBrew/Checkpoint/releases/latest">Checkpoint</a>.</p>
        <br>
        <div id="toc">
            <h6 class="subtitle is-6" id="toc-title">Table of Contents</h6>
            <ul>
                <li><a href="#homebuttondisabled">Why is the home button disabled?</a></li>
                <li><a href="#exittohome">How do I exit out of the game if the home button is disabled?</a></li>
                <li><a href="#tanremoved">Why was the tan modifier removed?</a></li>
                <li><a href="#seedOnline">Why can I not seed online?</a></li>
                <li><a href="#gameFroze">My game froze while pressing R+X, how do I fix it?</a></li>
                <li><a href="#selectGlitched">Pressing select doesn't open the menu, is it glitched?</a></li>
                <li><a href="#selectNoOpen">Pressing select still doesn’t open the menu</a></li>
                <li><a href="#collisions">Collisions are not showing up after placing a building</a></li>
                <li><a href="#cfw">How do I get CFW on my 3DS?</a></li>
                <li><a href="#cheatNotWorking">XYZ cheat is not working, help!</a></li>
                <li><a href="#useCheat">How do I use XYZ cheat?</a></li>
                <li><a href="#gameCrash">My Animal Crossing immediately crashes before loading the plugin, is it Luma?</a></li>
                <li><a href="#gameHangs">Animal Crossing hangs on the loading screen and never loads.</a></li>
                <li><a href="#ctrpf">What is CTRPF?</a></li>
                <li><a href="#source">Where is the source code? (insert Margen67 meme here)</a></li>
                <li><a href="#pluginNotWorking">I have everything setup correctly, and the plugin still isn't working!</a></li>
                <li><a href="#pluginNotLoading">My files are in the right place, my BootNTRSelector has the right config, I have the right version of ACNL and the update for that version, NTR loads fine, but not the plugin. What now?</a></li>
                <li><a href="#editExternally">How can I edit my save externally?</a></li>
                <li><a href="#physOrDigital">Can I use a cart or do I have to use a digital version of ACNL to use the plugin?</a></li>
                <li><a href="#itemX">Can I have item X??</a></li>
                <li><a href="#editNoComputer">Can I edit my save without using a computer?</a></li>
                <li><a href="#showcasePerms">Can I have permission to post in #mod-showcasing?</a></li>
                <li><a href="#devTalk">What's #dev-talk for?</a></li>
                <li><a href="#serverIdea">I have an idea for the server!</a></li>
                <li><a href="#directories">What's the difference between WA and Orig in the !workdir and !lumaworkdir commands?</a></li>
                <li><a href="#ntrVer">Which version of NTR do I use?</a></li>
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
            <discord-message user="kidd" id="homebuttondisabled">
                Why is the home button disabled?
            </discord-message>
            <discord-message user="isabelle">
                <strike>We disabled the home button in 4.0 Beta 2+ since there are memory problems that would cause your 3DS to crash.</strike>
                <br>As of 4.1.1, it is no longer disabled.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="ken" id="exittohome">
                How do I exit out of the game if the home button is disabled?
            </discord-message>
            <discord-message user="isabelle">
                You have to power down your 3DS by either pressing and holding the power button or opening the NTR menu by pressing X & Y and choosing the Power option and choosing either power down or restart. On plugin v4.1.1 and later, the home button has been reenabled.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="zell" id="tanremoved">
                Why was the tan modifier removed?
            </discord-message>
            <discord-message user="isabelle">
                It wasn't, hold "R+X" for about one second and enter the quick menu with additional cheats.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="cole" id="seedOnline">
                Why can I not seed online?
            </discord-message>
            <discord-message user="isabelle">
                Seeding online could invoke the griefing of other peoples’ towns, and this was not developed to help with that task.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="anchovy" id="gameFroze">
                My game froze while pressing R+X, how do I fix it?
            </discord-message>
            <discord-message user="isabelle">
                Press "X+Y" and and then exit and it should unfreeze.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="beau" id="selectGlitched">
                Pressing select doesn't open the menu, is it glitched?
            </discord-message>
            <discord-message user="isabelle">
                Make sure no other plugins are in plugin\0004000000086200, plugin\0004000000086400, plugin\0004000000086300.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="simon" id="selectNoOpen">
                Pressing select still doesn’t open the menu
            </discord-message>
            <discord-message user="isabelle">
                Make sure you’re not using NTR Mode 3. You can find out if you’re using NTR Mode 3 or not if your version of BootNTR looks like this. If you’re using NTR Mode 3, you’ll need to reboot your 3DS in order to exit out of Mode 3. Then go to TitleDB on FBI and download ntr with an icon that looks like this: <a href="http://bit.ly/NTR-Icon">http://bit.ly/NTR-Icon</a>
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="walker" id="collisions">
                Collisions are not showing up after placing a building
            </discord-message>
            <discord-message user="isabelle">
                Save and quit and the collisions should appear.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="tom" id="cfw">
                How do I get CFW on my 3DS?
            </discord-message>
            <discord-message user="isabelle">
                Follow the guide provided at <a href="https://3ds.hacks.guide/">https://3ds.hacks.guide</a>. CFW is not possible on 11.5+ without a third party purchase.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="drift" id="cheatNotWorking">
                XYZ cheat is not working, help!
            </discord-message>
            <discord-message user="isabelle">
                Please fill out the form using the !form command in #plugin-support. (located in the ACNL Modding Discord Server)
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="hopper" id="useCheat">
                How do I use XYZ cheat?
            </discord-message>
            <discord-message user="isabelle">
                Press on the blue “i” icon on the bottom screen, and a note should pop up with information and instructions on the provided cheat.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="butch" id="gameCrash">
                My Animal Crossing immediately crashes before loading the plugin, is it Luma?
            </discord-message>
            <discord-message user="isabelle">
                Make sure that you’re using an up to date version of Luma and NTR selector. Also make sure you’re choosing NTR v3.3 or higher. Try loading the game without NTR if those don't work. If it doesn't load without NTR, it's most likely the game and not Luma.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="octavian" id="gameHangs">
                Animal Crossing hangs on the loading screen and never loads.
            </discord-message>
            <discord-message user="isabelle">
                First off, not a question. Second, try updating to Luma 8.1 <a href="https://github.com/AuroraWright/Luma3DS/releases/tag/v8.1">[https://github.com/AuroraWright/Luma3DS/releases/tag/v8.1]</a> or higher. It is a CTRPF requirement to use Luma 8.1 (as of 4.0 beta 3 of the plugin).
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="vic" id="ctrpf">
                What is CTRPF?
            </discord-message>
            <discord-message user="isabelle">
                It stands for CTR-Plugin-Framework. Citra is the codename of the 3DS, and CTR is short for it (blame Nintendo for making it complicated.) This is the core of the plugin that gives you the nice UI and all these features, and is provided to you by Nanquitas.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="cherry" id="source">
                Where is the source code? (insert Margen67 meme here)
            </discord-message>
            <discord-message user="isabelle">
                As it’s a decision of Nanquitas to keep the source closed while CTRPF is in beta, I will respect his decision and keep it closed source until the time comes that he lets us open source. It is a closed beta for developers to develop “CTRPF plugins” so if you really wanted to develop a plugin, I suggest using BlankCheatMenu <a href="http://bit.ly/blankCHTMenu">http://bit.ly/blankCHTMenu</a> or forking the already open source version of the plugin <a href="http://bit.ly/OS-ACNL-plg">http://bit.ly/OS-ACNL-plg</a>.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="mira" id="pluginNotWorking">
                I have everything setup correctly, and the plugin still isn't working!
            </discord-message>
            <discord-message user="isabelle">
                <ol>
                    <li>Make sure you <b>aren't</b> using <u>NTR Mode 3</u>.</li>
                    <li>Make sure you have BootNTR Selector's settings set to the default.</li>
                    <br>If you do not know what it is set to, hold <b>Select</b> upon booting BootNTR Selector and set it to default.</li>
                    <li>Make sure you're using the correct ACNL (see the question above)</li>
                </ol>
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="hazel" id="pluginNotLoading">
                My files are in the right place, my BootNTRSelector has the right config, I have the right version of ACNL and the update for that version, NTR loads fine, but not the plugin. What now?
            </discord-message>
            <discord-message user="isabelle">
                <i>As of 3-14-18</i>
                <br>If you've run into this specific situation, ensure that you do not have the Luma fork with plugin loading capabilities. If you have this, update to the latest Luma version at this link:
                <br><a href="https://github.com/AuroraWright/Luma3DS/releases/latest">https://github.com/AuroraWright/Luma3DS/releases/latest</a>
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="purrl" id="editExternally">
                How can I edit my save externally?
            </discord-message>
            <discord-message user="isabelle">
               None of these will work online, you will need to dump your save with JKSM or some other alternative
                <br><br>
                Here's the online save editor:
                <br><a href="http://www.marcrobledo.com/acnl-editor/">http://www.marcrobledo.com/acnl-editor/</a>
                <br><br>Here's the downloadable save editor:
                <br><a href="https://github.com/Cuyler36/ACSE/releases/latest">https://github.com/Cuyler36/ACSE/releases/latest</a>
                <br><br>Here's the last downloadable save editor:
                <br><a href="https://github.com/Mega-Mew/NLSE/releases/latest">https://github.com/Mega-Mew/NLSE/releases/latest</a>
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="miranda" id="physOrDigital">
               Can I use a cart or do I have to use a digital version of ACNL to use the plugin?
            </discord-message>
            <discord-message user="isabelle">
               Any ACNL game (ex. KOR games) will work. That means both a cartridge and a digital game will work with the plugin. Just make sure you have the latest version of your game installed.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="willow" id="itemX">
               Can I have item X??
            </discord-message>
            <discord-message user="isabelle">
               Try asking in #item-request, somebody may be willing to fulfil your request.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="freya" id="editNoComputer">
               Can I edit my save without using a computer?
            </discord-message>
            <discord-message user="isabelle">
               Yes, using a homebrew app that's currently being  developed by <mention id="modCreator"><b-tooltip label="Cuyler#0602" dashed>Cuyler</b-tooltip></mention> and <mention id="admin"><b-tooltip label="Slattz@0674" dashed>Slattz ʕ•ᴥ•ʔ</b-tooltip></mention>, though contributions from others are certainly welcome. It is currently a big WIP atm and only has some barebone player editing features. You can find more info about it here: <a href="https://github.com/Slattz/NLTK/">https://github.com/Slattz/NLTK/</a>
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="francine" id="showcasePerms">
               Can I have permission to post in #mod-showcasing?
            </discord-message>
            <discord-message user="isabelle">
               Just contact an <mention id="admin">Admin</mention>, show them what you want to post and they'll decide if you have permission. You'll be given the role <mention id="modCreator">Mod Creator</mention> if it's decided you can post in #mod-showcasing.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="pecan" id="devTalk">
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
            <discord-message user="naomi" id="serverIdea">
               I have an idea for the server!
            </discord-message>
            <discord-message user="isabelle">
               All ideas are welcome and we'd love to hear them! Post them in #general &#128578;
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="cheri" id="directories">
               What's the difference between WA and Orig in the !workdir and !lumaworkdir commands?
            </discord-message>
            <discord-message user="isabelle">
               WA stands for Welcome Amiibo being built into the install of ACNL. This version of ACNL has a white background and confetti in the home menu icon. Orig stands for the original version of ACNL, which just has a green background in the home menu icon. These are <b>not</b> interchangeable. WA being built in is different from the Original download and you <b>cannot</b> use the files for one for the other.
               <br><img src="https://cdn.discordapp.com/attachments/275462725688229888/498974563367911445/acnl.png"> <img src="https://cdn.discordapp.com/attachments/275462725688229888/497798468379607041/acwa.png">
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="daisy" id="ntrVer">
               Which version of NTR do I use?
            </discord-message>
            <discord-message user="isabelle">
               To save the helpers and us the trouble, here's a <a href="https://github.com/Nanquitas/BootNTR/releases/latest/">direct link</a> to a .cia that <br>will work for this plugin. 
               <br>Install with FBI and load before loading ACNL if using the NTR method for <br>loadingplugins.
               <br>This is the version of NTR you use for O3DS, O3DSXL, N3DS, N3DSXL, <br>O2DS, ON4DS, ABC123DS, etc.
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="plgSetup">
               Plugin Setup Guide
               <img src="https://media.discordapp.net/attachments/360890459645804544/517140019958251520/66444417.jpg?width=563&height=563">
               <br>Credit to <mention id="helpers"><b-tooltip label="Lord DIO#3133" dashed>Lord DIO</b-tooltip></mention>
               <br>Written version located here: <nuxt-link to="/installation">Plugin Installation</nuxt-link>
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="hairGuide">
               Hair Guide
               <br><img src="https://media.discordapp.net/attachments/360890459645804544/528657618558910477/20181007_214051.png?width=176&height=564">
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="buildingSizeGuide">
               For use with marc's save editor (Building Size Guide)
               <img src="https://media.discordapp.net/attachments/360890459645804544/528746536818180106/image0.jpg?width=382&height=361">
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="pwpDimGuide">
               PWP Dimensions Guide
               <br><img src="https://media.discordapp.net/attachments/360890459645804544/529095914749558815/ACNL-Building-Guide-by-Trinsid8133.png?width=310&height=360">
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="styleColorGuide">
               Hair Style and Color Guide
               <br><img src="https://media.discordapp.net/attachments/360890459645804544/557636237561823242/90857f1eb12162229df986123b957312.png?width=221&height=361">
               <br>Colors
               <br><img src="https://media.discordapp.net/attachments/360890459645804544/557637032822964234/2704424015a61b464d6ce0d133489ac3.png?width=221&height=361">
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="movingInFaceGuide">
               Moving in Face Guide
               <br><img src="https://media.discordapp.net/attachments/360890459645804544/557645141108588546/tumblr_muozpwHoTW1sev4jzo2_1280.png?width=221&height=360">
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="isabelle" id="eyeColorGuide">
               Eye Color Guide
               <img src="https://media.discordapp.net/attachments/360890459645804544/557645588963786752/tumblr_muozpwHoTW1sev4jzo3_500.png?width=481&height=358">
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="lolly" id="text2item">
                My text to item isn't working!
            </discord-message>
            <discord-message user="isabelle">
               Don't use item IDs that start with 00, there will be another one for it further down the page (Use CTRL + F to find it by name)
            </discord-message>
        </discord-messages>
        <a href="#toc">back to top</a>
        <br><br>
        <discord-messages>
            <discord-message user="rosie" id="text2item2">
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
            <discord-message user="lily" id="question">
                But what if my question isn't located here?
            </discord-message>
            <discord-message user="isabelle">
               Then please join the discord server.
               <a href="https://discord.gg/EZSxqRr"><img src="https://discordapp.com/api/guilds/275461571231219712/widget.png?style=banner3" alt="Join Discord Server"/></a>
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
        { hid: 'description', name: 'description', content: 'FAQ' }
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

<template>
  <section class="container has-text-centered">
    <div>
      <br>
      <h1 class="title is-size-3">Plugin Installation Guide</h1>
      Under Construction!
      <!-- <br><div class="box">
        <i class="fas fa-exclamation-triangle"></i> WARNING: This guide does not work with Citra! <i class="fas fa-exclamation-triangle"></i>
      </div>
      <br><p>This guide will be walking through every single step for installing and using the plugin.
      <br>Even if you think you've already done a step, do it again. There's nobody counting points for you thinking you're smarter than the guide.
      <br>For the entirety of the guide, do <b>NOT</b> do anything that isn't instructed.</p> 
      <br><p>First of all, you need to have CFW installed on your 3DS. This is not NTR CFW or just having access to the Homebrew Menu. <span class="subtitle">THIS PLUGIN DOES NOT WORK WITH THE 10.0 VERSION OF LUMA, DOWNGRADE MANUALLY OR FOLLOW THIS GUIDE TO REPLACE IT.</span> To know if you have CFW, hold select while booting your 3DS. If you enter the Luma settings menu, you have CFW. If you do not have CFW, use <a href="https://3ds.hacks.guide/">https://3ds.hacks.guide/</a>.</p>
            
      <br><p>Now, pick the method you want to use for the plugin. The first choice is BootNTR; this method has you loading BootNTRSelector each time you want to use the plugin. The second choice is Luma's Plugin Loader; this method has you enabling the plugin loader if you want to use the plugin. Notes: The "root" of your SD card is where you automatically go to if you open your SD card. </p>
                
      <br><p>If the guide says to put something on the root of your SD card, DO NOT put it in any folders, it should go onto your SD card without being in any other folder.</p>
            
      <br><p>We also ONLY provide support for the latest version of the plugin. If you've finished reading all this, go to the next section.</p>
      <br>
      <b-tabs position="is-centered" type="is-toggle-rounded" size="is-medium" v-model="activeTab" icon-pack="fas">
        <b-tab-item icon-pack="fas" icon="star" id="luma3DS" label="Luma3DS">
          <br><h2 class="title is-size-4">Using the plugin with Luma</h2>
          <br>
          <ul>
            <li><input class="is-checkradio is-black" id="step1" type="checkbox" name="exampleCheckbox">
            <label for="step1">Have a way to access the SD card on your 3DS.</label></li>
            <li><input class="is-checkradio is-black" id="step2" type="checkbox" name="exampleCheckbox">
            <label for="step2">Download the latest version of the plugin from the Releases page.</label></li>
            <li><input class="is-checkradio is-black" id="step3" type="checkbox" name="exampleCheckbox">
            <label for="step3">You should now have a .zip file. Open this .zip with the program of your choice.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If you cannot open .zip files, install 7-Zip: <a href="https://www.7-zip.org/">https://www.7-zip.org/</a>.</label></li>
            <li><input class="is-checkradio is-black" id="step4" type="checkbox" name="exampleCheckbox">
            <label for="step4">If you've chosen to use Luma, drag the <code>luma</code> folder to the root of your SD card. 
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - Merge any folders it prompts you to and overwrite any files it prompts you to.</label></li>
            <li><input class="is-checkradio is-black" id="step5" type="checkbox" name="exampleCheckbox">
            <label for="step5">You should now have 6 new folders on your SD card.</label>
            <div class="content">
            SD:/luma/plugins/0004000000086400/
            <br>SD:/luma/plugins/0004000000086300/
            <br>SD:/luma/plugins/0004000000086200/
            <br>SD:/luma/plugins/0004000000198f00/
            <br>SD:/luma/plugins/0004000000198e00/
            <br>SD:/luma/plugins/0004000000198d00/</div></li>
            <li><input class="is-checkradio is-black" id="step6" type="checkbox" name="exampleCheckbox">
            <label for="step6">Check inside these folders. There should only be 1 <code>.plg</code> file in each one.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If there is more than 1 <code>.plg</code> file in these folders, delete ALL these folders and restart this section of the guide from step 3.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If there is only 1 <code>.plg</code> file in these folders, you can now delete the .zip and move onto the next section. Stay on the SD card in your 3DS, we are not done with the files yet.</label></li>
            <li><input class="is-checkradio is-black" id="step7" type="checkbox" name="exampleCheckbox">
            <label for="step7">Replace the boot.firm on the root of your SD card with this <a href="./static/pluginloaderboot.firm" target="_blank" download="boot.firm">boot.firm</a>. 
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If you downloaded this file on Google Chrome and got the name "pluginloaderboot.firm", just rename it to "boot.firm".
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If Luma settings show up, select whatever settings you prefer and hit Start to go to the Home Screen.</label></li>
            <li><input class="is-checkradio is-black" id="step8" type="checkbox" name="exampleCheckbox">
            <label for="step8">On the home screen, hit L + D-Pad Down + Select at the same time. A menu should show up called the Rosalina menu.</label></li>
            <li><input class="is-checkradio is-black" id="step9" type="checkbox" name="exampleCheckbox">
            <label for="step9">In this menu, you should now see a Plugin Loader option. If it says Enable Plugin Loader, hit A on it to turn <br>it into Disable Plugin Loader. &nbsp;Do nothing otherwise.</label></li>
            <li><input class="is-checkradio is-black" id="step10" type="checkbox" name="exampleCheckbox">
            <label for="step10">Launch Animal Crossing: New Leaf. There should be a green flash.
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - If there is no green flash, close the game and restart your 3DS. Try again from step 1, except this time restart your 3DS after hitting Enable Plugin Loader. Make sure to check that it still follows step 2 after the 3DS turns back on.</label></li>
            <li><input class="is-checkradio is-black" id="step11" type="checkbox" name="exampleCheckbox">
            <label for="step11">If there is a green flash, continue with loading the game. Pick a character and enter your town. You should <br>see our Terms of Services and "Plugin Ready!" in the bottom right corner of the top screen.</label></li>
            <li><input class="is-checkradio is-black" id="step12" type="checkbox" name="exampleCheckbox">
            <label for="step12">Once the town is loaded and everything is in order, press Select to open the plugin menu or Hold R + X for <br>a small bit to open the Quick Menu.</label></li>
          </ul>
          <br><br><h1 id="congrats" class="title is-4">Congrats! You've successfully installed the plugin!</h1>
        </b-tab-item>
            
        <b-tab-item icon-pack="fas" id="bootNTR" icon="rocket" label="BootNTR">
          <br><h2 class="title is-size-4">Using the plugin with BootNTR</h2>
          <br>
          <ul>
            <li><input class="is-checkradio is-black" id="step13" type="checkbox" name="exampleCheckbox">
            <label for="step13">Have a way to access the SD card on your 3DS.</label></li>
            <li><input class="is-checkradio is-black" id="step14" type="checkbox" name="exampleCheckbox">
            <label for="step14">Download the latest version of the plugin from the Releases page.</label></li>
            <li><input class="is-checkradio is-black" id="step15" type="checkbox" name="exampleCheckbox">
            <label for="step15">You should now have a .zip file. Open this .zip with the program of your choice.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If you cannot open .zip files, install 7-Zip: <a href="https://www.7-zip.org/">https://www.7-zip.org/</a>.</label></li>
            <li><input class="is-checkradio is-black" id="step16" type="checkbox" name="exampleCheckbox">
            <label for="step16">If you've chosen to use BootNTR, drag the plugin folder to the root of your SD card.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - Merge any folders it prompts you to and overwrite any files it prompts you to.</label></li>
            <li><input class="is-checkradio is-black" id="step17" type="checkbox" name="exampleCheckbox">
            <label for="step17">You should now have 6 new folders on your SD card.</label>
            <div class="content">
            SD:/plugin/0004000000086400/
            <br>SD:/plugin/0004000000086300/
            <br>SD:/plugin/0004000000086200/
            <br>SD:/plugin/0004000000198f00/
            <br>SD:/plugin/0004000000198e00/
            <br>SD:/plugin/0004000000198d00/</div></li>
            <li><input class="is-checkradio is-black" id="step18" type="checkbox" name="exampleCheckbox">
            <label for="step18">Check inside these folders. There should only be 1 <code>.plg</code> file in each one.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If there is more than 1 <code>.plg</code> file in these folders, delete ALL these folders and restart this section of the guide from step 3.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If there is only 1 <code>.plg</code> file in these folders, you can now delete the .zip and move onto the next section. Stay on the SD card in your 3DS, we are not done with the files yet.</label></li>
            <li><input class="is-checkradio is-black" id="step19" type="checkbox" name="exampleCheckbox">
            <label for="step19">Replace the boot.firm on the root of your SD card with this <a href="/bootntrboot.firm" target="_blank" download="boot.firm">boot.firm</a>. 
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If you downloaded this file on Google Chrome and got the name "bootntrboot.firm", just rename it to "boot.firm".
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If Luma settings show up, select whatever settings you prefer and hit Start to go to the Home Screen.</label></li>
            <li><input class="is-checkradio is-black" id="step20" type="checkbox" name="exampleCheckbox">
            <label for="step20">Download BootNTRSelector by downloading <a href="/BootNTRSelector-FONZD-Banner.cia" target="_blank">BootNTRSelector-FONZD-Banner.cia</a>.</label></li>
            <li><input class="is-checkradio is-black" id="step21" type="checkbox" name="exampleCheckbox">
            <label for="step21">Put this .cia file in the cia or cias folder on your SD card.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If this folder does not exist, create it.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - You should now have the following path on your SD card.</label>
            <br><div class="content">
            SD:/cia/BootNTRSelector-FONZD-Banner.cia
            <br>or
            <br>SD:/cias/BootNTRSelector-FONZD-Banner.cia</div></li>
            <li><input class="is-checkradio is-black" id="step22" type="checkbox" name="exampleCheckbox">
            <label for="step22">You can now put the SD card back in your 3DS or otherwise close access to the SD card.</label></li>
            <li><input class="is-checkradio is-black" id="step23" type="checkbox" name="exampleCheckbox">
            <label for="step23">Boot up your 3DS and open FBI.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If you do not have FBI, you've not followed <a href="https://3ds.hacks.guide/">https://3ds.hacks.guide/</a> to completion or you do not have CFW.</label></li>
            <li><input class="is-checkradio is-black" id="step24" type="checkbox" name="exampleCheckbox">
            <label for="step24">In FBI, navigate to the .cia that you've put on your SD card and install it by clicking A on it and going to the Install option.</label></li>
            <li><input class="is-checkradio is-black" id="step25" type="checkbox" name="exampleCheckbox">
            <label for="step25">Once it has installed, go to the home screen of your 3DS. Wait a small bit and there should now be a new present.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If there is no present, you most likely already had this installed. Uninstall it by finding it in the Titles menu of FBI (It should be called "Boot NTR Selector") and restart from step 5.</label></li>
            <li><input class="is-checkradio" id="step26" type="checkbox" name="exampleCheckbox">
            <label for="step26">Open the present and launch the program. If there is a setup, select Default and proceed. Click on the 3.6 option when given and the program should close itself upon completion.</label></li>
            <li><input class="is-checkradio is-black" id="step27" type="checkbox" name="exampleCheckbox">
            <label for="step27">Launch Animal Crossing: New Leaf. There should be a green flash.
            <br><span class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - If there is no green flash, close the game and go back to the home screen. Hold select while booting BootNTRSelector and go through the setup for default settings once more. Restart from step 7.</label></li>
            <li><input class="is-checkradio is-black" id="step28" type="checkbox" name="exampleCheckbox">
            <label for="step28">If there is a green flash, continue with loading the game. Pick a character and enter your town. You should <br>see our Terms of Services and "Plugin Ready!" in the bottom right corner of the top screen.</label></li>
            <li><input class="is-checkradio is-black" id="step29" type="checkbox" name="exampleCheckbox">
            <label for="step29">Once the town is loaded and everything is in order, press Select to open the plugin menu or Hold R + X for <br>a small bit to open the Quick Menu.</label></li>
            <li><input class="is-checkradio is-black" id="step30" type="checkbox" name="exampleCheckbox">
            <label for="step30">You can delete the .cia in the cia or cias folder if you wish. Do not delete anything else.</label></li>
          </ul>
          <br><br><h1 id="congrats" class="title is-4">Congrats! You've successfully installed the plugin!</h1>
        </b-tab-item>
        <b-tab-item icon-pack="fas" id="faq" icon="question" label="FAQ">
          <discord-messages>
            <discord-message user="kidd" id="homebuttondisabled">
                Do I need a specific version of the game?
            </discord-message>
            <discord-message user="isabelle">
                No, you can have a cartridge or a download. 
                <br>The game does need to be fully updated though.
            </discord-message>
          </discord-messages>
          <br><br>
          <discord-messages>
            <discord-message user="cheri" id="directories">
               What's the difference between WA and Orig in the !workdir and !lumaworkdir commands?
            </discord-message>
            <discord-message user="isabelle">
               WA stands for Welcome Amiibo being built into the install of ACNL. This version of ACNL has a white background and confetti in the home menu icon. Orig stands for the original version of ACNL, which just has a green background in the home menu icon. These are <b>not</b> interchangeable. WA being built in is different from the Original download and you <b>cannot</b> use the files for one for the other.
               <br><img src="acnl.png"> <img src="acwa.png">
            </discord-message>
          </discord-messages>
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
          <br><br>
          <discord-messages>
            <discord-message user="twiggy" id="lumaver">
                What version of Luma do I need to use the plugin?
            </discord-message>
            <discord-message user="isabelle">
               BootNTR will <b>ONLY</b> work on the 9.1 version of Luma.
                The Luma Plugin Loader will ONLY work with a version of Luma that has the plugin loader built in. You can find this download <a href="https://cdn.discordapp.com/attachments/275736483363684358/594597313880522764/boot.firm">here</a>.
            </discord-message>
          </discord-messages>
          <br><br>
          <discord-messages>
            <discord-message user="renee" id="multipleplugins">
                Can I use multiple plugins at the same time?
            </discord-message>
            <discord-message user="isabelle">
                No.
            </discord-message>
          </discord-messages>
          <br><br>
          <discord-messages>
            <discord-message user="ken" id="multipleplugins">
                My plugin isn't working but I don't want to start over from 0!
            </discord-message>
            <discord-message user="isabelle">
                Here are all the major checks to make sure it's installed correctly, do not skip any of them or the helpers will be mad.
                <br>1) Make sure you are not using NTR Mode 3 (Refer to "Which version of NTR do I use?")
                <br>2) Make sure your version of Luma is correct, downgrade by downloading the latest boot.firm in #ntr-plugin-info and replacing the boot.firm on the root of your SD card.
                <br>3) Make sure ACNL is fully updated.
                <br>4) Hold select while booting BootNTRSelector to reset the settings to default. When it asks you which settings you want, click on default and load 3.6 like normal.
                <br>5) Make sure there is only one .plg file in all of the following locations:
                <div class="contentFAQ">
                    SD:/plugin/0004000000086400/
                    SD:/plugin/0004000000086300/
                    SD:/plugin/0004000000086200/
                    SD:/plugin/0004000000198f00/
                    SD:/plugin/0004000000198e00/
                    SD:/plugin/0004000000198d00/
                    SD:/luma/plugins/0004000000086400/
                    SD:/luma/plugins/0004000000086300/
                    SD:/luma/plugins/0004000000086200/
                    SD:/luma/plugins/0004000000198f00/
                    SD:/luma/plugins/0004000000198e00/
                    SD:/luma/plugins/0004000000198d00/
                </div>
            </discord-message>
        </discord-messages>
        </b-tab-item>

        <b-tab-item icon-pack="fas" id="videos" icon="video" label="Videos">
          <br><h2 class="title is-size-4">Video Guides</h2>
          There's now a video tutorial on how to install the 4.1.1 version of the plugin! Please check it out before you ask in #plugin-support and make sure your folder structure looks the same. Huge thanks to @im kyu's book 🤠 for creating this!
          <br><iframe width="700" height="700" src="https://www.youtube.com/embed/IS9dYEZ7IFY" frameborder="0" allowfullscreen></iframe>
        </b-tab-item>
      </b-tabs>-->
    </div> 
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Plugin Installation Guide - ACNL Modding Info',
      activeTab: 0
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'og-description', name: 'og:description', content: 'Installation Guide' },
        { hid: 'og-title', property: 'og:title', content: this.title },
        { hid: 'og-site_name', property: 'og:site_name', content: 'ACNL Modding Info'}
      ]
    }
  }
}
</script>

<style scoped>
iframe {
  width: 700px;
  height: 300px;
}
.b-tabs .tabs li {
  background-color: #8c67ef;
}

#faq a {
  color: white;
  text-decoration: underline;
}

a {
  color: black;
}

ul {
  list-style-position: inside;
}
code {
  border-radius: 25px;
}

#step1 {
  margin-left: 550px;
}

.content {
  width: 390px;
  background-color:	#f5f5f5;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 25px;
}

.contentFAQ {
  width: 390px;
  background-color:	#f5f5f5;
  color: black;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 25px;
}

.tab-item {
  /* border: 1px solid black; */
  margin: auto;
}

.tab-content {
  margin: auto;
}

#luma3DS {
  padding: 10px;
  background: url('/blue_bg.png');
  width: 1000px;
  border-radius: 25px;
  border-color: #41aed7;
  border-width: 5px;
  text-align: left;
  margin: auto;
}

#bootNTR {
  padding: 10px;
  background: url('/pink_bg.png');
  width: 1000px;
  border-radius: 25px;
  border-color: #f58094;
  border-width: 5px;
  text-align: left;
  margin: auto;
}

#videos {
  padding: 10px;
  background: url('/green_bg.png');
  width: 800px;
  border-radius: 25px;
  border-color: #a1cc00;
  border-width: 5px;
  text-align: center;
  margin: auto;
}

#congrats {
  text-align: center;
}

.box {
  background-color: yellow;
}

label {
  width: 150px;
  font-size: 10px;
  cursor: default;
}

input[type="checkbox"], input[type="checkbox"] + label {
  cursor: url('/cursor.cur'), auto;
}

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

@media (max-width: 1300px) {
  #luma3DS, #bootNTR {
    width: 450px;
    padding: 10px;
    text-align: left;
    margin-left: 0px;
    margin: auto;
  }
  label {
    width: 150px;
  }
  #luma3DS li, #bootNTR li {
    width: 400px;
  }
  .space {
    display: none;
  }
  .discord-messages, .discord-message {
    width: 475px;
  }
}
</style>

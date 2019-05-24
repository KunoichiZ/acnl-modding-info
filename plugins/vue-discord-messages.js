import Vue from 'vue';
import VueDiscordMessage from 'vue-discord-message';
 
Vue.use(VueDiscordMessage, {
    disableFont: true,
    profiles: {
        nanashi: {
            author: 'nanashi89',
            avatar: 'https://i.imgur.com/6XRINSA.png',
            roleColor: '#e67e22'
        },
        kunoichi: {
            author: 'KunoichiZ',
            avatar: 'https://i.imgur.com/7IWUDBD.png',
            roleColor: '#e4fa24'
        },
        zypther: {
            author: 'Zypther',
            avatar: 'https://i.imgur.com/tZR5wsV.png',
            roleColor: '#e72c2c'
        }
    },
});
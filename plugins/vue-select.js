// https://medium.com/@codebeast_/why-your-third-party-plugin-dont-work-in-nuxt-and-how-to-fix-it-d1a8caadf422

import Vue from 'vue';
import vSelect from 'vue-select';

const VueSelect = {  
    install(Vue, options) {    
        Vue.component('v-select', vSelect)      
    }
};

Vue.use(VueSelect);

export default VueSelect
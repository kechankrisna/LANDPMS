<template>
    <div>
         <app-bar></app-bar>
        <v-content>
            <div>
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
         </v-content>
    </div>
</template>

<script>
import AppBar from './../components/AppBar.vue'

export default {
    components: {
        AppBar
    },
    data() {
        return {
            
        }
    },

}
</script>
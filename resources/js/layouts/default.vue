<template>
    <div>
         <app-bar></app-bar>
        <v-content>
            <v-container grid-list-xs>
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </v-container>
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
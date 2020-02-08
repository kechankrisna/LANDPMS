<template>
    <v-app>
        <router-view/>
    </v-app>
</template>

<style lang="scss" >
    .border-top{
      border-top: 5px solid !important;
    }
    .border-bottom{
      border-bottom: 5px solid !important;
    }
    .border-right{
      border-right: 5px solid !important;
    }
    .border-left{
      border-left: 5px solid !important;
    }
    .border-primary{
       border-color: var(--v-primary-base) !important;
    }
    .border-accent{
       border-color: var(--v-accent-base) !important;
    }
    .border-secondary{
       border-color: var(--v-secondary-base) !important;
    }
    .border-blue{
       border-color: #2196F3 !important;
    }
</style>
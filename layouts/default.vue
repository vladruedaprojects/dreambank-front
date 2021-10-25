<template>
  <v-app dark>
    <drawer-master></drawer-master>
    <top-bar></top-bar>

    <v-main>
      <secondary-bar></secondary-bar>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    
    <v-footer
      app
      inset
      _color="green"
    >
      <!-- <v-card color="green" height="20"></v-card> -->
    </v-footer>
  </v-app>
</template>

<script>
import DrawerMaster from '@/components/layout/default/drawerMaster.vue'
import TopBar from '@/components/layout/default/topBar.vue'
import SecondaryBar from '@/components/layout/default/secondaryBar.vue'

export default {
  components: { DrawerMaster, TopBar, SecondaryBar },
  data () {
    return {
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<template>
  <v-app dark>
    <drawer-master></drawer-master>
    <top-bar @logout="logout"></top-bar>

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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DrawerMaster from '@/components/layout/default/drawerMaster.vue'
import TopBar from '@/components/layout/default/topBar.vue'
import SecondaryBar from '@/components/layout/default/secondaryBar.vue'

@Component({
  components: { DrawerMaster, TopBar, SecondaryBar }
})
export default class Default extends Vue {
  right: boolean = true
  rightDrawer: boolean = false

  async logout () {
    await this.$auth.logout()
  }
}
</script>

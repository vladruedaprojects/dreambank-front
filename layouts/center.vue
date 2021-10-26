<template>
  <v-app>
    <v-sheet class="sheet" height="100px" width="100vw">
      <v-row align="center" justify="center">
        <v-card flat width="800" class="pt-10">
          <top-logo></top-logo>
        </v-card>
      </v-row>
    </v-sheet>

    <v-main>
      <v-sheet class="sheet" height="100%" width="100vw">
        <v-row align="center" justify="center">
          <v-sheet class="sheet" max-width="800">
            <nuxt />
          </v-sheet>
        </v-row>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TopLogo from '@/components/layout/center/topLogo.vue'

@Component({
  components: { TopLogo }
})
export default class Center extends Vue {
}
</script>
<template>
  <v-card
    tile
    flat
    color="primary"
    height="104"
  >
    <v-row no-gutters class="py-2">
      <v-col cols="7" lg="5" md="8" sm="7" class="pl-10">
        <v-list-item>
          <v-list-item-avatar style="height: 70px; width: 70px;">
            <v-avatar
              size="70"
              color="white"
            >
              <v-img
                :src="user.avatar || 'https://cdn.vuetifyjs.com/images/lists/2.jpg'"
              ></v-img>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="white--text font-weight-regular">
              Welcome back, {{ user.name }}!
            </v-list-item-title>
            <v-list-item-subtitle class="white--text font-weight-light">
              Your last login was {{ user.lastLogin }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col v-if="!smallScreen" cols="5" lg="4" md="4"></v-col>
      <v-col cols="12" lg="3" md="4" sm="5" class="px-8">
        <ui-button
          dark
          small
          class="my-1 mt-2 caption"
          :block="false"
          width="160"
          @click="requestDialog = true"
        >
          Request new product
        </ui-button>
        <ui-button
          dark
          small
          class="my-2 caption"
          :block="false"
          width="160"
          to="/transaction/transfer"
        >Make a transfer</ui-button>
      </v-col>
    </v-row>

    <request-new-product
      v-if="requestDialog"
      v-model="requestDialog"
    ></request-new-product>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import RequestNewProduct from '@/components/request/requestNewProduct.vue'
import IUser from '~/models/user'

@Component({
  components: { RequestNewProduct }
})
export default  class SecondaryBar extends Vue { 
  // @VModel({ type: Boolean, default: false }) requestDialog!: boolean
  requestDialog: boolean = false

  user: IUser = this.$store.state.user

  get smallScreen (): Boolean {
    return this.$vuetify.breakpoint.mdAndDown
  }
}
</script>

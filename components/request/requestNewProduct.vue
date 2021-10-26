<template>
  <v-dialog
    v-bind="$attrs"
    width="800"
    persistent
    v-on="$listeners"
  >
    <v-card height="540" width="800" dark color="secondary">
      <v-card-title>
        <top-logo>
          <template #actions>
            <v-btn
              fab
              x-small
              class="elevation-0"
              color="primary"
              @click="$emit('input', false)"
            >
              <v-icon x-small color="white">mdi-close</v-icon>
            </v-btn>
          </template>
        </top-logo>
      </v-card-title>

      <v-card-text v-if="!successful" class="pb-0">
        <v-card flat class="transparent" height="100%" width="800">
          <ui-header-card-title
            header="Request"
            title="New product"
            text="Instant payments, and a lot eithdrawal method available."
          >
          </ui-header-card-title>

          <v-card flat class="transparent" width="600" style="margin: 10px auto;">
            <v-form>
              <v-row dense justify="center" class="mr-6 pb-0">
                <v-col cols="8">
                  <ui-select
                    v-model="requestProduct.product"
                    label="Product"
                    :items="products"
                    item-value="_id"
                    item-text="name"
                    :rules="[v => !!v || 'Required']"
                    required
                    dark
                    hide-details="auto"
                  ></ui-select>
                </v-col>
                <v-col cols="8">
                  <ui-textfield
                    v-model="requestProduct.cellphone"
                    label="Cellphone"
                    dark
                    hide-details="auto"
                    :rules="[v => !!v && v.length > 6 || 'Enter a valid cellphone']"
                    hint="Write the number you want to be contacted at"
                    persistent-hint
                    class="mt-1"
                  ></ui-textfield>
                </v-col>
                <v-col cols="8">
                  <ui-textfield
                    v-model="requestProduct.monthlyIncome"
                    label="Monthly income"
                    dark
                    hide-details="auto"
                    extend-label
                    :rules="[v => !!v || 'Required']"
                    hint="Give as an average income"
                    persistent-hint
                  ></ui-textfield>
                </v-col>
              </v-row>
            </v-form>

            <div class="text-center">
              <v-btn
                rounded
                dark
                class="success mt-4 m-auto elevation-0 title text-capitalize black--text"
                width="300px"
                :disabled="!validateForm"
                @click.stop="sendRequest"
              >Send</v-btn>
            </div>
            <div class="text-center">
              <v-btn
                text
                small
                rounded
                class="mt-2"
                width="300px"
                @click="$emit('input', false)"
              >Cancel</v-btn>
            </div>
          </v-card>
        </v-card>
      </v-card-text>

      <v-card-text v-else>
          <ui-header-card-title
            header="Request"
            title="Request success"
            text=""
            class="mt-15"
          >
            <template #text>
              Your order has been sent successfully.<br>
              an advisor will contact you soon
            </template>
            <v-btn
              rounded
              dark
              class="success mt-4 m-auto elevation-0 title text-capitalize black--text"
              width="300px"
              @click.stop="$emit('input', false)"
            >Go Home</v-btn>
          </ui-header-card-title>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TopLogo from '@/components/layout/center/topLogo.vue'
import UiHeaderCardTitle from '@/components/ui/UiHeaderCardTitle.vue'

import IRequestProduct from '@/models/requestProduct'

@Component({
  components: { TopLogo, UiHeaderCardTitle }
})
export default class RequestNewProduct extends Vue {
  products: object = []
  successful: boolean = false
  requestProduct: IRequestProduct = {
    _id: null,
    product: '',
    user: '',
    cellphone: '',
    monthlyIncome: 0,
    status: false,
    createdAt: null,
    updatedAt: null
  }

  get validateForm () {
    return this.requestProduct.product && this.requestProduct.cellphone.length > 6 && this.requestProduct.monthlyIncome
  }

  async mounted () {
    this.products = await this.$axios.$get('/product/all')
  }

  async sendRequest () {
    try {
      const response = await this.$axios.$post('/requestproduct/new', this.requestProduct)
      this.$emit('new-request', response)
      if (response) {
        this.successful = true
      }
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

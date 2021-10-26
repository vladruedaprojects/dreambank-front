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

      <v-card-text>
        <v-card flat class="transparent" height="100%" width="800">
          <v-container>
            <v-row no-gutters align="center" justify="center">
              <v-col cols="9">
                <div class="body-1 font-weight-bold text-center">
                  Request
                </div>
                <div class="under-request" />
                <h4 class="text-h4 font-weight-bold text-center">
                  New product
                </h4>
                <p class="mt-6 request-info text-center">
                  Instant payments, and a lot eithdrawal method available.
                </p>
              </v-col>
              <v-col>
                <v-card flat class="transparent" width="600" style="margin: 10px auto;">
                  <v-row justify="center" class="mr-6">
                    <v-col cols="8">
                      <ui-select
                        label="Product"
                        dark
                        hide-details="auto"
                      ></ui-select>
                    </v-col>
                    <v-col cols="8">
                      <ui-textfield
                        label="Cellphone"
                        dark
                        hide-details="auto"
                      ></ui-textfield>
                    </v-col>
                    <v-col cols="8">
                      <ui-textfield
                        label="Monthly income"
                        dark
                        hide-details="auto"
                        extend-label
                      ></ui-textfield>
                    </v-col>
                  </v-row>
                  <div class="text-center">
                    <ui-button
                      class="success black--text mt-6 m-auto"
                      :block="false"
                      width="300px"
                    >
                      Send
                    </ui-button>
                  </div>
                  <div class="text-center">
                    <v-btn
                      text
                      small
                      rounded
                      class="mt-2"
                    >Cancel</v-btn>
                  </div>
              </v-card>
              </v-col>
            </v-row>

            <v-row justify="center">
              
            </v-row>
          </v-container>
        </v-card>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import TopLogo from '@/components/layout/center/topLogo.vue'

@Component({
  components: { TopLogo }
})
export default class RequestNewProduct extends Vue {
  // @VModel({ type: Boolean, default: () => [] }) dialog!: boolean
}
</script>

<style lang="scss" scoped>
  .under-request {
    border-bottom: 2px solid $success;
    width: 70px;
    margin: 0 auto 12px;
  }
  .request-info {
    font-size: 11px;
    line-height: 14px;
  }
</style>
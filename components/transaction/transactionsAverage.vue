<template>
  <v-container>
    <ui-card class="px-10 py-4 mx-10 mt-1">
      <div class="title primary--text">
        Tansactions Average
      </div>
      <v-form ref="form">
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <div
              v-if="average !== null"
              class="text-h4 text-center primary--text mt-2 font-weight-bold"
            >
              {{ averageFormat }}
            </div>
            <v-alert
              v-else
              dense
              text
              type="warning"
            >No transactions found  </v-alert>
            <p class="caption primary--text pt-5">
              Select the account and dates to see the average of the transactions
            </p>
            <v-select
              v-model="accountId"
              label="Account"
              :items="accounts"
              item-value="_id"
              item-text="name"
              :rules="[v => !!v || 'Account required']"
              outlined
              dense
              hide-details="auto"
              class="rounded-lg"
            ></v-select>
            <ui-textfield
              v-model="fromDate"
              label="From"
              :rules="[v => !!v || 'Required']"
              readonly
              hide-details="auto"
              class="mt-2"
            ></ui-textfield>
            <ui-textfield
              v-model="toDate"
              label="To"
              :rules="[v => !!v || 'Required']"
              readonly
              hide-details="auto"
              class="mt-2"
            ></ui-textfield>

            <ui-button
              :disabled="!validateForm"
              class="mt-4"
              @click="getAverageTransactions"
            >Inquire Average</ui-button>
            <!-- <v-text-field
              v-model="dateRangeText"
              label="Date range"
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field> -->
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-date-picker
              v-model="dates"
              no-title
              range
              color="primary"
            ></v-date-picker>
          </v-col>
        </v-row>
      </v-form>
    </ui-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import IAccount from '~/models/account'

@Component
export default class InquireTransactions extends Vue  {
  dates: string[] = []
  average: number | null = 0
  accountId: string = ''
  accounts: IAccount[] = []

  mounted () {
    this.getAccounts()
  }

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  get fromDate () {
    return this.dates[0]
  }

  get toDate () {
    return this.dates[1]
  }

  get averageFormat () {
    if (this.average) return this.formatter.format(this.average)
    return '$0.00'
  }

  get dateRangeText () {
    return this.dates.join(' ~ ')
  }

  get validateForm () {
    return this.accountId && this.fromDate && this.toDate
  }

  async getAccounts () {
    this.accounts = await this.$axios.$get('/account/all')
  }

  async getAverageTransactions () {
    const data = await this.$axios.$post(
        `/transaction/average/account${this.accountId}`,
        { fromDate: this.fromDate, toDate: this.toDate }
      )
    if (data && data.transactionsAverage) {
      this.average = data.transactionsAverage
    } else {
      this.average = null
    }
  }
}
</script>

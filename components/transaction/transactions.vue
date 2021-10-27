<template>
  <v-container class="px-12">
    <ui-card
      class="indigo lighten-5 px-5"
    >
      <v-toolbar flat class="transparent">
        {{ account.name }}
        <v-spacer></v-spacer>
        <v-btn
          small
          icon
          to="/account/accounts"
        >
          <v-icon
            color="primary"
          >
            mdi-exit-to-app
          </v-icon>
        </v-btn>
      </v-toolbar>
    </ui-card>

    <ui-card v-if="account && account.name" class="mt-5">
      <v-card-text>
        <ui-table
          :items="transactions"
          :headers="headers"
          title="Last Transactions"
        ></ui-table>
      </v-card-text>
    </ui-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import UiTable from '@/components/ui/UiTable.vue'
import ITransaction from '@/models/transaction'
import IAccount from '@/models/account'

@Component({
  components: { UiTable }
})
export default class Transaction extends Vue {
  @Prop({ type: String, default: null }) readonly accountId!: string | null

  account: IAccount | null = this.$store.state.accountQuery

  headers: object = [
    {
      text: 'Date',
      align: 'left',
      sortable: false,
      value: 'createdAt',
      type: 'date',
      class: 'primary--text'
    },
    {
      text: 'Description',
      align: 'left',
      sortable: true,
      value: 'description',
      class: 'primary--text'
    },
    {
      text: 'Currency',
      align: 'left',
      sortable: true,
      value: 'currency',
      class: 'primary--text'
    },
    {
      text: 'Value',
      align: 'right',
      sortable: true,
      value: 'amount',
      type: 'currency',
      class: 'primary--text'
    },
    {
      text: 'Balance',
      align: 'right',
      sortable: true,
      value: 'balance',
      type: 'currency',
      class: 'primary--text'
    }
  ]

  transactions: ITransaction[] = []

  async mounted () {
    await this.getTransactions()
  }

  async getTransactions() {
    if (this.accountId) {
      this.transactions = await this.$axios.$get(`/transaction/account${this.accountId}`)
      this.account = this.$store.state.accountQuery
    }
  }
}
</script>

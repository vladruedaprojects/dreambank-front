<template>
  <v-container class="px-12">
    <ui-card>
      <v-card-text>
        <ui-table
          :items="accounts"
          :headers="headers"
          title="All Accounts"
          @selected="(account) => goTransactions(account)"
        ></ui-table>
      </v-card-text>
    </ui-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UiTable from '@/components/ui/UiTable.vue'
import IAccount from '@/models/account'

@Component({
  components: { UiTable }
})
export default class AllAccounts extends Vue {
  selectedItem: object = {}
  totalBalance: number = 0

  headers: object = [
    {
      text: '',
      align: 'center',
      sortable: false,
      value: 'product',
      subValue: 'icon',
      type: 'icon',
      class: 'primary--text'
    },
    {
      text: 'Type',
      align: 'left',
      sortable: true,
      value: 'product',
      subValue: 'productType',
      class: 'primary--text'
    },
    {
      text: 'Account Name',
      align: 'left',
      sortable: true,
      value: 'name',
      class: 'primary--text'
    },
    {
      text: 'Status',
      align: 'left',
      sortable: true,
      value: 'status',
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
      text: 'Balance',
      align: 'right',
      sortable: true,
      value: 'balance',
      class: 'primary--text'
    }
  ]

  accounts: IAccount[] = []

  async mounted () {
    await this.getAccounts()
  }

  async getAccounts() {
    this.accounts = await this.$axios.$get('/account/all')
    this.totalBalance = this.accounts.reduce((total: number, item: IAccount) => {
      total += item.balance
      return total
    }, 0)
    this.$store.commit('setTotalBalance', this.totalBalance)
  }

  goTransactions (account: IAccount) {
    this.$store.commit('setAccountQuery', account)
    this.$router.push(`/transaction/account/${account._id}`)
  }

}
</script>

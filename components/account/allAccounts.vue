<template>
  <v-container class="px-12">
    <ui-card>
      <v-card-text>
        <ui-table
          :items="accounts"
          :headers="headers"
          title="All Accounts"
        ></ui-table>
      </v-card-text>
    </ui-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, VModel } from 'vue-property-decorator'
import UiTable from '@/components/ui/UiTable.vue'

@Component({
  components: { UiTable }
})
export default class AllAccounts extends Vue {
  @VModel({ type: Array, default: () => [] }) selected!: object

  selectedItem: object = {}

  headers: object = [
    {
      text: '',
      align: 'center',
      sortable: false,
      value: 'icon',
      type: 'icon',
      class: 'primary--text'
    },
    {
      text: 'Type',
      align: 'left',
      sortable: true,
      value: 'accountType.name',
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

  accounts: object = [
    {
      _id: '1',
      icon: 'fas fa-money-check-alt', // piggy-bank
      accountType: {
        _id: '0',
        name: 'Checking'
      },
      name: '1267451****- WOLFE',
      status: true, // Active
      currency: 'USD',
      balance: 6266.33
    },
    {
      _id: '2',
      icon: 'fas fa-piggy-bank',
      accountType: {
        _id: '1',
        name: 'Savings'
      },
      name: '5719371****- MAENGUNE',
      status: true,
      currency: 'USD',
      balance: 10998.10
    },
    {
      _id: '3',
      icon: 'fas fa-piggy-bank',
      accountType: {
        _id: '1',
        name: 'Savings'
      },
      name: '7125781****- KAISER',
      status: false,
      currency: 'USD',
      balance: 23.86
    }
  ]

}
</script>

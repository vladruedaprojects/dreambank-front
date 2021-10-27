<template>
  <div>
    <transactions :account-id="accountId"></transactions>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Transactions from '@/components/transaction/transactions.vue'

@Component({
  components: { Transactions }
})
export default class TransactionsByAccount extends Vue {
  accountId: string | null = null

  created () {
    if (this.$route.params) {
      this.accountId = this.$route.params.id
    }
  }

}
</script>

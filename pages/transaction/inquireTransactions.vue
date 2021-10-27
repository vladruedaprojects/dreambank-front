<template>
  <div>
    <transactions-average></transactions-average>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TransactionsAverage from '@/components/transaction/transactionsAverage.vue'

@Component({
  components: { TransactionsAverage }
})
export default class InquireTransactions extends Vue  {

}
</script>

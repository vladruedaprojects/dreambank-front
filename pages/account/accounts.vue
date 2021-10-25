<template>
  <div>
    <all-accounts></all-accounts>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AllAccounts from '@/components/account/allAccounts.vue'

@Component({
  components: { AllAccounts }
})
export default class Account extends Vue {
  
}
</script>
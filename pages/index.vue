<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  layout: 'center',
  auth: false
})
export default class Index extends Vue {
  mounted () {
    this.$router.replace('/login')
  }
}
</script>
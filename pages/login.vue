<template>
  <login-component></login-component>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LoginComponent from '@/components/user/login.vue'

@Component({
  components: { LoginComponent },
  layout: 'ceneter'
})
export default class Login extends Vue  {}
</script>
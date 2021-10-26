<template>
  <v-card flat class="card-width">
    <v-card-title class="headline primary--text text-center">
      <ui-header-card-title
        header="Welcome back"
        title="Login"
      >
        <template #text>
          For your money safety, please delete all extensions<br>
          for the browser you use to log in to your wallet
        </template>
      </ui-header-card-title>
    </v-card-title>

    <v-card-text style="margin-left: -40px">
      <v-form ref="loginForm">
        <ui-textfield
          v-model="user.idCard"
          label="Login"
          type="text"
          :rules="[v => !!v || 'Required']"
          required
          :append-icon="!!user.idCard ? 'mdi-check' : undefined"
          hide-details="auto"
        ></ui-textfield>
        <ui-textfield
          v-model="user.password"
          label="Password"
          class="mt-2"
          type="password"
          :rules="[v => !!v && v.length > 3 || 'Please, enter a valid password']"
          required
          :append-icon="!!user.password && user.password.length > 3 ?  'mdi-check' : undefined"
          hide-details="auto"
          @keyup.enter="login"
          @keydown.space.prevent
        ></ui-textfield>
      </v-form>

      <v-row no-gutters>
        <v-col cols="3"></v-col>
        <v-col cols="9" class="mt-4">
          <ui-button
            :disabled="!validateForm"
            @click="login"
          >
            Login
          </ui-button>
        </v-col>
      </v-row>

      <v-row justify="space-around" class="mt-14 ml-8 primary--text card-width">
        <v-col>
          <div class="body-1 font-weight-bold">
            Don't have an account?
          </div>
          <div class="caption">
            Register here <v-icon left small>mdi-arrow-right</v-icon>
          </div>
        </v-col>
        <v-col>
          <v-btn
            outlined
            rounded
            color="success"
          >
            Create account
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import {VForm } from '@/types/types'
import UiHeaderCardTitle from '@/components/ui/UiHeaderCardTitle.vue'

import IUser from '@/models/user'

interface ServerData {
  user: IUser
  token: string
}

interface ServerResponse {
  data: ServerData
}

@Component({
  components: { UiHeaderCardTitle }
})
export default class LoginComponent extends Vue {
  buttonLoginDisabled: boolean = true
  validForm: boolean = false
  user: IUser = {
    _id: null,
    idCard: '',
    email: '',
    name: '',
    password: '',
    avatar: ''
  }

  @Ref('loginForm') readonly form!: VForm

  get validateForm () {
    return this.user.idCard && this.user.idCard.length > 3 && this.user.password && this.user.password.length > 3
  }

  async login () {
    try {
      if (this.form.validate()) {
        const response: ServerResponse = await this.$auth.loginWith('local', {
          data: this.user
        })
        
        this.$store.commit('setUser', response.data.user)
        this.$router.replace('/account/accounts')
      } else {
        this.user.idCard = ''
        this.user.password = ''
      }
    } catch (e) {
      this.user.idCard = ''
      this.user.password = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .under-welcome {
    border-bottom: 2px solid $success;
    width: 70px;
    margin: 0 auto 12px;
  }
  .login-info {
    font-size: 11px;
    line-height: 14px;
  }
  .card-width {
    width: 480px !important;
  }
</style>

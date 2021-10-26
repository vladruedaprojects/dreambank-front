<template>
  <v-card flat class="card-width" style="margin-left: -40px">
    <v-card-title class="headline primary--text text-center">
      <v-row no-gutters>
        <v-col cols="3"></v-col>
        <v-col cols="9">
          <div class="body-1 font-weight-bold">
            Welcome back
          </div>
          <div class="under-welcome" />
          <h4 class="text-h4 font-weight-bold">
            Login
          </h4>
          <p class="mt-6 login-info">
            For your money safety, please delete all extensions<br>
            for the browser you use to log in to your wallet
          </p>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-form ref="loginForm">
        <ui-textfield
          v-model="user.idCard"
          label="Login"
          hide-details
        ></ui-textfield>
        <ui-textfield
          v-model="user.password"
          label="Password"
          class="mt-2"
        ></ui-textfield>
      </v-form>

      <v-row no-gutters>
      <v-col cols="3"></v-col>
      <v-col cols="9">
        <ui-button
          @click="login"
        >
          Login
        </ui-button>
      </v-col>
      </v-row>

      <v-row justify="space-around" class="mt-14 primary--text card-width">
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
import IUser from '@/models/user'

@Component
export default class LoginComponent extends Vue {
  buttonLoginDisabled: boolean = true
  user: IUser = {
    idCard: '',
    email: '',
    name: '',
    password: '',
    avatar: ''
  }

  @Ref('loginForm') readonly form!: VForm

  async login () {
    try {
      if (this.form.validate()) {
        const response: object = await this.$auth.loginWith('local', {
          data: this.user
        })

        console.log(response)
        this.$router.replace('/account/accounts')
      } else {
        console.log('Access denied!')
      }
    } catch (error) {
      console.log(error)
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

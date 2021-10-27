<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
    :permanent="$vuetify.breakpoint.mdAndUp"
    color="secondary"
    dark
    width="200"
  >
    <v-card
      flat
      height="80"
      color="transparent"
      class="py-5"
    >
      <v-img
        :src="require('@/assets/images/dreambank.png')"
        height="50"
        contain
        class="ml-n2"
      ></v-img>
    </v-card>
    <v-list v-model="option" dense class="pl-4" active-class="active-item">
      <template v-for="(item, i) in menuItems">
        <ui-label
          v-if="item.header"
          :key="i"
          class-text="success--text text--darken-2 pl-2 pt-3 body-2"
          :text="item.header"
        >
        </ui-label>
        <v-list-item
          v-else
          :key="i"
          :to="item.to"
          router
          exact
          active-class="active-item"
          :disabled="!item.active"
        >
          <v-list-item-content>
            <v-list-item-subtitle class="font-weight-regular" v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DrawerMaster extends Vue {
  clipped: boolean = false
  drawer: boolean = true
  fixed: boolean = false
  miniVariant: boolean = false
  option: object = {
    title: 'Account Summary',
    to: '/account/accountSummary',
    active: true
  }

  menuItems: object = [
    { header: 'ACCOUNTS' },
    {
      title: 'Account Summary',
      to: '/account/accountSummary',
      active: false
    },
    {
      title: 'Accounts',
      to: '/account/accounts',
      active: true
    },
    { header: 'TRANSACTIONS' },
    {
      title: 'Inquire Transactions',
      to: '/transaction/inquireTransactions',
      active: true
    },
    {
      title: 'Fund Transfer',
      to: '/transaction/transfer',
      active: false
    },
    {
      title: 'Bill Payments',
      to: '/transaction/billpayments',
      active: false
    },
    { header: 'SERVICES' },
    {
      title: 'Account Statements',
      to: '/service/accountstatements',
      active: false
    },
    {
      title: 'Enroll New Account',
      to: '/service/newaccount',
      active: false
    },
    {
      title: 'Enroll a Credit Card',
      to: '/service/enrollcc',
      active: false
    },
    {
      title: 'Card Replacement',
      to: '/service/cardreplacement',
      active: false
    },
    {
      title: 'New Checkbook',
      to: '/service/newcheckbook',
      active: false
    }
  ]
}
</script>

<style lang="scss" scoped>
  .active-item {
    border-left: 3px solid $success;
    background: linear-gradient(90deg, rgba(5, 61, 134, 0.7) 5%, rgba(5, 61, 134,0.02) 91%);
  }
  .v-list .v-list-item--active {
    color: transparent !important;
  }
</style>

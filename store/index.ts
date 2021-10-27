import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import IAccount from '~/models/account'
import IUser from '~/models/user'
 
@Module
export default class user extends VuexModule {
  user: IUser = {
    _id: null,
    idCard: '',
    name: '',
    email: '',
    avatar: '',
    password: ''
  }

  totalBalance: number = 0

  accountQuery: IAccount | null = null
 
  @Mutation
  setUser(user: IUser) {
    this.user.idCard = user.idCard
    this.user.name = user.name
    this.user.avatar = user.avatar
    this.user.email = user.email
  }

  @Mutation
  setAccountQuery(account: IAccount) {
    this.accountQuery = account
  }

  @Mutation
  setTotalBalance(value: number) {
    this.totalBalance = value
  }

}

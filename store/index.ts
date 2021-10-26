import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
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
 
  @Mutation
  setUser(user: IUser) {
    this.user.idCard = user.idCard
    this.user.name = user.name
    this.user.avatar = user.avatar
    this.user.email = user.email
  }

}

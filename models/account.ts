interface IAccount {
  _id: string | null
  user: string | null
  product: string | null
  name: string
  numberName: string
  currency: string
  balance: number
  status: boolean
  createdAt?: number
  updatedAt?: number
}

export default IAccount

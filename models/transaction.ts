interface ITransaction {
  _id: string | null
  user: string | null
  account: string | null
  description: string
  amount: number
  balance: number
  createdAt: number
  updatedAt: number
}

export default ITransaction

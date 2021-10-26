interface IRequestProduct {
  _id: string | null
  product: string
  user: string
  cellphone: string
  monthlyIncome: number
  status: boolean
  createdAt: number | null
  updatedAt: number | null
}

export default IRequestProduct
export interface Account {
    id?: number
    name: string
  }

export interface BranchModel {
  id?: number
  name: string
  address: string
  regionalOfficeId: number
  regionalOffice?: RegionalOffice
}

export interface Deposit {
    id?: number
    depositOrderId?: number
    voucherNumber: string
    amount: number | string
    date: Date | null
    bank: string
    description: string
  }
  
export interface DepositOrder {
  amount: number
  deliveryDate: Date
  employeeId?: number
  employee?: Employee
  endDate: Date
  id?: number
  orderNumber: string
  regionalId?: number
  regional?: RegionalOffice
  revisionStatus?: string
  solitudeDate: Date
  startDate: Date
  status?: string
  documentUrl?: string
  generatedReportUrl?: string 
  reportUrl?: string

  moneyCollectionAmount?: number,
  expenseAmount?: number,
  dollarAmountBs?: number,
  dollarAmountUSD?: number,
  envelopeAmount?: number,
  depositAmount?: number,
  [key: string]: any
}

export interface DepositOrderBranchOffice {
  id?: number
  depositOrderId: number
  branchOfficeId: number
  amount: number
  branchOffice?: BranchModel
}

export interface DepositOrderData {
  deliveredDate: Date
  moneyCollectionAmount: number
  expenseAmount: number
  dollarAmountUSD: number
  dollarAmountBs: number
  envelopeAmount: number
  depositAmount: number
}

export interface DepositOrderReport {
  depositOrderId: number
  moneyCollections: MoneyCollection[]
  expenses: Expense[]
  envelopes: Envelope[]
  dollars: Dollar[]
  deposits: Deposit[]
}


export interface Dollar { 
    id?: number
    depositOrderId?: number
    branchOfficeId: number
    branchOffice?: BranchModel
    date: Date | null
    amount: number | string
    amountBs: number | string
    description: string
}

export interface Employee {
  id?: number
  name: string
  lastName: string
  email?: string
  password?: string
  roleId: number
  role?: Role
  regionalOfficeId: number
  regionalOffice?: RegionalOffice
}

export interface Envelope {
  id?: number
  depositOrderId?: number
  fromBranchOfficeId: number
  fromBranchOffice?: BranchModel
  toBranchOfficeId: number
  toBranchOffice?: BranchModel
  amount: number | string
  date: Date | null
  description: string
}

export interface Expense {
    id?: number
    depositOrderId?: number
    documentType: string
    documentNumber: string
    date: Date | null
    branchOfficeId: number
    branchOffice?: BranchModel,
    expenseType: string
    amount: number | string
    description: string
    accountId: number
    account?: Account
    subAccountId: number
    subAccount?: SubAccount
}


export interface MoneyCollection {
  id?: number
  depositOrderId?:  number
  date: Date | null
  branchOfficeId: number
  branchOffice?: BranchModel
  amount: number | string
  deliveredBy: string 
  receivedById: number
  receivedBy?: Employee
}

export interface RegionalOffice {
    id: number
    name: string
    techobolDepositOrderCounter: number
    megadisDepositOrderCounter: number
    regionalAbbr: string
  }
  

export interface Role { 
    id : number
    name: string 
    description?: string
    maxEmployeesAllowed: number

}

export interface SubAccount {
  id?: number
  name: string
  accountId: number
  account?: Account
}

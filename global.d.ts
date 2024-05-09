// global.d.ts

declare type Direction = '↑' | '↓'
declare enum IRCategory {
  T_30 = 'T_30',
  T_20 = 'T_20',
  T_10 = 'T_10',
  T_5 = 'T_5',
  T_1 = 'T_1',
  T_OVERNIGHT = 'T_OVERNIGHT',
}

declare type ResponseNumbers = 1 | 2 | 3 | 4 | 5

declare interface GuessResponse {
  guess: boolean
  number: ResponseNumbers
  direction: Direction
  category: IRCategory
}

declare type ArrowDeciderReturn = {
  direction: Direction
  amount: ResponseNumbers
}

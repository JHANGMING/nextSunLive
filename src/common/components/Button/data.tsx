import { ReactNode } from 'react'

export type ButtonPropsType = {
  category?: string
  path?: string
  onClick?: () => void
  children?: ReactNode
  classStyle?: string
}

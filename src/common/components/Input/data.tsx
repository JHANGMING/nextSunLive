import { ReactNode } from 'react'

export type DefaultInputProps = {
  type: string
  labelText: string
  inputText: string
  icon?: ReactNode // 使用 ReactNode 类型，以便可以传递 JSX 元素
  id: string
}

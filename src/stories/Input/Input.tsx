import React from 'react'
import { Input, InputProps } from 'antd'
import './input.scss'
const { Search } = Input

interface input extends InputProps {
  type?: 'default' | 'password' | 'textarea' | 'select'
}

export const InputPro = ({ type = 'default', ...props }: input) =>
  type === 'textarea' ? (
    <Input.TextArea {...props} />
  ) : type === 'password' ? (
    <Input.Password {...props} />
  ) : type === 'select' ? (
    <Search {...props} />
  ) : (
    <Input {...props} />
  )

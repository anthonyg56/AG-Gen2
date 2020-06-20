import React, { CSSProperties } from 'react'
import { FooterProps} from './footer'

/* Props */
export type LayoutComponentProps = {
  children?: React.ReactNode,
  payload: FooterProps,
  setPayload?: (index: number) => void
  headerTitle: string
}
export type NavProps = {
  children?: React.ReactNode
}

/* Joins */
export type LayoutProps = LayoutComponentProps | NavProps

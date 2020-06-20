/* Objects */
export type UrlTitle = {
  url: string,
  title: string,
} | null

export type FooterLinks = {
  next: Links | undefined,
  previous: Links | undefined,
  back: Links | undefined
}

/* Props */
export type FooterProps = {
  index?: number,
  length?: number,
  title: string,
  next?: {
    url?: string,
    title: string,
  } | undefined,
  previous?: {
    url?: string,
    title: string,
  } | undefined,
  back?: {
    url: string,
    title: string,
  } | undefined,
  isDynamic?: boolean,
  setPayload?: (index: number) => void
}
export type DynamicFooterProps = {
  index: number,
  length: number,
  title: string,
  next?: {
    url?: string,
    title: string,
  } | undefined,
  previous?: {
    url?: string,
    title: string,
  } | undefined,
  back?: {
    url: string,
    title: string,
  } | undefined,
  setPayload?: (index: number) => void
}
export type StaticFooterProps = {
  title: string,
}

/* Joins */
export type Links = UrlTitle | undefined
export type FooterPropsJ = DynamicFooterProps | StaticFooterProps | FooterProps

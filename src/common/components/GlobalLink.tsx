import Link from "next/link"
import { ReactNode } from "react"
type GlobalLinkProps = {
  href: string
  children: ReactNode
  openInNewTab?: boolean
  className?: string
}
const GlobalLink = ({ href, className, openInNewTab, children }: GlobalLinkProps) => {
  if (openInNewTab) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  )
}
 
export default GlobalLink;
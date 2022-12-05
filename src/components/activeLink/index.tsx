import { Link, LinkProps } from "react-router-dom"

interface ActiveLinkProps extends LinkProps {
  activeClassName: string
  text: string
}

export function ActiveLink({ activeClassName, text, ...rest }: ActiveLinkProps) {
  // const { asPath } = useRouter()

  // const className = asPath == rest.href
  //     ? activeClassName
  //     : '';

  return <Link {...rest}>{/* <a className={className}>{text}</a> */}</Link>
}

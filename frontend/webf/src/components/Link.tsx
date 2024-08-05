import NextLink from 'next/link'
import { Link as ChakraLink } from "@chakra-ui/react"

type LinkProps = { 
    href: string
    children: React.ReactNode
    }

const MyLink = ({ href, children, ...props }:LinkProps) => (
  <NextLink href={href} passHref>
    <ChakraLink {...props}>{children}</ChakraLink>
  </NextLink>
)

// 使用例
export default MyLink
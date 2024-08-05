import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
    <div>
      About
    </div>
    <Flex justifyContent="space-around">
      <Box><Link href="/about">about</Link></Box>
      <Box><Link href="/about">about</Link></Box>
      <Box><Link href="/about">about</Link></Box>
    </Flex>
    </>
  )
}

export default About

import { Button, HStack, Heading, VStack } from '@chakra-ui/react'

function App() {
  return (
    <VStack spacing={6} p={8} minH="100vh" justify="center">
      <Heading size="2xl" color="red.500">Hello World!</Heading>
      <HStack spacing={4}>
        <Button colorScheme="blue">Click me</Button>
        <Button colorScheme="green">Click me</Button>
      </HStack>
    </VStack>
  )
}

export default App

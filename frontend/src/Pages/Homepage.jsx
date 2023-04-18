import { Box, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'
const Homepage = () => {
  return (
    <Box bgColor="#d0d0d5" w="100%" h="1000px" paddingTop={"100px"}>
      <Box w="30%" m="auto" >
        <Heading mt="20px" >Learn to code -- for free </Heading>
        <Heading mt="20px" >Build Projects</Heading>
        <Heading mt="20px" >Earn Certifications</Heading>
        <Text mt="20px" >Since 2015,more than 40,000  Freecodecamp.org graduates have gotton jobs at tech companies includig</Text>
        <Box mt="20px" w="100%" display={"flex"} justifyContent={"space-between"}>
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-apple" width="40" height="40" viewBox="0 0 24 24" stroke-width="3" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
              <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
            </svg>Apple
          </Box>
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="40" height="40" viewBox="0 0 24 24" stroke-width="3" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
            </svg>Google
          </Box>
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-apps" width="40" height="40" viewBox="0 0 24 24" stroke-width="3" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="6" height="6" rx="1" />
              <rect x="4" y="14" width="6" height="6" rx="1" />
              <rect x="14" y="14" width="6" height="6" rx="1" />
              <line x1="14" y1="7" x2="20" y2="7" />
              <line x1="17" y1="4" x2="17" y2="10" />
            </svg>Microsoft
          </Box>
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-arcs" width="40" height="40" viewBox="0 0 24 24" stroke-width="3" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="1" />
              <path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792" />
              <path d="M3 12a9 9 0 1 0 9 -9" />
            </svg>amazone
          </Box>
        </Box>
        <Box mt="20px" w="100%" display="flex" justifyContent={"space-around"}>
          <Button w="50%" fontSize={"20px"} bgColor={"#feb73c"} color="#000">Get started (it's fee)</Button>
        </Box>

      </Box>
    </Box>
  )
}

export default Homepage
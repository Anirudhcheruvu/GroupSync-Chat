import React from 'react'
import {Container,Box,Text,Tab,TabList,TabPanels,Tabs,TabPanel} from '@chakra-ui/react'
import Login from '../components/Aunthentication/Login';
import Signup from '../components/Aunthentication/Signup';

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="work sans">
          Talk-a-tive
        </Text>
      </Box>
      <Box w="100%" bg={"white"} p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage

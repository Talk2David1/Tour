import { Box, Card, VStack, } from '@chakra-ui/react';
import Header from './components/Header';
import Places from './components/Places';
import data from './components/data';

function App() {
  const place = data.map(item=> {
    return (
      <Places
      key={item.id}
      {...item} />
    )
  })
  return (
    <Box>
      <VStack>
        <Card
          boxShadow={"dark-lg"}
          borderRadius={"10px"}
          mt="5px"
          width={"50%"}
          height="98vh"
        >
          <Header />
          {place}
        </Card>
      </VStack>
    </Box>
  );
}

export default App

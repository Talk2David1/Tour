import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import globe from '../assets/images/globe.png';


const Header = () => {
  return (
    <div>
      <HStack
        borderTopRadius={"10px"}
        bgColor={"#F55A5A"}
        height="40px"
        justify={"center"}
        color="white"
      >
        <Image src={globe} /> <span>my travel journal</span>
      </HStack>
    </div>
  );
}

export default Header
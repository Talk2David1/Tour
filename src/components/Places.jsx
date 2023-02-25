import React from 'react';
import { Text, Grid, GridItem, Image, HStack } from '@chakra-ui/react';
import icon from '../assets/images/location.png';

const places = ({title,location,googeMapsUrl,startDate,endDate,description,imageUrl}) => {
  return (
    <div>
      <Grid ml="20px" mt="15px" templateColumns="repeat(4, 1fr)">
        <GridItem ml="20px">
          <Image src={imageUrl.im} />
        </GridItem>
        <GridItem ml="15px" mt="18px" width="70%" colSpan={3}>
          <HStack>
            <Image src={icon} />
            <Text fontSize={"sm"}>{location}</Text>
            <Text fontSize={"xs"} as="u">
              <a href={googeMapsUrl}> View on Google Maps</a>
            </Text>
          </HStack>
          <Text fontSize={"15px"}>
            <strong>{title}</strong>
          </Text>
          <Text fontSize={"xs"} mt="5px" mb="2px">
            <strong>
              {startDate} - {endDate}
            </strong>
          </Text>
          <Text fontSize={"xs"}>{description} </Text>
        </GridItem>
      </Grid>
    </div>
  );
}

export default places
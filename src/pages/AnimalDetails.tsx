import { Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { IAnimal } from '../models/IAnimal';
import { IAnimalSmall } from '../models/IAnimalSmall';

export const AnimalDetails = () => {
   
  const { id } = useParams();

 return(
    <>
    <Stack gap={3}> 
      <h3>{id}</h3>
    </Stack>
    </>
 )
}

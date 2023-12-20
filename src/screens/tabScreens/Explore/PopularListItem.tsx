import { FC } from 'react';
import React from 'react';
import { dealType, popularPlaceType } from '../../../types/PopularType';
import { isDealType } from '../../../utils/checkerUtils';
import DealComp from '../../../components/DealComp';
import PlaceComp from '../../../components/PlaceComp';

const PopularListitem: FC<{ item: popularPlaceType | dealType }> = ({ item }) => {

  const allot = () => {
    if (isDealType(item)) {
      return <DealComp item={item as dealType} />;
    }
    else {
      return <PlaceComp item={item as popularPlaceType} />;
    }
  };

  return allot();
};


export default PopularListitem;

import { useEffect, useRef, useState } from 'react';
import { dealType, popularPlaceType } from '../types/PopularType';
import { placesData, dealsData } from '../utils/dataValue';
import { isDealType } from '../utils/checkerUtils';

const usePopularHotels = (searchValue: string = '') => {
    const defaultdata = useRef<(dealType | popularPlaceType)[] | null>(null);
    const [combinedData, setCombinedData] = useState<(dealType | popularPlaceType)[] | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        //for race condition
        let goAhead = true;

        const filterMe = () => {
            if (searchValue.length < 3) {
                //set default value
                if (goAhead) {
                    setCombinedData(defaultdata.current);
                }
                return;
            } else {
                const filteredItems = defaultdata.current?.filter(item => {
                    if (!isDealType(item)) {
                        return item.place.toLowerCase().includes(searchValue.toLowerCase());
                    }
                });
                if (goAhead) {
                    console.log('filtere ', filteredItems, searchValue);
                    setCombinedData(filteredItems === undefined ? null : filteredItems);
                }
            }
        };

        filterMe();

        // return ()=>{
        //     goAhead = false;
        // }

    }, [searchValue]);

    useEffect(() => {
        Promise.all([fetchPlaces(), fetchDeals()])
            .then((res) => {
                const [placeD, dealD] = res;
                const combi: (dealType | popularPlaceType)[] = [...placeD];
                combi.splice(1, 0, ...dealD);
                defaultdata.current = combi;
                setCombinedData(combi);
            })
            .catch((rej) => {
                console.error(rej);
            }).finally(() => {
                setLoading(false);
            });
    }, []);

    return { combinedData, isLoading };
};


const fetchPlaces = (): Promise<popularPlaceType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(placesData);
        }, 1500);
    });
};

const fetchDeals = (): Promise<dealType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dealsData);
        }, 1000);
    });
};


export default usePopularHotels;

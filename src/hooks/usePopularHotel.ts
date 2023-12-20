import { useEffect, useRef, useState } from "react";
import { dealType, popularPlaceType } from "../types/PopularType";
import { placesData, dealsData } from "../utils/dataValue";

const usePopularHotels = () => {
    const HotelDealRef = useRef();
    const [combinedData, setCombinedData] = useState<(dealType | popularPlaceType)[] | null>()

    useEffect(() => {
        Promise.all([fetchPlaces(), fetchDeals()])
            .then((res) => {
                const [placeD, dealD] = res;
                const combinedData: (dealType | popularPlaceType)[] = [...placeD];
                combinedData.splice(1, 0, ...dealsData);

                setCombinedData(combinedData);
            })
            .catch((rej) => {
                console.error(rej)
            })
    }, [])

    return { combinedData }
}


const fetchPlaces = (): Promise<popularPlaceType[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(placesData);
        }, 2500);
    });
};

const fetchDeals = (): Promise<dealType[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dealsData);
        }, 1000);
    });
};


export default usePopularHotels;
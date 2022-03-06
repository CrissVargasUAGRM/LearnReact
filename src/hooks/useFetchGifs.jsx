import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [first, setFirst] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
            getGif(category)
            .then(imgs => {
                setFirst({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]);

    return first;
}
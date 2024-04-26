import { useState } from "react";
import toast from "react-hot-toast";
import { getChannelDetails as getChannelDetailsRequest } from "../../services";

export const useChanelDetails = () => {
    const [channelDetails, setChannelDetails] = useState();
    const getChannelDetails = async () => {
        const responseData = await getChannelDetailsRequest(id);

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'No se pudo obtener los detalles del canal'
            )
        }
        setChannelDetails(responseData)

    };

    return {
        channelDetails,
        isFetching: !channelDetails,
        getChannelDetails
    };
};
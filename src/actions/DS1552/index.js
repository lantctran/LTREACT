import * as Types from './../../constants/ActionTypes';
import callApi from './../../utils/apiCaller';

export const actFetchDS1552SubmittedTravelersRequest = () => {
    return dispatch => {
        return callApi('travelers', 'GET', null).then(res => {
            dispatch(actFetchDS1552SubmittedTravelers(res.data));
        });
    };
}

export const actFetchDS1552SubmittedTravelers = (travelers) => {
    return {
        type : Types.FETCH_DS1552_SUBMITTED_TRAVELERS,
        travelers
    }
}
 

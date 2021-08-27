import * as constants from './constant'
export const getData = (data) => (
    {
        type: constants.SET_DATA,
        data
    }
)
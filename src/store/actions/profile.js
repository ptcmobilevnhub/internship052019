import { SAVE_PHONE, SAVE_NAME } from './actionTypes';

export const savePhone = (phoneNumber) => {
    return {
        type: SAVE_PHONE,
        phoneNumber: phoneNumber
    };
};

export const saveName = (name) => {
    return {
        type: SAVE_NAME,
        name: name
    };
};
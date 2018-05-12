import { ADD_FLASH_MESSAGE } from './types';

export function setFlashMessages(message){
    return {
        type: ADD_FLASH_MESSAGE,
        message
    }
}

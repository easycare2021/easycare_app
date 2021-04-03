import { MMKV } from 'react-native-mmkv';
import Toast from 'react-native-toast-message';


const alertError = (message) => {
  return Toast.show({
    type: 'error',
    position: MMKV.getBoolean('keyboardIsOpen') ? 'top' : 'bottom',
    text1: message,
    autoHide: true,
    visibilityTime: 2000,
  });
};

export {
    alertError,
};

import { MMKV } from 'react-native-mmkv';

const deleteAllKeys = () => {

    const allKeys = MMKV.getAllKeys();

    return allKeys.forEach(key => {
        MMKV.delete(key);
    });
};

export {
    deleteAllKeys,
};

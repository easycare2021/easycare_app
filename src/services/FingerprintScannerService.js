import FingerprintScanner from 'react-native-fingerprint-scanner';
import { MMKV } from 'react-native-mmkv';
import Toast from 'react-native-toast-message';

export default class FingerprintScannerService {

    async authCurrent(navigation) {
        return FingerprintScanner.authenticate({
            title: 'Touch ID para Easycare',
            subTitle: 'Confirme sua digital.',
        }).then(async res => {

            MMKV.set('showTouchIDAuthentication', true);
            await navigation.navigate('Home');

        }).catch(err => {

            FingerprintScanner.release();

            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Não foi possível autenticar com a biometria',
                autoHide: true,
                visibilityTime: 2000,
            });

            return err;
        });
    }

    async release() {
        return FingerprintScanner.release();
    }
}

import storage from '@react-native-firebase/storage';

export default class FirebaseStorageService {

    async upload(ref, path) {

        const reference = storage().ref(ref);

        return await reference.putFile(path).catch(err => console.error(err));
    }

    async getUrl(reference) {

        return await storage().ref(reference).getDownloadURL();
    }

}


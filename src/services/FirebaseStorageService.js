import storage from '@react-native-firebase/storage';

export default class FirebaseStorageService {

    async upload(ref, path) {

        const reference = storage().ref(ref);

        return await reference.putFile(path).then(res => console.log(res)).catch(err => console.error(err));
    }

    async getUrl(reference) {

        return await storage().ref(reference).getDownloadURL();
    }

}


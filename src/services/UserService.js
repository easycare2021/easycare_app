import BaseService from './BaseService';
import { serviceURLs } from '../utils/serviceURLs';

export default class UserService extends BaseService {

    constructor() {
        super();
    }

    async auth(data) {
        return await this.post(serviceURLs.AUTH, data);
    }

    async store(data) {
        return await this.post(serviceURLs.USERS, data);
    }

    async usernameAlreadyExists(username) {
        return await this.get(serviceURLs.USERS_VALIDATION_USERNAME, [username]);
    }

    async emailAlreadyExists(email) {
        return await this.get(serviceURLs.USERS_VALIDATION_EMAIL, [email]);
    }
}

import BaseService from './BaseService';
import { serviceURLs } from '../utils/serviceURLs';

export default class UserService extends BaseService {

    constructor() {
        super();
    }

    async auth(data) {
        return await this.post(serviceURLs.AUTH, data);
    }
}

import BaseService from './BaseService';
import { serviceURLs } from '../utils/serviceURLs';

export default class TokenService extends BaseService {

    constructor() {
        super();
    }

    async store(data) {
        return await this.post(serviceURLs.TOKENS, data);
    }
}

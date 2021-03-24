import BaseService from './BaseService';
import { serviceURLs } from '../utils/serviceURLs';

export default class CaregeverService extends BaseService {

    constructor() {
        super();
    }

    async store(data) {
        return await this.post(serviceURLs.CAREGIVERS, data);
    }
}

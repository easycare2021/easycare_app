import BaseService from './BaseService';
import { serviceURLs } from '../utils/serviceURLs';

export default class CaregeverService extends BaseService {

    constructor() {
        super();
    }

    async store(data) {
        return await this.post(serviceURLs.CAREGIVERS, data);
    }

    async show(id) {
        return await this.get(serviceURLs.CAREGIVERS_ID, [id]);
    }

    async documentAlreadyExists(document) {
        return await this.get(serviceURLs.CAREGIVERS_VALIDATION_DOCUMENT, [document]);
    }

}

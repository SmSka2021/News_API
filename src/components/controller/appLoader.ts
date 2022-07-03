import Loader from './loader';
import { ILoader } from './../../interface/interface';

class AppLoader extends Loader implements Partial<ILoader> {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'dbb2a757a41e49cd9ae6f8bb841c1ec2',
        });
    }
}

export default AppLoader;

import { Obj, RespStatus, ILoader } from './../../interface/interface';

class Loader implements ILoader {
    baseLink: string;
    options: Obj;
    constructor(baseLink: string, options: Obj) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: { endpoint: string; options: Obj },
        callback: () => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === RespStatus.Unauthorized || res.status === RespStatus.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Obj, endpoint: string): string {
        const urlOptions: Readonly<Obj> = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: string, callback: (data?: string) => void, options: Obj = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: string) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;

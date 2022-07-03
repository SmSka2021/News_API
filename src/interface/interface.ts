export interface Source<T> {
    id: T | null;
    name: T | null;
}
export interface Article {
    source: Source<string>;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}
export interface Everything {
    status: string;
    totalResults: number;
    articles: Array<Article>;
}
export interface NewsSours {
    readonly id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export type Data<T> = {
    readonly id: T;
    name: T;
};
export interface Obj {
    [key: string]: string;
}
export interface INews {
    draw: (data: Array<Article>) => void;
}
export interface ISources {
    draw: (data: Data<string>[]) => void;
}
export interface IReSources {
    sources: NewsSours[];
    status?: string;
}
export interface IAppView {
    news: INews;
    sources: ISources;
    drawNews: (data: Everything) => void;
    drawSources: (data: IReSources) => void;
}
export enum RespStatus {
    Informational = 100,
    Successful = 200,
    Redirection = 300,
    BadRequest = 400,
    Unauthorized,
    PaymentRequiredExperimental,
    Forbidden,
    NotFound,
    MethodNotAllowed,
    ServerError = 500,
}
export type LoadObj = {
    endpoint: string;
    options: Obj;
};
export interface ILoader {
    baseLink: string;
    options: Obj;
    getResp: (object: LoadObj, callback?: () => void) => void;
    errorHandler: (res: Response) => Response | Error;
}

export interface IAppController extends ILoader {
    getSources(callback: (data?: IReSources) => void): void;
    getNews(e: Event, callback: (someArg?: Everything) => void): void;
}
export interface IApp {
    controller: IAppController;
    view: IAppView;
    start: () => void;
}

import News from './news/news';
import Sources from './sources/sources';
import { Everything, Article, IAppView, NewsSours, IReSources, INews, ISources } from './../../interface/interface';

export class AppView implements IAppView {
    news: INews;
    sources: ISources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Pick<Everything, 'articles'>): void {
        const values: Array<Article> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Pick<IReSources, 'sources'>): void {
        const values: NewsSours[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}
export default AppView;

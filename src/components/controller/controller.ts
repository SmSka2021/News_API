import AppLoader from './appLoader';
import { IAppController, Everything, IReSources } from './../../interface/interface';

class AppController extends AppLoader implements IAppController {
    getSources(callback: (data?: IReSources) => void): void {
        super.getResp({ endpoint: 'sources', options: {} }, callback);
    }
    getNews(e: Event, callback: (someArg?: Everything) => void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    if (sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp({ endpoint: 'everything', options: { sources: sourceId } }, callback);
                    }
                }
                return;
            }
            if (target.parentNode !== null) {
                target = target.parentNode as HTMLElement;
            }
        }
    }
}

export default AppController;

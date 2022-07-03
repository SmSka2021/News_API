import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IAppController, IAppView, IApp } from './../../interface/interface';

class App implements IApp {
    controller: IAppController;
    view: IAppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data) => {
                if (data) this.view.drawNews(data);
            })
        );
        this.controller.getSources((data) => {
            if (data) this.view.drawSources(data);
        });
    }
}

export default App;

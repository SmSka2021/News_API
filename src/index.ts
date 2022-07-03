import App from './components/app/app';
import './global.css';
import { IApp } from './interface/interface';

const app: IApp = new App();
app.start();

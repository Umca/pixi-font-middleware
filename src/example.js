import * as PIXI from 'pixi.js'
import { FontLoaderPlugin } from './plugin'

const list = [
    { name: 'BG', url: './BG1.jpg'},
    { name: 'AlegreyaSans-Light', url: './AlegreyaSansSC-Light.ttf', metadata: { 
        family: 'AlegreyaSans',
        style: 'normal',
        weight: 300 
    }},
    { name: 'AlegreyaSans-Bold', url: './AlegreyaSansSC-Bold.ttf'},

]

PIXI.Loader.registerPlugin(new FontLoaderPlugin())
const loader = new PIXI.Loader('./assets/')

function test() {
    const app = new PIXI.Application({
        width: 800, 
        height: 600, 
        backgroundColor: 0x1099bb, 
        resolution: window.devicePixelRatio || 1,
    });
    document.body.appendChild(app.view);

    const basicText1 = new PIXI.Text(
        'Basic text in pixi', { fontFamily: 'AlegreyaSans-Bold' }
    );
    basicText1.x = 50;
    basicText1.y = 100;

    const basicText2 = new PIXI.Text(
        'Basic text in pixi', { fontFamily: 'AlegreyaSans-Light' }
    );
    basicText2.x = 50;
    basicText2.y = 200;

    app.stage.addChild(basicText1);
    app.stage.addChild(basicText2);
}

loader
.add(list)
.load((loaders, resources) => test())

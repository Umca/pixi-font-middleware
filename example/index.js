import { Application, Text } from 'pixi.js'
import '../src/index'

const list = [
    { name: 'AlegreyaSans-Light', url: './AlegreyaSansSC-Light.ttf', metadata: { 
        family: 'AlegreyaSans',
        style: 'normal',
        weight: 300
    }},
    { name: 'AlegreyaSans-Bold', url: './AlegreyaSansSC-Bold.ttf', metadata: {
        family: 'AlegreyaSans',
        style: 'normal',
        weight: 800
    }},
]

const app = new Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb, 
    resolution: window.devicePixelRatio,
})
document.body.appendChild(app.view)

app.loader
    .add(list)
    .load(e => writeText())


function writeText() {
    const basicText1 = new Text(
        'Basic text in pixi',
        { fontFamily: 'AlegreyaSans',
          fontWeight: 300
        } 
    )
    basicText1.position.set(50, 100)

    const basicText2 = new Text(
        'Basic text in pixi',
        { fontFamily: 'AlegreyaSans',
          fontWeight: 800 }
    )
    basicText2.position.set(50, 200)

    app.stage.addChild(basicText1)
    app.stage.addChild(basicText2)
}
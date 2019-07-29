import * as PIXI from 'pixi.js'
import { FontsLoader } from 'fonts-loader'

const fontLoader = new FontsLoader()

class FontLoaderPlugin {
    constructor(){}

    static get fontLoader(){ return fontLoader }

    static checkExtension(ext){
        return ['woff', 'woff2', 'ttf', 'otf', 'eot'].includes(ext)
    }

    static parse(res){
        return {descriptor: res.metadata, name: res.name, source: res.url}
    }

    pre(res, next){
        if(FontLoaderPlugin.checkExtension(res.extension)){
            res._setFlag(PIXI.LoaderResource.STATUS_FLAGS.LOADING, true)

            FontLoaderPlugin.fontLoader
            .load(FontLoaderPlugin.parse(res))
            .then(e => {
                console.log(e)
                res.complete()
                next()
            })
        } else {
            next()
        }
    }
}

export { FontLoaderPlugin }
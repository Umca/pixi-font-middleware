import { LoaderResource } from '@pixi/loaders'
import { FontsLoader } from 'fonts-loader'

const fontsExtentions = ['woff', 'woff2', 'ttf', 'otf', 'eot']

class FontLoaderPlugin {

    static parse({ name, url, metadata }) {
        return {
            name,
            source: url,
            descriptor: metadata
        }
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
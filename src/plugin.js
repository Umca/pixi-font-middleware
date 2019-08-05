import { LoaderResource } from '@pixi/loaders'
import { FontsLoader } from 'fonts-loader'

const fontsExtentions = ['woff', 'woff2', 'ttf', 'otf', 'eot']

class FontLoaderPlugin {

    static parse({ name, url, metadata }) {
        return {
            name: metadata.family || name,
            source: url,
            descriptor: metadata
        }
    }

    pre(res, next) {
        if(fontsExtentions.includes(res.extension)) {
            res._setFlag(LoaderResource.STATUS_FLAGS.LOADING, true)
            
            new FontsLoader(FontLoaderPlugin.parse(res), {
                silent: false,
                error: true
            })
                .then(e => {
                    console.log(e)
                    res.complete()
                    next()
                })
        } else next()
    }

}

export { FontLoaderPlugin }
export default FontLoaderPlugin 
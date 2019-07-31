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

    pre(res, next) {
        if(fontsExtentions.includes(res.extension)) {
            res._setFlag(LoaderResource.STATUS_FLAGS.LOADING, true)

            new FontsLoader()
                .load(FontLoaderPlugin.parse(res))
                .then(e => {
                    res.complete()
                    next()
                })
        } else next()
    }

}

export { FontLoaderPlugin }
export default FontLoaderPlugin 
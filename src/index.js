import { Loader } from '@pixi/loaders'
import { FontLoaderPlugin } from './plugin'

Loader.registerPlugin(new FontLoaderPlugin())

export default FontLoaderPlugin

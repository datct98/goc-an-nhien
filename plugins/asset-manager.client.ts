import { AssetCache } from '~/services/asset/AssetCache'
import { AssetLoader } from '~/services/asset/AssetLoader'
import { AssetManager } from '~/services/asset/AssetManager'

export default defineNuxtPlugin(() => ({
  provide: {
    assetManager: new AssetManager(),
    assetLoader: new AssetLoader(),
    assetCache: new AssetCache(),
  },
}))

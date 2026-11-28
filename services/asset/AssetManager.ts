import { ASSETS } from '~/config/assets'

export class AssetManager {
  /** Return an asset path by a dotted key, for example `background.home`. */
  get(key: string): string | null {
    const value = key.split('.').reduce<unknown>(
      (obj, part) => (obj && typeof obj === 'object' ? (obj as Record<string, unknown>)[part] : undefined),
      ASSETS,
    )

    return typeof value === 'string' ? value : null
  }
}

export class AssetCache {
  private cache = new Map<string, unknown>()

  set<T>(key: string, value: T): void { this.cache.set(key, value) }
  get<T>(key: string): T | undefined { return this.cache.get(key) as T | undefined }
  has(key: string): boolean { return this.cache.has(key) }
  remove(key: string): boolean { return this.cache.delete(key) }
  clear(): void { this.cache.clear() }
  size(): number { return this.cache.size }
  keys(): string[] { return Array.from(this.cache.keys()) }
}

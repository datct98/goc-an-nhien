export class AssetLoader {
  loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.onload = () => resolve(image)
      image.onerror = () => reject(new Error(`Failed to load image: ${src}`))
      image.src = src
    })
  }

  loadAudio(src: string): Promise<HTMLAudioElement> {
    return new Promise((resolve, reject) => {
      const audio = new Audio()
      audio.oncanplaythrough = () => resolve(audio)
      audio.onerror = () => reject(new Error(`Failed to load audio: ${src}`))
      audio.preload = 'auto'
      audio.src = src
      audio.load()
    })
  }

  async loadJSON<T = unknown>(src: string): Promise<T> {
    const response = await fetch(src)
    if (!response.ok) throw new Error(`Failed to load JSON: ${src}`)
    return response.json() as Promise<T>
  }

  loadVideo(src: string): Promise<HTMLVideoElement> {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video')
      video.oncanplaythrough = () => resolve(video)
      video.onerror = () => reject(new Error(`Failed to load video: ${src}`))
      video.preload = 'auto'
      video.src = src
      video.load()
    })
  }
}

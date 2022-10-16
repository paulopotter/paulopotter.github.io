interface Window {
  gtag: (...args: any[]) => void
  dataLayer: Record<string, any>
  DISQUS: {
    host:{
      _loadEmbed: () => void
    }
  }
}

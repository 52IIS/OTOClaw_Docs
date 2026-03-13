const BAIDU_TONGJI_ID = '28150c541c94f92e8cb1aa9ebbb40de6'

export function initBaiduTongji() {
  if (import.meta.env.DEV) {
    console.log('[Baidu Tongji] 本地开发环境，跳过百度统计')
    return
  }

  if (typeof window === 'undefined') {
    return
  }

  const _hmt = (window as any)._hmt || []
  ;(window as any)._hmt = _hmt

  const hm = document.createElement('script')
  hm.src = `https://hm.baidu.com/hm.js?${BAIDU_TONGJI_ID}`
  hm.async = true

  const s = document.getElementsByTagName('script')[0]
  s.parentNode?.insertBefore(hm, s)
}

import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import { initBaiduTongji } from './baidu-tongji'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    onMounted(() => {
      initBaiduTongji()
    })

    watch(
      () => route.path,
      () => {
        nextTick(() => {
          if (typeof window !== 'undefined' && (window as any)._hmt) {
            (window as any)._hmt.push(['_trackPageview', route.path])
          }
        })
      }
    )
  }
}

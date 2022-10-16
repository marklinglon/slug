import VueI18n from 'vue-i18n'
import Vue from 'vue'

/**
 * 格式化 router.options.routes，生成 fullPath
 * @param routes
 * @param parentPath
 */
function initI18n (locale, fallback) {
  Vue.use(VueI18n)
  let i18nOptions = {
    locale,
    fallbackLocale: fallback,
    silentFallbackWarn: true
  }
  return new VueI18n(i18nOptions)
}

export {
  initI18n
}

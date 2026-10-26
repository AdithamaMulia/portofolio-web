import { ref } from 'vue'
import en from '../i18n/en.json'
import id from '../i18n/id.json'

const dicts = { en, id }
const locale = ref(['en', 'id'].includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'en')
document.documentElement.lang = locale.value

function resolve(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj)
}

export function useLang() {
  // returns string, array or object at key; missing keys render as a visible TODO
  const t = (path) => {
    const v = resolve(dicts[locale.value], path)
    return v === undefined ? `TODO:${path}` : v
  }
  const setLang = (l) => {
    locale.value = l
    localStorage.setItem('lang', l)
    document.documentElement.lang = l
  }
  const toggleLang = () => setLang(locale.value === 'en' ? 'id' : 'en')
  return { locale, t, toggleLang }
}

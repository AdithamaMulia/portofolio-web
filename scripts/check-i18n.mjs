// i18n parity check: every key in en.json must exist in id.json and vice versa
import { readFileSync } from 'node:fs'

const en = JSON.parse(readFileSync(new URL('../src/i18n/en.json', import.meta.url)))
const id = JSON.parse(readFileSync(new URL('../src/i18n/id.json', import.meta.url)))

function keys(obj, prefix = '') {
  return Object.entries(obj).flatMap(([k, v]) => {
    const path = prefix ? `${prefix}.${k}` : k
    if (v && typeof v === 'object' && !Array.isArray(v)) return keys(v, path)
    if (Array.isArray(v)) return v.flatMap((item, i) =>
      item && typeof item === 'object' ? keys(item, `${path}[${i}]`) : [`${path}[${i}]`]
    )
    return [path]
  })
}

const enKeys = new Set(keys(en))
const idKeys = new Set(keys(id))
const missingInId = [...enKeys].filter((k) => !idKeys.has(k))
const missingInEn = [...idKeys].filter((k) => !enKeys.has(k))

if (missingInId.length || missingInEn.length) {
  if (missingInId.length) console.error('Missing in id.json:\n  ' + missingInId.join('\n  '))
  if (missingInEn.length) console.error('Missing in en.json:\n  ' + missingInEn.join('\n  '))
  process.exit(1)
}
console.log(`i18n OK — ${enKeys.size} keys in both locales`)

export default defineEventHandler(event => {
  const config = useRuntimeConfig()
  const live = config.public.siteLive === true || config.public.siteLive === 'true'
  const base = String(config.public.siteUrl).replace(/\/$/, '')
  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return live ? `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n'
})

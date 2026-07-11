import { SITE_NAME } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted">
        <p className="font-semibold text-foreground">{SITE_NAME}</p>
        <p className="mt-2">本サイトは学習目的のコンテンツです。投資判断は自己責任で行ってください。</p>
        <p className="mt-4">© {new Date().getFullYear()} {SITE_NAME}</p>
      </div>
    </footer>
  )
}

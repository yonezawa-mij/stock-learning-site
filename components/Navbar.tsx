import Link from 'next/link'
import { SITE_NAME } from '@/lib/site-config'

export function Navbar() {
  return (
    <header className="border-b border-border bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span>📈</span>
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/courses" className="text-muted hover:text-foreground">
            コース
          </Link>
          <Link href="/dashboard" className="text-muted hover:text-foreground">
            ダッシュボード
          </Link>
          <Link href="/pricing" className="text-muted hover:text-foreground">
            料金
          </Link>
          <Link href="/courses/stock-basics/lessons/l1" className="btn-primary !py-2 !px-4">
            無料で始める
          </Link>
        </nav>
      </div>
    </header>
  )
}

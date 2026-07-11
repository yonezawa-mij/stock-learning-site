import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { MEMBERSHIP_FEATURES, MEMBERSHIP_PRICE_LABEL } from '@/lib/site-config'

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="app-main flex-1">
        <div className="mx-auto max-w-3xl px-6 py-10 sm:py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Pricing</p>
          <h1 className="mt-2 text-3xl font-bold">有料会員プラン</h1>
          <p className="mt-3 text-muted">全コース・クイズ・学習分析が利用できます。</p>
          <div className="mt-10 card p-8 text-left">
            <p className="text-3xl font-bold">{MEMBERSHIP_PRICE_LABEL}</p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {MEMBERSHIP_FEATURES.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted">
              ※ Stripe 連携は今後追加予定。現段階ではコンテンツ閲覧を優先して構築しています。
            </p>
            <Link href="/courses/stock-basics/lessons/l1" className="btn-primary mt-8 inline-flex w-full justify-center">
              無料レッスンから試す
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

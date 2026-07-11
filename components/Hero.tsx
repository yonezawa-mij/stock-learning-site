import Link from 'next/link'

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Stock Investment Learning</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          株式投資を、
          <br />
          ゼロから体系的に学ぶ
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          株の基礎、市場の仕組み、リスク管理、銘柄リサーチまで。クイズで理解度を確認しながら、
          実践に役立つ投資リテラシーを身につけます。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/courses" className="btn-primary">
            コースを見る
          </Link>
          <Link href="/courses/stock-basics/lessons/l1" className="btn-secondary">
            無料レッスンを試す
          </Link>
        </div>
        <p className="mt-6 text-xs text-muted">
          ※ 本サイトは教育コンテンツです。特定銘柄の推奨や投資助言ではありません。
        </p>
      </div>
    </section>
  )
}

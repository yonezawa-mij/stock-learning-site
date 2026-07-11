import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { CourseCard } from '@/components/CourseCard'
import Link from 'next/link'
import { getCourses } from '@/lib/courses'
import { MEMBERSHIP_FEATURES, MEMBERSHIP_PRICE_LABEL } from '@/lib/site-config'

export default function Home() {
  const courses = getCourses()

  return (
    <>
      <Navbar />
      <main className="app-main flex-1">
        <Hero />
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold">学習コース</h2>
            <p className="mt-2 text-muted">初級から中級まで、段階的に学べます。</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((c) => (
                <CourseCard key={c.id} {...c} />
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold">会員プラン</h2>
            <p className="mt-3 text-muted">全コースとクイズ、ダッシュボードが利用できます。</p>
            <ul className="mt-6 space-y-2 text-sm text-muted text-left max-w-md mx-auto">
              {MEMBERSHIP_FEATURES.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <Link href="/pricing" className="btn-primary mt-8 inline-flex">
              {MEMBERSHIP_PRICE_LABEL} で始める
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

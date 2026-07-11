import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CourseCard } from '@/components/CourseCard'
import { getCourses } from '@/lib/courses'

export default function CoursesPage() {
  const courses = getCourses()

  return (
    <>
      <Navbar />
      <main className="app-main flex-1">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <h1 className="text-3xl font-bold">コース一覧</h1>
          <p className="mt-3 text-muted max-w-2xl">
            株式投資の基礎から実践リサーチまで。レッスンとクイズで理解を深めます。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <CourseCard key={c.id} {...c} />
            ))}
          </div>
          <div className="mt-12 rounded-xl border border-blue-200 bg-accent-soft p-6">
            <p className="font-semibold">はじめての方へ</p>
            <p className="mt-2 text-sm text-muted">
              まずは「株式投資の基礎」から始めることをおすすめします。
            </p>
            <Link href="/courses/stock-basics" className="btn-primary mt-4 inline-flex">
              基礎コースを開く
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

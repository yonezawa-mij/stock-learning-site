import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { getAllCourses } from '@/lib/courses'

export default function DashboardPage() {
  const courses = getAllCourses()
  const totalLessons = courses.reduce((n, c) => n + c.lessons.length, 0)

  return (
    <>
      <Navbar />
      <main className="app-main flex-1">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <h1 className="text-3xl font-bold">学習ダッシュボード</h1>
          <p className="mt-2 text-muted">進捗管理は今後 DB 連携で拡張予定です。</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="card p-6">
              <p className="text-xs text-muted">利用可能コース</p>
              <p className="mt-2 text-3xl font-bold">{courses.length}</p>
            </div>
            <div className="card p-6">
              <p className="text-xs text-muted">総レッスン数</p>
              <p className="mt-2 text-3xl font-bold">{totalLessons}</p>
            </div>
            <div className="card p-6">
              <p className="text-xs text-muted">完了レッスン</p>
              <p className="mt-2 text-3xl font-bold text-muted">—</p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-lg font-bold">おすすめの続き</h2>
            <div className="mt-4 space-y-3">
              {courses.map((c) => (
                <Link
                  key={c.id}
                  href={`/courses/${c.id}/lessons/${c.lessons[0].id}`}
                  className="card block p-5 hover:shadow-md"
                >
                  <p className="font-semibold">
                    {c.icon} {c.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">最初のレッスン: {c.lessons[0].title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

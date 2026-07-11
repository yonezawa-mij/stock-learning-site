import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { getCourseById } from '@/lib/courses'

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = getCourseById(id)
  if (!course) notFound()

  return (
    <>
      <Navbar />
      <main className="app-main flex-1">
        <div className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
          <Link href="/courses" className="text-sm text-muted hover:text-foreground">
            ← コース一覧
          </Link>
          <div className="mt-6 flex items-start gap-4">
            <span className="text-4xl">{course.icon}</span>
            <div>
              <p className="text-sm font-medium text-accent">{course.level}</p>
              <h1 className="mt-1 text-3xl font-bold">{course.title}</h1>
              <p className="mt-3 text-muted">{course.description}</p>
              <p className="mt-2 text-sm text-muted">
                {course.lessons.length} レッスン · 目安 {course.duration_minutes} 分
              </p>
            </div>
          </div>
          <div className="mt-10 space-y-3">
            {course.lessons.map((lesson, idx) => (
              <Link
                key={lesson.id}
                href={`/courses/${course.id}/lessons/${lesson.id}`}
                className="card flex items-center justify-between p-5 transition-shadow hover:shadow-md"
              >
                <div>
                  <p className="text-xs font-medium text-muted">
                    レッスン {idx + 1} · {lesson.lesson_type === 'quiz' ? 'クイズ' : '読み物'}
                  </p>
                  <p className="mt-1 font-semibold">{lesson.title}</p>
                </div>
                <span className="text-sm text-muted">{lesson.duration_minutes} 分</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LessonContent } from '@/components/LessonContent'
import { QuizPlayer } from '@/components/QuizPlayer'
import { getCourseById } from '@/lib/courses'

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string; lessonId: string }>
}) {
  const { id, lessonId } = await params
  const course = getCourseById(id)
  if (!course) notFound()

  const idx = course.lessons.findIndex((l) => l.id === lessonId)
  const lesson = course.lessons[idx]
  if (!lesson) notFound()

  const prev = idx > 0 ? course.lessons[idx - 1] : null
  const next = idx < course.lessons.length - 1 ? course.lessons[idx + 1] : null

  return (
    <>
      <Navbar />
      <main className="app-main flex-1">
        <div className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
          <Link href={`/courses/${course.id}`} className="text-sm text-muted hover:text-foreground">
            ← {course.title}
          </Link>
          <div className="mt-6 card p-6 sm:p-8">
            <p className="text-xs font-medium text-muted">
              レッスン {idx + 1} / {course.lessons.length}
              {lesson.domain ? ` · ${lesson.domain}` : ''}
            </p>
            <h1 className="mt-3 text-2xl font-bold">{lesson.title}</h1>
            <div className="mt-8">
              {lesson.lesson_type === 'quiz' && lesson.quiz ? (
                <QuizPlayer {...lesson.quiz} />
              ) : (
                <LessonContent content={lesson.content} />
              )}
            </div>
          </div>
          <div className="mt-8 flex justify-between gap-4">
            {prev ? (
              <Link href={`/courses/${course.id}/lessons/${prev.id}`} className="btn-secondary">
                ← 前へ
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/courses/${course.id}/lessons/${next.id}`} className="btn-primary">
                次へ →
              </Link>
            ) : (
              <Link href={`/courses/${course.id}`} className="btn-primary">
                コースに戻る
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

import Link from 'next/link'

type Props = {
  id: string
  title: string
  description: string
  icon: string
  level: string
  duration_minutes: number
  lesson_count: number
}

export function CourseCard({
  id,
  title,
  description,
  icon,
  level,
  duration_minutes,
  lesson_count,
}: Props) {
  return (
    <Link href={`/courses/${id}`} className="card block p-6 transition-shadow hover:shadow-md">
      <div className="flex items-start gap-4">
        <span className="text-3xl">{icon}</span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            <span className="rounded-full bg-accent-soft px-2.5 py-1 text-blue-800">{level}</span>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-muted">
              {lesson_count} レッスン
            </span>
          </div>
          <h3 className="mt-3 text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm text-muted line-clamp-2">{description}</p>
          <p className="mt-4 text-xs text-muted">目安 {duration_minutes} 分</p>
        </div>
      </div>
    </Link>
  )
}

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export function LessonContent({ content }: { content: string }) {
  const blocks = content.trim().split('\n\n')

  return (
    <div className="prose-lesson">
      {blocks.map((block, i) => {
        if (block.startsWith('## ')) {
          return <h2 key={i}>{block.slice(3)}</h2>
        }
        if (block.startsWith('> ')) {
          return <blockquote key={i}>{renderInline(block.slice(2))}</blockquote>
        }
        if (block.startsWith('| ')) {
          const rows = block.split('\n').filter((r) => r.trim() && !r.includes('---'))
          return (
            <table key={i}>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri}>
                    {row
                      .split('|')
                      .filter(Boolean)
                      .map((cell, ci) => (
                        <td key={ci}>{cell.trim()}</td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )
        }
        if (block.startsWith('- ')) {
          const items = block.split('\n').map((l) => l.replace(/^- /, ''))
          return (
            <ul key={i}>
              {items.map((item, ii) => (
                <li key={ii}>{renderInline(item)}</li>
              ))}
            </ul>
          )
        }
        return <p key={i}>{renderInline(block)}</p>
      })}
    </div>
  )
}

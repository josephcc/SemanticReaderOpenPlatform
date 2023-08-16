import { PaperType } from "./papers"

export default function Paper({paper}: {paper: PaperType}) {
  return (
    <>
      <a href={`https://www.semanticscholar.org/paper/${paper.paperId}`} target="_blank" style={{ fontWeight: 'bold' }}>{paper.title}</a>. {paper.venue}. {paper.year}. {paper.authors.map((author) => author.name).join(', ')}.
    </>
  )

}

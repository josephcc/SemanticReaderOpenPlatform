import { PaperType } from "./papers"

export default function Paper({paper}: {paper: PaperType}) {
  return (
    <>
      <a href={`https://www.semanticscholar.org/paper/${paper.paperId}`} target="_blank" style={{ fontWeight: 'bold' }}>{paper.title}</a>. {paper.journal?.name?.replace(/ \d\d\d\d /, ' ')}. {paper.year}. {paper.authors.map((author) => author.name).join(', ')}.
    </>
  )

}

import { PaperType } from "./papers"

export default function Paper({paper}: {paper: PaperType}) {
  let venue = paper.journal?.name?.replace(/ \d\d\d\d /, ' ') + '. '
  if (`${paper.externalIds.CorpusId}` === '261276997' || `${paper.externalIds.CorpusId}` === '260899915') {
    venue = 'The ACM Symposium on User Interface Software and Technology. '
  }
  return (
    <>
      <a href={`https://www.semanticscholar.org/paper/${paper.paperId}`} target="_blank" style={{ fontWeight: 600 }}>{paper.title}</a>. {venue}{paper.year}. {paper.authors.map((author) => author.name).join(', ')}.
    </>
  )

}

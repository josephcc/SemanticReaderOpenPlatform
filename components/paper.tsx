import { PaperType } from "./papers"

export default function Paper({paper}: {paper: PaperType}) {
  let venue = paper.journal?.name?.replace(/ \d\d\d\d /, ' ') + '. '
  if (`${paper.externalIds.CorpusId}` === '261276997' || `${paper.externalIds.CorpusId}` === '260899915') {
    venue = 'The ACM Symposium on User Interface Software and Technology. '
  }
  if (`${paper.externalIds.CorpusId}` === '215768677' || `${paper.externalIds.CorpusId}` === '215416146') {
    venue = 'Proceedings of the Annual Meeting of the Association for Computational Linguistics. '
  }
  if (`${paper.externalIds.CorpusId}` === '222291111') {
    venue = 'Proceedings of the First Workshop on Scholarly Document Processing @ ACL. '
  }
  if (`${paper.externalIds.CorpusId}` === '216867622') {
    venue = 'Findings of the Association for Computational Linguistics: EMNLP. '
  }
  return (
    <>
      <a href={`https://www.semanticscholar.org/paper/${paper.paperId}`} target="_blank" style={{ fontWeight: 600 }}>{paper.title}</a>. {venue}{paper.year}. {paper.authors.map((author) => author.name).join(', ')}.
    </>
  )

}

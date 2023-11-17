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
    <span style={{ display: 'inline-block' }}>
      {(paper.externalIds.CorpusId === 256868353 || paper.externalIds.CorpusId === 248420091 || paper.externalIds.CorpusId === 239011922 || paper.externalIds.CorpusId === 256416131) ? <span style={{ fontWeight: 'bold' }}>🏆 Best Paper Award<br /></span> : null}
      <a href={`https://www.semanticscholar.org/paper/${paper.paperId}`} target="_blank" style={{ fontWeight: 600 }}>{paper.title}</a><br/>{paper.authors.map((author) => author.name).join(', ')}. {venue}{paper.year}.
      {paper.externalIds.CorpusId === 247187606 ? <span> Presentation at CHI 2024.</span> : null}
    </span>
  )

}

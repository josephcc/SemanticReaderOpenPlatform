import Link from "next/link"
import PersonLight from "./personLight"

export enum PillType {
  FOUNDING,
  DEMO,
  PRODUCT,
  SNIPPET,
  PAPER,
  VIDEO,
  SOURCE,
}

interface PersonType {
  name: string
  image?: string
}

interface PropType {
  title: string
  subtitle: string
  page?: string
  pillTypes: PillType[]
  people: PersonType[]
}

const Demo: React.FC<PropType> = (props) => {
  const { title, subtitle, pillTypes, people, page = '/'} = props
  return (
    <Link href={page} style={{ color: '#333' }} target={page.startsWith('http') ? '_blank' : '_self'}>
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transition ease-in duration-100 delay-10 hover:scale-105" style={{ border: '1px solid #efefef' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '80%' }}>
          {people.map(person => (
            <PersonLight key={person.name} person={person} />
          ))}
        </div>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{title}</h4>
        <p className="text-gray-600 text-center mb-2">{subtitle}</p>
        <p className="text-gray-600 text-center">
          {pillTypes.sort().map(type => pills.get(type))}
        </p>
      </div>
    </Link>
  )
}

const pillStyles: React.CSSProperties = { fontSize: '0.65em' }
const pills = new Map<PillType, JSX.Element>();
pills.set(PillType.DEMO, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-blue-50 px-1.5 py-0.5 text-xs text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-0.5 ml-0.5 tracking-wide text-light">Demo</span>
))
pills.set(PillType.SNIPPET, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-yellow-50 px-1.5 py-0.5 text-xs text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mr-0.5 ml-0.5 tracking-wide text-light">Code Tutorial</span>
))
pills.set(PillType.PRODUCT, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-indigo-50 px-1.5 py-0.5 text-xs text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mr-0.5 ml-0.5 tracking-wide text-light">In-Production</span>
))
pills.set(PillType.PAPER, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-green-50 px-1.5 py-0.5 text-xs text-green-700 ring-1 ring-inset ring-green-600/20 mr-0.5 ml-0.5 tracking-wide text-light">Paper</span>
))
pills.set(PillType.SOURCE, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-indigo-50 px-1.5 py-0.5 text-xs text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mr-0.5 ml-0.5 tracking-wide text-light">Source</span>
))
pills.set(PillType.VIDEO, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-gray-50 px-1.5 py-0.5 text-xs text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-0.5 ml-0.5 tracking-wide text-light">Presentation</span>
))
pills.set(PillType.FOUNDING, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-red-50 px-1.5 py-0.5 text-xs text-red-600 ring-1 ring-inset ring-red-500/10 mr-0.5 ml-0.5 tracking-wide text-light">Founding Project</span>
))

export default Demo;
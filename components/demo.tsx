import Link from "next/link"
import PersonLight from "./personLight"

export enum PillType {
  DEMO = 'demo',
  SNIPPET = 'snippet',
  PRODUCT = 'product',
  PAPER = 'paper',
  SOURCE = 'source',
  VIDEO = 'video',
  FOUNDING = 'founding'
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
          {pillTypes.map(type => pills.get(type))}
        </p>
      </div>
    </Link>
  )
}

const pillStyles: React.CSSProperties = { fontSize: '0.65em' }
const pills = new Map<PillType, JSX.Element>();
pills.set(PillType.DEMO, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-1">Interactive Demo</span>
))
pills.set(PillType.SNIPPET, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mr-1">Code Snippet</span>
))
pills.set(PillType.PRODUCT, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mr-1">Product Feature</span>
))
pills.set(PillType.PAPER, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Research Paper</span>
))
pills.set(PillType.SOURCE, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mr-1">Open Sourced</span>
))
pills.set(PillType.VIDEO, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-1">Talk Video</span>
))
pills.set(PillType.FOUNDING, (
  <span style={pillStyles} className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-inset ring-red-500/10 mr-1">Founding Project</span>
))

export default Demo;
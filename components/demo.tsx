import Link from "next/link"
import PersonLight from "./personLight"

export enum PillType {
  FOUNDING = 0,
  DEMO = 1,
  PRODUCT = 2,
  SNIPPET = 3,
  SOURCE = 5,
  VIDEO = 6,
  PAPER = 7,
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
const pillClassNames = (color: string) => `inline-flex items-center rounded-md px-1.5 py-0.5 text-xs  ring-1 ring-inset mr-0.5 ml-0.5 tracking-wide bg-${color}-50 text-${color}-600 text-${color}-700 ring-${color}-600/20 ring-${color}-700/10 ring-${color}-500/10`
const pills = new Map<PillType, JSX.Element>();
pills.set(PillType.DEMO, (
  <span style={pillStyles} className={pillClassNames('blue')}>Demo</span>
))
pills.set(PillType.SNIPPET, (
  <span style={pillStyles} className={pillClassNames('yellow')}>Tutorial</span>
))
pills.set(PillType.PRODUCT, (
  <span style={pillStyles} className={pillClassNames('purple')}>Deployed</span>
))
pills.set(PillType.PAPER, (
  <span style={pillStyles} className={pillClassNames('green')}>Paper</span>
))
pills.set(PillType.SOURCE, (
  <span style={pillStyles} className={pillClassNames('indigo')}>Open Sourced</span>
))
pills.set(PillType.VIDEO, (
  <span style={pillStyles} className={pillClassNames('gray')}>Presentation</span>
))
pills.set(PillType.FOUNDING, (
  <span style={pillStyles} className={pillClassNames('red')}>Founding Project</span>
))

export default Demo;
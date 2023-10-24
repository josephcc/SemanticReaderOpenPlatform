
export interface PersonType {
  person: { 
    name: string
    image?: string
  }
  style?: React.CSSProperties
}

export default function PersonLight(props: PersonType) {
  const { person, style={} } = props
  return (
    <div key={person.name} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', ...style }}>
      <img className='shadow-lg' src={person.image ?? 'https://cataas.com/cat'} alt={`Photo of ${person.name}`} style={{ borderRadius: '100%', marginBottom: '0px', width: '64px', height: '64px' }} width='64' height='64' data-aos="zoom-y-out" data-aos-delay="100" />
      <div style={{ fontSize: '0.7em', color: '#aaa' }}>{person.name}</div>
    </div>
  )
}
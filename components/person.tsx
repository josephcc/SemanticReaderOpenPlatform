import { CgWebsite } from "react-icons/cg";
import { LuTwitter } from "react-icons/lu";

export interface PersonType {
  name: string
  image?: string
  title: string
  affiliation: string
  website?: string
  twitter?: string
}

export default function Person(props: PersonType) {
  const { name, image, affiliation, website, twitter, title } = props
  return (
    <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <img className='shadow-lg' src={image ?? 'https://cataas.com/cat'} alt={`Photo of ${name}`} style={{ borderRadius: '100%', marginBottom: '12px', width: '150px', height: '150px' }} width='150' height='150' data-aos="zoom-y-out" data-aos-delay="300" />
      <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>{name}</div>
      <div style={{ height: '72px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
        <div>{title}</div>
        <div style={{ marginBottom: '6px' }}>{affiliation}</div>
      </div>
      <div style={{ display: 'flex', width: '50px', justifyContent: 'space-between' }}>
        {website && (
          <a href={website} target='_blank'><CgWebsite /></a>
        )}
        {twitter && (
          <a href={twitter} target='_blank'><LuTwitter /></a>
        )}
      </div>
    </div>
  )
}
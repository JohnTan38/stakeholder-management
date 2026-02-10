type SectionHeadingProps = {
  kicker?: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ kicker, title, subtitle }: SectionHeadingProps) {
  return (
    <div className='section-heading'>
      {kicker ? <p className='kicker'>{kicker}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className='subhead'>{subtitle}</p> : null}
    </div>
  )
}

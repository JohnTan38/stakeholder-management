import Image from 'next/image'
import SectionHeading from '../../components/SectionHeading'

export default function ResourcesPage() {
  return (
    <div className='page'>
      <header className='page-header'>
        <p className='eyebrow'>Resources</p>
        <h1>Downloads and Visual References</h1>
        <p className='lead'>Access the PDFs and infographic assets used in this experience.</p>
      </header>

      <section id='downloads' className='section'>
        <SectionHeading
          kicker='Downloads'
          title='PDF Resources'
          subtitle='Keep the report and consistency brief available offline.'
        />
        <div className='grid-3'>
          <a className='card link-card' href='/M5-Stakeholders-WAP-2026-John-Tan-Vie-Ming.pdf' download>
            <h3>M5 Learning Summary Report</h3>
            <p>Primary report covering stakeholder management insights.</p>
          </a>
          <a className='card link-card' href='/Effectiveness_Requires_Consistency.pdf' download>
            <h3>Effectiveness Requires Consistency</h3>
            <p>Supplementary reading on consistency and effectiveness.</p>
          </a>
          <a className='card link-card' href='/m5-stakeholder-management.png' download>
            <h3>Thematic Bridge Infographic</h3>
            <p>Download the visual summary as a PNG.</p>
          </a>
        </div>
      </section>

      <section id='infographic' className='section'>
        <SectionHeading
          kicker='Infographic'
          title='Strategic Consistency Drives Nonprofit Effectiveness'
          subtitle='A visual summary of how consistent thematic rationale bridges stakeholder expectations.'
        />
        <div className='media-frame'>
          <Image
            src='/m5-stakeholder-management.png'
            alt='Strategic consistency infographic'
            width={920}
            height={1380}
          />
        </div>
      </section>
    </div>
  )
}

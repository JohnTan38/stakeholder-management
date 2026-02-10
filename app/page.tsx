import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '../components/SectionHeading'

export default function HomePage() {
  return (
    <div className='page'>
      <section className='hero section'>
        <div className='hero-text'>
          <p className='eyebrow'>Thematic Bridge</p>
          <h1>Strategic Consistency Drives Nonprofit Effectiveness</h1>
          <p className='lead'>
            Consistency for optimal effectiveness. A consistent thematic rationale bridges diverse stakeholder
            expectations into negotiated outcomes.
          </p>
          <div className='hero-actions'>
            <Link className='btn primary' href='/overview'>
              Explore the research
            </Link>
            <Link className='btn ghost' href='/stakeholders'>
              Meet the stakeholders
            </Link>
          </div>
          <div className='stat-grid'>
            <div className='stat-card'>
              <span>3</span>
              <p>NPOs studied</p>
            </div>
            <div className='stat-card'>
              <span>2</span>
              <p>Collection methods</p>
            </div>
            <div className='stat-card'>
              <span>4</span>
              <p>External stakeholder groups</p>
            </div>
            <div className='stat-card'>
              <span>1</span>
              <p>Internal stakeholder group</p>
            </div>
          </div>
        </div>
        <div className='hero-media'>
          <Image
            src='/m5-stakeholder-management.png'
            alt='The thematic bridge infographic'
            width={520}
            height={820}
            priority
          />
        </div>
      </section>

      <section id='thematic-bridge' className='section'>
        <SectionHeading
          kicker='Central Theme'
          title='The Thematic Bridge'
          subtitle='A consistent management theme (for example, mission centeredness) guides every external interaction.'
        />
        <div className='grid-3'>
          <div className='card'>
            <h3>Aligning diverse expectations</h3>
            <p>
              Stakeholder groups often hold conflicting priorities. A shared thematic rationale brings alignment and
              focus to those expectations.
            </p>
          </div>
          <div className='card'>
            <h3>Active engagement tools</h3>
            <p>
              Advisory committees, surveys, newsletters, conferences, and strategic networking keep communication
              two-way and grounded in stakeholder input.
            </p>
          </div>
          <div className='card'>
            <h3>Negotiated effectiveness</h3>
            <p>
              Consistency builds predictability and trust, leading to accountability, a coherent identity, and
              high-performance management outcomes.
            </p>
          </div>
        </div>
      </section>

      <section id='report-context' className='section'>
        <SectionHeading
          kicker='Report Context'
          title='Learning Summary Report'
          subtitle='Based on Balser and McClusky (2005): managing stakeholder relationships and nonprofit effectiveness.'
        />
        <div className='grid-2'>
          <div className='card'>
            <h3>Research objective</h3>
            <p>
              Examine how nonprofit organizations manage stakeholder relationships and how these practices relate to
              perceived organizational effectiveness.
            </p>
            <Link className='text-link' href='/overview#objective'>
              View full objective
            </Link>
          </div>
          <div className='card'>
            <h3>What this site covers</h3>
            <p>
              Stakeholder profiles, engagement metrics, communication plans, and reflective theory insights to guide
              consistent management practices.
            </p>
            <Link className='text-link' href='/engagement#metrics'>
              Jump to engagement metrics
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

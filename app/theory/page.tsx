import SectionHeading from '../components/SectionHeading'

export default function TheoryPage() {
  return (
    <div className='page'>
      <header className='page-header'>
        <p className='eyebrow'>Theory and Reflection</p>
        <h1>Networking and Key Learning Points</h1>
        <p className='lead'>Reflection highlights the theories that shape stakeholder management practice.</p>
      </header>

      <section id='networking' className='section'>
        <SectionHeading
          kicker='Networking'
          title='Residential Children Center Networking'
          subtitle='Building relationships across board, funders, government, and community stakeholders.'
        />
        <div className='card'>
          <p>
            The Residential Children Center cultivates external relationships with board members, funders, and
            government officials while hosting community events for business associations to support regional growth
            and development.
          </p>
        </div>
      </section>

      <section id='reflection' className='section'>
        <SectionHeading
          kicker='Reflection'
          title='Three Key Learning Points'
          subtitle='Stakeholder theory lenses that inform nonprofit leadership decisions.'
        />
        <div className='grid-3'>
          <div className='card'>
            <h3>Friedman: Shareholder theory</h3>
            <p>
              Friedman emphasized a free-market approach with minimal government intervention, asserting that a
              company's primary responsibility is to generate returns for shareholders.
            </p>
          </div>
          <div className='card'>
            <h3>Freeman: Stakeholder theory</h3>
            <p>
              Freeman described successful organizations as those that recognize all related parties contribute to
              success and should create value for each stakeholder group.
            </p>
          </div>
          <div className='card'>
            <h3>Principle 1</h3>
            <p>
              Managers should acknowledge and actively monitor the concerns of legitimate stakeholders, taking their
              interests into account during decision-making and operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

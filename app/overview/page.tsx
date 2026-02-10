import SectionHeading from '../../components/SectionHeading'

export default function OverviewPage() {
  return (
    <div className='page'>
      <header className='page-header'>
        <p className='eyebrow'>Research Summary</p>
        <h1>Learning Summary Report</h1>
        <p className='lead'>
          A concise overview of the research on stakeholder management practices and nonprofit effectiveness.
        </p>
      </header>

      <section id='objective' className='section'>
        <SectionHeading
          kicker='Objective'
          title='Research Objective'
          subtitle='How do stakeholder relationship practices connect to perceived effectiveness?'
        />
        <div className='card'>
          <p>
            The study examines how nonprofit organizations manage relationships with stakeholders and how those
            practices relate to perceived organizational effectiveness.
          </p>
        </div>
      </section>

      <section id='methods' className='section'>
        <SectionHeading
          kicker='Methods'
          title='Data Collection Methods'
          subtitle='Two complementary approaches were used to gather insight.'
        />
        <div className='grid-2'>
          <div className='card'>
            <h3>Semi-structured interviews</h3>
            <p>Open-ended interviews with executive directors explored stakeholder relationships in depth.</p>
          </div>
          <div className='card'>
            <h3>Checklist questionnaire</h3>
            <p>
              A one-page checklist identified stakeholder groups, expectations they create, and management practices
              used to respond.
            </p>
          </div>
        </div>
      </section>

      <section id='sample' className='section'>
        <SectionHeading
          kicker='Sample'
          title='Participating Organizations'
          subtitle='Three nonprofit organizations and their evaluators formed the sample group.'
        />
        <div className='grid-2'>
          <div className='card'>
            <h3>NPO types</h3>
            <ul className='list'>
              <li>Non-residential children center</li>
              <li>Residential children center</li>
              <li>Residential recovery facility</li>
            </ul>
          </div>
          <div className='card'>
            <h3>Interview participants</h3>
            <ul className='list'>
              <li>Executive directors</li>
              <li>Multiple external evaluators</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='research-question' className='section'>
        <SectionHeading
          kicker='Finding'
          title='Research Question'
          subtitle='Is there a positive correlation between stakeholder management and effectiveness?'
        />
        <div className='card'>
          <p>
            The research question was answered in the affirmative, indicating a positive correlation between managing
            stakeholder relationships and nonprofit effectiveness.
          </p>
        </div>
      </section>
    </div>
  )
}

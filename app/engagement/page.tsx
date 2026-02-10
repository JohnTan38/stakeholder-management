import SectionHeading from '../../components/SectionHeading'

export default function EngagementPage() {
  return (
    <div className='page'>
      <header className='page-header'>
        <p className='eyebrow'>Engagement Metrics</p>
        <h1>Tracking Engagement and Communication</h1>
        <p className='lead'>Measure stakeholder engagement and communicate with clarity and cadence.</p>
      </header>

      <section id='metrics' className='section'>
        <SectionHeading
          kicker='Metrics'
          title='Engagement Metrics'
          subtitle='Metrics compare desired versus actual engagement and reveal gaps to improve.'
        />
        <div className='grid-2'>
          <div className='card'>
            <h3>Definition</h3>
            <p>
              Measuring stakeholder engagement is critical for tracking the effectiveness of relationship-building
              strategies. Metrics document desired and actual engagement levels to highlight areas for improvement.
            </p>
          </div>
          <div className='card'>
            <h3>Metrics used in the research</h3>
            <ul className='list'>
              <li>Mean global effectiveness</li>
              <li>Mean effectiveness in dealing with funders</li>
              <li>Mean effectiveness in dealing with community</li>
              <li>Mean effectiveness in dealing with clients</li>
              <li>Mean effectiveness in providing programs and services</li>
              <li>Mean effectiveness in developing financial resources</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='communication' className='section'>
        <SectionHeading
          kicker='Communication'
          title='Communication Plan'
          subtitle='Targeted information, channels, and cadence for each stakeholder group.'
        />
        <div className='table'>
          <div className='table-row head'>
            <div>Stakeholder</div>
            <div>Information</div>
            <div>Mechanisms</div>
            <div>Timing</div>
          </div>
          <div className='table-row'>
            <div>Board of Directors</div>
            <div>KPI updates, events, operating financial reports</div>
            <div>Email, monthly reports, SMS in emergencies</div>
            <div>Monthly / quarterly</div>
          </div>
          <div className='table-row'>
            <div>Community members</div>
            <div>Workplans, agreed course of action, future plans</div>
            <div>Email, SMS</div>
            <div>As needed</div>
          </div>
          <div className='table-row'>
            <div>Volunteers</div>
            <div>Events and updates</div>
            <div>Email, SMS, newsletter</div>
            <div>Monthly / weekly</div>
          </div>
        </div>
      </section>
    </div>
  )
}

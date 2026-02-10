import SectionHeading from '../../components/SectionHeading'

export default function StakeholdersPage() {
  return (
    <div className='page'>
      <header className='page-header'>
        <p className='eyebrow'>Stakeholder Map</p>
        <h1>Stakeholders of the Three NPOs</h1>
        <p className='lead'>
          Nature of relationships and sensitivities between the nonprofits and the stakeholders inside and outside the
          sector.
        </p>
      </header>

      <section id='external-stakeholders' className='section'>
        <SectionHeading
          kicker='External'
          title='External Stakeholders'
          subtitle='Four key groups shape expectations and accountability.'
        />
        <div className='grid-2'>
          <div className='card'>
            <h3>Funders and donors</h3>
            <ul className='list'>
              <li>Provide monetary support and act as a primary source of funds.</li>
              <li>Sensitivities include confidentiality under PDPA and regulatory compliance.</li>
            </ul>
          </div>
          <div className='card'>
            <h3>Volunteers</h3>
            <ul className='list'>
              <li>Support organization activities and act as inter-organization liaisons.</li>
              <li>Consistency and regularity of commitment is a key sensitivity.</li>
            </ul>
          </div>
          <div className='card'>
            <h3>Clients</h3>
            <ul className='list'>
              <li>Key stakeholders who support NPO activities and long-term viability.</li>
              <li>Manage expectations and monitor client health needs.</li>
            </ul>
          </div>
          <div className='card'>
            <h3>Government officers</h3>
            <ul className='list'>
              <li>Ensure NPO operations remain legal and compliant with legislation.</li>
              <li>Align KPIs with organizational goals and meet WSH requirements.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='internal-stakeholders' className='section'>
        <SectionHeading
          kicker='Internal'
          title='Internal Stakeholders'
          subtitle='Senior leadership balances mission, brand, and financial stability.'
        />
        <div className='card'>
          <h3>Executive director and senior management</h3>
          <ul className='list'>
            <li>Achieve financial breakeven while upholding brand reputation and market engagement.</li>
            <li>Remain firm, impartial, and transparent when dealing with stakeholder expectations.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

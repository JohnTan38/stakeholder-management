'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { navItems, searchIndex } from '../content/sections'

export default function Sidebar() {
  const pathname = usePathname()
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return searchIndex
      .filter((item) => {
        const haystack = [item.title, item.description, item.tags.join(' ')].join(' ').toLowerCase()
        return haystack.includes(q)
      })
      .slice(0, 6)
  }, [query])

  return (
    <aside className='sidebar'>
      <div className='brand'>
        <div className='brand-mark'>M5</div>
        <div>
          <p className='brand-title'>Stakeholder Management</p>
          <p className='brand-sub'>Strategic consistency and effectiveness</p>
        </div>
      </div>

      <div className='search'>
        <label htmlFor='search'>Search sections</label>
        <input
          id='search'
          type='search'
          placeholder='Try: metrics, volunteers, reflection'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {results.length > 0 ? (
          <div className='search-results'>
            {results.map((item) => (
              <Link
                key={`${item.route}-${item.anchor ?? 'top'}`}
                className='search-result'
                href={item.anchor ? `${item.route}#${item.anchor}` : item.route}
              >
                <span>{item.title}</span>
                <span className='search-result-meta'>{item.description}</span>
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      <nav className='nav'>
        {navItems.map((item) => {
          const active = pathname === item.href
          return (
            <Link key={item.href} className={`nav-link${active ? ' active' : ''}`} href={item.href}>
              <span>{item.label}</span>
              <small>{item.description}</small>
            </Link>
          )
        })}
      </nav>

      <div className='download'>
        <a className='btn primary' href='/M5-Stakeholders-WAP-2026-John-Tan-Vie-Ming.pdf' download>
          Download M5 Report
        </a>
        <a className='btn ghost' href='/Effectiveness_Requires_Consistency.pdf' download>
          Download Consistency PDF
        </a>
      </div>

      <div className='sidebar-footer'>
        <p>Consistency for optimal effectiveness.</p>
      </div>
    </aside>
  )
}

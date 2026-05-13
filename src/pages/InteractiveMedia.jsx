import { Link } from 'react-router-dom'

const summaryRows = [
  ['S&P 500', '7,230.12', '7,398.93', '+168.81 pts', '+2.33%', 'pos'],
  ['Dow Jones Industrial Avg.', '49,499.27', '49,609.16', '+109.89 pts', '+0.22%', 'pos'],
  ['Nasdaq Composite', '25,114.44', '26,247.08', '+1,132.64 pts', '+4.51%', 'pos'],
  ['10-Year U.S. Treasury', '4.378%', '4.364%', '-1.4 bps', '—', 'neg'],
  ['CBOE Volatility Index (VIX)', '16.99', '17.19', '+0.20 pts', '+1.18%', 'pos'],
]

const highlights = [
  ['U.S. Equities — S&P 500', 'The S&P 500 advanced 168.81 points, or 2.33%, to close at 7,398.93 on Friday, May 8, compared with the prior Friday close of 7,230.12. The benchmark posted record closing levels on May 5, May 6, and May 8, and finished a sixth consecutive week of gains.'],
  ['U.S. Equities — Dow Jones Industrial Average', 'The Dow Jones Industrial Average finished at 49,609.16, up 109.89 points, or 0.22%, from 49,499.27 the prior Friday. The price-weighted index lagged the broader benchmarks, reflecting weaker relative performance in energy and select industrial constituents.'],
  ['U.S. Equities — Nasdaq Composite', 'The Nasdaq Composite gained 1,132.64 points, or 4.51%, to close at 26,247.08 on Friday, May 8, from 25,114.44 the prior Friday. The index closed above the 26,000 level for the first time on Friday.'],
  ['Rates — 10-Year U.S. Treasury', 'The yield on the 10-Year U.S. Treasury note ended the week at 4.364%, down 1.4 basis points from 4.378% the prior Friday. Yields traded in a range during the week.'],
  ['Volatility — CBOE VIX', 'The CBOE Volatility Index closed Friday at 17.19, up 0.20 points, or 1.18%, from 16.99 the prior Friday. Implied volatility traded within a contained range.'],
  ['Labor Market — April Employment Report', 'The Bureau of Labor Statistics reported total nonfarm payroll employment rose by 115,000 in April, while the unemployment rate held at 4.3%. Average hourly earnings increased 0.2% on the month and 3.6% over the year.'],
  ['Labor Market — Initial Jobless Claims', 'The Department of Labor reported initial jobless claims for the week ended May 2 totaled 200,000, up 10,000 from the prior week. The four-week moving average declined to 203,250.'],
  ['Labor Market — JOLTS', 'The Bureau of Labor Statistics reported March job openings of 6.87 million, down 56,000 from February. The hires rate increased to 3.5%, while quits and layoffs also rose.'],
  ['Services — ISM Services PMI', 'The Institute for Supply Management reported the April Services PMI registered 53.6%, down from 54.0% in March. The Prices Index held at 70.7, and Employment remained in contraction at 48.0.'],
  ['Productivity — Q1 Productivity & Unit Labor Costs', 'Nonfarm business sector labor productivity increased 0.8% at a seasonally adjusted annualized rate in the first quarter of 2026. Unit labor costs rose 2.3%.'],
  ['Trade — International Trade Balance', 'The U.S. goods and services trade deficit widened to $60.3 billion in March from a revised $57.8 billion in February. Imports rose to $381.2 billion and exports increased to $320.9 billion.'],
  ['Consumer — University of Michigan Sentiment', 'The University of Michigan preliminary May Index of Consumer Sentiment posted a reading of 48.2, down 3.2% from April and 7.7% below the year-earlier level.'],
  ['Energy — Crude Oil & Strait of Hormuz', 'Brent crude oil settled near $101.29 per barrel on Friday, while WTI crude settled at $95.42. Both posted weekly losses of approximately 6%.'],
  ['Corporate Earnings — AMD, Disney, McDonald\'s', 'AMD, Disney, and McDonald\'s reported quarterly results during the week, with AMD data center revenue rising sharply and Disney streaming operating income improving.'],
  ['Technology — Memory Semiconductors', 'Memory chip equities advanced sharply during the week. Micron Technology surged, lifting the company market capitalization above $700 billion for the first time.'],
]

const macroCards = [
  ['+115K', 'Nonfarm Payrolls · April', 'BLS report released May 8. Unemployment rate held at 4.3%; AHE +0.2% MoM, +3.6% YoY.'],
  ['4.3%', 'Unemployment Rate · April', 'Unchanged from March. Labor force participation rate at 61.8%.'],
  ['200K', 'Initial Jobless Claims', 'Week ended May 2; up 10K from 190K revised. Continuing claims at 1,766K.'],
  ['6.87M', 'JOLTS · March Openings', 'Released May 5. Down 56K from February. Hires rate rose to 3.5%.'],
  ['53.6', 'ISM Services PMI · April', 'Released May 5. 22nd consecutive month in expansion. Prices Index at 70.7.'],
  ['+0.8%', 'Q1 Productivity · Annualized', 'Released May 7. Unit labor costs +2.3% q/q. Y/Y productivity +2.9%.'],
  ['-$60.3B', 'Trade Deficit · March', 'Released May 5. Widened from -$57.8B in February. Goods deficit at $88.7B.'],
  ['48.2', 'UMich Sentiment · May Prelim', 'Released May 8. Down 3.2% from April; 7.7% below year earlier.'],
]

const timeline = [
  ['Mon', 'May 4', ['Markets fell as crude oil prices rose; UAE intercepted missiles fired from Iran.', 'Brent crude +5.8% to $114.44; WTI +4.39% to $106.42.', '30-Year Treasury yield moved through 5.0% intraday.'], ['S&P 500  7,200.75', 'Dow  48,941.90', 'Nasdaq  25,067.80']],
  ['Tue', 'May 5', ['S&P 500 and Nasdaq set fresh record closes; Russell 2000 hit an intraday record.', 'ISM Services April: 53.6; JOLTS March: 6.87M openings.', 'AMD reported Q1 revenue of $10.25B, up 38% year over year.'], ['S&P 500  7,259.22', 'Dow  49,298.25', 'Nasdaq  25,326.13']],
  ['Wed', 'May 6', ['Equities advanced broadly; S&P 500, Nasdaq, and Russell 2000 closed at records.', '10-Year Treasury yield declined approximately 6.8 bps.', 'Disney reported fiscal Q2 revenue of $25.17B and adjusted EPS of $1.57.'], ['S&P 500  7,365.12', 'Dow  49,910.59', 'Nasdaq  25,838.94']],
  ['Thu', 'May 7', ['Markets pulled back from records as oil prices recovered intraday lows.', 'Initial jobless claims: 200K. Q1 productivity: +0.8%; ULC +2.3%.', 'U.S. and Iran exchanged fire near the Strait of Hormuz.'], ['S&P 500  7,337.11', 'Dow  49,596.97', 'Nasdaq  25,806.20']],
  ['Fri', 'May 8', ['S&P 500 and Nasdaq closed at records; Nasdaq above 26,000 for the first time.', 'April Employment Report: NFP +115K; unemployment rate 4.3%; AHE +0.2% MoM.', 'Brent crude $101.29; WTI $95.42.'], ['S&P 500  7,398.93', 'Dow  49,609.16', 'Nasdaq  26,247.08']],
]

function BrandLockup() {
  return (
    <img
      className="brand-lockup"
      src="/horizontal_logo.png"
      alt="Capital Plus Financial Group in alliance with Equitable Advisors"
    />
  )
}

function Masthead() {
  return (
    <div className="masthead">
      <BrandLockup />
    </div>
  )
}

function Nameplate() {
  return (
    <div className="nameplate">
      <div className="nameplate-title">The Numbers</div>
      <div className="nameplate-meta">
        <div>Weekly Market Review</div>
        <p>Week of May 4 - May 8, 2026</p>
      </div>
    </div>
  )
}

function Footer({ page, label = 'The Numbers · Week of May 4 - May 8, 2026' }) {
  return (
    <div className="footer-rule">
      <span>{label}</span>
      <span>Page {page} of 5</span>
    </div>
  )
}

function SectionHead({ children }) {
  return <div className="section-head">{children}</div>
}

function Highlights({ start, end }) {
  return (
    <div className="items">
      {highlights.slice(start - 1, end).map(([title, body], index) => (
        <article className="item" key={title}>
          <h3><span>{start + index}.</span>{title}</h3>
          <p>{body}</p>
        </article>
      ))}
    </div>
  )
}

function MarketPathChart() {
  return (
    <img
      className="chart-img"
      src="/interactive-media/chart_1_daily_index_path.svg"
      alt="Daily index path chart"
    />
  )
}

function PerformanceChart() {
  return (
    <img
      className="chart-img"
      src="/interactive-media/chart_2_weekly_performance.svg"
      alt="Weekly performance chart"
    />
  )
}

export default function InteractiveMedia() {
  return (
    <div className="numbers-report">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=PT+Mono&display=swap');
        .numbers-report {
          --navy: #1a3a6e;
          --navy-deep: #0f2a5e;
          --navy-pale: #e8eef8;
          --navy-soft: #f4f7fb;
          --ink: #1f2a44;
          --slate: #5b6b82;
          --slate-light: #98a4b8;
          --rule: #dde3ec;
          --positive: #1f7a4a;
          --negative: #b1373a;
          --gold: var(--navy);
          --serif: 'Fraunces', 'Times New Roman', serif;
          --sans: 'IBM Plex Sans', system-ui, sans-serif;
          --mono: 'IBM Plex Mono', Menlo, monospace;
          min-height: 100vh;
          padding: 128px 0 32px;
          background: #f5f4f0;
          color: var(--ink);
          font-family: var(--sans);
          font-size: 13px;
          line-height: 1.5;
        }
        .numbers-report * { box-sizing: border-box; }
        .report-back-wrap {
          width: min(8.5in, calc(100vw - 28px));
          margin: 0 auto 16px;
        }
        .page {
          width: min(8.5in, calc(100vw - 28px));
          min-height: 11in;
          margin: 24px auto;
          padding: 0.5in 0.6in;
          background: #fff;
          box-shadow: 0 4px 22px rgba(15,42,94,.10);
          break-after: page;
        }
        .masthead { padding-bottom: 14px; margin-bottom: 14px; border-bottom: 1px solid var(--rule); }
        .brand-lockup { display: block; width: 280px; max-width: 100%; height: auto; }
        .nameplate { display: flex; justify-content: space-between; gap: 24px; align-items: center; margin-bottom: 22px; }
        .nameplate-title { font-family: var(--serif); font-style: normal; font-size: 42px; color: var(--navy); line-height: 1; }
        .nameplate-title span { color: var(--gold); font-weight: 700; }
        .nameplate-meta { text-align: right; text-transform: uppercase; color: var(--navy); font-size: 10px; font-weight: 700; letter-spacing: .22em; }
        .nameplate-meta p { margin: 4px 0 0; text-transform: none; letter-spacing: 0; color: var(--slate); font: italic 14px var(--serif); }
        .section-head, .chart-title, .dash-tag {
          font-weight: 700; font-size: 10px; letter-spacing: .24em; text-transform: uppercase; color: var(--navy);
        }
        .section-head { border-bottom: 1.5px solid var(--navy); padding-bottom: 5px; margin: 0 0 14px; }
        .summary { width: 100%; border-collapse: collapse; margin-bottom: 6px; table-layout: fixed; font-size: 12px; }
        .summary th { background: var(--navy); color: #fff; text-align: left; padding: 9px 10px; font-size: 9px; letter-spacing: .1em; text-transform: uppercase; }
        .summary th:not(:first-child), .summary td:not(:first-child) { text-align: right; }
        .summary td { padding: 9px 10px; border-bottom: 1px solid var(--rule); font-variant-numeric: tabular-nums; }
        .summary td:first-child { color: var(--navy); font-weight: 700; }
        .summary tr:last-child td { border-bottom: 2px solid var(--navy); }
        .pos { color: var(--positive); font-weight: 700; }
        .neg { color: var(--negative); font-weight: 700; }
        .footnote, .chart-sub, .chart-source { color: var(--slate); font: italic 10.5px var(--serif); }
        .footnote { margin: 4px 0 18px; }
        .items { display: grid; gap: 10px; }
        .item h3 { margin: 0 0 3px; color: var(--navy); font-size: 10.5px; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; }
        .item h3 span { display: inline-block; min-width: 24px; margin-right: 4px; color: var(--gold); font: 400 12px 'PT Mono', var(--mono); letter-spacing: 0; }
        .item p { margin: 0; font-size: 12px; line-height: 1.5; }
        .summary-block { margin-top: 14px; padding: 14px 18px 14px 16px; background: var(--navy-soft); border-left: 3px solid var(--navy); }
        .summary-block h2 { margin: 0 0 6px; color: var(--navy); font-size: 10px; letter-spacing: .24em; text-transform: uppercase; }
        .summary-block p { margin: 0 0 6px; font-size: 12px; }
        .footer-rule { margin-top: 14px; padding-top: 6px; border-top: 2px solid var(--navy); display: flex; justify-content: space-between; gap: 16px; color: var(--slate); font-size: 9px; letter-spacing: .12em; text-transform: uppercase; }
        .dash-header { display: grid; grid-template-columns: 280px 1fr; gap: 30px; margin-bottom: 24px; align-items: flex-start; }
        .dash-title-block { padding-top: 8px; }
        .dash-headline { margin: 0; color: var(--navy); font: 500 56px/1.08 var(--serif); letter-spacing: -.02em; }
        .dash-headline span { border-bottom: 2px solid var(--navy); }
        .dash-week { margin-top: 14px; color: var(--navy); font-weight: 700; font-size: 14px; }
        .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-block: 1px solid var(--rule); margin-bottom: 20px; }
        .stat-card { padding: 16px 18px; border-right: 1px solid var(--rule); }
        .stat-card:last-child { border-right: 0; }
        .stat-label { color: var(--slate); font-size: 9px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; white-space: nowrap; }
        .stat-value, .macro-value, .callout-big { color: var(--navy); font: 600 28px/1 var(--serif); font-variant-numeric: tabular-nums; }
        .stat-value { font-family: 'PT Mono', var(--mono); font-weight: 400; }
        .macro-value, .callout-big { font-family: 'PT Mono', var(--mono); font-weight: 400; }
        .stat-meta { margin-top: 7px; display: flex; gap: 8px; color: var(--slate); font: 10.5px var(--mono); }
        .dash-date { text-align: right; color: var(--slate); font: italic 11px var(--serif); margin: -10px 0 14px; }
        .chart-block { margin-bottom: 22px; }
        .chart-img { display: block; width: 100%; height: auto; }
        .chart-title { border-bottom: 1px solid var(--rule); padding-bottom: 5px; margin-bottom: 4px; }
        .chart-legend { display: flex; justify-content: center; gap: 18px; color: var(--slate); font-size: 10px; margin-top: 4px; }
        .chart-source { text-align: right; margin-top: 2px; }
        .macro-grid { display: grid; grid-template-columns: repeat(4, 1fr); background: var(--navy-pale); margin-bottom: 22px; }
        .macro-card { padding: 18px 16px; border-right: 1px solid #c8d5ec; border-bottom: 1px solid #c8d5ec; }
        .macro-card:nth-child(4n) { border-right: 0; }
        .macro-value { margin-bottom: 8px; }
        .macro-label { color: var(--navy); font-size: 9px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; margin-bottom: 4px; }
        .macro-note { color: var(--slate); font-size: 10.5px; line-height: 1.45; }
        .callout-row { display: grid; grid-template-columns: 2fr 1fr; gap: 16px; margin-bottom: 18px; }
        .callout-block { background: var(--navy-pale); padding: 22px 20px; text-align: center; display: grid; align-content: center; }
        .callout-big { font-size: 46px; margin-bottom: 4px; }
        .callout-tag { color: var(--navy); font-size: 9px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; margin-bottom: 10px; }
        .callout-note { color: var(--slate); font-size: 10.5px; }
        .timeline-row { display: grid; grid-template-columns: 80px 1fr 150px; gap: 20px; padding: 14px 0; border-bottom: 1px solid var(--rule); }
        .day-dow { color: var(--slate); font-size: 9.5px; letter-spacing: .22em; text-transform: uppercase; }
        .day-date { color: var(--navy); font: 500 22px var(--serif); }
        .event { padding: 4px 0; border-bottom: 1px dotted var(--rule); font-size: 11.5px; }
        .day-closes { color: var(--slate); text-align: right; font: 10.5px/1.7 var(--mono); white-space: pre; }
        .disclosures { margin-top: 24px; padding: 14px 18px; background: var(--navy-pale); border-left: 3px solid var(--navy); }
        @media (max-width: 760px) {
          .numbers-report { padding-top: 108px; }
          .report-back-wrap { padding: 0 20px; }
          .page { padding: 28px 20px; min-height: auto; }
          .nameplate, .dash-header, .callout-row { grid-template-columns: 1fr; display: grid; }
          .nameplate-meta { text-align: left; }
          .stat-grid, .macro-grid { grid-template-columns: 1fr 1fr; }
          .timeline-row { grid-template-columns: 1fr; }
          .day-closes { text-align: left; }
          .dash-headline { font-size: 42px; }
        }
        @media print {
          .numbers-report { padding: 0; background: white; }
          .report-back-wrap { display: none; }
          .page { width: 8.5in; margin: 0; box-shadow: none; }
        }
      `}</style>

      <div className="report-back-wrap">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-[#595959] hover:text-[#1a1a1a] transition-colors"
          aria-label="Back to work"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Work
        </Link>
      </div>

      <section className="page">
        <Masthead />
        <Nameplate />
        <SectionHead>Index Summary</SectionHead>
        <table className="summary">
          <thead>
            <tr>
              <th>Index / Instrument</th>
              <th>Prior Friday Close</th>
              <th>Current Friday Close</th>
              <th>Weekly Change</th>
              <th>Weekly Return</th>
            </tr>
          </thead>
          <tbody>
            {summaryRows.map(([name, prior, current, change, ret, tone]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{prior}</td>
                <td>{current}</td>
                <td className={tone}>{change}</td>
                <td className={ret === '—' ? undefined : tone}>{ret}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="footnote">Friday close to Friday close methodology. Point and percentage changes are price-only and do not reflect dividends or total return.</div>
        <SectionHead>Highlights of the Week</SectionHead>
        <Highlights start={1} end={7} />
        <Footer page="1" />
      </section>

      <section className="page">
        <Masthead />
        <Nameplate />
        <SectionHead>Highlights of the Week — continued</SectionHead>
        <Highlights start={8} end={15} />
        <div className="summary-block">
          <h2>Summary</h2>
          <p>For the Friday-to-Friday period ending May 8, 2026, U.S. equity benchmarks recorded a sixth consecutive weekly advance, with the Nasdaq Composite gaining 4.51%, the S&P 500 gaining 2.33%, and the Dow Jones Industrial Average gaining 0.22%.</p>
          <p>Labor market data were broadly stable. The April employment report showed nonfarm payrolls rising 115,000 with the unemployment rate held at 4.3%, while initial jobless claims totaled 200,000 for the week ended May 2.</p>
          <p>Activity surveys and productivity data were mixed, crude oil posted weekly declines, and strong corporate results from AMD, Disney, and McDonald's contributed to broad equity strength.</p>
        </div>
        <Footer page="2" />
      </section>

      <section className="page">
        <div className="dash-header">
          <BrandLockup />
          <div className="dash-title-block">
            <div className="dash-tag">The Numbers · Companion Dashboard</div>
            <h1 className="dash-headline"><span>Markets Review</span></h1>
            <h2 className="dash-headline">At-a-Glance</h2>
            <div className="dash-week">Week of May 4 - May 8, 2026</div>
          </div>
        </div>
        <div className="stat-grid">
          {summaryRows.slice(0, 4).map(([name, , current, change, ret, tone]) => (
            <div className="stat-card" key={name}>
              <div className="stat-label">{name.replace('Dow Jones Industrial Avg.', 'Dow Jones Ind.')}</div>
              <div className="stat-value">{current}</div>
              <div className="stat-meta"><span className={tone}>{ret === '—' ? change : ret}</span><span>{ret === '—' ? 'from 4.378%' : change.replace(' pts', '')}</span></div>
            </div>
          ))}
        </div>
        <div className="dash-date">Friday May 8, 2026</div>
        <div className="chart-block">
          <MarketPathChart />
        </div>
        <div className="chart-block">
          <PerformanceChart />
        </div>
        <Footer page="3" label="The Numbers · Companion Dashboard" />
      </section>

      <section className="page">
        <Masthead />
        <SectionHead>By the Numbers · Macro & Policy</SectionHead>
        <div className="chart-sub" style={{ margin: '-8px 0 18px' }}>Key economic and policy data points reported during the week.</div>
        <div className="macro-grid">
          {macroCards.map(([value, label, note]) => (
            <div className="macro-card" key={label}>
              <div className="macro-value">{value}</div>
              <div className="macro-label">{label}</div>
              <div className="macro-note">{note}</div>
            </div>
          ))}
        </div>
        <div className="callout-row">
          <div>
            <img
              className="chart-img"
              src="/interactive-media/chart_3_memory_semiconductors.svg"
              alt="Memory semiconductor market capitalization chart"
            />
          </div>
          <div className="callout-block">
            <div className="callout-tag">Sixth Consecutive Week</div>
            <div className="callout-big">+4.51%</div>
            <div className="macro-label">Nasdaq Composite · Weekly</div>
            <div className="callout-note">Both the S&P 500 and Nasdaq Composite recorded a sixth consecutive week of gains, with the Nasdaq closing above 26,000.</div>
          </div>
        </div>
        <Footer page="4" label="By the Numbers · Macro & Policy" />
      </section>

      <section className="page">
        <Masthead />
        <SectionHead>Week at a Glance</SectionHead>
        <div className="chart-sub" style={{ margin: '-8px 0 18px' }}>Daily index closes and the events that shaped them.</div>
        {timeline.map(([dow, date, events, closes]) => (
          <div className="timeline-row" key={date}>
            <div>
              <div className="day-dow">{dow}</div>
              <div className="day-date">{date}</div>
            </div>
            <div>
              {events.map((event) => <div className="event" key={event}>{event}</div>)}
            </div>
            <div className="day-closes">{closes.join('\n')}</div>
          </div>
        ))}
        <div className="disclosures">
          <div className="macro-label">Disclosures</div>
          <div className="footnote">
            This material is for informational purposes only and does not constitute investment advice or a recommendation to buy or sell any security. Index returns are price-only and do not include the reinvestment of dividends. Past performance is not indicative of future results.
          </div>
        </div>
        <Footer page="5" />
      </section>
    </div>
  )
}

---
title: "Tobias Wolf"
description: "Condensed matter physicist exploring complex quantum materials."
---

<section class="hero">
  <div class="container">
    <svg class="icon-lattice" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.5" />
          <stop offset="100%" stop-color="var(--text)" stop-opacity="0.2" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#gridGradient)" stroke-width="1">
        <path d="M0 40h200M0 80h200M0 120h200M0 160h200" />
        <path d="M40 0v200M80 0v200M120 0v200M160 0v200" />
        <path d="M0 0l200 200M0 200L200 0" stroke-opacity="0.3" />
      </g>
    </svg>
    <div class="hero-grid">
      <div class="hero-body">
        <p class="kicker">Condensed matter physicist</p>
        <h1>Tobias Wolf</h1>
        <p class="lead">I study emergent phenomena in complex quantum materials, combining theory and computation to explain correlated electron phases, moiré-engineered band structures, and the signatures that experiments can measure.</p>
        <div class="hero-meta">
          <span class="icon-text">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5Z"/></svg>
            <span>{{ site.author.role }}</span>
          </span>
          <span class="icon-text">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"/></svg>
            <span>{{ site.author.location }}</span>
          </span>
        </div>
        <div class="actions">
          <a class="btn primary" href="{{ '/files/CV_Web_WolfTobias_Nov4_2024.pdf' | relative_url }}">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 20h14v-2H5v2zm7-16-5 5h3v6h4V9h3l-5-5z"/></svg>
            Download CV
          </a>
          <a class="btn ghost" href="{{ site.author.scholar_url }}" target="_blank" rel="noopener">
            <img class="icon icon-brand" src="{{ '/assets/icons/googlescholar.svg' | relative_url }}" alt="Google Scholar">
            Google Scholar
          </a>
          <a class="btn ghost" href="{{ site.author.github }}" target="_blank" rel="noopener">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.34-1.77c-1.1-.75.09-.74.09-.74a2.54 2.54 0 0 1 1.85 1.25 2.58 2.58 0 0 0 3.5 1 2.57 2.57 0 0 1 .77-1.62c-2.67-.3-5.47-1.34-5.47-5.95a4.65 4.65 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.18 4.65 4.65 0 0 1 1.24 3.22c0 4.62-2.8 5.64-5.48 5.94a2.9 2.9 0 0 1 .83 2.24v3.32c0 .33.21.7.82.58A12 12 0 0 0 12 .5Z"/></svg>
            GitHub
          </a>
          {% if site.author.orcid %}
          <a class="btn ghost" href="{{ site.author.orcid }}" target="_blank" rel="noopener">
            <img class="icon icon-brand" src="{{ '/assets/icons/orcid.svg' | relative_url }}" alt="ORCID">
            ORCID
          </a>
          {% endif %}
          {% if site.author.researchgate %}
          <a class="btn ghost" href="{{ site.author.researchgate }}" target="_blank" rel="noopener">
            <img class="icon icon-brand" src="{{ '/assets/icons/researchgate.svg' | relative_url }}" alt="ResearchGate">
            ResearchGate
          </a>
          {% endif %}
          {% if site.author.arxiv %}
          <a class="btn ghost" href="{{ site.author.arxiv }}" target="_blank" rel="noopener">
            <img class="icon icon-brand" src="{{ '/assets/icons/arxiv.svg' | relative_url }}" alt="arXiv">
            arXiv
          </a>
          {% endif %}
        </div>
      </div>
    </div>
  </div>
</section>


<section class="sections container">
  <article class="info-card">
    <h2 class="section-heading">
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2 1 7l11 5 9-4.09V17h2V7Zm0 13L6 12.2V17l6 3 6-3v-4.8Z"/></svg>
      Research focus
    </h2>
    <p>My work looks at how interaction, topology, and symmetry intertwine in moiré heterostructures and other low-dimensional systems. I build effective continuum descriptions, develop numerical pipelines, and collaborate closely with experimental groups to interpret spectroscopy and transport data.</p>
    <div class="highlights">
      <div class="highlight-item">
        <span class="highlight-icon">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-7a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"/></svg>
        </span>
        <div class="highlight-body">
          <strong>Moiré quantum matter</strong>
          <p>Twist-engineered graphene multilayers and transition metal dichalcogenides, exploring flat bands, valley polarization, and interaction-driven magnetism.</p>
        </div>
      </div>
      <div class="highlight-item">
        <span class="highlight-icon">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 3h2v9a2 2 0 0 0 4 0V3h2v9a4 4 0 0 1-8 0Z"/></svg>
        </span>
        <div class="highlight-body">
          <strong>Correlated phases</strong>
          <p>Competition between metallic magnetism, superconductivity, and intervalley coherence near Van Hove singularities in rhombohedral multilayer graphene.</p>
        </div>
      </div>
      <div class="highlight-item">
        <span class="highlight-icon">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 12c3-4 6-4 9 0s6 4 9 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </span>
        <div class="highlight-body">
          <strong>Observable signatures</strong>
          <p>Predicting spectroscopy, local density of states, and optical responses that differentiate candidate ground states in two-dimensional materials.</p>
        </div>
      </div>
      <div class="highlight-item">
        <span class="highlight-icon">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 10.59 3.3 3.3-1.41 1.41L12 14.41l-2.89 2.89-1.41-1.41 3.3-3.3-3.3-3.3 1.41-1.41L12 10.59l2.89-2.89 1.41 1.41Z"/></svg>
        </span>
        <div class="highlight-body">
          <strong>Many-body quantum theory</strong>
          <p>Developing analytical approaches and scalable computational methods to capture collective behavior, correlation energy, and emergent quasiparticles in interacting materials.</p>
        </div>
      </div>
    </div>
  </article>

  <article class="info-card">
    <h2 class="section-heading">
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 11h3l-4 5-4-5h3V6h2Z"/></svg>
      Current priorities
    </h2>
    <div class="summary-grid">
      <p class="icon-text">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3a1 1 0 0 1 1 1v2.07a6 6 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z"/></svg>
        <span><strong>Collective modes and correlation energy:</strong> mapping plasmons and excitations in rhombohedral graphene to understand stability of ordered states.</span>
      </p>
      <p class="icon-text">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 4h2l1 4h6l1-4h2l-1.5 6H7.5ZM9 13h6v8H9Z"/></svg>
        <span><strong>Magnetism in moiré systems:</strong> refining models that capture how symmetry breaking and strain steer metallic magnetism.</span>
      </p>
      <p class="icon-text">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5h16v2H4Zm2 4h12v2H6Zm-2 4h10v2H4Zm6 4h12v2H10Z"/></svg>
        <span><strong>Numerics to experiment loop:</strong> translating continuum calculations into predictions that guide STM and transport measurements.</span>
      </p>
    </div>
  </article>

  <article class="info-card">
    <h2 class="section-heading">
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 4h18v2H3Zm0 7h18v2H3Zm0 7h18v2H3Z"/></svg>
      Key resources
    </h2>
    <div class="features">
      <div class="card">
        <h3>
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"/></svg>
          About
        </h3>
        <p>Extended bio, background, and research statement.</p>
        <a class="btn ghost small" href="{{ '/about/' | relative_url }}">Read the overview</a>
      </div>
      <div class="card">
        <h3>
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 3h14v2H5Zm0 5h14v13H5Zm4 4v2h6v-2Z"/></svg>
          Publications
        </h3>
        <p>Peer-reviewed papers and preprints sorted by recency.</p>
        <a class="btn ghost small" href="{{ site.author.scholar_url }}" target="_blank" rel="noopener">View on Scholar</a>
      </div>
      <div class="card">
        <h3>
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 2h10v2H7Zm10 3H7a2 2 0 0 0-2 2v13l5-2 5 2 5-2V7a2 2 0 0 0-2-2Zm0 13.28-3 1.2-5-2-5 2V7h13Z"/></svg>
          Curriculum vitae
        </h3>
        <p>Complete academic CV including publications, teaching, and service.</p>
        <a class="btn ghost small" href="{{ '/files/CV_Web_WolfTobias_Nov4_2024.pdf' | relative_url }}">Download PDF</a>
      </div>
    </div>
  </article>


</section>

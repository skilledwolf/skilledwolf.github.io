---
title: "Tobias Wolf"
description: "Condensed matter physicist exploring complex quantum materials."
---

<section class="hero">
  <div class="container hero-shell">
    <div class="hero-grid">
      <div class="hero-body">
        <p class="kicker">Condensed matter physicist</p>
        <h1>Tobias Wolf</h1>
        <p class="lead">I study emergent phenomena in quantum materials, using theory and computation to explain correlated electron phases, moir&eacute;-engineered band structures, and the signatures that experiments can measure.</p>
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
        <div class="hero-signals" aria-label="Research themes">
          <span class="signal-pill">Moir&eacute; quantum matter</span>
          <span class="signal-pill">Correlated phases</span>
          <span class="signal-pill">Theory + computation</span>
        </div>
        <div class="actions">
          <a class="btn primary" href="{{ '/files/CV_Web_WolfTobias_Nov4_2024.pdf' | relative_url }}">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 20h14v-2H5v2zm7-16-5 5h3v6h4V9h3l-5-5z"/></svg>
            Download CV
          </a>
          <a class="btn ghost" href="{{ '/about/' | relative_url }}">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5h16v2H4Zm0 6h16v2H4Zm0 6h10v2H4Z"/></svg>
            Research overview
          </a>
        </div>
        <div class="profile-links" aria-label="Academic profiles">
          <span class="profile-links__label">Profiles</span>
          <a class="profile-link" href="{{ site.author.scholar_url }}" target="_blank" rel="noopener">Google Scholar</a>
          <a class="profile-link" href="{{ site.author.github }}" target="_blank" rel="noopener">GitHub</a>
          {% if site.author.orcid %}
          <a class="profile-link" href="{{ site.author.orcid }}" target="_blank" rel="noopener">ORCID</a>
          {% endif %}
          {% if site.author.researchgate %}
          <a class="profile-link" href="{{ site.author.researchgate }}" target="_blank" rel="noopener">ResearchGate</a>
          {% endif %}
          {% if site.author.arxiv %}
          <a class="profile-link" href="{{ site.author.arxiv }}" target="_blank" rel="noopener">arXiv</a>
          {% endif %}
        </div>
      </div>
      <aside class="hero-visual" aria-label="Research snapshot">
        <div class="hero-portrait">
          <img src="{{ '/images/profile.jpeg' | relative_url }}" alt="Portrait of Tobias Wolf" loading="eager">
          <div class="hero-badge">
            <span class="hero-badge__marker" aria-hidden="true"></span>
            <div>
              <span class="hero-badge__label">Research snapshot</span>
              <strong>Moir&eacute; systems, correlated phases, and experimentally testable theory.</strong>
            </div>
          </div>
        </div>
        <div class="hero-panel">
          <div class="hero-panel__item">
            <span class="hero-panel__label">Current themes</span>
            <p>Rhombohedral graphene, metallic magnetism, intervalley coherence, and collective excitations.</p>
          </div>
          <div class="hero-panel__item">
            <span class="hero-panel__label">Working style</span>
            <p>Analytical modeling, numerical pipelines, and close feedback with spectroscopy and transport experiments.</p>
          </div>
        </div>
      </aside>
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
          <img src="{{ '/assets/icons/moire-badge.png' | relative_url }}" alt="Moiré quantum matter" class="icon">
        </span>
        <div class="highlight-body">
          <strong>Moiré quantum matter</strong>
          <p>Twist-engineered graphene multilayers and transition metal dichalcogenides, exploring flat bands, valley polarization, and interaction-driven magnetism.</p>
        </div>
      </div>
      <div class="highlight-item">
        <span class="highlight-icon">
          <img src="{{ '/assets/icons/correlated-badge.png' | relative_url }}" alt="Correlated phases" class="icon">
        </span>
        <div class="highlight-body">
          <strong>Correlated phases</strong>
          <p>Competition between metallic magnetism, superconductivity, and intervalley coherence near Van Hove singularities in rhombohedral multilayer graphene.</p>
        </div>
      </div>
      <div class="highlight-item">
        <span class="highlight-icon">
          <img src="{{ '/assets/icons/signatures-badge.png' | relative_url }}" alt="Observable signatures" class="icon">
        </span>
        <div class="highlight-body">
          <strong>Observable signatures</strong>
          <p>Predicting spectroscopy, local density of states, and optical responses that differentiate candidate ground states in two-dimensional materials.</p>
        </div>
      </div>
      <div class="highlight-item">
        <span class="highlight-icon">
          <img src="{{ '/assets/icons/manybody-badge.png' | relative_url }}" alt="Many-body quantum theory" class="icon">
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
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 4h8v2H8Zm-3 4h14v10H5Zm3 3v4h8v-4Z"/></svg>
          Software
        </h3>
        <p>Published research packages with source repositories and documentation.</p>
        <a class="btn ghost small" href="{{ '/software/' | relative_url }}">Browse packages</a>
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

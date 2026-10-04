import { GLOBAL_MARKETS } from './data.js';

export function initMap() {
  const cardsContainer = document.getElementById('map-corridor-cards');
  const svgMapContainer = document.getElementById('svg-world-map');

  if (svgMapContainer) {
    // Elegant SVG World Map representation with connection arcs from India (Panipat)
    svgMapContainer.innerHTML = `
      <svg class="svg-map-svg" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1000" height="500" fill="#FAF8F5" rx="8"/>
        
        <!-- Simplified World Landmass outlines for editorial minimalism -->
        <g fill="#EAE3D8" stroke="#DFD7CB" stroke-width="0.75" opacity="0.85">
          <!-- North America -->
          <path d="M120 70 L260 70 L300 120 L270 170 L210 210 L150 170 L110 110 Z" />
          <path d="M170 210 L230 260 L200 300 L160 250 Z" />
          
          <!-- South America -->
          <path d="M250 310 L340 330 L360 410 L290 480 L260 420 L230 350 Z" />
          
          <!-- Europe & UK -->
          <path d="M460 80 L560 70 L580 140 L520 180 L460 170 L440 120 Z" />
          
          <!-- Africa -->
          <path d="M470 190 L580 190 L610 290 L560 420 L500 420 L450 300 L440 220 Z" />
          
          <!-- Asia / India -->
          <path d="M580 80 L800 80 L880 170 L790 270 L680 270 L630 230 L580 150 Z" />
          <!-- Indian Subcontinent Highlight -->
          <path d="M660 190 L710 190 L690 280 L650 240 Z" fill="#D8C8B5" stroke="#A45938" stroke-width="1.5" />
          
          <!-- Australia -->
          <path d="M780 320 L910 320 L930 400 L860 430 L780 390 Z" />
        </g>

        <!-- Shipping Connection Arcs from Panipat, India (x: 675, y: 220) -->
        <g stroke="#A45938" stroke-width="1.75" stroke-dasharray="4 4" opacity="0.65">
          <!-- Route to Australia (Melbourne/Sydney: x: 860, y: 380) -->
          <path d="M675 220 Q780 290 860 380" />
          
          <!-- Route to USA East/West (x: 220, y: 150) -->
          <path d="M675 220 Q440 120 220 150" />
          
          <!-- Route to Canada (x: 200, y: 95) -->
          <path d="M675 220 Q430 90 200 95" />
          
          <!-- Route to Europe (Rotterdam/Hamburg: x: 500, y: 125) -->
          <path d="M675 220 Q580 160 500 125" />
          
          <!-- Route to South Africa (Durban/Cape Town: x: 540, y: 390) -->
          <path d="M675 220 Q620 310 540 390" />
          
          <!-- Route to Brazil (Santos: x: 320, y: 380) -->
          <path d="M675 220 Q480 340 320 380" />
        </g>

        <!-- Market Destination Pins -->
        <!-- Origin: Panipat, India -->
        <g class="map-pin" transform="translate(675, 220)">
          <circle r="9" fill="#A45938" opacity="0.3"/>
          <circle r="5" fill="#A45938"/>
          <circle r="2" fill="#FFFFFF"/>
          <text x="12" y="4" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#1A1918">
            PANIPAT (HQ & Manufacturing)
          </text>
        </g>

        <!-- Australia -->
        <g class="map-pin-target" data-code="AU" transform="translate(860, 380)" style="cursor: pointer;">
          <circle r="8" fill="#56614C" opacity="0.3"/>
          <circle r="4.5" fill="#56614C"/>
          <text x="10" y="4" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1A1918">AUSTRALIA (Since 2012)</text>
        </g>

        <!-- USA -->
        <g class="map-pin-target" data-code="US" transform="translate(220, 150)" style="cursor: pointer;">
          <circle r="8" fill="#56614C" opacity="0.3"/>
          <circle r="4.5" fill="#56614C"/>
          <text x="10" y="4" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1A1918">UNITED STATES</text>
        </g>

        <!-- Canada -->
        <g class="map-pin-target" data-code="CA" transform="translate(200, 95)" style="cursor: pointer;">
          <circle r="8" fill="#56614C" opacity="0.3"/>
          <circle r="4.5" fill="#56614C"/>
          <text x="10" y="4" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1A1918">CANADA</text>
        </g>

        <!-- Europe -->
        <g class="map-pin-target" data-code="EU" transform="translate(500, 125)" style="cursor: pointer;">
          <circle r="8" fill="#56614C" opacity="0.3"/>
          <circle r="4.5" fill="#56614C"/>
          <text x="10" y="4" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1A1918">EUROPE (DOMOTEX Network)</text>
        </g>

        <!-- South Africa -->
        <g class="map-pin-target" data-code="ZA" transform="translate(540, 390)" style="cursor: pointer;">
          <circle r="8" fill="#56614C" opacity="0.3"/>
          <circle r="4.5" fill="#56614C"/>
          <text x="10" y="4" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1A1918">SOUTH AFRICA</text>
        </g>

        <!-- Brazil -->
        <g class="map-pin-target" data-code="BR" transform="translate(320, 380)" style="cursor: pointer;">
          <circle r="8" fill="#56614C" opacity="0.3"/>
          <circle r="4.5" fill="#56614C"/>
          <text x="10" y="4" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1A1918">BRAZIL</text>
        </g>
      </svg>
    `;
  }

  // Render Corridor Cards
  if (cardsContainer) {
    cardsContainer.innerHTML = GLOBAL_MARKETS.map(m => `
      <div class="corridor-card" data-code="${m.code}">
        <div class="corridor-header">
          <h4 class="corridor-country">${m.name}</h4>
          <span class="corridor-badge ${m.code === 'AU' ? 'corridor-badge-highlight' : ''}">${m.badge}</span>
        </div>
        <div class="corridor-milestone">${m.milestone}</div>
        <div class="corridor-details">
          <div class="corridor-info-row">
            <span class="corridor-label">Entry Ports</span>
            <span class="corridor-val">${m.ports.join(', ')}</span>
          </div>
          <div class="corridor-info-row">
            <span class="corridor-label">Core Demand</span>
            <span class="corridor-val">${m.focus}</span>
          </div>
        </div>
        <div class="corridor-leadtime">
          <span class="leadtime-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Ocean Transit
          </span>
          <span class="leadtime-val">${m.leadTimeFCL}</span>
        </div>
      </div>
    `).join('');

    // Card hover and click behavior synchronising with SVG pins
    cardsContainer.querySelectorAll('.corridor-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        const code = card.dataset.code;
        highlightMapTarget(code);
      });
      card.addEventListener('click', () => {
        cardsContainer.querySelectorAll('.corridor-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const code = card.dataset.code;
        highlightMapTarget(code);
      });
    });

    if (svgMapContainer) {
      svgMapContainer.querySelectorAll('.map-pin-target').forEach(pin => {
        pin.addEventListener('click', () => {
          const code = pin.dataset.code;
          const targetCard = cardsContainer.querySelector(`.corridor-card[data-code="${code}"]`);
          if (targetCard) {
            cardsContainer.querySelectorAll('.corridor-card').forEach(c => c.classList.remove('active'));
            targetCard.classList.add('active');
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            highlightMapTarget(code);
          }
        });
      });
    }
  }

  function highlightMapTarget(code) {
    if (!svgMapContainer) return;
    svgMapContainer.querySelectorAll('.map-pin-target').forEach(pin => {
      const match = pin.dataset.code === code;
      const circ = pin.querySelector('circle:nth-child(2)');
      if (circ) {
        circ.setAttribute('fill', match ? '#A45938' : '#56614C');
        circ.setAttribute('r', match ? '7' : '4.5');
      }
    });
  }
}

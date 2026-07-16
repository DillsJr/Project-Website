/**
 * PERSONAL PORTFOLIO - MAIN.JS
 * Fitur: Particles, Custom Cursor, Aurora, Music Player, Contact Form
 * Mudah dimodifikasi - Edit bagian CONFIG di bawah untuk customize data
 */

// ===== CONFIG - EDIT BAGIAN INI UNTUK CUSTOMIZE =====
const CONFIG = {
  theme: localStorage.getItem('theme') || 'dark',
  projects: [
    {
      title: 'Project 1: Modern Website',
      category: 'web',
      description: 'Website responsif dengan animasi',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Project 2: Mobile App',
      category: 'app',
      description: 'Aplikasi iOS dengan React Native',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/proyek/azamat-e-eb1cgnNIazI-unsplash.jpg'
    },
    {
      title: 'Project 3: Design System',
      category: 'design',
      description: 'Component library untuk tim design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Project 4: Dashboard',
      category: 'web',
      description: 'Analytics dashboard real-time',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/proyek/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg'
    }
  ],
  playlist: [
    { title: 'Song 1', artist: 'Artist A' },
    { title: 'Song 2', artist: 'Artist B' },
    { title: 'Song 3', artist: 'Artist C' }
  ],
  certifications: [
    {
      title: 'Junior Web Programmer',
      issuer: 'Lembaga Sertifikasi Profesi (LSP)',
      date: 'Oktober 2023',
      description: 'Sertifikasi menyelesaikan kursus complete software development',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/certificates/Junior%20Web%20Programming%20(%202023%20).jpg'
    },
    {
      title: 'Developer Administrator',
      issuer: 'Lembaga Sertifikasi Profesi (LSP)',
      date: 'Oktober 2023',
      description: 'Sertifikasi menyelesaikan kursus complete software development',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/certificates/Database%20Administrator%20(%202023%20).jpg'
    },
    {
      title: 'Tenaga Operator Komputer',
      issuer: 'Lembaga Sertifikasi Profesi (LSP)',
      date: 'Oktober 2022',
      description: 'Sertifikasi menyelesaikan kursus complete operator komputer',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/certificates/Operator%20Komputer%20(%202023%20).jpg'
    },
    {
      title: 'BUMN Startup Day',
      issuer: 'BUMN',
      date: 'September 2022',
      description: 'Pengetahuan tentang startup dan inovasi di BUMN',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/certificates/E-certificate%20BUMN%20Startup%20Day.jpg'
    },
    {
      title: 'Literasi Digital',
      issuer: 'KOMINFO',
      date: 'Agustus 2022',
      description: 'Etika produksi dan distribusi informasi digital',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/certificates/E-Certificate%20Kominfo_page-0001.jpg'
    }
  ],
  gallery: [
    {
      title: 'Critical Mash',
      category: 'olahraga',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/hobbies/olahraga/Pc%20(6).jpg',
    },
    {
      title: 'Night Loop',
      category: 'olahraga',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/hobbies/olahraga/IMG_20251015_223553_441.webp',
    },
    {
      title: 'Fireman Action',
      category: 'traveling',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/hobbies/travelling/IMG_20220430_202727_873.jpg',
    },
    {
      title: 'Street Style',
      category: 'traveling',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/hobbies/travelling/Gambar%20WhatsApp%202023-06-13%20pukul%2022.15.47.jpg',
    },
    {
      title: 'BadBoy Vibes',
      category: 'fotografi',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/hobbies/travelling/IMG_20220401_152044_134.webp',
    },
    {
      title: 'Tree Shadow',
      category: 'fotografi',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/hobbies/fotografi/IMG_20260101_182823_774.webp',
    },
    {
      title: 'Blackjack Vibes',
      category: 'fotografi',
      image: 'https://oexmykewzfujlyrbjkut.supabase.co/storage/v1/object/public/hobbies/fotografi/IMG_20260524_181633_551.webp',
    }
  ]
};
// ===== END CONFIG =====

// ===== HELPER: Convert Google Drive URL to viewable format =====
function convertGoogleDriveUrl(url) {
  if (!url.includes('drive.google.com')) return url;
  
  // Extract File ID from different Google Drive URL formats
  let fileId = null;
  
  if (url.includes('/file/d/')) {
    // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    fileId = url.split('/file/d/')[1].split('/')[0];
  } else if (url.includes('id=')) {
    // Format: https://drive.google.com/uc?id=FILE_ID
    fileId = url.split('id=')[1].split('&')[0];
  }
  
  if (fileId) {
    return `https://drive.google.com/uc?id=${fileId}&export=view`;
  }
  
  return url;
}

// Apply conversion to all certification images
CONFIG.certifications.forEach(cert => {
  cert.image = convertGoogleDriveUrl(cert.image);
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize
  initTheme();
  createParticles();
  initCustomCursor();
  initPreloader();
  initNavigation();
  initModalHandlers();
  loadProjects();
  loadCertifications();
  loadGallery();
  initMusicPlayer();
  initContactForm();
  initHeroTyping();
  initScrollProgress();
  initBackToTop();
  initSectionRevealAnimations();
  initScrollAnimations();
  initStats();
  initEmbedAnimations();
});

// ===== THEME TOGGLE =====
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  html.setAttribute('data-theme', CONFIG.theme);
  updateThemeIcon();
  
  if (toggle) {
    toggle.addEventListener('click', () => {
      const newTheme = CONFIG.theme === 'light' ? 'dark' : 'light';
      CONFIG.theme = newTheme;
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.textContent = CONFIG.theme === 'light' ? '☀️' : '🌙';
  }
}

function initHeroTyping() {
  const heroSub = document.getElementById('heroSub');
  if (!heroSub) return;

  const phrases = ['Developer', 'Creator', 'Designer', 'Illustrator', 'Fotografer'];
  let currentPhrase = 0;
  let direction = 1;
  let letterIndex = 0;

  function updateText() {
    const phrase = phrases[currentPhrase];
    heroSub.textContent = phrase.slice(0, letterIndex);
    if (direction === 1) {
      letterIndex++;
      if (letterIndex > phrase.length) {
        direction = -1;
        setTimeout(updateText, 1200);
        return;
      }
    } else {
      letterIndex--;
      if (letterIndex < 0) {
        direction = 1;
        currentPhrase = (currentPhrase + 1) % phrases.length;
      }
    }
    setTimeout(updateText, direction === 1 ? 90 : 40);
  }

  updateText();
}

function initScrollProgress() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  }, { passive: true });
}

function initBackToTop() {
  const button = document.getElementById('backToTop');
  if (!button) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 520) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  }, { passive: true });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== PARTICLES BACKGROUND =====
function createParticles() {
  const container = document.getElementById('particlesContainer');
  const particleCount = window.innerWidth > 768 ? 50 : 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `float ${3 + Math.random() * 7}s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(particle);
  }
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
  const cursor = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursorDot');
  
  if (!cursor || !cursorDot) return;
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  const interactiveSelectors = ['a', 'button', '.nav-toggle', '.filter-btn', '.hobby-filter-btn', '.project-card', '.gallery-item', '.certification-card', '.btn'];

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = mouseX - 3 + 'px';
    cursorDot.style.top = mouseY - 3 + 'px';
    cursorDot.style.opacity = '1';
    
    const hovered = interactiveSelectors.some(selector => e.target.closest(selector));
    if (hovered) {
      cursor.classList.add('hovered');
      cursorDot.classList.add('hovered');
    } else {
      cursor.classList.remove('hovered');
      cursorDot.classList.remove('hovered');
    }
  });
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    
    cursor.style.left = cursorX - 15 + 'px';
    cursor.style.top = cursorY - 15 + 'px';
    cursor.style.opacity = '1';
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  // Hide on leave
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorDot.style.opacity = '0';
  });
}

// ===== PRELOADER =====
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';
    }, 2500);
  }
}

// ===== NAVIGATION =====
function initNavigation() {
  const toggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  const navLinks = document.querySelectorAll('.nav-list a');
  
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });
}

// ===== PROJECTS LOADER =====
function loadProjects() {
  const grid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  if (!grid) return;
  
  function renderProjects(filter = 'all') {
    grid.innerHTML = '';
    CONFIG.projects
      .filter(p => filter === 'all' || p.category === filter)
      .forEach((project, idx) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = (idx * 0.1) + 's';
        card.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="project-img">
          <div class="project-content">
            <div class="project-tag">${project.category}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        `;
        grid.appendChild(card);
      });
  }
  
  renderProjects();
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

// ===== CERTIFICATIONS LOADER =====
function loadCertifications() {
  const grid = document.getElementById('certificationsGrid');
  
  if (!grid) return;
  
  CONFIG.certifications.forEach((cert, idx) => {
    const card = document.createElement('div');
    card.className = 'certification-card';
    card.style.animationDelay = (idx * 0.1) + 's';
    card.style.cursor = 'pointer';
    card.innerHTML = `
      <h3>${cert.title}</h3>
      <div class="certification-issuer">${cert.issuer}</div>
      <div class="certification-date">${cert.date}</div>
      <p>${cert.description}</p>
      <div class="cert-view-btn">Lihat Sertifikat</div>
    `;
    
    card.addEventListener('click', () => openCertModal(cert));
    grid.appendChild(card);
  });
}

// ===== MODAL HANDLING =====
function openCertModal(cert) {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('certModalImg');
  const modalTitle = document.getElementById('certModalTitle');
  const modalIssuer = document.getElementById('certModalIssuer');
  const modalDate = document.getElementById('certModalDate');
  const modalDesc = document.getElementById('certModalDesc');
  
  if (!modal) return;
  
  modalImg.src = cert.image;
  modalImg.alt = cert.title;
  modalTitle.textContent = cert.title;
  modalIssuer.textContent = cert.issuer;
  modalDate.textContent = cert.date;
  modalDesc.textContent = cert.description;
  
  modal.classList.add('active');
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  if (modal) modal.classList.remove('active');
}

// ===== GALLERY LOADER =====
function loadGallery() {
  const filterContainer = document.getElementById('hobbiesFilter');
  const gallery = document.getElementById('galleryGrid');
  
  if (!gallery || !filterContainer) return;
  
  const categories = ['semua', 'olahraga', 'traveling', 'fotografi'];
  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -120px 0px' });

  // Create filter buttons
  categories.forEach((cat, idx) => {
    const btn = document.createElement('button');
    btn.className = 'hobby-filter-btn' + (idx === 0 ? ' active' : '');
    btn.textContent = cat === 'semua' ? 'Semua' : cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.dataset.filter = cat;
    
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hobby-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(cat);
    });
    
    filterContainer.appendChild(btn);
  });
  
  function renderGallery(filter = 'semua') {
    gallery.innerHTML = '';
    CONFIG.gallery
      .filter(item => filter === 'semua' || item.category === filter)
      .forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.style.animationDelay = (idx * 0.05) + 's';
        div.innerHTML = `
          <div class="gallery-link">
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
              <span class="gallery-category">${item.category}</span>
              <h3 class="gallery-title">${item.title}</h3>
            </div>
          </div>
        `;

        gallery.appendChild(div);
        galleryObserver.observe(div);

        const section = gallery.closest('section');
        if (section && section.classList.contains('visible')) {
          div.classList.add('visible');
        }

        const image = div.querySelector('img');
        div.addEventListener('mousemove', (event) => {
          const rect = div.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          image.style.transform = `translate(${x * 18}px, ${y * 18}px) scale(1.08)`;
        });

        div.addEventListener('mouseleave', () => {
          image.style.transform = 'translate(0, 0) scale(1.05)';
        });
      });
  }
  
  renderGallery();
}

// ===== MUSIC PLAYER =====
function initMusicPlayer() {
  const playlistEl = document.getElementById('playlist');
  const playBtn = document.getElementById('playBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const loadSpotifyBtn = document.getElementById('loadSpotifyPlaylist');
  const audio = new Audio();
  const SPOTIFY_PLAYLIST_ID = '6fOXqkjyhLzXbAUqo2kULa'; // default playlist id (yours)

  if (!playlistEl) return;

  let tracks = [];
  let currentTrack = 0;

  function renderPlaylist() {
    playlistEl.innerHTML = '';
    tracks.forEach((t, idx) => {
      const item = document.createElement('div');
      item.className = 'playlist-item' + (idx === currentTrack ? ' active' : '');
      item.innerHTML = `<div class="playlist-title">${t.name}</div><div class="playlist-artist">${t.artists}</div>`;
      item.addEventListener('click', () => selectTrack(idx));
      playlistEl.appendChild(item);
    });
  }

  function selectTrack(idx) {
    currentTrack = idx;
    updatePlayer();
    renderPlaylist();
    if (tracks[idx].preview_url) {
      audio.src = tracks[idx].preview_url;
      audio.play();
    }
  }

  function updatePlayer() {
    const song = tracks[currentTrack] || { name: '—', artists: '—' };
    document.getElementById('songTitle').textContent = song.name;
    document.getElementById('songArtist').textContent = song.artists;
    const img = document.querySelector('#playerAlbum img');
    if (song.album_image && img) img.src = song.album_image;
  }

  // Fallback: load static CONFIG.playlist if no Spotify data yet
  if (CONFIG.playlist && CONFIG.playlist.length && tracks.length === 0) {
    tracks = CONFIG.playlist.map(p => ({ name: p.title, artists: p.artist, preview_url: p.url || null, album_image: p.image || null }));
    renderPlaylist();
    updatePlayer();
  }

  // Play/pause control
  if (playBtn) playBtn.addEventListener('click', () => {
    if (audio.paused) { audio.play(); playBtn.textContent = '⏸'; } else { audio.pause(); playBtn.textContent = '▶'; }
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (tracks.length === 0) return;
    selectTrack((currentTrack - 1 + tracks.length) % tracks.length);
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    if (tracks.length === 0) return;
    selectTrack((currentTrack + 1) % tracks.length);
  });

  // Load playlist from server Spotify endpoint
  async function loadSpotifyPlaylist() {
    playlistEl.innerHTML = '<div class="loading">Memuat playlist Spotify...</div>';
    try {
      const res = await fetch(`/api/playlist?id=${SPOTIFY_PLAYLIST_ID}`);
      if (!res.ok) throw new Error('not ok');
      const data = await res.json();
      tracks = data.items.map(i => ({
        name: i.name,
        artists: i.artists,
        preview_url: i.preview_url,
        album_image: i.album_image
      }));
      currentTrack = 0;
      renderPlaylist();
      updatePlayer();
    } catch (err) {
      playlistEl.innerHTML = '<div class="error">Gagal memuat dari Spotify. Silakan klik Login ke Spotify dahulu.</div>';
      console.error(err);
    }
  }

  if (loadSpotifyBtn) loadSpotifyBtn.addEventListener('click', loadSpotifyPlaylist);
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Gunakan Formspree atau service lain
    // Contoh dengan fetch ke Formspree:
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    })
    .then(() => {
      alert('Pesan terkirim! Terima kasih.');
      form.reset();
    })
    .catch(() => {
      // Fallback ke mailto
      window.location.href = `mailto:email@domain.com?subject=Message from ${name}&body=${encodeURIComponent(message)}`;
    });
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observe = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.project-card, .skill-tag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observe.observe(el);
  });
}

function initSectionRevealAnimations() {
  const sections = document.querySelectorAll('#about, #certifications, #hobbies, #projects, #music');
  if (!sections.length) return;

  sections.forEach(section => section.classList.add('reveal'));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const isVisible = entry.isIntersecting;
      entry.target.classList.toggle('visible', isVisible);

      entry.target.querySelectorAll('.section-header, .about-grid, .about-visual, .about-copy, .about-points .point, .about-stats .stat, .certifications-grid, .certifications-grid .certification-card, .hobbies-filter, .gallery-grid, .projects-grid, .projects-grid .project-card, .spotify-grid .embed').forEach(child => {
        child.classList.toggle('visible', isVisible);
      });

      entry.target.querySelectorAll('.gallery-item').forEach((item, idx) => {
        item.style.transitionDelay = `${idx * 60}ms`;
        item.classList.toggle('visible', isVisible);
      });
    });
  }, { threshold: 0.18 });

  sections.forEach(section => sectionObserver.observe(section));
}

// ===== COUNTER ANIMATION =====
function initStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observeStats = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target);
      }
    });
  });
  
  statNumbers.forEach(el => observeStats.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const start = Date.now();
  
  function count() {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    el.textContent = Math.floor(progress * target);
    
    if (progress < 1) requestAnimationFrame(count);
  }
  
  count();
}

// ===== MODAL HANDLERS =====
function initModalHandlers() {
  const modal = document.getElementById('certModal');
  const closeBtn = document.querySelector('.cert-modal-close');
  
  if (modal && closeBtn) {
    closeBtn.addEventListener('click', closeCertModal);
    
    // Close modal when clicking outside image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCertModal();
    });
  }
  
  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCertModal();
  });
}

// ===== EMBED REVEAL ANIMATIONS =====
function initEmbedAnimations() {
  const embeds = document.querySelectorAll('.spotify-grid .embed');
  if (!embeds || embeds.length === 0) return;

  embeds.forEach((el, idx) => {
    // staggered transition delay
    el.style.transitionDelay = `${idx * 120}ms`;
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('animate', entry.isIntersecting);
    });
  }, { threshold: 0.18 });

  embeds.forEach(el => obs.observe(el));
}


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/**
 * PERSONAL PORTFOLIO - MAIN.JS
 * Fitur: Particles, Custom Cursor, Aurora, Music Player, GitHub Integration, Contact Form
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
      image: 'https://images.unsplash.com/photo-1512941691920-25bda36b1407?q=80&w=600&auto=format&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=600&auto=format&fit=crop'
    }
  ],
  blog: [
    {
      title: 'Cara Membuat Animasi CSS yang Menarik',
      date: '15 Jul 2026',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
      excerpt: 'Tutorial membuat animasi CSS yang smooth dan performa tinggi.'
    },
    {
      title: 'JavaScript Modern: ES6+ Features',
      date: '12 Jul 2026',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
      excerpt: 'Pelajari fitur-fitur terbaru JavaScript yang wajib diketahui.'
    },
    {
      title: 'Web Performance: Optimization Tips',
      date: '10 Jul 2026',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
      excerpt: 'Teknik untuk membuat website lebih cepat dan responsif.'
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
      title: 'Mountain View',
      category: 'fotografi',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Coffee Time',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Sunset Beach',
      category: 'fotografi',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Music Studio',
      category: 'musik',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Urban Photography',
      category: 'fotografi',
      image: 'https://images.unsplash.com/photo-1500228299326-6c1ab1a5b20f?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Traveling Adventure',
      category: 'traveling',
      image: 'https://images.unsplash.com/photo-1530521954074-e64f47babe48?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Concert Vibes',
      category: 'musik',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Nature Exploration',
      category: 'traveling',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=400&auto=format&fit=crop'
    }
  ],
  github: {
    username: 'username', // GANTI dengan GitHub username Anda
    formspreeKey: 'YOUR_FORMSPREE_KEY' // GANTI dengan key Formspree Anda
  }
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
  loadBlog();
  loadCertifications();
  loadGallery();
  initMusicPlayer();
  initGitHubStats();
  initContactForm();
  initScrollAnimations();
  initStats();
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
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = mouseX - 3 + 'px';
    cursorDot.style.top = mouseY - 3 + 'px';
    cursorDot.style.opacity = '1';
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

// ===== BLOG LOADER =====
function loadBlog() {
  const grid = document.getElementById('blogGrid');
  
  if (!grid) return;
  
  CONFIG.blog.forEach((post, idx) => {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.style.animationDelay = (idx * 0.1) + 's';
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="blog-content">
        <div class="blog-date">${post.date}</div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
      </div>
    `;
    grid.appendChild(card);
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
  
  // Get unique categories
  const categories = ['semua', ...new Set(CONFIG.gallery.map(item => item.category))];
  
  // Create filter buttons
  categories.forEach((cat, idx) => {
    const btn = document.createElement('button');
    btn.className = 'hobby-filter-btn' + (idx === 0 ? ' active' : '');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
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
          <img src="${item.image}" alt="${item.title}">
          <div class="gallery-overlay">📷</div>
          <div class="gallery-tag">${item.category}</div>
        `;
        gallery.appendChild(div);
      });
  }
  
  renderGallery();
}

// ===== MUSIC PLAYER =====
function initMusicPlayer() {
  const playlist = document.getElementById('playlist');
  const playBtn = document.getElementById('playBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (!playlist) return;
  
  let currentTrack = 0;
  
  // Load playlist
  CONFIG.playlist.forEach((song, idx) => {
    const item = document.createElement('div');
    item.className = 'playlist-item' + (idx === 0 ? ' active' : '');
    item.textContent = `${song.title} • ${song.artist}`;
    item.addEventListener('click', () => selectTrack(idx));
    playlist.appendChild(item);
  });
  
  function selectTrack(idx) {
    currentTrack = idx;
    updatePlaylist();
  }
  
  function updatePlaylist() {
    const items = document.querySelectorAll('.playlist-item');
    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === currentTrack);
    });
    const song = CONFIG.playlist[currentTrack];
    document.getElementById('songTitle').textContent = song.title;
    document.getElementById('songArtist').textContent = song.artist;
  }
  
  if (playBtn) playBtn.addEventListener('click', () => {
    playBtn.textContent = playBtn.textContent === '▶' ? '⏸' : '▶';
  });
  
  if (prevBtn) prevBtn.addEventListener('click', () => {
    selectTrack((currentTrack - 1 + CONFIG.playlist.length) % CONFIG.playlist.length);
  });
  
  if (nextBtn) nextBtn.addEventListener('click', () => {
    selectTrack((currentTrack + 1) % CONFIG.playlist.length);
  });
  
  updatePlaylist();
}

// ===== GITHUB STATS =====
function initGitHubStats() {
  const statsContainer = document.getElementById('githubStats');
  
  if (!statsContainer) return;
  
  // Fetch GitHub user info
  fetch(`https://api.github.com/users/${CONFIG.github.username}`)
    .then(res => res.json())
    .then(data => {
      statsContainer.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;">
          <div style="text-align:center;">
            <div style="font-size:24px;font-weight:700;color:var(--accent-1);">${data.public_repos}</div>
            <div style="font-size:12px;color:var(--muted);">Public Repos</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:24px;font-weight:700;color:var(--accent-2);">${data.followers}</div>
            <div style="font-size:12px;color:var(--muted);">Followers</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:24px;font-weight:700;color:var(--accent-3);">${data.following}</div>
            <div style="font-size:12px;color:var(--muted);">Following</div>
          </div>
        </div>
      `;
    })
    .catch(() => {
      statsContainer.innerHTML = '<p>Silahkan ganti USERNAME di CONFIG dengan username GitHub Anda</p>';
    });
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
  
  document.querySelectorAll('.project-card, .blog-card, .skill-tag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observe.observe(el);
  });
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

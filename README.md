# Portfolio Personal — Template Premium

Website personal yang indah, cepat, dan mudah dikustomisasi. Terinspirasi dari desain Apple, Vercel, dan Framer.

## ✨ Fitur

- **Preloader Cinematic** — Animasi logo yang smooth
- **Particles Background** — Mirip Vercel, responsive
- **Custom Cursor** — Mengikuti mouse dengan efek halus
- **Aurora Gradient** — Animasi gradient seperti Apple
- **3D Hover Cards** — Project cards dengan efek kedalaman
- **Light/Dark Theme** — Tersimpan di localStorage
- **Music Player** — Playlist interaktif
- **Project Showcase** — Dengan filter kategori
- **Blog Section** — Untuk artikel
- **GitHub Integration** — Tampilkan stats GitHub Anda
- **Contact Form** — Integrasi Formspree/EmailJS
- **Fully Responsive** — Desktop, tablet, mobile

## 🚀 Quick Start

### 1. Clone atau Download

```bash
git clone https://github.com/username/portfolio.git
cd portfolio
```

### 2. Buka di Browser

Tidak perlu build tools — cukup buka `index.html`:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Atau gunakan VS Code Live Server extension.

## ⚙️ Customization

### Edit Data di `js/main.js`

Cari bagian **CONFIG** di awal file dan edit:

```javascript
const CONFIG = {
  projects: [
    {
      title: 'Nama Project Anda',
      category: 'web', // web, app, atau design
      description: 'Deskripsi singkat',
      image: 'URL_GAMBAR'
    },
    // ... tambah lebih banyak
  ],
  playlist: [
    { title: 'Lagu 1', artist: 'Artist A' },
    // ...
  ],
  github: {
    username: 'github_username_anda',
    formspreeKey: 'YOUR_FORMSPREE_KEY'
  }
}
```

### Edit Text di `index.html`

- `<h1>Saya Nama Anda</h1>` → Ganti nama Anda
- `<p>Kreator • Developer • Fotografer</p>` → Ganti tagline
- Email links di contact section
- Social media links di footer

### Edit Warna di `css/main.css`

Di bagian `:root`:

```css
:root {
  --accent-1: #6dd3b0; /* Warna hijau - ubah sesuai selera */
  --accent-2: #f2a365; /* Warna orange */
  --accent-3: #a78bfa; /* Warna ungu */
  /* ... */
}
```

## 📋 Fitur Setup

### GitHub Integration

1. Ganti `username` di CONFIG dengan username GitHub Anda
2. Buka https://api.github.com/users/YOUR_USERNAME di browser untuk test

### Contact Form dengan Formspree

1. Daftar di [Formspree.io](https://formspree.io)
2. Buat form baru dan dapatkan form ID (misal: `f_abc123xyz`)
3. Edit di `js/main.js`:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... 
})
```

Atau gunakan EmailJS — edit form handler sesuai dokumentasi EmailJS.

### Music Player

Edit playlist di CONFIG:

```javascript
playlist: [
  { title: 'Song Title', artist: 'Artist Name' },
  // ...
]
```

Untuk audio real-time, tambahkan property `url`:

```javascript
{ title: 'Song', artist: 'Artist', url: 'spotify-track-url-atau-file.mp3' }
```

## 📱 Struktur File

```
portfolio/
├── index.html          # Main HTML
├── css/
│   └── main.css        # Semua styling (responsive ready)
├── js/
│   └── main.js         # Semua logic (mudah dimodifikasi)
├── assets/             # Folder untuk foto/video (opsional)
└── README.md           # File ini
```

## 🌐 Deploy ke GitHub Pages

### Step 1: Setup Git & GitHub

```bash
# Init repository (jika belum)
git init

# Add remote
git remote add origin https://github.com/USERNAME/portfolio.git

# Stage semua file
git add .

# Commit
git commit -m "Initial commit: Personal portfolio"

# Push ke GitHub
git branch -M main
git push -u origin main
```

### Step 2: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Settings → Pages
3. Pilih branch: `main`
4. Klik Save

Website Anda akan live di: `https://USERNAME.github.io/portfolio`

### Step 3: Update Domain (Opsional)

Di Settings → Pages → Custom domain, masukkan domain Anda jika punya.

## 💡 Tips Modifikasi

### Tambah Project Baru

Edit `CONFIG.projects` di `js/main.js`:

```javascript
{
  title: 'Project Name',
  category: 'web', // Filter: web, app, design, atau custom
  description: 'Penjelasan singkat...',
  image: 'https://via.placeholder.com/600x400'
}
```

Kategori bisa custom — tinggal tambah filter button:

```html
<button class="filter-btn" data-filter="photo">Fotografi</button>
```

### Tambah Blog Post

Edit `CONFIG.blog`:

```javascript
{
  title: 'Judul Artikel',
  date: '15 Jul 2026',
  image: 'URL_COVER',
  excerpt: 'Ringkasan singkat...'
}
```

### Ganti Warna Theme

Di `css/main.css`, ubah `:root`:

- `--accent-1`: Warna hijau
- `--accent-2`: Warna orange  
- `--accent-3`: Warna ungu

### Disable Fitur (Opsional)

Jika ingin menonaktifkan fitur tertentu, bisa comment di `js/main.js`:

```javascript
// initMusicPlayer(); // Nonaktifkan music player
// initGitHubStats(); // Nonaktifkan GitHub stats
```

## 🎨 Desain System

Semua styling menggunakan **CSS Variables** di `:root`. Mudah di-customize:

| Variable | Fungsi |
|----------|--------|
| `--accent-1` | Warna utama (hijau) |
| `--accent-2` | Warna sekunder (orange) |
| `--accent-3` | Warna tersier (ungu) |
| `--bg` | Background utama |
| `--surface` | Surface/card background |
| `--muted` | Text color secondary |

## 📸 Screenshot Feature

### Light Mode
- Tekan tombol 🌙 di header untuk test

### Responsive
- Desktop: Full layout
- Tablet: Grid adjust
- Mobile: Single column dengan hamburger menu

## 🐛 Troubleshooting

**Form tidak kirim pesan?**
- Pastikan sudah setup Formspree key di CONFIG
- Cek console untuk error message

**GitHub stats tidak muncul?**
- Pastikan username GitHub benar di CONFIG
- GitHub API bisa rate-limited jika banyak request

**Particles tidak terlihat?**
- Cek browser console untuk error
- Sudah buka di browser (bukan direct file)?

## 🤝 Kontribusi & Feedback

Jika ada saran atau bug, silahkan buat issue atau pull request.

## 📄 License

Free untuk personal use. Silahkan modifikasi sesuai kebutuhan.

---

**Made with ♥ — Selamat coding! 🚀**

### Shortcut Commands

```bash
# Push changes ke GitHub
git add .
git commit -m "Update: [describe changes]"
git push

# Buka di live server (VS Code)
# Klik "Go Live" di status bar

# Deploy cepat
git add . && git commit -m "Update portfolio" && git push
```

### Social Links Template

Edit di section **#contact**:

```html
<a href="https://github.com/USERNAME">GitHub</a>
<a href="https://twitter.com/USERNAME">Twitter</a>
<a href="https://linkedin.com/in/USERNAME">LinkedIn</a>
<a href="https://instagram.com/USERNAME">Instagram</a>
```

---

**Happy coding! 🎉**

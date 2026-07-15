# Setup Guide — Personal Portfolio

Panduan lengkap untuk customize dan deploy portfolio Anda.

## 1️⃣ CUSTOMIZE KONTEN

### Edit nama & profil Anda

**File: `index.html`**

Cari dan ganti:

```html
<!-- Hero Section -->
<h1 class="hero-title">Saya Nama Anda</h1>
<p class="hero-sub">Kreator • Developer • Fotografer</p>

<!-- About Section -->
<p class="lead">Saya adalah seorang developer frontend...</p>

<!-- Contact -->
<p><strong>Email:</strong> <a href="mailto:email@domain.com">email@domain.com</a></p>
<a href="https://github.com/username">github.com/username</a>
```

### Edit projects, blog, musik

**File: `js/main.js`** — Section **CONFIG**

```javascript
const CONFIG = {
  projects: [
    {
      title: 'My Awesome Project',
      category: 'web',
      description: 'Deskripsi...',
      image: 'https://...'
    }
  ],
  blog: [
    {
      title: 'Blog Title',
      date: '15 Jul 2026',
      image: 'https://...',
      excerpt: 'Excerpt...'
    }
  ],
  playlist: [
    { title: 'Song 1', artist: 'Artist' }
  ]
}
```

### Setup Contact Form

Pilih salah satu:

**Option 1: Formspree (Recommended)**

1. Buka https://formspree.io
2. Sign up → Create new form
3. Copy form ID (contoh: `f_abc123xyz`)
4. Edit di `js/main.js`:

```javascript
fetch('https://formspree.io/f_YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
})
```

**Option 2: EmailJS**

1. Buka https://www.emailjs.com
2. Sign up → Create service
3. Edit contact form handler di `js/main.js` sesuai docs EmailJS

### Setup GitHub Integration

1. Edit `CONFIG.github.username` dengan GitHub username Anda
2. Test: https://api.github.com/users/YOUR_USERNAME

Contoh:

```javascript
github: {
  username: 'rizky-repo', // Ganti dengan username Anda
  formspreeKey: 'YOUR_KEY'
}
```

## 2️⃣ CUSTOMIZE DESIGN

### Ubah Warna

**File: `css/main.css`** — Variable di `:root`

```css
:root {
  --accent-1: #6dd3b0;  /* Hijau - ubah sini */
  --accent-2: #f2a365;  /* Orange - ubah sini */
  --accent-3: #a78bfa;  /* Ungu - ubah sini */
}
```

Paste warna hex favorit Anda.

### Ubah Font

Cari di `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Calistoga:wght@400&display=swap" rel="stylesheet">
```

1. Buka https://fonts.google.com
2. Pilih font → Copy link
3. Paste ke `index.html`

### Ubah Background

Di `css/main.css`:

```css
body {
  background: linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%);
}
```

Ubah gradient sesuai preferensi.

## 3️⃣ HOSTING & DEPLOY

### Deploy ke GitHub Pages (Free!)

#### A. Setup Git

```bash
# Buka terminal di folder portfolio
cd "path/to/portfolio"

# Init git
git init

# Add semua file
git add .

# Commit
git commit -m "Initial commit: Personal portfolio"

# Rename branch ke main (jika main belum ada)
git branch -M main
```

#### B. Setup GitHub Repository

1. Buka https://github.com/new
2. Repository name: `portfolio` atau nama lain
3. Public (important!)
4. Create repository

#### C. Push ke GitHub

```bash
# Copy HTTPS link dari repo GitHub Anda
# Contoh: https://github.com/USERNAME/portfolio.git

git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

#### D. Aktifkan Pages

1. Buka repository di GitHub
2. Settings → Pages
3. Build and deployment:
   - Source: Deploy from a branch
   - Branch: `main` / `root`
4. Save

Website Anda akan live di: `https://USERNAME.github.io/portfolio`

### Deploy ke Other Hosting

**Vercel (Recommended - very fast)**

```bash
npm install -g vercel
vercel
```

**Netlify**

1. Buka https://netlify.com
2. "Add new site" → drag & drop folder
3. Done! Live dalam 30 detik

**Firebase Hosting**

```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

## 4️⃣ MAINTENANCE

### Update Projects

Edit `CONFIG.projects` di `js/main.js`:

```javascript
projects: [
  {
    title: 'New Project 2026',
    category: 'web', // atau 'app', 'design'
    description: 'Description here',
    image: 'https://...'
  }
]
```

Setelah edit → Save → Push ke GitHub

```bash
git add js/main.js
git commit -m "Add new project"
git push
```

### Update Blog

Tambah post baru di `CONFIG.blog`:

```javascript
blog: [
  {
    title: 'New Article Title',
    date: '15 Jul 2026',
    image: 'https://...',
    excerpt: 'Excerpt...'
  }
]
```

### Update Theme/Colors

Edit `css/main.css` → push ke GitHub

### Disable Features

Di `js/main.js`, comment fitur yang tidak perlu:

```javascript
// initMusicPlayer();      // Matikan music player
// initGitHubStats();      // Matikan GitHub stats
// initContactForm();      // Matikan contact form
```

## 5️⃣ TIPS & TRICKS

### Gunakan Placeholder Images

Sementara, gunakan:
- https://via.placeholder.com/600x400
- https://images.unsplash.com (free photos)
- https://picsum.photos (random images)

### Custom Domain (Opsional)

1. Beli domain di Namecheap, GoDaddy, dll
2. GitHub Settings → Pages → Custom domain
3. Update DNS settings di registrar domain
4. Wait 24h untuk propagasi

### Performance Tips

- Compress images: https://tinypng.com
- Minify CSS: https://minifycode.com
- Remove unused CSS di browser devtools

### SSL Certificate

GitHub Pages automatically provide HTTPS 🔒

## 📋 Checklist Pre-Deploy

- [ ] Ganti "Nama Anda" dengan nama asli
- [ ] Update social links
- [ ] Setup contact form (Formspree/EmailJS)
- [ ] Add projects dengan image
- [ ] Setup GitHub username di CONFIG
- [ ] Test all features di localhost
- [ ] Push ke GitHub
- [ ] Aktifkan Pages di Settings
- [ ] Verify custom domain (jika ada)

## 🆘 Troubleshooting

**Pages tidak muncul?**
- Pastikan repository PUBLIC
- Cek Settings → Pages → branch dipilih
- Wait 5 menit untuk propagasi

**Form tidak kirim?**
- Check Formspree email verification
- Check browser console untuk error

**Styling tidak update?**
- Hard refresh: Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac)
- Clear browser cache

**GitHub stats blank?**
- Verify username di CONFIG
- Check API rate limit: https://api.github.com/rate_limit

---

**Selamat! Portfolio Anda siap! 🚀**

Untuk update dan maintenance, tinggal edit file → `git add . && git commit -m "Update" && git push`

## KOOPIANTESE.ID — Website Profil 3 Halaman

Membangun situs profil cafe minimalis premium dengan TanStack Router, palet navy/coklat/hitam/cream, dan animasi halus via Framer Motion. Fokus utama: maskot 3D estetik di hero dengan floating animation.

### Aset
- Copy logo wordmark (image-2) → `src/assets/logo.png` (header & hero)
- Copy logo stempel (image-3) → `src/assets/logo-stamp.png` (footer/secondary)
- **Generate maskot 3D baru** (premium quality, PNG transparan) → `src/assets/maskot-3d.png`
  - Prompt: musang/ferret barista bergaya 3D render claymation/Pixar-style, memegang cangkir kopi mengepul, warna palet navy/coklat/cream, soft studio lighting, clean isolated subject, on a solid white background
- Generate 3 logo ojol PNG transparan (GoFood, GrabFood, ShopeeFood) → `src/assets/`

### Design Tokens (`src/styles.css`)
- `--background`: cream `#FAFAF7` → oklch
- `--foreground`: hitam `#0A0A0A`
- `--primary`: navy `#0F1B3D`
- `--accent`: coklat `#5C3A22`
- Google Fonts: Cormorant Garamond (heading serif), Inter (body)

### Routing
- `src/routes/__root.tsx` — Navbar (logo + Home/Layanan/Kontak), `<Outlet/>` dengan AnimatePresence (fade + slide-up 16px, ease-out 0.5s), footer mini
- `src/routes/index.tsx` — **Home**: hero dengan maskot 3D floating (`y: [0, -12, 0]`, 4s loop, soft drop-shadow), wordmark, headline serif "Secangkir Hangat, Sejuta Cerita", sub-deskripsi, CTA ke Layanan/Kontak, section 3 pilar (Hangat • Tenang • Berkualitas)
- `src/routes/layanan.tsx` — **Layanan & Akses**: heading + paragraf ojol, 3 kartu link (GoFood/GrabFood/ShopeeFood) dengan logo, section testimoni pull-quote serif (2-3)
- `src/routes/kontak.tsx` — **Kontak**: embed Google Maps iframe, ikon sosial IG/TikTok @koopiantese.id, tombol besar "Hubungi Kami" → `https://wa.me/6285285897778`

### Animasi (Framer Motion)
- Page transitions di root via AnimatePresence
- Maskot 3D: floating gentle bounce `y: [0, -12, 0]`, rotate halus `[-1, 1, -1]`, duration 4s, easeInOut, infinite — disertai shadow yang scale berlawanan agar terasa hidup
- Reveal on scroll halus per section (whileInView, fade + slide-up)

### SEO
Setiap route punya `head()` dengan title, description, og:title, og:description, og:url; canonical hanya pada leaf routes.

### Teknis
- `bun add framer-motion`
- Update `index.tsx` (hapus placeholder)
- Tidak ada backend; semua statis

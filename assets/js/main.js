document.addEventListener('alpine:init', () => {
  // Header: menu mobile, dropdown, dan status scroll
  Alpine.data('siteHeader', () => ({
    open: false,
    profil: false,
    scrolled: false,
    init() {
      this.onScroll();
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    },
    onScroll() {
      this.scrolled = window.scrollY > 24;
    },
  }));

  // Tombol kembali ke atas
  Alpine.data('backToTop', () => ({
    show: false,
    init() {
      window.addEventListener('scroll', () => { this.show = window.scrollY > 600; }, { passive: true });
    },
    up() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  }));

  // Galeri dengan filter dan lightbox
  Alpine.data('gallery', () => ({
    items: [],
    filter: 'semua',
    open: false,
    index: 0,
    init() {
      const data = document.getElementById('gallery-data');
      this.items = data ? JSON.parse(data.textContent) : [];
    },
    get filtered() {
      return this.filter === 'semua' ? this.items : this.items.filter((i) => i.cat === this.filter);
    },
    get current() {
      return this.filtered[this.index] || {};
    },
    show(i) {
      this.index = i;
      this.open = true;
    },
    next() {
      this.index = (this.index + 1) % this.filtered.length;
    },
    prev() {
      this.index = (this.index - 1 + this.filtered.length) % this.filtered.length;
    },
  }));

  // Formulir kontak: menyusun email lewat aplikasi email pengunjung
  Alpine.data('contactForm', (email) => ({
    nama: '',
    subjek: '',
    pesan: '',
    kirim() {
      const body = `${this.pesan}\n\n— ${this.nama}`;
      const url = `mailto:${email}?subject=${encodeURIComponent(this.subjek || 'Pesan dari website')}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
    },
  }));
});

// Animasi muncul saat elemen masuk layar
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
});

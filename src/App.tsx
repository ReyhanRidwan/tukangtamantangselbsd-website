/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Instagram, 
  CheckCircle2, 
  Leaf, 
  Droplets, 
  Trees, 
  LayoutGrid, 
  MessageCircle, 
  ArrowRight, 
  Menu, 
  X,
  Clock,
  ThumbsUp,
  MapPin,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const IMAGES = {
  hero: "https://scontent.cdninstagram.com/v/t1.15752-9/658372854_1669863117531731_3178817597552396113_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=s0_0k3_Vn1UQ7kNvwGP3z6s&_nc_oc=AdrDrZJyWorO5f7qHKanVTnuwG2GMr2KeD9H4KGq2Uuju0nkbS0TfaIC4szKKwF7iqUQ3ouhlS9J_xphELUMWLyX&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7a32e&oh=03_Q7cD5AFKO1Gf-M-VKx15sZ1bC2B9XHFIRYXmvZ4_qns1ZMRF1Q&oe=69F9CFB0",
  minimalist: "https://scontent.cdninstagram.com/v/t1.15752-9/658372854_1669863117531731_3178817597552396113_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=s0_0k3_Vn1UQ7kNvwGP3z6s&_nc_oc=AdrDrZJyWorO5f7qHKanVTnuwG2GMr2KeD9H4KGq2Uuju0nkbS0TfaIC4szKKwF7iqUQ3ouhlS9J_xphELUMWLyX&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7a32e&oh=03_Q7cD5AFKO1Gf-M-VKx15sZ1bC2B9XHFIRYXmvZ4_qns1ZMRF1Q&oe=69F9CFB0",
  dry: "https://scontent.xx.fbcdn.net/v/t1.15752-9/659183965_883775848048249_2102647400029154089_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=riClMpmjG-UQ7kNvwENdjkb&_nc_oc=AdridzzGm4WcVQXMWyhH11cBzOBGzz_p5yEkT0Fto5xrOMVcISOpnuRvpXYr0Y269GeEPXtkBwdALkJM0C8_LN0k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AEP-9IoOs3ExnyCDL70u3JpvwGVNJbmmEzYglWFiNyxjw&oe=69F9CE99",
  vertical: "https://scontent.cdninstagram.com/v/t1.15752-9/661542538_2814491302258261_7081437908575069863_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=bJA0rboncwYQ7kNvwF29jJ8&_nc_oc=AdqLL3Y9wRf05lGX1qOTmhvYgitOrMRSogA9EuDs5ZkTnbHjPG_cvD6S2KjbfZPQ83ZMNP9EOUlH49sI6QnH-UK8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7a32e&oh=03_Q7cD5AG6-4-R3b-lzA7UTAcEmR6kcRC9Ztb7yCOAQ5zybXMyww&oe=69F9D0A9",
  pond: "https://scontent.cdninstagram.com/v/t1.15752-9/662070027_879122388477130_2818079097410521756_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=x9BZyGkwnDAQ7kNvwHC5Ho4&_nc_oc=AdpTI0Y0gqcm-4u-L7UWYNdiLuwoGnAAOCNyBvBnOIYk1F83sW7W2_EC2uuKDI0Upu6U1r0A00gQHNJNvVLDDug-&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7a32e&oh=03_Q7cD5AEAYYGcBJa4dS2RduHylESej9r4zo_r68ny4SK7Vdu38g&oe=69F9D33C",
  portfolio1: "https://scontent.cdninstagram.com/v/t1.15752-9/661286734_1271527145118341_188305129004600358_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=xK-X0Nn3HyIQ7kNvwEswnde&_nc_oc=AdqH_SOHiNRIpZi7HXwnpeMnuVc-fEPJIKrTpOeis3HqKB1VMW-I3rJLgJGDF2eG0t6LNKlWTR3whQe9tG-0O1mM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7a32e&oh=03_Q7cD5AG-w2UoT6pHUk_eXBi5kubpt5iJBMI3VbtEkQhE0YdPbA&oe=69F9E856",
  portfolio2: "https://scontent.cdninstagram.com/v/t1.15752-9/659698721_1261737562205925_1117863770799583922_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=08QJFX2aho4Q7kNvwElTLo_&_nc_oc=Adokfvg_awkgL2-ir5ewWabv_8nrusC_Y9_SyPuAcB64RjEzTr5hUoU5ew5XLdVbxDVlr_bf62U4dB9F6nx2jPHb&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7a32e&oh=03_Q7cD5AHgpvN7hG60wFtKALlBfbvaqixtNvQtJosS4yjju36E_A&oe=69F9F15E",
  portfolio3: "https://scontent.cdninstagram.com/v/t1.15752-9/665938339_1114405028415607_2299394070591598370_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdkOnRlc3QiXX0%3D&_nc_ohc=-g5xXxiozNgQ7kNvwFadL_h&_nc_oc=AdpAeAMgAfkGM5m-3PEVQVUQyw4VGzcJG2ghzBKRm8B_vFa8ZXKUMPdBRJJL7FVfH-moupcPM0tw9C0eHc9vF-g3&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7a32e&oh=03_Q7cD5AFTNjz7ppNoYDAnoNoQP_HlIgYWJLtviaKMK3Uh1oUsTg&oe=69F9F604",
};

const WHATSAPP_LINK = "https://wa.me/6287853053155?text=Halo%20TukangTamanTangselBSD,%20saya%20ingin%20konsultasi%20mengenai%20taman.";

const PORTFOLIO_DATA = [
  { id: 1, category: 'Taman Minimalis', img: IMAGES.portfolio1 },
  { id: 2, category: 'Taman Minimalis', img: IMAGES.portfolio2 },
  { id: 3, category: 'Taman Minimalis', img: IMAGES.portfolio3 },
  { id: 4, category: 'Kolam', img: IMAGES.pond },
  { id: 5, category: 'Taman Kering', img: IMAGES.dry },
  { id: 6, category: 'Vertical Garden', img: IMAGES.vertical },
  { id: 7, category: 'Taman Minimalis', img: IMAGES.hero },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filters = ['Semua', 'Taman Minimalis', 'Taman Kering', 'Vertical Garden', 'Kolam'];

  const filteredPortfolio = activeFilter === 'Semua' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(item => item.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Cara Kerja', href: '#workflow' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-100 selection:text-green-900">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 py-3 shadow-md backdrop-blur-md' : 'bg-transparent py-5'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-green-600 p-1.5 text-white">
              <Leaf size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-green-800' : 'text-white'}`}>
              tukangtamantangsel<span className="text-green-500">bsd</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-green-500 ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg active:scale-95"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white p-6 shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-green-600"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-4 text-center font-bold text-white"
                >
                  <Phone size={20} />
                  Hubungi Kami
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Beautiful Garden"
            className="h-full w-full object-cover transition-transform duration-10000 hover:scale-110"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full bg-green-500/20 px-4 py-1.5 text-sm font-bold tracking-wider text-green-400 uppercase backdrop-blur-sm">
              Tukang Taman Tangerang Selatan & BSD
            </span>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Jasa Pembuatan Taman <br />
              <span className="text-green-400">Profesional & Estetik</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200 sm:text-xl">
              Wujudkan taman impian Anda dengan desain eksklusif, pengerjaan rapi, 
              dan perawatan menyeluruh untuk hunian maupun area komersial.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-green-700 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] sm:w-auto active:scale-95"
              >
                <MessageCircle size={24} />
                Konsultasi Gratis via WhatsApp
              </a>
              <a
                href="#portfolio"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto active:scale-95"
              >
                Lihat Portfolio
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
            <div className="mx-auto h-2 w-1 rounded-full bg-white" />
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="about" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={IMAGES.portfolio1}
                  alt="Our Work"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-6 -right-6 -z-10 h-64 w-64 rounded-3xl bg-green-100" />
              <div className="absolute -bottom-6 -left-6 -z-10 h-64 w-64 rounded-3xl bg-green-50" />
              
              <div className="absolute -bottom-10 -right-10 hidden rounded-2xl bg-white p-6 shadow-xl sm:block">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-3 text-green-600">
                    <ThumbsUp size={32} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-500">Kepuasan Klien</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-sm font-bold tracking-widest text-green-600 uppercase">Tentang Kami</h2>
              <h3 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Ahli Landscape & Taman <br />
                <span className="text-green-600">Terpercaya di Tangerang Selatan</span>
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                TukangTamanTangselBSD adalah penyedia layanan landscape profesional yang berdedikasi untuk menciptakan ruang terbuka hijau yang indah dan fungsional. Kami melayani jasa desain, pembuatan, hingga perawatan taman dengan standar kualitas tinggi.
              </p>
              
              <div className="mb-10 space-y-4">
                {[
                  "Pengalaman bertahun-tahun di bidang landscape",
                  "Tim profesional dan berpengalaman",
                  "Desain custom sesuai keinginan & budget",
                  "Pengerjaan rapi, tepat waktu, dan bergaransi"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-8 py-4 font-bold text-white transition-all hover:bg-gray-800 active:scale-95"
              >
                Konsultasi Sekarang
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Layanan Kami */}
      <section id="services" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-bold tracking-widest text-green-600 uppercase">Layanan Kami</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Solusi Lengkap Taman Anda</h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Taman Minimalis",
                desc: "Desain taman modern yang simpel namun tetap memberikan kesan asri dan elegan untuk lahan terbatas.",
                img: IMAGES.minimalist,
                icon: <Trees className="text-green-600" />
              },
              {
                title: "Taman Kering",
                desc: "Solusi taman rendah perawatan dengan perpaduan batu alam dan tanaman yang tahan cuaca panas.",
                img: IMAGES.dry,
                icon: <LayoutGrid className="text-green-600" />
              },
              {
                title: "Vertical Garden",
                desc: "Memanfaatkan dinding sebagai area hijau, sangat cocok untuk area perkotaan dengan lahan sempit.",
                img: IMAGES.vertical,
                icon: <Leaf className="text-green-600" />
              },
              {
                title: "Kolam Hias",
                desc: "Pembuatan kolam koi atau air mancur dengan desain natural yang memberikan efek relaksasi.",
                img: IMAGES.pond,
                icon: <Droplets className="text-green-600" />
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50">
                    {service.icon}
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Gallery */}
      <section id="portfolio" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-green-600 uppercase">Portfolio</h2>
              <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Proyek Terbaru Kami</h3>
            </div>
            <a
              href="https://www.instagram.com/tukangtamantangsel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold text-green-600 hover:text-green-700"
            >
              Lihat Lebih Banyak di Instagram
              <Instagram size={20} />
            </a>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square overflow-hidden rounded-2xl shadow-sm"
                >
                  <img
                    src={item.img}
                    alt={item.category}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Keunggulan (USP) */}
      <section className="bg-green-900 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-sm font-bold tracking-widest text-green-400 uppercase">Keunggulan Kami</h2>
              <h3 className="mb-8 text-3xl font-extrabold sm:text-4xl">Mengapa Memilih Jasa Kami?</h3>
              <p className="mb-12 text-lg text-green-100/80">
                Kami memberikan nilai lebih untuk setiap proyek taman yang kami kerjakan, memastikan hasil akhir yang memuaskan dan tahan lama.
              </p>
              
              <div className="grid gap-8 sm:grid-cols-2">
                {[
                  { title: "Konsultasi & Survey Gratis", icon: <Calendar /> },
                  { title: "Desain Sesuai Budget", icon: <LayoutGrid /> },
                  { title: "Tim Profesional", icon: <ThumbsUp /> },
                  { title: "Pengerjaan Rapi", icon: <CheckCircle2 /> }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-800 text-green-400">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <img
                src={IMAGES.portfolio2}
                alt="Quality Work"
                className="h-full w-full rounded-3xl object-cover shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-bold tracking-widest text-green-600 uppercase">Testimoni</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Apa Kata Klien Kami?</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Ibu Sari",
                loc: "BSD City",
                text: "Sangat puas dengan hasilnya! Taman minimalis di rumah saya jadi sangat asri. Pengerjaannya cepat dan rapi banget."
              },
              {
                name: "Bapak Budi",
                loc: "Bintaro",
                text: "Timnya profesional, konsultasinya enak dan dikasih saran tanaman yang cocok. Kolam koisnya juga mantap, airnya jernih."
              },
              {
                name: "Ibu Linda",
                loc: "Pamulang",
                text: "Vertical gardennya keren banget, bikin rumah jadi adem. Harganya juga kompetitif dibanding yang lain."
              }
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg"
              >
                <div className="mb-6 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mb-8 italic text-gray-600">"{testi.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                    {testi.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testi.name}</p>
                    <p className="text-sm text-gray-500">{testi.loc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Kerja (Workflow) */}
      <section id="workflow" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-bold tracking-widest text-green-600 uppercase">Proses Kami</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Cara Kami Bekerja</h3>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-green-200 lg:block" />
            
            <div className="grid gap-8 lg:grid-cols-5">
              {[
                { title: "Konsultasi", desc: "Hubungi kami via WhatsApp untuk diskusi awal.", icon: <MessageCircle /> },
                { title: "Survey Lokasi", desc: "Kami datang ke lokasi untuk pengukuran & analisa.", icon: <MapPin /> },
                { title: "Desain & Penawaran", desc: "Kami berikan desain & estimasi biaya transparan.", icon: <LayoutGrid /> },
                { title: "Pengerjaan", desc: "Proses pembuatan taman oleh tim ahli kami.", icon: <Trees /> },
                { title: "Finishing", desc: "Pengecekan akhir & serah terima taman impian.", icon: <CheckCircle2 /> }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-green-600 shadow-lg ring-4 ring-green-50 transition-all hover:scale-110">
                    {step.icon}
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="CTA Background"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-green-900/90 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-5xl">
              Wujudkan Taman Impian <br /> Anda Sekarang Juga
            </h2>
            <p className="mb-10 text-lg text-green-100">
              Dapatkan penawaran harga terbaik dan konsultasi desain gratis. 
              Tim kami siap membantu menciptakan ruang hijau yang Anda dambakan.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-bold text-green-900 shadow-2xl transition-all hover:bg-green-50 hover:shadow-white/20 active:scale-95"
            >
              <MessageCircle size={28} />
              Chat WhatsApp Sekarang
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 pt-20 pb-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-2">
                <div className="rounded-lg bg-green-600 p-1.5 text-white">
                  <Leaf size={24} />
                </div>
                <span className="text-2xl font-bold tracking-tight">
                  tukangtamantangsel<span className="text-green-500">bsd</span>
                </span>
              </div>
              <p className="mb-8 max-w-md text-gray-400">
                Penyedia jasa landscape dan taman profesional di wilayah Tangerang Selatan, BSD, dan sekitarnya. Kami berkomitmen memberikan hasil terbaik untuk setiap hunian.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/tukangtamantangsel/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-green-600">
                  <Instagram size={20} />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-green-600">
                  <Phone size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold">Layanan</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#services" className="hover:text-green-500">Taman Minimalis</a></li>
                <li><a href="#services" className="hover:text-green-500">Taman Kering</a></li>
                <li><a href="#services" className="hover:text-green-500">Vertical Garden</a></li>
                <li><a href="#services" className="hover:text-green-500">Kolam Hias</a></li>
                <li><a href="#services" className="hover:text-green-500">Perawatan Taman</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold">Kontak</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-green-500" />
                  <span>Tangerang Selatan, Banten, Indonesia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="shrink-0 text-green-500" />
                  <span>+62 878-5305-3155</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={20} className="shrink-0 text-green-500" />
                  <span>Senin - Minggu: 08:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 border-t border-gray-800 pt-10 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} tukangtamantangselbsd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-2xl transition-all hover:scale-110 hover:bg-green-700 active:scale-95"
      >
        <MessageCircle size={32} />
        <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">1</span>
      </a>
    </div>
  );
}

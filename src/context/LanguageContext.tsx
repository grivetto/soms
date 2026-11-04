'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'it' | 'en' | 'es' | 'th'

export interface LanguageMeta {
  code: string
  label: string
  flag: string
  alt: string
  title: string
  next: Language
}

export const LANGUAGE_META: Record<Language, LanguageMeta> = {
  it: {
    code: 'IT',
    label: 'Italiano',
    flag: 'https://flagcdn.com/w40/it.png',
    alt: 'Italiano',
    title: 'Switch to English',
    next: 'en'
  },
  en: {
    code: 'EN',
    label: 'English',
    flag: 'https://flagcdn.com/w40/gb.png',
    alt: 'English',
    title: 'Cambiar a Español',
    next: 'es'
  },
  es: {
    code: 'ES',
    label: 'Español',
    flag: 'https://flagcdn.com/w40/es.png',
    alt: 'Español',
    title: 'เปลี่ยนเป็นภาษาไทย (Switch to Thai)',
    next: 'th'
  },
  th: {
    code: 'TH',
    label: 'ไทย',
    flag: 'https://flagcdn.com/w40/th.png',
    alt: 'ไทย',
    title: 'Passa a Italiano',
    next: 'it'
  }
}

export const TRANSLATIONS = {
  it: {
    nav: {
      home: 'Home',
      history: 'La Storia',
      menu: 'Menu',
      activities: 'Attività',
      events: 'Eventi',
      reservation: 'Prenota',
      bookTable: 'Prenota un Tavolo',
      bookNow: 'Prenota Ora'
    },
    hero: {
      tagline: 'DAL 1888 A TORINO',
      title: 'Circolo Ristorante Campidoglio',
      subtitle: 'La tradizione piemontese incontra la freschezza del mare nello storico borgo degli artisti.',
      btnMenu: 'Scopri il Menu',
      btnReserve: 'Prenota un Tavolo'
    },
    history: {
      badge: 'ARCHIVIO STORICO',
      title: 'Più di un Secolo di Tradizione e Convivialità',
      desc: 'La Società Operaia di Mutuo Soccorso (SOMS) De Sanctis nasce come punto di riferimento solidale e culturale nel quartiere operaio di Campidoglio a fine Ottocento.',
      quote: 'Un luogo dove memoria, cucina d’autore e spirito comunitario continuano a vivere insieme.'
    },
    menu: {
      title: 'I Nostri Percorsi di Gusto',
      subtitle: 'Tradizione di terra piemontese e pescato fresco cucinato con rispetto.',
      meatTitle: 'Tradizione & Terra',
      meatDesc: 'Vitello tonnato all’antica maniera, agnolotti del plin al sugo d’arrosto, brasato al Barolo.',
      fishTitle: 'Profumi del Mare',
      fishDesc: 'Crudité di pescato, tagliolini ai frutti di mare, polpo croccante su vellutata di patate.',
      dessertTitle: 'Dolci della Casa',
      dessertDesc: 'Bunet tradizionale piemontese, panna cotta alle fragole fresche e tiramisù artigianale.'
    },
    activities: {
      title: 'Attività e Vita Sociale',
      subtitle: 'Spazio polivalente per conferenze, musica dal vivo e promozione del patrimonio locale.'
    },
    events: {
      title: 'Prossimi Eventi Culturali',
      subtitle: 'Incontri d’autore, serate a tema e degustazioni con i produttori piemontesi.'
    },
    reservation: {
      title: 'Prenota il Tuo Tavolo',
      subtitle: 'Ti accogliamo nel nostro salone storico o nella veranda estiva.',
      name: 'Nome e Cognome',
      email: 'Email',
      phone: 'Telefono',
      date: 'Data',
      time: 'Orario',
      guests: 'Numero di Ospiti',
      notes: 'Note o intolleranze',
      submit: 'Conferma Richiesta'
    },
    footer: {
      desc: 'Circolo Ristorante Campidoglio - Società Operaia di Mutuo Soccorso fondata nel 1888 a Torino.',
      rights: 'Tutti i diritti riservati. SOMS De Sanctis Campidoglio.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      history: 'History',
      menu: 'Menu',
      activities: 'Activities',
      events: 'Events',
      reservation: 'Book',
      bookTable: 'Book a Table',
      bookNow: 'Book Now'
    },
    hero: {
      tagline: 'SINCE 1888 IN TURIN',
      title: 'Circolo Ristorante Campidoglio',
      subtitle: 'Piedmontese tradition meets the freshness of the sea in the historic artists village.',
      btnMenu: 'Discover Menu',
      btnReserve: 'Book a Table'
    },
    history: {
      badge: 'HISTORIC ARCHIVE',
      title: 'Over a Century of Heritage & Community',
      desc: 'The De Sanctis Workers Mutual Aid Society (SOMS) was established in late 19th-century Campidoglio as a cultural cornerstone for workers.',
      quote: 'A haven where historic memory, culinary passion and community spirit flourish.'
    },
    menu: {
      title: 'Our Tasting Journeys',
      subtitle: 'Authentic Piedmontese terroir and daily fresh catch prepared with care.',
      meatTitle: 'Heritage & Terroir',
      meatDesc: 'Traditional vitello tonnato, handmade agnolotti del plin with roast gravy, Barolo braised beef.',
      fishTitle: 'Flavors of the Sea',
      fishDesc: 'Catch-of-the-day crudo, tagliolini with fresh seafood, crispy octopus on potato velouté.',
      dessertTitle: 'Artisanal Desserts',
      dessertDesc: 'Classic Piedmontese bunet, fresh berry panna cotta, and homemade tiramisu.'
    },
    activities: {
      title: 'Activities & Social Life',
      subtitle: 'Multipurpose venue for cultural seminars, live music and local heritage enrichment.'
    },
    events: {
      title: 'Upcoming Cultural Events',
      subtitle: 'Author talks, themed culinary nights and wine tastings with regional producers.'
    },
    reservation: {
      title: 'Reserve Your Table',
      subtitle: 'We welcome you in our historical dining hall or outdoor summer veranda.',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      date: 'Date',
      time: 'Time',
      guests: 'Guests',
      notes: 'Special requests or allergies',
      submit: 'Confirm Request'
    },
    footer: {
      desc: 'Circolo Ristorante Campidoglio - Workers Mutual Aid Society established in 1888 in Turin.',
      rights: 'All rights reserved. SOMS De Sanctis Campidoglio.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      history: 'Nuestra Historia',
      menu: 'Menú',
      activities: 'Actividades',
      events: 'Eventos',
      reservation: 'Reservar',
      bookTable: 'Reservar Mesa',
      bookNow: 'Reservar Ahora'
    },
    hero: {
      tagline: 'DESDE 1888 EN TURÍN',
      title: 'Circolo Ristorante Campidoglio',
      subtitle: 'La tradición piamontesa y la frescura del mar en el histórico barrio de los artistas.',
      btnMenu: 'Ver el Menú',
      btnReserve: 'Reservar Mesa'
    },
    history: {
      badge: 'ARCHIVO HISTÓRICO',
      title: 'Más de un Siglo de Historia y Convivencia',
      desc: 'La Sociedad Obrera de Socorros Mutuos (SOMS) De Sanctis nació a finales del siglo XIX como punto de apoyo y cultura comunitaria.',
      quote: 'Un espacio donde la memoria histórica, la alta cocina y el espíritu asociativo siguen vivos.'
    },
    menu: {
      title: 'Nuestras Propuestas Gastronómicas',
      subtitle: 'Platos tradicionales piamonteses y pescado fresco seleccionado a diario.',
      meatTitle: 'Tradición y Tierra',
      meatDesc: 'Vitello tonnato a la antigua, agnolotti del plin artesanos con jugo de asado, ternera estofada al Barolo.',
      fishTitle: 'Sabores del Mar',
      fishDesc: 'Tartar de pescado fresco, tagliolini caseros con marisco, pulpo crujiente sobre crema de patatas.',
      dessertTitle: 'Postres Caseros',
      dessertDesc: 'Bunet tradicional piamontés, panna cotta con frutos rojos frescos y tiramisú artesano.'
    },
    activities: {
      title: 'Actividades y Vida Social',
      subtitle: 'Espacio multifuncional para conferencias, música en directo y promoción cultural.'
    },
    events: {
      title: 'Próximos Eventos Culturales',
      subtitle: 'Charlas literarias, cenas temáticas y catas con productores vitivinícolas del Piamonte.'
    },
    reservation: {
      title: 'Reserva Tu Mesa',
      subtitle: 'Te esperamos en nuestro histórico comedor o en la terraza de verano.',
      name: 'Nombre y Apellidos',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      date: 'Fecha',
      time: 'Hora',
      guests: 'Comensales',
      notes: 'Peticiones especiales o alergias',
      submit: 'Confirmar Reserva'
    },
    footer: {
      desc: 'Circolo Ristorante Campidoglio - Sociedad Obrera de Socorros Mutuos fundada en 1888 en Turín.',
      rights: 'Todos los derechos reservados. SOMS De Sanctis Campidoglio.'
    }
  },
  th: {
    nav: {
      home: 'หน้าแรก',
      history: 'ประวัติความเป็นมา',
      menu: 'เมนูอาหาร',
      activities: 'กิจกรรม',
      events: 'อีเวนต์',
      reservation: 'จองโต๊ะ',
      bookTable: 'จองโต๊ะอาหาร',
      bookNow: 'จองโต๊ะทันที'
    },
    hero: {
      tagline: 'ตั้งแต่ปี 1888 ในเมืองตูริน',
      title: 'Circolo Ristorante Campidoglio',
      subtitle: 'รสชาติดั้งเดิมแห่งแคว้นปีเอมอนเตผสานความสดใหม่จากท้องทะเล ณ ย่านศิลปินเก่าแก่',
      btnMenu: 'ดูเมนูอาหาร',
      btnReserve: 'จองโต๊ะอาหาร'
    },
    history: {
      badge: 'หอจดหมายเหตุประวัติศาสตร์',
      title: 'กว่าศตวรรษแห่งมรดกและชุมชน',
      desc: 'สมาคมสงเคราะห์ผู้ใช้แรงงาน SOMS De Sanctis ก่อตั้งขึ้นในปลายศตวรรษที่ 19 เพื่อเป็นศูนย์รวมทางวัฒนธรรมและการเกื้อกูล',
      quote: 'สถานที่ที่ความทรงจำทางประวัติศาสตร์ รสชาติอาหารชั้นเลิศ และมิตรภาพยังคงมีชีวิตชีวา'
    },
    menu: {
      title: 'เส้นทางแห่งรสชาติของเรา',
      subtitle: 'อาหารพื้นถิ่นปีเอมอนเตและวัตถุดิบอาหารทะเลสดใหม่ประจำวัน',
      meatTitle: 'รสชาติดั้งเดิม & แผ่นดินเกิด',
      meatDesc: 'วิเตลโลตอนนาโตสูตรโบราณ อันโญลอตติเดลปลินทำมือราดซอสเนื้อย่าง และเนื้อตุ๋นไวน์บาโรโล',
      fishTitle: 'กลิ่นอายแห่งท้องทะเล',
      fishDesc: 'ปลาดิบสไตล์อิตาเลียน ตาลิโอลินีซีฟู้ดสด และปลาหมึกยักษ์กรอบบนครีมมันฝรั่ง',
      dessertTitle: 'ของหวานโฮมเมด',
      dessertDesc: 'บูเนต์ดั้งเดิมสูตรปีเอมอนเต พานาคอตต้าเบอร์รี่สด และทีรามิสุทำมือ'
    },
    activities: {
      title: 'กิจกรรมและพื้นที่สร้างสรรค์',
      subtitle: 'พื้นที่อเนกประสงค์สำหรับงานสัมมนา ดนตรีสด และการส่งเสริมวัฒนธรรมท้องถิ่น'
    },
    events: {
      title: 'อีเวนต์และกิจกรรมที่กำลังจะมาถึง',
      subtitle: 'พบปะนักเขียน ยามค่ำคืนกับอาหารจานพิเศษ และการชิมไวน์กับผู้ผลิตท้องถิ่น'
    },
    reservation: {
      title: 'สำรองโต๊ะอาหารของคุณ',
      subtitle: 'เรายินดีต้อนรับคุณสู่ห้องอาหารประวัติศาสตร์และระเบียงกลางแจ้งฤดูร้อน',
      name: 'ชื่อ-นามสกุล',
      email: 'อีเมล',
      phone: 'เบอร์โทรศัพท์',
      date: 'วันที่',
      time: 'เวลา',
      guests: 'จำนวนผู้ร่วมโต๊ะ',
      notes: 'ข้อกำหนดพิเศษหรือการแพ้อาหาร',
      submit: 'ยืนยันการจอง'
    },
    footer: {
      desc: 'Circolo Ristorante Campidoglio - สมาคมสงเคราะห์ผู้ใช้แรงงานก่อตั้งเมื่อปี 1888 ในเมืองตูริน',
      rights: 'สงวนลิขสิทธิ์ทั้งหมด SOMS De Sanctis Campidoglio'
    }
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  cycleLanguage: () => void
  t: (typeof TRANSLATIONS)['it']
  meta: LanguageMeta
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'soms_lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('it')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null
      if (saved && ['it', 'en', 'es', 'th'].includes(saved)) {
        setLanguageState(saved)
      }
    } catch (e) {
      // ignore
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch (e) {
      // ignore
    }
  }

  const cycleLanguage = () => {
    const order: Language[] = ['it', 'en', 'es', 'th']
    const nextIdx = (order.indexOf(language) + 1) % order.length
    setLanguage(order[nextIdx])
  }

  const t = TRANSLATIONS[language] || TRANSLATIONS.it
  const meta = LANGUAGE_META[language] || LANGUAGE_META.it

  return (
    <LanguageContext.Provider value={{ language, setLanguage, cycleLanguage, t, meta }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}

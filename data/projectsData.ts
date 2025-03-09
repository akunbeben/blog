interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Peek Code',
    description: `A secure way to share private GitHub repositories without inviting collaborators or changing visibility.`,
    imgSrc: '/static/images/peek-code.png',
    href: 'https://peek.beben.space',
  },
  {
    title: 'Basic Text-to-Speech',
    description: `A simple text-to-speech implementation using Web Speech API. Built with Vite & React.`,
    imgSrc: '/static/images/text-to-speech.png',
    href: 'https://basic-text-to-speech.vercel.app',
  },
  {
    title: 'JSON.ts',
    description: `JSON.ts is a TypeScript tools for converting JSON from an endpoint into TypeScript types. Built with Bun`,
    imgSrc: '/static/images/jsonts.png',
    href: 'https://github.com/akunbeben/json.ts',
  },
  {
    title: 'Nafas',
    description: `Respiratory Rate Counter - With shareable result using a single link. Built with Vite & React`,
    imgSrc: '/static/images/nafas.png',
    href: 'https://nafas-kappa.vercel.app',
  },
  {
    title: 'TableAds - tablesignage.com',
    description: `Revamped the platform. Overall, TableAds is a comprehensive environment for businesses to display any promotional material, including voucher codes, promos, or interactive banners. Revamped using Laravel, Livewire, and Filament.`,
    imgSrc: '/static/images/tablesignage.png',
    href: 'https://tablesignage.com',
  },
  {
    title: 'Personal site and Portfolio',
    description: `Sharing my journey building a personalized portfolio site with Next.js and TailwindCSS. From a web developer's perspective, discover the challenges, growth, and creativity in crafting this digital representation.`,
    imgSrc: '/static/images/personal.png',
    href: 'https://akunbeben.vercel.app/blog/finally-building-my-portfolio-a-web-developer-journey',
  },
  {
    title: 'Futuca (Banjarmasin, ID)',
    description: `Futuca: The New You's product aids seminar attendees by assessing abilities, interests & talents via a self-assessment quiz.
    Built using TailwindCSS, Alpine, Livewire, Laravel. It was very challanging to build dynamic forms of quiz with many different types of quiz.`,
    imgSrc: '/static/images/futuca/landing.png',
  },
  {
    title: 'Veldeva (Banjarmasin, ID)',
    description: `Online learning platform khusus untuk meningkatkan skill digital, materi diisi oleh Mentor dari Praktisi Industri.
    Built using Laravel in the Backend, VueJS (NuxtJS) in the Frontend.`,
    imgSrc: '/static/images/veldeva/landing.png',
    href: 'https://veldeva.id/',
  },
  {
    title: 'WLS Booking System (Banjarmasin, ID)',
    description: `Booking platform for a creative space where collaboration, entrepreneur, and education meets. Built using Laravel.`,
    imgSrc: '/static/images/wls/landing.png',
    href: 'https://booking.wetlandsquare.id',
  },
  {
    title: 'Eligibilty Checking (Lucknow, IN)',
    description: `I created a versatile form with TailwindCSS, AlpineJS, Livewire, Laravel.
    It handles various submissions like Personal and Business Loan eligibility checks, each with unique backend calculation formulas.
    To ensure data consistency, I use DTO as a data abstraction layer.`,
    imgSrc: '/static/images/wincapital/landing.png',
  },
  {
    title: 'Bridge (Lufkin, TX)',
    description: `Very niche CRM system for a photography and videography company.
    I've created customer checkout feature for their gallery, and helping team to integrate the system to the Stripe payment and subscription.
    Built using Laravel.`,
    imgSrc: '/static/images/bridge/home.png',
  },
  {
    title: 'PEDEVE ERP (Jakarta, ID)',
    description: `Collaborating with team members to rewrite and upgrade old (2005) ERP system from ASPX to Laravel.`,
    imgSrc: '/static/images/pedeve/home.png',
  },
  {
    title: 'Open Journal System (Jakarta, ID)',
    description: `Custom Open Journal System for P3MB Indonesia. P3MB is an Government Quality Assurance Service in Indonesia.`,
    imgSrc: '/static/images/bpsmb/home.png',
    href: 'https://p3mb.or.id'
  },
]

export default projectsData

import ContactForm from '@/components/ContactForm'
import ProjectSection from '@/components/ProjectSection'

const BASE = 'https://properties.hassanallameg-developments.com/wp-content/uploads'

const projects = [
  {
    id: 'swan-lake-residence',
    title: 'Swan Lake Residence كمبوند',
    subtitle: 'مشروع سكني راقي في قلب القاهرة الجديدة',
    logo: `${BASE}/2022/12/swpng.png`,
    logoAlt: 'Swan Lake Residence',
    bgColor: 'bg-[#0d0d0d]',
    units: [
      { type: 'Apartments', image: `${BASE}/2022/12/sw5.jpg` },
      { type: 'Townhouses', image: `${BASE}/2022/12/sw3.jpg` },
      { type: 'Twin Houses', image: `${BASE}/2022/12/sw2.jpg` },
      { type: 'Standalone Villas', image: `${BASE}/2022/12/sw1.jpg` },
    ],
    mainImage: `${BASE}/2022/12/sw6.jpg`,
    locationDetails: [
      'موقع فريد على مقربة من الطريق الدائري أهم محاور مدينة القاهرة',
      'يقع بالقرب من مشروعات هامة مثل فندق جي دبليو ماريوت ومشروع ميراج سيتي',
      'يمكن الوصول من الكمبوند للقاهرة الجديدة في غضون دقائق معدودة بالسيارة',
      'يقع بالقرب منه محطة بنزين مصر للبترول في الجهة الشمالية من الكمبوند',
      'موقع قريب جداً من الجامعة الأمريكية ويفصله عنها دقائق قليلة',
    ],
    features: [
      'مناطق مخصصة للأطفال',
      'حمامات السباحة',
      'عدد كبير من الكافيهات والمطاعم الفاخرة',
      'أماكن خاصة للحيوانات الأليفة',
      'خدمات الحراسة والأمن المدربة',
      'كاميرات حديثة للمراقبة في كل مكان',
      'مساحات خضراء واسعة',
      'بحيرات مياه كريستالية ونوافير مائية',
      'جراجات مخصصة للسيارات',
      'مسارات وتراكات مخصصة للمشي والجري',
      'مركز طبي كبير',
      'نادي اجتماعي ضخم',
    ],
  },
  {
    id: 'hap-town',
    title: 'Hap Town كمبوند',
    subtitle: 'مجمع سكني متكامل في مدينة المستقبل بالقاهرة الجديدة',
    logo: `${BASE}/2022/12/haptown.png`,
    logoAlt: 'Hap Town',
    bgColor: 'bg-[#111]',
    units: [
      { type: 'Apartments', image: `${BASE}/2022/12/hap4.jpg` },
      { type: 'Townhouses', image: `${BASE}/2022/12/hap8.jpg` },
      { type: 'Twin Houses', image: `${BASE}/2022/12/hap7.jpg` },
      { type: 'Standalone Villas', image: `${BASE}/2022/12/hap6.jpg` },
    ],
    mainImage: `${BASE}/2022/12/hap2.jpg`,
    locationDetails: [
      'يقع في الامتداد الشرقي للقاهرة الجديدة',
      'الموقع قريب من محور محمد بن زايد الذي يربط بين القاهرة الجديدة والعاصمة الإدارية الجديدة',
      'كمبوند هاب تاون قريب جداً من كمبوند ماونتن فيو القاهرة الجديدة الشهير',
      'الموقع الجديد للجامعة الأمريكية على مقربة من الكمبوند',
      'يقع بالقرب من مشروعات سكنية فخمة مثل كمبوند ميفيدا وهايد بارك',
    ],
    features: [
      'مناطق ترفيهية مقامة للأطفال',
      'حمامات سباحة خاصة بالفيلات المستقلة',
      'ملاعب رياضية كبيرة',
      'عدد من البحيرات الصناعية',
      'مكان كبير مخصص لركوب الدراجات',
      'مجمع ومول تجاري ضخم',
      'عدد كبير من المحلات التجارية',
      'الصيدليات التي تعمل على مدار اليوم',
      'جراجات متطورة للسيارات',
      'نادي رياضي كبير',
    ],
  },
  {
    id: 'swan-lake-october',
    title: 'Swan Lake كمبوند',
    subtitle: 'واحد من بين أهم وأفخم التجمعات السكنية في مدينة 6 أكتوبر',
    logo: `${BASE}/2022/12/swanlaker.png`,
    logoAlt: 'Swan Lake October',
    bgColor: 'bg-[#0d0d0d]',
    units: [
      { type: 'Townhouses', image: `${BASE}/2022/12/slw8.jpg` },
      { type: 'Twin Houses', image: `${BASE}/2022/12/slw7.jpg` },
      { type: 'Standalone Villas', image: `${BASE}/2022/12/slw6.jpg` },
      { type: 'Views', image: `${BASE}/2022/12/slw2.jpg` },
    ],
    mainImage: `${BASE}/2022/12/slw5.jpg`,
    locationDetails: [
      'يفصله 6 دقائق عن مستشفى دار الفؤاد ودريم لاند',
      'يوجد بالقرب من هايبر وان ومول العرب بحوالي 8 كيلو متر فقط',
      'يبعُد عن المدرسة البريطانية الدولية بخطوات',
      'يمكن الوصول عن طريق الطريق الدائري وطريق الفيوم وطريق الواحات',
      'يبتعد عن مول مصر بـ 4 دقائق',
      'يوجد على بُعد 8 دقائق من كابيتال بيزنس بارك',
      'يفصله مسافة 6 كيلو متر عن نادي الجزيرة الرياضي',
    ],
    features: [
      'نادي اجتماعي',
      'نادي صحي يضم العديد من الأجهزة الحديثة',
      'مول تجاري',
      'أماكن مُخصصة للأطفال',
      'البحيرات الصناعية ونوافير مائية',
      'جيم رياضي بأحدث الأجهزة',
      'منطقة تجارية ضخمة',
      'جراجات لجميع الوحدات',
      'عدد من المطاعم والكافيهات',
      'خدمات التنظيف الدائم للوحدات',
    ],
  },
  {
    id: 'swan-lake-north-coast',
    title: 'Swan Lake الساحل الشمالي',
    subtitle: 'من أرقى منتجعات الساحل الشمالي التي تتمتع بالتصميم المعماري الرائع',
    logo: `${BASE}/2022/12/swanlaken.png`,
    logoAlt: 'Swan Lake North Coast',
    bgColor: 'bg-[#111]',
    units: [
      { type: 'Chalets', image: `${BASE}/2022/12/sn6.jpg` },
      { type: 'Twin Houses', image: `${BASE}/2022/12/sn5.jpg` },
      { type: 'Standalone Villas', image: `${BASE}/2022/12/sn4.jpg` },
      { type: 'Views', image: `${BASE}/2022/12/sn2.jpg` },
    ],
    mainImage: `${BASE}/2022/12/sn1.jpg`,
    locationDetails: [
      'موقع استراتيجي على طريق الساحل الشمالي الرئيسي في منطقة سيدي عبد الرحمن',
      'إطلالة على طريق الإسكندرية – مطروح الساحلي',
      'قريبة من طريق فوكه الجديد الذي يربط الساحل بالقاهرة بمسافة ساعة ونصف فقط',
      'مُحاطة بالعديد من الأماكن الحيوية مثل رأس الحكمة والعلمين الجديدة',
      'تبعد عن الإسكندرية بمسافة ساعة ونصف فقط',
    ],
    features: [
      'تزويد كافة الوحدات بدش مركزي',
      'تخصيص مراكز للغطس',
      'أكبر أكوا بارك',
      'توفير مستشفيات وعيادات تخصصية',
      'كلوب هاوس بفيو خلاب',
      'اطلالة مباشرة لجميع الوحدات على البحر',
      'بحيرات كريستالية',
      'نادي ترفيهي مُجهز بأحدث الألعاب',
      'مراكز تسوقية متعددة',
      'مولات تضم أشهر البراندات العالمية',
    ],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image grid */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-30">
          <img src={`${BASE}/2022/12/hapx-1024x576.jpg`} alt="" className="w-full h-full object-cover" />
          <img src={`${BASE}/2022/12/swanx-1024x576.jpg`} alt="" className="w-full h-full object-cover" />
          <img src={`${BASE}/2022/12/swanz-1024x576.jpg`} alt="" className="w-full h-full object-cover" />
          <img src={`${BASE}/2022/12/swanc-1024x576.jpg`} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={`${BASE}/2021/11/hassan-allam-logo-white.png`}
              alt="Hassan Allam Properties"
              className="h-16 md:h-24 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white">
            امتلك وحدتك بأضخم مشاريع
            <br />
            <span className="gold-shimmer">شركة حسن علام للتطوير العقاري</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            شركة حسن علام من أكبر شركات العقارات في مصر والشرق الأوسط — تجربة سكنية استثنائية منذ عام 1936
          </p>

          {/* Project Nav Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {[
              { label: 'Swan Lake القاهرة الجديدة', href: '#swan-lake-residence' },
              { label: 'Hap Town المستقبل', href: '#hap-town' },
              { label: 'Swan Lake 6 أكتوبر', href: '#swan-lake-october' },
              { label: 'Swan Lake الساحل', href: '#swan-lake-north-coast' },
            ].map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className="block py-3 px-4 rounded-xl text-sm font-bold text-white border border-yellow-600/40 hover:border-yellow-500 hover:bg-yellow-600/10 transition-all duration-300 text-center"
              >
                {btn.label}
              </a>
            ))}
          </div>

          {/* Hero Form */}
          <div className="max-w-md mx-auto">
            <ContactForm darkBg />
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="divider-gold mb-10 max-w-xs mx-auto" />

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            شركة حسن علام للتطوير العقاري
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
            شركة حسن علام من أكبر شركات العقارات في مصر وأيضاً الشرق الأوسط، فقد حققت الشركة إنجازاً ملحوظاً داخل سوق العقارات وذلك بتنفيذها العديد من المشاريع العقارية الناجحة.
          </p>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
            تأسست عام 1936 ميلادياً وفي خلال تلك الأعوام قامت بتنفيذ العديد من المشاريع العقارية الناجحة وقد توسعت كثيراً لتصل إلى دول الشرق الأوسط. حصلت على شهادة الأيزو عام 2015 ووسام الاستحقاق من الدرجة الأولى.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { num: '1936', label: 'تأسست عام' },
              { num: '+15,000', label: 'وحدة سكنية' },
              { num: '+80', label: 'عاماً من الخبرة' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-yellow-600/10">
                <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: 'var(--gold)' }}>{stat.num}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="divider-gold mt-10 max-w-xs mx-auto" />
        </div>
      </section>

      {/* ===== PROJECT SECTIONS ===== */}
      {projects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}

      {/* ===== PAYMENT + FINAL CTA ===== */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">

          {/* Payment Info */}
          <div className="grid grid-cols-3 gap-4 mb-16">
            {[
              { icon: '🏠', label: 'متوفر مساحات مختلفة' },
              { icon: '📅', label: 'أقساط حتى 10 سنوات' },
              { icon: '💰', label: 'بمقدمات تبدأ من 5%' },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center bg-gradient-to-b from-yellow-600/10 to-transparent border border-yellow-600/20 rounded-2xl p-6"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-white font-bold text-sm md:text-base">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Final Form */}
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-center mb-8 text-white">
              للاستفسار والتواصل مع قسم المبيعات
            </h2>
            <ContactForm darkBg />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black border-t border-yellow-600/20 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img
            src={`${BASE}/2021/11/hassan-allam-logo-white.png`}
            alt="Hassan Allam Properties"
            className="h-12 object-contain mx-auto mb-6"
          />

          <a
            href="tel:+201008900076"
            className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold mb-8"
          >
            📞 اتصل بنا: 01008900076
          </a>

          <div className="divider-gold mb-6 max-w-xs mx-auto" />

          <p className="text-gray-600 text-sm">
            All Rights Reserved © Curve Real Estate |{' '}
            <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">
              Privacy Policy & Terms of Service
            </a>
          </p>
        </div>
      </footer>

    </main>
  )
}

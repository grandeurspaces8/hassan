import Image from 'next/image'
import ContactForm from './ContactForm'

export default function ProjectSection({ project }) {
  const { id, title, subtitle, logo, logoAlt, units, images, mainImage, location, locationDetails, features, bgColor } = project

  return (
    <section id={id} className={`py-20 ${bgColor || 'bg-section-bg'}`}>
      <div className="max-w-6xl mx-auto px-4">

        {/* Project Logo + Title */}
        <div className="text-center mb-12">
          {logo && (
            <div className="flex justify-center mb-6">
              <img src={logo} alt={logoAlt} className="h-16 md:h-20 object-contain" />
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-black mb-3 text-white">{title}</h2>
          <p className="text-lg text-gray-400">{subtitle}</p>
          <div className="divider-gold mt-6 max-w-xs mx-auto" />
        </div>

        {/* Unit Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {units.map((unit, i) => (
            <div key={i} className="card-hover relative rounded-2xl overflow-hidden group cursor-pointer" style={{ aspectRatio: '4/3' }}>
              <img
                src={unit.image}
                alt={unit.type}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-3 text-center">
                <span className="text-white font-bold text-sm md:text-base">{unit.type}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Image */}
        {mainImage && (
          <div className="rounded-2xl overflow-hidden mb-12 relative" style={{ height: '300px' }}>
            <img src={mainImage} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        {/* Location + Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Location */}
          <div className="bg-white/5 rounded-2xl p-6 border border-yellow-600/10">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--gold)' }}>
              📍 موقع {title}
            </h3>
            <ul className="space-y-2">
              {locationDetails.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="bg-white/5 rounded-2xl p-6 border border-yellow-600/10">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--gold)' }}>
              ✨ خدمات ومميزات الكمبوند
            </h3>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-md mx-auto">
          <ContactForm darkBg />
        </div>

      </div>
    </section>
  )
}

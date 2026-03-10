'use client'

import { useState } from 'react'

const LEAD_EMAIL = 'leads@grandeur-spaces.com'

export default function ContactForm({ darkBg = false }) {
  const [formData, setFormData] = useState({ name: '', mobile: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.mobile) return
    setLoading(true)

    // Send lead via mailto
    const subject = encodeURIComponent('ليد جديد - حسن علام للتطوير العقاري')
    const body = encodeURIComponent(
      'ليد جديد من صفحة حسن علام\n\n' +
      'الاسم: ' + formData.name + '\n' +
      'رقم الموبايل: ' + formData.mobile + '\n' +
      'التاريخ: ' + new Date().toLocaleString('ar-EG')
    )
    window.open('mailto:' + LEAD_EMAIL + '?subject=' + subject + '&body=' + body)

    await new Promise(r => setTimeout(r, 600))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className={`rounded-2xl p-8 text-center ${darkBg ? 'bg-black/60' : 'bg-white/5'} border border-yellow-600/30`}>
        <div className="text-5xl mb-4">✅</div>
        <p className="text-xl font-bold" style={{ color: 'var(--gold)' }}>شكراً لتواصلك معنا</p>
        <p className="text-gray-300 mt-2">سيتواصل معك فريق المبيعات في أقرب وقت</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`rounded-2xl p-6 md:p-8 ${darkBg ? 'bg-black/70' : 'bg-white/5'} border border-yellow-600/20 backdrop-blur-sm`}>
      <h3 className="text-2xl font-bold text-center mb-6" style={{ color: 'var(--gold)' }}>
        تسجيل البيانات
      </h3>
      <p className="text-gray-400 text-center text-sm mb-6">
        يرجى تسجيل الاسم ورقم الموبايل وسيقوم أحد أفراد قسم المبيعات بالتواصل معك في أقرب وقت
      </p>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="الاسم"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors text-right"
        />
        <input
          type="tel"
          placeholder="رقم الموبايل"
          value={formData.mobile}
          onChange={e => setFormData({ ...formData, mobile: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors text-right"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-gold w-full py-4 rounded-xl text-lg font-bold tracking-wide"
        >
          {loading ? 'جاري التسجيل...' : 'تسجيل'}
        </button>
      </div>
    </form>
  )
}

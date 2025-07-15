import { useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function Contact() {
  const { t } = useTranslation(['common', 'contact']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create WhatsApp message
      const whatsappTemplate = t('contact.whatsapp_message', { ns: 'contact' });
      const whatsappMessage = whatsappTemplate
        .replace('{name}', formData.name)
        .replace('{email}', formData.email)
        .replace('{phone}', formData.phone)
        .replace('{subject}', formData.service)
        .replace('{message}', formData.message);
      
      const whatsappUrl = `https://wa.me/212661234567?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'general', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-blue-600 font-inter font-medium text-sm uppercase tracking-wider mb-6 block">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {t('contact_info.badge', { ns: 'contact' })}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-slate-900 mb-4 sm:mb-6 px-2">
            {t('contact.title')}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-4 px-4">
            {t('contact.subtitle')}
          </p>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto px-4">
            {t('contact_info.availability', { ns: 'contact' })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            {/* Company Info */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white mb-6 sm:mb-8">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-2">{t('site_name')}</h3>
                <p className="text-blue-100 mb-4">{t('contact_info.agency_certified', { ns: 'contact' })}</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('contact_info.iata_certified', { ns: 'contact' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {t('contact_info.experience', { ns: 'contact' })}
                  </span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold text-slate-900 mb-2 text-center sm:text-left">{t('contact.info.agency')}</h3>
                  <p className="text-slate-600 leading-relaxed mb-3 text-center sm:text-left text-sm sm:text-base">
                    {t('contact_info.office_address', { ns: 'contact' }).split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index === 0 && <br />}
                      </span>
                    ))}
                  </p>
                  <div className="text-sm text-slate-500">
                    <p className="font-medium mb-1">{t('contact_info.hours.label', { ns: 'contact' })}:</p>
                    <p>{t('contact_info.hours.weekdays', { ns: 'contact' })}</p>
                    <p>{t('contact_info.hours.saturday', { ns: 'contact' })}</p>
                    <p className="text-red-500">{t('contact_info.hours.sunday', { ns: 'contact' })}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold text-slate-900 mb-2 text-center sm:text-left">{t('contact.phone')}</h3>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                      <span className="text-sm text-slate-500">{t('contact_info.phone.office', { ns: 'contact' })}:</span>
                      <a href="tel:+212522123456" className="text-slate-600 hover:text-green-600 transition-colors font-medium text-sm sm:text-base">+212 522-123-456</a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                      <span className="text-sm text-slate-500">{t('contact_info.phone.mobile', { ns: 'contact' })}:</span>
                      <a href="tel:+212661234567" className="text-slate-600 hover:text-green-600 transition-colors font-medium text-sm sm:text-base">+212 661-234-567</a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                      <span className="text-sm text-slate-500">{t('contact_info.phone.emergency', { ns: 'contact' })}:</span>
                      <a href="tel:+212662345678" className="text-slate-600 hover:text-green-600 transition-colors font-medium text-sm sm:text-base">+212 662-345-678</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200/50 hover:border-amber-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold text-slate-900 mb-2 text-center sm:text-left">{t('contact.email')}</h3>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                      <span className="text-sm text-slate-500">{t('contact_info.email.general', { ns: 'contact' })}:</span>
                      <a href="mailto:contact@vaoyage.com" className="text-slate-600 hover:text-amber-600 transition-colors font-medium text-sm sm:text-base break-all">contact@vaoyage.com</a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                      <span className="text-sm text-slate-500">{t('contact_info.email.reservations', { ns: 'contact' })}:</span>
                      <a href="mailto:reservations@vaoyage.com" className="text-slate-600 hover:text-amber-600 transition-colors font-medium text-sm sm:text-base break-all">reservations@vaoyage.com</a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                      <span className="text-sm text-slate-500">{t('contact_info.email.support', { ns: 'contact' })}:</span>
                      <a href="mailto:support@vaoyage.com" className="text-slate-600 hover:text-amber-600 transition-colors font-medium text-sm sm:text-base break-all">support@vaoyage.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp & Social Media */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold text-slate-900 mb-3 text-center sm:text-left">{t('contact_info.whatsapp.title', { ns: 'contact' })}</h3>
                  <div className="space-y-2 mb-4">
                    <a href="https://wa.me/message/HCUPHT7NUHCOO1" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group space-y-1 sm:space-y-0">
                      <span className="text-sm text-slate-600">{t('contact_info.whatsapp.subtitle', { ns: 'contact' })}</span>
                      <span className="text-green-600 font-medium group-hover:text-green-700 text-sm sm:text-base">+212 661-234-567</span>
                    </a>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-slate-500 mb-2">{t('contact_info.social.title', { ns: 'contact' })}:</p>
                    <div className="flex space-x-3">
                      <a href="#" className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 p-6 sm:p-8 lg:p-12 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-slate-900 mb-4">{t('form.title', { ns: 'contact' })}</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4" />
              <p className="text-slate-600 text-sm sm:text-base px-2">{t('form.subtitle', { ns: 'contact' })}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-inter font-medium text-slate-700 mb-3">
                    {t('form.fields.name.label', { ns: 'contact' })} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-slate-300 bg-slate-50/50 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white transition-all duration-300 placeholder-slate-400 text-sm sm:text-base"
                    placeholder={t('form.fields.name.placeholder', { ns: 'contact' })}
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-inter font-medium text-slate-700 mb-3">
                    {t('form.fields.email.label', { ns: 'contact' })} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-slate-300 bg-slate-50/50 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white transition-all duration-300 placeholder-slate-400 text-sm sm:text-base"
                    placeholder={t('form.fields.email.placeholder', { ns: 'contact' })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-inter font-medium text-slate-700 mb-3">
                    {t('form.fields.phone.label', { ns: 'contact' })} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-slate-300 bg-slate-50/50 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white transition-all duration-300 placeholder-slate-400 text-sm sm:text-base"
                    placeholder={t('form.fields.phone.placeholder', { ns: 'contact' })}
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="service" className="block text-sm font-inter font-medium text-slate-700 mb-3">
                    {t('form.fields.subject.label', { ns: 'contact' })}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-slate-300 bg-slate-50/50 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="general">{t('form.fields.subject.options.general', { ns: 'contact' })}</option>
                    <option value="booking">{t('form.fields.subject.options.booking', { ns: 'contact' })}</option>
                    <option value="support">{t('form.fields.subject.options.support', { ns: 'contact' })}</option>
                    <option value="partnership">{t('form.fields.subject.options.partnership', { ns: 'contact' })}</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-inter font-medium text-slate-700 mb-3">
                  {t('form.fields.message.label', { ns: 'contact' })} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-slate-300 bg-slate-50/50 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white transition-all duration-300 placeholder-slate-400 resize-none text-sm sm:text-base"
                  placeholder={t('form.fields.message.placeholder', { ns: 'contact' })}
                  required
                ></textarea>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-green-800 font-medium">{t('form.success.message', { ns: 'contact' })}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-800 font-medium">Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 sm:py-5 px-6 sm:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-purple-600 hover:via-blue-600 hover:to-purple-700 disabled:from-slate-400 disabled:via-slate-500 disabled:to-slate-400 disabled:cursor-not-allowed text-white font-inter font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-[1.02] disabled:hover:scale-100 transition-all duration-500 relative overflow-hidden group text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{t('form.loading_text', { ns: 'contact' })}</span>
                  </span>
                ) : (
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    <span>{t('form.submit_button', { ns: 'contact' })}</span>
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
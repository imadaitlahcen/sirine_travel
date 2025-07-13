import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Footer from '../components/Footer';
import FormInput from '../components/FormInput';
import LoadingButton from '../components/LoadingButton';
import { useFormValidation, commonValidationRules } from '../hooks/useFormValidation';

export default function IstanbulPage() {
  const { t } = useTranslation(['common', 'navigation']);
  const { t: tIstanbul } = useTranslation('istanbul');
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDates: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Form validation setup
  const validationRules = {
    name: commonValidationRules.name,
    email: commonValidationRules.email,
    phone: commonValidationRules.phone,
    travelDates: { required: true },
    message: commonValidationRules.message
  };
  
  const {
    validateForm,
    validateSingleField,
    setFieldTouched,
    clearErrors,
    getFieldError
  } = useFormValidation(validationRules);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm(formData)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create dynamic WhatsApp message based on current language
      const currentLang = router.locale || 'fr';
      const messageTemplate = tIstanbul(`whatsapp_messages.${currentLang}`);
      
      const whatsappMessage = messageTemplate
        .replace('{name}', formData.name)
        .replace('{email}', formData.email)
        .replace('{phone}', formData.phone)
        .replace('{travelDates}', formData.travelDates)
        .replace('{message}', formData.message || tIstanbul('form.no_message'));
      
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/212644354175?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      
      // Show success state
      setSubmitSuccess(true);
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', travelDates: '', message: '' });
        clearErrors();
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error sending form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Validate field on change if it was previously touched
    validateSingleField(name, value);
  };

  const scrollToReservation = () => {
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>{t('site_name')}</title>
        <meta name="description" content="Découvrez Istanbul, pont entre l'Orient et l'Occident. Escapade chic entre tradition et modernité." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Vue panoramique d'Istanbul"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            {tIstanbul('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {tIstanbul('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToReservation}
              className="bg-gradient-to-r from-teal-700 via-teal-600 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-800 hover:via-teal-700 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {tIstanbul('hero.cta_primary')}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              {tIstanbul('hero.cta_secondary')}
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                Istanbul, Pont entre Deux Mondes
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Istanbul vous fascine par sa position unique entre l&rsquo;Europe et l&rsquo;Asie, 
                où se mélangent harmonieusement traditions ottomanes et modernité cosmopolite. 
                Cette métropole vibrante offre une expérience urbaine incomparable.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Explorez ses bazars colorés, ses mosquées majestueuses, sa gastronomie 
                raffinée et sa vie nocturne animée. Istanbul is the new cool - découvrez 
                pourquoi cette ville captive tous les voyageurs en quête d&rsquo;authenticité 
                et de sophistication.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2000+</div>
                  <div className="text-gray-600">Ans d'histoire</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-pink-600 mb-2">3-7</div>
                  <div className="text-gray-600">Jours de voyage</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Mosquée Bleue à Istanbul"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              {tIstanbul('destinations.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tIstanbul('destinations.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sainte-Sophie',
                image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Chef-d&rsquo;œuvre architectural byzantin et ottoman'
              },
              {
                name: 'Grand Bazar',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Marché couvert historique aux mille couleurs'
              },
              {
                name: 'Bosphore',
                image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Détroit mythique entre Europe et Asie'
              }
            ].map((destination, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="reservation" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">{tIstanbul('reservation.title')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tIstanbul('reservation.subtitle')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  label={tIstanbul('reservation.form.name.label')}
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={tIstanbul('reservation.form.name.placeholder')}
                  required
                  error={getFieldError('name')}
                  aria-label={tIstanbul('reservation.form.name.aria_label')}
                />
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  label={tIstanbul('reservation.form.email.label')}
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={tIstanbul('reservation.form.email.placeholder')}
                  required
                  error={getFieldError('email')}
                  aria-label={tIstanbul('reservation.form.email.aria_label')}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  type="tel"
                  id="phone"
                  name="phone"
                  label={tIstanbul('reservation.form.phone.label')}
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={tIstanbul('reservation.form.phone.placeholder')}
                  required
                  error={getFieldError('phone')}
                  aria-label={tIstanbul('reservation.form.phone.aria_label')}
                />
                <FormInput
                  type="text"
                  id="travelDates"
                  name="travelDates"
                  label={tIstanbul('reservation.form.travel_dates.label')}
                  value={formData.travelDates}
                  onChange={handleInputChange}
                  placeholder={tIstanbul('reservation.form.travel_dates.placeholder')}
                  required
                  error={getFieldError('travelDates')}
                  aria-label={tIstanbul('reservation.form.travel_dates.aria_label')}
                />
              </div>

              <FormInput
                type="textarea"
                id="message"
                name="message"
                label={tIstanbul('reservation.form.message.label')}
                value={formData.message}
                onChange={handleInputChange}
                placeholder={tIstanbul('reservation.form.message.placeholder')}
                rows={4}
                error={getFieldError('message')}
                aria-label={tIstanbul('reservation.form.message.aria_label')}
              />

              <div className="text-center">
                {submitSuccess ? (
                  <div className="flex items-center justify-center gap-3 px-10 py-5 bg-green-100 text-green-800 rounded-xl border border-green-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">{tIstanbul('reservation.form.success_message')}</span>
                  </div>
                ) : (
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    loadingText={tIstanbul('reservation.form.submitting')}
                    className="w-full bg-gradient-to-r from-teal-700 to-amber-600 hover:from-teal-800 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {tIstanbul('reservation.form.submit')}
                  </LoadingButton>
                )}
              </div>
            </form>

            {/* Contact info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Phone */}
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <svg className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{tIstanbul('reservation.contact_info.phone.title')}</h4>
                  <p className="text-gray-600 mb-6 font-medium">{tIstanbul('reservation.contact_info.phone.number')}</p>
                  <a href="tel:+212XXXXXXXXX" className="group/btn relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                    <span className="relative z-10">{tIstanbul('reservation.contact_info.phone.action')}</span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <svg className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{tIstanbul('reservation.contact_info.whatsapp.title')}</h4>
                  <p className="text-gray-600 mb-6 font-medium">{tIstanbul('reservation.contact_info.whatsapp.number')}</p>
                  <a href={`https://wa.me/212644354175?text=${encodeURIComponent(tIstanbul('reservation.contact_info.whatsapp.message'))}`} className="group/btn relative bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                    <span className="relative z-10">{tIstanbul('reservation.contact_info.whatsapp.action')}</span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                </div>

                {/* Email */}
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <svg className="w-10 h-10 text-purple-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{tIstanbul('reservation.contact_info.email.title')}</h4>
                  <p className="text-gray-600 mb-6 font-medium">{tIstanbul('reservation.contact_info.email.address')}</p>
                  <a href={`mailto:${tIstanbul('reservation.contact_info.email.address')}`} className="group/btn relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                    <span className="relative z-10">{tIstanbul('reservation.contact_info.email.action')}</span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-amber-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            {tIstanbul('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {tIstanbul('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              {tIstanbul('cta.contact_us')}
            </Link>
            <Link href="/" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              {tIstanbul('cta.back_home')}
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common', 'navigation', 'services', 'istanbul'])),
    },
  };
};
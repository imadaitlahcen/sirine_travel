import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormInput from '../components/FormInput';
import LoadingButton from '../components/LoadingButton';
import { useFormValidation, commonValidationRules } from '../hooks/useFormValidation';

export default function EgyptePage() {
  const { t } = useTranslation(['common', 'navigation']);
  const { t: tEgypte } = useTranslation('egypte');
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
      
      // Create WhatsApp message using translation
      const messageTemplate = tEgypte('reservation.whatsapp_message');
      const whatsappMessage = messageTemplate
        .replace('{name}', formData.name)
        .replace('{email}', formData.email)
        .replace('{phone}', formData.phone)
        .replace('{dates}', formData.travelDates)
        .replace('{message}', formData.message || 'Aucun message spécifique');
      
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
        <title>Égypte - Terre des Pharaons | Agence de Voyage</title>
        <meta name="description" content="Découvrez l'Égypte, berceau de la civilisation antique. Pyramides, temples et croisière sur le Nil." />
      </Head>

      <Header />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden pt-16">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Pyramides de Gizeh"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <div className="transform transition-all duration-1000">
                <span className="inline-block text-amber-300 font-semibold text-sm uppercase tracking-wider mb-4">{tEgypte('hero.badge')}</span>
                <h1 className="text-6xl md:text-8xl font-bold font-serif text-white mb-6 drop-shadow-2xl">
                  {tEgypte('hero.title')}
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-8"></div>
                <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-lg">
                  {tEgypte('hero.subtitle')}
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <button 
                    onClick={scrollToReservation}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {tEgypte('hero.cta_book')}
                  </button>
                  <Link href="#destinations" className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
                    {tEgypte('hero.cta_discover')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="destinations" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">{tEgypte('destinations.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {tEgypte('destinations.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pyramides de Gizeh */}
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Pyramides de Gizeh"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tEgypte('destinations.giza.name')}</h3>
                  <p className="text-gray-600 mb-4">{tEgypte('destinations.giza.description')}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">À partir de 1,200 MAD</span>
                    <span className="text-sm text-gray-500">par personne</span>
                  </div>
                </div>
              </div>

              {/* Vallée des Rois */}
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Vallée des Rois"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tEgypte('destinations.valley_kings.name')}</h3>
                  <p className="text-gray-600 mb-4">{tEgypte('destinations.valley_kings.description')}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">À partir de 950 MAD</span>
                    <span className="text-sm text-gray-500">par personne</span>
                  </div>
                </div>
              </div>

              {/* Croisière sur le Nil */}
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Croisière sur le Nil"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tEgypte('destinations.nile_cruise.name')}</h3>
                  <p className="text-gray-600 mb-4">{tEgypte('destinations.nile_cruise.description')}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">À partir de 4,500 MAD</span>
                    <span className="text-sm text-gray-500">par personne</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation Form Section */}
        <section id="reservation" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                {tEgypte('reservation.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {tEgypte('reservation.subtitle')}
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    {tEgypte('reservation.success.title')}
                  </h3>
                  <p className="text-gray-600">
                    {tEgypte('reservation.success.message')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      id="name"
                      label={tEgypte('reservation.form.name_label')}
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={tEgypte('reservation.form.name_placeholder')}
                      error={getFieldError('name')}
                      required
                    />
                    <FormInput
                      id="email"
                      label={tEgypte('reservation.form.email_label')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={tEgypte('reservation.form.email_placeholder')}
                      error={getFieldError('email')}
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      id="phone"
                      label={tEgypte('reservation.form.phone_label')}
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={tEgypte('reservation.form.phone_placeholder')}
                      error={getFieldError('phone')}
                      required
                    />
                    <FormInput
                      id="travelDates"
                      label={tEgypte('reservation.form.dates_label')}
                      name="travelDates"
                      type="text"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      placeholder={tEgypte('reservation.form.dates_placeholder')}
                      error={getFieldError('travelDates')}
                      required
                    />
                  </div>
                  
                  <FormInput
                    id="message"
                    label={tEgypte('reservation.form.message_label')}
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={tEgypte('reservation.form.message_placeholder')}
                    error={getFieldError('message')}
                    rows={4}
                  />
                  
                  <div className="pt-4">
                    <LoadingButton
                      type="submit"
                      loading={isSubmitting}
                      loadingText={tEgypte('reservation.form.loading_text')}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-8 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {tEgypte('reservation.form.submit_button')}
                    </LoadingButton>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-semibold text-gray-900 mb-2">{tEgypte('reservation.contact.phone.title')}</h3>
                <p className="text-gray-600">+212 644 354 175</p>
                <a href="tel:+212644354175" className="text-amber-600 hover:text-amber-700 font-medium">
                  {tEgypte('reservation.contact.phone.action')}
                </a>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="font-semibold text-gray-900 mb-2">{tEgypte('reservation.contact.whatsapp.title')}</h3>
                <p className="text-gray-600">+212 644 354 175</p>
                <a href="https://wa.me/212644354175" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-medium">
                  {tEgypte('reservation.contact.whatsapp.action')}
                </a>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="font-semibold text-gray-900 mb-2">{tEgypte('reservation.contact.email.title')}</h3>
                <p className="text-gray-600">contact@agence-voyage.com</p>
                <a href="mailto:contact@agence-voyage.com" className="text-amber-600 hover:text-amber-700 font-medium">
                  {tEgypte('reservation.contact.email.action')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">{tEgypte('contact_section.title')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 mb-12">
              {tEgypte('contact_section.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                {tEgypte('contact_section.contact_button')}
              </Link>
              <Link href="/" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg border border-gray-200">
                {tEgypte('contact_section.home_button')}
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common', 'navigation', 'egypte'])),
    },
  };
};
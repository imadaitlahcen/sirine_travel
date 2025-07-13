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

export default function DubaiPage() {
  const { t } = useTranslation(['common', 'navigation']);
  const { t: tDubai } = useTranslation('dubai');
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
      
      // Create WhatsApp message with translations
      const messageTemplate = tDubai('reservation.whatsapp_message');
      const whatsappMessage = messageTemplate
        .replace('{name}', formData.name)
        .replace('{email}', formData.email)
        .replace('{phone}', formData.phone)
        .replace('{dates}', formData.travelDates)
        .replace('{message}', formData.message || tDubai('reservation.form.message_placeholder'));
      
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
        <meta name="description" content="Découvrez Dubaï, métropole futuriste alliant luxe moderne et traditions orientales. Expérience unique au cœur des Émirats." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Skyline de Dubaï au coucher du soleil"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            {tDubai('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {tDubai('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToReservation}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              {tDubai('hero.cta_book')}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              {tDubai('hero.cta_quote')}
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
                {tDubai('content.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {tDubai('content.description1')}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {tDubai('content.description2')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">828m</div>
                  <div className="text-gray-600">{tDubai('content.stats.burj_khalifa')}</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4-7</div>
                  <div className="text-gray-600">{tDubai('content.stats.travel_days')}</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Burj Khalifa et fontaines de Dubaï"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              {tDubai('attractions.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tDubai('attractions.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: tDubai('attractions.burj_khalifa.name'),
                image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: tDubai('attractions.burj_khalifa.description')
              },
              {
                name: tDubai('attractions.burj_al_arab.name'),
                image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: tDubai('attractions.burj_al_arab.description')
              },
              {
                name: tDubai('attractions.palm_jumeirah.name'),
                image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: tDubai('attractions.palm_jumeirah.description')
              }
            ].map((attraction, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="reservation" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              {tDubai('reservation.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {tDubai('reservation.subtitle')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  {tDubai('reservation.success.title')}
                </h3>
                <p className="text-gray-600">
                  {tDubai('reservation.success.message')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    id="name"
                    label={tDubai('reservation.form.name_label')}
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={tDubai('reservation.form.name_placeholder')}
                    error={getFieldError('name')}
                    required
                  />
                  <FormInput
                    id="email"
                    label={tDubai('reservation.form.email_label')}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={tDubai('reservation.form.email_placeholder')}
                    error={getFieldError('email')}
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    id="phone"
                    label={tDubai('reservation.form.phone_label')}
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={tDubai('reservation.form.phone_placeholder')}
                    error={getFieldError('phone')}
                    required
                  />
                  <FormInput
                    id="travelDates"
                    label={tDubai('reservation.form.dates_label')}
                    name="travelDates"
                    type="text"
                    value={formData.travelDates}
                    onChange={handleInputChange}
                    placeholder={tDubai('reservation.form.dates_placeholder')}
                    error={getFieldError('travelDates')}
                    required
                  />
                </div>
                
                <FormInput
                  id="message"
                  label={tDubai('reservation.form.message_label')}
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={tDubai('reservation.form.message_placeholder')}
                  error={getFieldError('message')}
                  rows={4}
                />
                
                <div className="pt-4">
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    loadingText={tDubai('reservation.form.loading_text')}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-8 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {tDubai('reservation.form.submit_button')}
                  </LoadingButton>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">{tDubai('reservation.contact.phone.title')}</h3>
              <p className="text-gray-600">+212 644 354 175</p>
              <a href="tel:+212644354175" className="text-amber-600 hover:text-amber-700 font-medium">
                {tDubai('reservation.contact.phone.action')}
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">{tDubai('reservation.contact.whatsapp.title')}</h3>
              <p className="text-gray-600">+212 644 354 175</p>
              <a href="https://wa.me/212644354175" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-medium">
                {tDubai('reservation.contact.whatsapp.action')}
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="font-semibold text-gray-900 mb-2">{tDubai('reservation.contact.email.title')}</h3>
              <p className="text-gray-600">contact@agence-voyage.com</p>
              <a href="mailto:contact@agence-voyage.com" className="text-amber-600 hover:text-amber-700 font-medium">
                {tDubai('reservation.contact.email.action')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            {tDubai('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {tDubai('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              {tDubai('cta.contact_button')}
            </Link>
            <Link href="/" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              {tDubai('cta.home_button')}
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
      ...(await serverSideTranslations(locale ?? 'fr', ['common', 'navigation', 'dubai'])),
    },
  };
};
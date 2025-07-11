import { useState } from 'react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormInput from '../components/FormInput';
import LoadingButton from '../components/LoadingButton';
import { useFormValidation, commonValidationRules } from '../hooks/useFormValidation';

export default function ContactPage() {
  const { t } = useTranslation(['common', 'navigation']);
  const { t: tContact } = useTranslation('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { errors, validateForm, getFieldError } = useFormValidation(formData, {
    name: [commonValidationRules.required],
    email: [commonValidationRules.required, commonValidationRules.email],
    phone: [commonValidationRules.required],
    subject: [commonValidationRules.required],
    message: [commonValidationRules.required]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Trigger validation on blur if needed
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Créer le message WhatsApp en utilisant la même méthode que les autres pages
      const messageTemplate = tContact('whatsapp_message');
      const whatsappMessage = messageTemplate
        .replace('{name}', formData.name)
        .replace('{email}', formData.email)
        .replace('{phone}', formData.phone)
        .replace('{subject}', formData.subject)
        .replace('{message}', formData.message || 'Aucun message spécifique');
      
      const whatsappUrl = `https://wa.me/212644354175?text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappUrl, '_blank');
      
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact - Agence de Voyage</title>
        <meta name="description" content="Contactez notre agence de voyage pour planifier votre prochaine aventure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          ></div>
          
          <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {tContact('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              {tContact('hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  {tContact('contact_info.title')}
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{tContact('contact_info.address.title')}</h3>
                      <p className="text-gray-600">{tContact('contact_info.address.value')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{tContact('contact_info.phone.title')}</h3>
                      <p className="text-gray-600">+212 644 354 175</p>
                      <a href="tel:+212644354175" className="text-blue-600 hover:text-blue-700 font-medium">
                        {tContact('contact_info.phone.action')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{tContact('contact_info.email.title')}</h3>
                      <p className="text-gray-600">contact@agence-voyage.com</p>
                      <a href="mailto:contact@agence-voyage.com" className="text-blue-600 hover:text-blue-700 font-medium">
                        {tContact('contact_info.email.action')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{tContact('contact_info.whatsapp.title')}</h3>
                      <p className="text-gray-600">+212 644 354 175</p>
                      <a href="https://wa.me/212644354175" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">
                        {tContact('contact_info.whatsapp.action')}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tContact('contact_info.hours.title')}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{tContact('contact_info.hours.weekdays')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{tContact('contact_info.hours.weekend')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {tContact('form.title')}
                </h2>

                {submitSuccess && (
                  <div className="mb-8 p-6 bg-green-100 border border-green-300 rounded-lg text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      {tContact('form.success.title')}
                    </h3>
                    <p className="text-green-700">
                      {tContact('form.success.message')}
                    </p>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label={tContact('form.fields.name.label')}
                      name="name"
                      type="text"
                      placeholder={tContact('form.fields.name.placeholder')}
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      error={getFieldError('name')}
                      required
                    />
                    <FormInput
                      label={tContact('form.fields.email.label')}
                      name="email"
                      type="email"
                      placeholder={tContact('form.fields.email.placeholder')}
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      error={getFieldError('email')}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label={tContact('form.fields.phone.label')}
                      name="phone"
                      type="tel"
                      placeholder={tContact('form.fields.phone.placeholder')}
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      error={getFieldError('phone')}
                      required
                    />
                    <FormInput
                      label={tContact('form.fields.subject.label')}
                      name="subject"
                      type="text"
                      placeholder={tContact('form.fields.subject.placeholder')}
                      value={formData.subject}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      error={getFieldError('subject')}
                      required
                    />
                  </div>

                  <FormInput
                    label={tContact('form.fields.message.label')}
                    name="message"
                    type="textarea"
                    placeholder={tContact('form.fields.message.placeholder')}
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    error={getFieldError('message')}
                    rows={6}
                    required
                  />

                  <div className="pt-4">
                    <LoadingButton
                      type="submit"
                      isLoading={isSubmitting}
                      loadingText={tContact('form.loading_text')}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {tContact('form.submit_button')}
                    </LoadingButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {tContact('cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {tContact('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {tContact('cta.destinations_button')}
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                {tContact('cta.services_button')}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common', 'navigation', 'contact'])),
    },
  };
};
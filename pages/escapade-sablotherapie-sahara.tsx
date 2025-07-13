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

export default function EscapadeSablotherapieSaharaPage() {
  const { t } = useTranslation(['common', 'navigation']);
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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

  // Gallery images
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      alt: 'Dunes dorées du Sahara au coucher du soleil'
    },
    {
      url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Sablothérapie traditionnelle dans le désert'
    },
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Campement berbère sous les étoiles'
    },
    {
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Caravane de chameaux dans les dunes'
    },
    {
      url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Oasis verdoyante au cœur du Sahara'
    }
  ];

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
      
      // Create WhatsApp message
      const whatsappMessage = `Nouvelle demande de réservation - Escapade Sablothérapie Au Coeur Du Sahara\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nDates de voyage: ${formData.travelDates}\nMessage: ${formData.message || 'Aucun message spécifique'}`;
      
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

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <Head>
        <title>Escapade Sablothérapie Au Coeur Du Sahara - {t('site_name')}</title>
        <meta name="description" content="Découvrez les bienfaits thérapeutiques du sable chaud du Sahara. Une escapade unique alliant bien-être et immersion désertique." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Dunes dorées du Sahara au coucher du soleil"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
            ESCAPADE SABLOTHÉRAPIE
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-amber-200 font-light">
            Au Cœur Du Sahara
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Ressourcez-vous grâce aux vertus thérapeutiques du sable chaud du désert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToReservation}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver maintenant
            </button>
            <button 
              onClick={scrollToGallery}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Découvrir l'expérience
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                Les Bienfaits du Sable Thérapeutique
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                La sablothérapie, pratique ancestrale du Sahara, utilise les propriétés 
                thérapeutiques du sable chaud pour soulager les douleurs articulaires, 
                améliorer la circulation sanguine et détoxifier l'organisme.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dans l'immensité du désert marocain, vivez une expérience unique de 
                bien-être où la chaleur naturelle du sable et l'énergie du Sahara 
                se conjuguent pour votre régénération complète.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="text-3xl font-bold text-amber-600 mb-2">45°C</div>
                  <div className="text-gray-600">Température idéale</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">3-5</div>
                  <div className="text-gray-600">Jours de cure</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Sablothérapie traditionnelle dans le désert"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              BIENFAITS THÉRAPEUTIQUES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche holistique du bien-être au cœur du désert
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Soulagement Articulaire',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'La chaleur du sable pénètre en profondeur pour soulager rhumatismes et douleurs'
              },
              {
                name: 'Détoxification Naturelle',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Élimination des toxines par la sudation et purification de l\'organisme'
              },
              {
                name: 'Relaxation Profonde',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Apaisement du stress et reconnexion avec les énergies du désert'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-48">
                  <Image
                    src={benefit.image}
                    alt={benefit.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              GALERIE DU DÉSERT
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plongez dans l'univers mystique du Sahara
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Large image on the left */}
            <div className="lg:col-span-2 relative h-96 lg:h-[600px] rounded-2xl overflow-hidden group shadow-xl">
              <Image
                src={galleryImages[currentImageIndex].url}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg"
              >
                →
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Smaller images on the right */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {galleryImages.slice(1, 5).map((image, index) => (
                <div 
                  key={index + 1} 
                  className="relative h-32 lg:h-36 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
                  onClick={() => setCurrentImageIndex(index + 1)}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="reservation" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Réservez Votre Cure de Sablothérapie
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Offrez-vous une expérience unique de bien-être au cœur du Sahara
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 border border-amber-200">
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🌟</div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">
                  Demande envoyée avec succès !
                </h3>
                <p className="text-gray-600">
                  Nous vous contacterons très bientôt pour organiser votre cure de sablothérapie.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    id="name"
                    label="Nom complet"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom complet"
                    error={getFieldError('name')}
                    required
                  />
                  <FormInput
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    error={getFieldError('email')}
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    id="phone"
                    label="Téléphone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+212 6XX XXX XXX"
                    error={getFieldError('phone')}
                    required
                  />
                  <FormInput
                    id="travelDates"
                    label="Dates de cure"
                    name="travelDates"
                    type="text"
                    value={formData.travelDates}
                    onChange={handleInputChange}
                    placeholder="Ex: 15-20 Octobre 2024"
                    error={getFieldError('travelDates')}
                    required
                  />
                </div>
                
                <FormInput
                  id="message"
                  label="Besoins spécifiques (optionnel)"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Décrivez vos attentes ou besoins particuliers pour votre cure..."
                  error={getFieldError('message')}
                  rows={4}
                />
                
                <div className="pt-4">
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    loadingText="Envoi en cours..."
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Réserver ma cure
                  </LoadingButton>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-amber-100">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600">+212 644 354 175</p>
              <a href="tel:+212644354175" className="text-amber-600 hover:text-amber-700 font-medium">
                Appeler maintenant
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-amber-100">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600">+212 644 354 175</p>
              <a href="https://wa.me/212644354175" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">
                Chatter maintenant
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-amber-100">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contact@agence-voyage.com</p>
              <a href="mailto:contact@agence-voyage.com" className="text-amber-600 hover:text-amber-700 font-medium">
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 via-orange-700 to-red-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Régénérez-vous dans le Sahara !
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Une expérience thérapeutique unique au cœur du plus grand désert du monde
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Nous contacter
            </Link>
            <Link href="/" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition-all duration-300">
              Retour à l'accueil
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
      ...(await serverSideTranslations(locale ?? 'fr', ['common', 'navigation'])),
    },
  };
};
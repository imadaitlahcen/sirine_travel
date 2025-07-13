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

export default function AventureDesertDakhlaPage() {
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
      alt: 'Dunes du désert de Dakhla au coucher du soleil'
    },
    {
      url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Caravane de chameaux dans le désert'
    },
    {
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Camp berbère traditionnel sous les étoiles'
    },
    {
      url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Oasis dans le désert de Dakhla'
    },
    {
      url: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Sandboarding sur les dunes'
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
      const whatsappMessage = `Nouvelle demande de réservation - Aventure Désert de Dakhla\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nDates de voyage: ${formData.travelDates}\nMessage: ${formData.message || 'Aucun message spécifique'}`;
      
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
        <title>Aventure Désert de Dakhla - {t('site_name')}</title>
        <meta name="description" content="Vivez une aventure inoubliable dans le désert de Dakhla. Découvrez les dunes dorées, les nuits étoilées et la culture berbère authentique." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Dunes du désert de Dakhla au coucher du soleil"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            AVENTURE DÉSERT DE DAKHLA
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Plongez dans l'immensité dorée du Sahara et vivez une expérience authentique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToReservation}
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Réserver maintenant
            </button>
            <button 
              onClick={scrollToGallery}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Voir le plan
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                L'Appel du Désert
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dakhla, perle du Sahara occidental, vous invite à découvrir ses dunes infinies et ses paysages à couper le souffle. 
                Cette aventure unique vous mènera au cœur d'un désert préservé, loin des sentiers battus.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Entre excursions en 4x4, randonnées à dos de chameau et nuits sous un ciel étoilé, 
                chaque moment sera une découverte de la beauté brute et de l'hospitalité berbère.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">3-5</div>
                  <div className="text-gray-600">Jours d'aventure</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">∞</div>
                  <div className="text-gray-600">Étoiles à contempler</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Caravane de chameaux traversant les dunes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              ACTIVITÉS INCLUSES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une aventure complète pour découvrir tous les aspects du désert
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Excursion 4x4',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Traversée des dunes en véhicule tout-terrain avec guide expérimenté'
              },
              {
                name: 'Randonnée Chamelière',
                image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Balade authentique à dos de chameau au coucher du soleil'
              },
              {
                name: 'Nuit sous les Étoiles',
                image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Bivouac traditionnel avec dîner berbère et observation des étoiles'
              }
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.name}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              GALERIE PHOTOS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez la beauté sauvage du désert de Dakhla
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Large image on the left */}
            <div className="lg:col-span-2 relative h-96 lg:h-[600px] rounded-2xl overflow-hidden group">
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300"
              >
                →
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Smaller images on the right */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {galleryImages.slice(1, 5).map((image, index) => (
                <div 
                  key={index + 1} 
                  className="relative h-32 lg:h-36 rounded-xl overflow-hidden group cursor-pointer"
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
              Réservez Votre Aventure
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contactez-nous pour organiser votre expédition dans le désert de Dakhla
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  Demande envoyée avec succès !
                </h3>
                <p className="text-gray-600">
                  Nous vous contacterons très bientôt pour finaliser votre réservation.
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
                    label="Dates de voyage"
                    name="travelDates"
                    type="text"
                    value={formData.travelDates}
                    onChange={handleInputChange}
                    placeholder="Ex: 15-18 Octobre 2024"
                    error={getFieldError('travelDates')}
                    required
                  />
                </div>
                
                <FormInput
                  id="message"
                  label="Message (optionnel)"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Dites-nous en plus sur vos préférences d'aventure..."
                  error={getFieldError('message')}
                  rows={4}
                />
                
                <div className="pt-4">
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    loadingText="Envoi en cours..."
                    className="w-full bg-black text-white py-4 px-8 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Envoyer la demande
                  </LoadingButton>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600">+212 644 354 175</p>
              <a href="tel:+212644354175" className="text-orange-600 hover:text-orange-700 font-medium">
                Appeler maintenant
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600">+212 644 354 175</p>
              <a href="https://wa.me/212644354175" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">
                Chatter maintenant
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contact@agence-voyage.com</p>
              <a href="mailto:contact@agence-voyage.com" className="text-orange-600 hover:text-orange-700 font-medium">
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            L'Aventure Vous Attend
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Partez à la découverte du désert de Dakhla et créez des souvenirs inoubliables
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Nous contacter
            </Link>
            <Link href="/" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
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
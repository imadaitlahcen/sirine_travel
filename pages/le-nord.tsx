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

export default function LeNordPage() {
  const { t } = useTranslation(['common', 'navigation']);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    travelers: '',
    message: ''
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationRules = {
    name: commonValidationRules.name,
    email: commonValidationRules.email,
    phone: commonValidationRules.phone,
    dates: { required: true },
    travelers: { required: true },
    message: commonValidationRules.message
  };

  const { errors, validateSingleField, validateForm, getFieldError } = useFormValidation(validationRules);

  const images = [
    '/destinations/Jebha-Playa-Sghira-webp_format.webp',
    '/destinations/tetouan-medina.jpg',
    '/destinations/martil-beach.jpg',
    '/destinations/fnideq-coast.jpg',
    '/destinations/chefchaouen-blue.jpg',
    '/destinations/rif-mountains.jpg'
  ];

  const scrollToReservation = () => {
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    validateSingleField(field, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create WhatsApp message
      const message = `Bonjour ! Je souhaite réserver l'expérience "Le Nord - Perle Méditerranéenne"\n\n` +
        `👤 Nom: ${formData.name}\n` +
        `📧 Email: ${formData.email}\n` +
        `📱 Téléphone: ${formData.phone}\n` +
        `📅 Dates souhaitées: ${formData.dates}\n` +
        `👥 Nombre de voyageurs: ${formData.travelers}\n` +
        `💬 Message: ${formData.message || 'Aucun message spécifique'}\n\n` +
        `Merci de me contacter pour finaliser ma réservation !`;
      
      const whatsappUrl = `https://wa.me/212123456789?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        dates: '',
        travelers: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Head>
        <title>Le Nord - Perle Méditerranéenne | {t('site_name')}</title>
        <meta name="description" content="Découvrez la beauté du Nord du Maroc : Martil, Tétouan, Fnideq. Plages méditerranéennes, culture andalouse et montagnes du Rif." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/destinations/Jebha-Playa-Sghira-webp_format.webp"
            alt="Le Nord du Maroc"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/destinations/default-morocco.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-wide">
            LE NORD
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            Perle Méditerranéenne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToReservation}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver Maintenant
            </button>
            <Link 
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                Découvrez la Méditerranée Marocaine
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Le Nord du Maroc vous invite à explorer ses trésors cachés entre mer et montagne. 
                De Martil à Fnideq en passant par la perle andalouse de Tétouan, découvrez une région 
                où l'héritage culturel se mêle harmonieusement aux paysages méditerranéens.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">9</div>
                  <div className="text-sm text-gray-600">Jours d'exploration</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">3</div>
                  <div className="text-sm text-gray-600">Villes principales</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/destinations/tetouan-medina.jpg"
                alt="Médina de Tétouan"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/destinations/default-morocco.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              Expériences Authentiques du Nord
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immergez-vous dans la richesse culturelle et naturelle du Nord marocain
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl text-white">🏖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Plages Méditerranéennes</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Détendez-vous sur les plages dorées de Martil et explorez les criques secrètes 
                de la côte méditerranéenne marocaine.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl text-white">🕌</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Patrimoine Andalou</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Explorez la médina de Tétouan, classée UNESCO, et découvrez l'architecture 
                andalouse unique de cette région historique.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl text-white">⛰️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Montagnes du Rif</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Randonnez dans les montagnes du Rif et découvrez des villages berbères 
                authentiques aux panoramas époustouflants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              Galerie du Nord
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez la beauté du Nord marocain en images
            </p>
          </div>
          
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={images[currentImageIndex]}
                alt={`Le Nord du Maroc - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/destinations/default-morocco.jpg';
                }}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reservation" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Réservez Votre Escapade dans le Nord
            </h2>
            <p className="text-xl text-blue-100">
              Contactez-nous pour organiser votre voyage sur mesure
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  id="name"
                  name="name"
                  label="Nom complet"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  error={getFieldError('name')}
                  required
                />
                <FormInput
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  error={getFieldError('email')}
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  id="phone"
                  name="phone"
                  label="Téléphone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  error={getFieldError('phone')}
                  required
                />
                <FormInput
                  id="dates"
                  name="dates"
                  label="Dates souhaitées"
                  type="text"
                  value={formData.dates}
                  onChange={(e) => handleInputChange('dates', e.target.value)}
                  error={getFieldError('dates')}
                  placeholder="Ex: 15-24 Mars 2024"
                  required
                />
              </div>
              
              <FormInput
                id="travelers"
                name="travelers"
                label="Nombre de voyageurs"
                type="text"
                value={formData.travelers}
                onChange={(e) => handleInputChange('travelers', e.target.value)}
                error={getFieldError('travelers')}
                placeholder="Ex: 2 personnes"
                required
              />
              
              <FormInput
                id="message"
                name="message"
                label="Message (optionnel)"
                type="textarea"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Dites-nous en plus sur vos attentes..."
                rows={4}
              />
              
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Envoyer la Demande via WhatsApp
              </LoadingButton>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Contactez-nous directement</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="tel:+212123456789" 
              className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              <span className="text-2xl">📞</span>
              <span className="font-semibold">+212 123 456 789</span>
            </a>
            <a 
              href="https://wa.me/212123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-green-600 hover:text-green-700 transition-colors duration-300"
            >
              <span className="text-2xl">💬</span>
              <span className="font-semibold">WhatsApp</span>
            </a>
            <a 
              href="mailto:contact@serinetravel.com" 
              className="flex items-center gap-3 text-gray-600 hover:text-gray-700 transition-colors duration-300"
            >
              <span className="text-2xl">✉️</span>
              <span className="font-semibold">contact@serinetravel.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Prêt pour l'Aventure Nordique ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Laissez-vous séduire par la beauté authentique du Nord marocain et créez des souvenirs inoubliables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToReservation}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver Maintenant
            </button>
            <Link 
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Découvrir d'autres destinations
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
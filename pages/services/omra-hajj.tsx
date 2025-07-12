import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import OmraHajjHeader from '../../components/OmraHajjHeader';
import Footer from '../../components/Footer';
import FormInput from '../../components/FormInput';
import LoadingButton from '../../components/LoadingButton';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useFormValidation, commonValidationRules } from '../../hooks/useFormValidation';

export default function OmraHajjPage() {
  const { t } = useTranslation(['common', 'services']);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Form validation setup
  const validationRules = {
    name: commonValidationRules.name,
    email: commonValidationRules.email,
    phone: commonValidationRules.phone,
    package: { required: true },
    message: commonValidationRules.message
  };
  
  const {
    validateForm,
    validateSingleField,
    setFieldTouched,
    clearErrors,
    getFieldError
  } = useFormValidation(validationRules);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Gallery images - 8 photos haute qualité pour la galerie
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=90',
      title: t('services:omra_hajj.gallery.images.kaaba'),
      description: t('services:omra_hajj.gallery.descriptions.kaaba')
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=90',
      title: t('services:omra_hajj.gallery.images.prophet_mosque'),
      description: t('services:omra_hajj.gallery.descriptions.prophet_mosque')
    },
    {
      src: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=90',
      title: t('services:omra_hajj.gallery.images.arafat'),
      description: t('services:omra_hajj.gallery.descriptions.arafat')
    },
    {
      src: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=90',
      title: t('services:omra_hajj.gallery.images.tawaf'),
      description: t('services:omra_hajj.gallery.descriptions.tawaf')
    },
    {
      src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=90',
      title: t('services:omra_hajj.gallery.images.medina'),
      description: t('services:omra_hajj.gallery.descriptions.medina')
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=90',
      title: t('services:omra_hajj.gallery.images.grand_mosque_prayer'),
      description: t('services:omra_hajj.gallery.descriptions.grand_mosque_prayer')
    },
    {
      src: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=90',
      title: t('services:omra_hajj.gallery.images.pilgrims_prayer'),
      description: t('services:omra_hajj.gallery.descriptions.pilgrims_prayer')
    },
    {
      src: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=90',
      title: t('services:omra_hajj.gallery.images.spiritual_journey'),
      description: t('services:omra_hajj.gallery.descriptions.spiritual_journey')
    }
  ];

  const omraProgram = [
    {
      day: t('services:omra_hajj.program.days.day_1_2'),
      title: t('services:omra_hajj.program.titles.arrival_medina'),
      activities: [
        t('services:omra_hajj.program.activities.airport_welcome'),
        t('services:omra_hajj.program.activities.hotel_checkin'),
        t('services:omra_hajj.program.activities.prophet_mosque_visit'),
        t('services:omra_hajj.program.activities.rawda_prayer')
      ]
    },
    {
      day: t('services:omra_hajj.program.days.day_3_5'),
      title: t('services:omra_hajj.program.titles.stay_medina'),
      activities: [
        t('services:omra_hajj.program.activities.daily_prayers'),
        t('services:omra_hajj.program.activities.historical_sites'),
        t('services:omra_hajj.program.activities.quba_mosque'),
        t('services:omra_hajj.program.activities.baqi_cemetery')
      ]
    },
    {
      day: t('services:omra_hajj.program.days.day_6'),
      title: t('services:omra_hajj.program.titles.departure_mecca'),
      activities: [
        t('services:omra_hajj.program.activities.bus_travel'),
        t('services:omra_hajj.program.activities.mecca_checkin'),
        t('services:omra_hajj.program.activities.first_umrah')
      ]
    },
    {
      day: t('services:omra_hajj.program.days.day_7_10'),
      title: t('services:omra_hajj.program.titles.stay_mecca'),
      activities: [
        t('services:omra_hajj.program.activities.haram_prayers'),
        t('services:omra_hajj.program.activities.additional_tawaf'),
        t('services:omra_hajj.program.activities.jabal_nur_visit'),
        t('services:omra_hajj.program.activities.shopping_rest')
      ]
    },
    {
      day: t('services:omra_hajj.program.days.day_11'),
      title: t('services:omra_hajj.program.titles.departure'),
      activities: [
        t('services:omra_hajj.program.activities.last_umrah'),
        t('services:omra_hajj.program.activities.departure_prep'),
        t('services:omra_hajj.program.activities.airport_transfer'),
        t('services:omra_hajj.program.activities.return_flight')
      ]
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
      
      // Create dynamic WhatsApp message based on current language
      let whatsappMessage = '';
      
      if (router.locale === 'ar') {
        whatsappMessage = `🕌 *طلب حجز العمرة/الحج*\n\n` +
          `👤 *الاسم الكامل:* ${formData.name}\n` +
          `📧 *البريد الإلكتروني:* ${formData.email}\n` +
          `📱 *الهاتف:* ${formData.phone}\n` +
          `📦 *الباقة المرغوبة:* ${formData.package}\n` +
          `💬 *الرسالة:* ${formData.message || 'لا توجد رسالة محددة'}\n\n` +
          `يرجى التواصل معي لإتمام الحجز.\n\n` +
          `📸 اكتشف صور العمرة: https://votre-domaine.com/images/header-omra.jpg`;
      } else if (router.locale === 'en') {
        whatsappMessage = `🕌 *Omra/Hajj Reservation Request*\n\n` +
          `👤 *Full Name:* ${formData.name}\n` +
          `📧 *Email:* ${formData.email}\n` +
          `📱 *Phone:* ${formData.phone}\n` +
          `📦 *Desired Package:* ${formData.package}\n` +
          `💬 *Message:* ${formData.message || 'No specific message'}\n\n` +
          `Please contact me to finalize my reservation.\n\n` +
          `📸 Discover our Omra photos: https://votre-domaine.com/images/header-omra.jpg`;
      } else {
        // Default to French
        whatsappMessage = `🕌 *Demande de réservation Omra/Hajj*\n\n` +
          `👤 *Nom complet:* ${formData.name}\n` +
          `📧 *Email:* ${formData.email}\n` +
          `📱 *Téléphone:* ${formData.phone}\n` +
          `📦 *Package souhaité:* ${formData.package}\n` +
          `💬 *Message:* ${formData.message || 'Aucun message spécifique'}\n\n` +
          `Merci de me contacter pour finaliser ma réservation.\n\n` +
          `📸 Découvrez nos photos Omra: https://votre-domaine.com/images/header-omra.jpg`;
      }
      
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/212644354175?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      
      // Show success state
      setSubmitSuccess(true);
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', package: '', message: '' });
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
  


  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };



  return (
    <>
      <Head>
        <title>{`${t('services:omra_hajj.title')} - ${t('site_name')} | ${t('services:omra_hajj.subtitle')}`}</title>
        <meta name="description" content={t('services:omra_hajj.description')} />
        <meta name="keywords" content="omra, hajj, pèlerinage, mecque, médine, voyage spirituel, forfait omra, agence omra maroc" />
      </Head>

      <div className="min-h-screen bg-white">
        <OmraHajjHeader />
        
        {/* Hero Section with Header Photo */}
        
        <section className="relative h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 overflow-hidden">
          {/* Photo de header */}
          <div className="absolute inset-0">
            <Image
              src="/images/header-omra.jpg"
              alt="Photo de header Omra"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <span className="inline-block text-amber-300 font-semibold text-sm uppercase tracking-wider mb-4">{t('services:omra_hajj.hero.tagline')}</span>
                <h1 className="text-6xl md:text-8xl font-bold font-serif text-white mb-6 drop-shadow-2xl">
                  {t('services:omra_hajj.hero.title')}
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-8"></div>
                <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-lg">
                  {t('services:omra_hajj.hero.description')}
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <a href="#gallery" className="group relative bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {t('services:omra_hajj.hero_buttons.discover_gallery')}
                    </span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                  <a href="#program" className="group relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {t('services:omra_hajj.hero_buttons.view_program')}
                    </span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                  <a href="#reservation" className="group relative bg-transparent border-2 border-white/80 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 hover:border-white transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {t('services:omra_hajj.hero_buttons.book_now')}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


            {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6 animate-fade-in-up">{t('services:omra_hajj.gallery.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full mb-6 animate-scale-in"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                {t('services:omra_hajj.gallery.subtitle')}
              </p>
            </div>

            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].title}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </span>
                </div>
                
                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="group absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-md text-white p-3 md:p-4 rounded-full hover:bg-black/60 transition-all duration-300 hover:scale-105 shadow-lg border border-white/20"
                  aria-label="Image précédente"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="group absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-md text-white p-3 md:p-4 rounded-full hover:bg-black/60 transition-all duration-300 hover:scale-105 shadow-lg border border-white/20"
                  aria-label="Image suivante"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image info */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{galleryImages[currentImageIndex].title}</h3>
                  <p className="text-sm md:text-lg opacity-90">{galleryImages[currentImageIndex].description}</p>
                </div>
              </div>

              {/* Thumbnails Grid - Responsive pour 8 photos */}
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4 mt-6 md:mt-8">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-16 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentImageIndex ? 'ring-2 md:ring-4 ring-amber-500 scale-105 shadow-lg' : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                    />
                    {index === currentImageIndex && (
                      <div className="absolute inset-0 bg-amber-500/20 animate-pulse"></div>
                    )}
                    {/* Numéro de la photo sur mobile */}
                    <div className="md:hidden absolute bottom-0 right-0 bg-black/70 text-white text-xs px-1 rounded-tl">
                      {index + 1}
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Navigation par points pour mobile */}
              <div className="md:hidden flex justify-center mt-4 space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-amber-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Omra Program Section */}
        <section id="program" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6 animate-fade-in-up">{t('services:omra_hajj.program.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6 animate-scale-in"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                {t('services:omra_hajj.program.subtitle')}
              </p>
            </div>

            {/* Mobile-First Timeline */}
            <div className="relative">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full animate-draw-line"></div>
              
              {/* Mobile Timeline Line */}
              <div className="md:hidden absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full animate-draw-line"></div>
              
              <div className="space-y-8 md:space-y-12">
                {omraProgram.map((day, index) => (
                  <div key={index} className={`relative animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} animation-delay-${index * 100}`} style={{animationDelay: `${index * 0.2}s`}}>
                    {/* Mobile Layout */}
                    <div className="md:hidden flex items-start">
                      <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg mr-6 mt-2 animate-pulse-dot" style={{animationDelay: `${index * 0.3}s`}}></div>
                      <div className="flex-1">
                        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-card-hover">
                          <div className="flex items-center mb-3">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-badge-glow">
                              {day.day}
                            </span>
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                          <ul className="space-y-2">
                            {day.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start text-gray-700 text-sm md:text-base">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 animate-pulse-dot" style={{animationDelay: `${index * 0.3}s`}}></div>
                      
                      {/* Content */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-card-hover">
                          <div className="flex items-center mb-4">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-badge-glow">
                              {day.day}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{day.title}</h3>
                          <ul className="space-y-3">
                            {day.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start text-gray-700">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reservation Form Section */}
        <section id="reservation" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">{t('services:omra_hajj.reservation.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('services:omra_hajj.reservation.subtitle')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    label={t('services:omra_hajj.reservation.form.full_name')}
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('services:omra_hajj.reservation.form.placeholders.full_name')}
                    required
                    error={getFieldError('name')}
                    aria-label="Nom complet requis"
                  />
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    label={t('services:omra_hajj.reservation.form.email')}
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('services:omra_hajj.reservation.form.placeholders.email')}
                    required
                    error={getFieldError('email')}
                    aria-label="Adresse email requise"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    label={t('services:omra_hajj.reservation.form.phone')}
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('services:omra_hajj.reservation.form.placeholders.phone')}
                    required
                    error={getFieldError('phone')}
                    aria-label="Numéro de téléphone requis"
                  />
                  <div>
                    <label htmlFor="package" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('services:omra_hajj.reservation.form.desired_package')}
                    </label>
                    <select
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white ${
                        getFieldError('package') ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                      }`}
                      aria-label="Sélection du package requis"
                      aria-describedby={getFieldError('package') ? 'package-error' : undefined}
                    >
                      <option value="">{t('services:omra_hajj.reservation.form.package_options.choose')}</option>
                      <option value="economique">{t('services:omra_hajj.reservation.form.package_options.economic')}</option>
                      <option value="confort">{t('services:omra_hajj.reservation.form.package_options.comfort')}</option>
                      <option value="premium">{t('services:omra_hajj.reservation.form.package_options.premium')}</option>
                    </select>
                    {getFieldError('package') && (
                      <p id="package-error" className="mt-1 text-sm text-red-600" role="alert">
                        {getFieldError('package')}
                      </p>
                    )}
                  </div>
                </div>

                <FormInput
                  type="textarea"
                  id="message"
                  name="message"
                  label={t('services:omra_hajj.reservation.form.message')}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('services:omra_hajj.reservation.form.placeholders.message')}
                  rows={4}
                  error={getFieldError('message')}
                  aria-label="Message optionnel"
                />

                <div className="text-center">
                  {submitSuccess ? (
                    <div className="flex items-center justify-center gap-3 px-10 py-5 bg-green-100 text-green-800 rounded-xl border border-green-200">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-semibold">{t('services:omra_hajj.reservation.form.success_message')}</span>
                    </div>
                  ) : (
                    <LoadingButton
                      type="submit"
                      loading={isSubmitting}
                      loadingText={t('services:omra_hajj.reservation.form.submitting')}
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {t('services:omra_hajj.reservation.form.submit')}
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
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{t('services:omra_hajj.reservation.contact_info.phone.title')}</h4>
                    <p className="text-gray-600 mb-6 font-medium">{t('services:omra_hajj.reservation.contact_info.phone.number')}</p>
                    <button className="group/btn relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                      <span className="relative z-10">Appeler</span>
                      <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>

                  {/* WhatsApp */}
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <svg className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{t('services:omra_hajj.reservation.contact_info.whatsapp.title')}</h4>
                    <p className="text-gray-600 mb-6 font-medium">{t('services:omra_hajj.reservation.contact_info.whatsapp.number')}</p>
                    <button className="group/btn relative bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                      <span className="relative z-10">WhatsApp</span>
                      <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>

                  {/* Email */}
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <svg className="w-10 h-10 text-purple-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{t('services:omra_hajj.reservation.contact_info.email.title')}</h4>
                    <p className="text-gray-600 mb-6 font-medium">{t('services:omra_hajj.reservation.contact_info.email.address')}</p>
                    <button className="group/btn relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                      <span className="relative z-10">Email</span>
                      <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-6">{t('services:omra_hajj.contact.title')}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('services:omra_hajj.contact.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+212XXXXXXXXX" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                📞 {t('services:omra_hajj.contact.phone.title')}
              </a>
              <a 
                href={`https://wa.me/212644354175?text=${encodeURIComponent(
                  router.locale === 'ar' 
                    ? t('services:omra_hajj.contact.whatsapp.message') || 'أريد عمرة'
                    : router.locale === 'en'
                    ? 'I want Omra'
                    : 'Je veux une Omra'
                )}`} 
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                💬 {t('services:omra_hajj.contact.whatsapp.title')}
              </a>
              <a href="mailto:contact@vaoyage.com" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                ✉️ {t('services:omra_hajj.contact.email.title')}
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', [
        'common',
        'navigation',
        'services'
      ])),
    },
  };
};

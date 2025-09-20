import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20 text-gray-200">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20]/20 via-[#D4AF37]/20 to-[#2E7D32]/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Prêts à connecter Madagascar au reste du monde avec vous
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Informations de contact</h2>
                <p className="text-gray-300 mb-8">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions 
                  et discuter de vos besoins en minéraux industriels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-gray-800/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#1B5E20]/30 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-[#1B5E20]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <a href="mailto:globalnetworksolution24@gmail.com" className="text-[#D4AF37] hover:text-[#FBC02D] transition-colors">
                        globalnetworksolution24@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#D4AF37]/30 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Téléphone</h3>
                      <a href="tel:+261333568401" className="text-[#D4AF37] hover:text-[#FBC02D] transition-colors">
                        +261 33 35 684 01
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#FBC02D]/30 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-[#FBC02D]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Adresse</h3>
                      <p className="text-gray-300">Lot 4 P 271 Adriana, Manakara – Madagascar</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="p-3 bg-[#66BB6A]/30 rounded-lg mr-4">
                      <Clock className="w-6 h-6 text-[#66BB6A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Heures d'ouverture</h3>
                      <p className="text-gray-300">Lun - Ven: 8h00 - 18h00</p>
                      <p className="text-gray-300">Sam: 9h00 - 12h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/80 p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message envoyé !</h3>
                  <p className="text-gray-300">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-200"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-200"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-200"
                        placeholder="Nom de l'entreprise"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Sujet *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="information">Demande d'information</option>
                        <option value="quotation">Demande de devis</option>
                        <option value="partnership">Partenariat</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Décrivez votre projet ou demande..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1B5E20] to-[#D4AF37] text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#1B5E20]/40 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Notre localisation</h2>
            <p className="text-gray-300">Basés à Manakara, au cœur de Madagascar</p>
          </div>
          <div className="bg-gray-800/80 p-8 rounded-2xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-[#1B5E20]/20 to-[#D4AF37]/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <p className="text-gray-300 font-semibold">Manakara, Madagascar</p>
                <p className="text-sm text-gray-500">Lot 4 P 271 Adriana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon, BuildingOfficeIcon, UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export const SponsorContactForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    sponsorshipTier: '',
    budgetRange: '',
    interests: [] as string[],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sponsorshipTiers = [
    'Bronze Partner ($500)',
    'Silver Partner ($1,000)',
    'Gold Partner ($2,000+)',
    'Custom Package - Let\'s Discuss'
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,000',
    '$2,000 - $5,000',
    '$5,000+',
    'Prefer to discuss'
  ];

  const interestOptions = [
    'Brand visibility and marketing',
    'Student recruitment and talent pipeline',
    'Technical collaboration',
    'Research partnerships',
    'Community outreach',
    'Equipment or component donation',
    'Mentorship opportunities'
  ];

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   await new Promise(resolve => setTimeout(resolve, 2000));

  //   setSubmitStatus('success');
  //   setIsSubmitting(false);

  //   // Reset form after success
  //   setTimeout(() => {
  //     setFormData({
  //       companyName: '',
  //       contactName: '',
  //       email: '',
  //       phone: '',
  //       sponsorshipTier: '',
  //       budgetRange: '',
  //       interests: [],
  //       message: ''
  //     });
  //     setSubmitStatus('idle');
  //   }, 3000);
  // };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div id="contact-form" className="relative w-full bg-gradient-to-b from-black/70 to-gray-900/70 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to partner with us? Fill out the form below and we&apos;ll get back to you within 24 hours
            to discuss how we can work together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 lg:p-12"
          >
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="bg-green-500/20 border border-green-500/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <PaperAirplaneIcon className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="font-heading text-2xl text-white mb-4">Thank You!</h3>
                <p className="text-gray-400 leading-relaxed">
                  Your sponsorship inquiry has been received. We&apos;ll get back to you within 24 hours
                  to discuss partnership opportunities.
                </p>
              </div>
            ) : (
              <form action="https://formsubmit.co/deakincompetitiverobotics@gmail.com" method="POST" className="space-y-8">
                {/* Company and Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-heading mb-3">
                      <BuildingOfficeIcon className="h-5 w-5 inline mr-2" />
                      Company/Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-heading mb-3">
                      <UserIcon className="h-5 w-5 inline mr-2" />
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-heading mb-3">
                      <EnvelopeIcon className="h-5 w-5 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-heading mb-3">
                      <PhoneIcon className="h-5 w-5 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Sponsorship Tier and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-heading mb-3">
                      Preferred Sponsorship Tier
                    </label>
                    <select
                      value={formData.sponsorshipTier}
                      onChange={(e) => setFormData(prev => ({ ...prev, sponsorshipTier: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    >
                      <option value="">Select a tier</option>
                      {sponsorshipTiers.map(tier => (
                        <option key={tier} value={tier}>{tier}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-heading mb-3">
                      Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData(prev => ({ ...prev, budgetRange: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-white font-heading mb-4">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {interestOptions.map(interest => (
                      <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="w-4 h-4 text-purple-500 bg-gray-900 border-gray-600 rounded focus:ring-purple-500 focus:ring-1"
                        />
                        <span className="text-gray-300 text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-heading mb-3">
                    Additional Information
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-vertical"
                    placeholder="Tell us more about your organization's goals, specific partnership interests, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 py-4 px-8 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-heading text-lg rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="h-5 w-5" />
                        Send Partnership Inquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
              <h3 className="font-heading text-xl text-white mb-4">
                Prefer to reach out directly?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400">
                DM us on <a href="https://instagram.com/deakinroverteam" className="hover:text-purple-400 text-blue-400 transition-colors">Instagram</a>
                <span className="hidden sm:inline">•</span>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
"use client";

import { motion } from "framer-motion";
import { CheckIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const sponsorshipTiers = [
  {
    id: "bronze",
    name: "Bronze Partner",
    price: "$500",
    color: "from-orange-600 to-yellow-600",
    bgColor: "orange-600",
    borderColor: "orange-500",
    popular: false,
    benefits: [
      "Logo on team t-shirts and rover",
      "Social media recognition",
      "Thank you mention in presentations",
      "Competition updates and photos",
      "Team contact for networking"
    ]
  },
  {
    id: "silver",
    name: "Silver Partner",
    price: "$1,000",
    color: "from-gray-400 to-gray-600",
    bgColor: "gray-500",
    borderColor: "gray-400",
    popular: false,
    benefits: [
      "All Bronze benefits included",
      "Prominent logo placement on rover",
      "Featured in competition documentation",
      "Invitation to team presentations",
      "Access to technical reports",
      "Partnership certificate"
    ]
  },
  {
    id: "gold",
    name: "Gold Partner",
    price: "$2,000+",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "yellow-500",
    borderColor: "yellow-400",
    popular: true,
    benefits: [
      "All Silver benefits included",
      "Large logo on rover chassis",
      "Speaking opportunity at events",
      "Quarterly progress meetings",
      "Priority access to graduates",
      "Custom partnership package",
      "Media kit with high-res photos"
    ]
  },
];

export const SponsorshipTiers = () => {
  return (
    <div id="sponsorship-tiers" className="relative w-full bg-gradient-to-b from-gray-800/70 to-gray-900/70 py-20 lg:py-32">
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
            Sponsorship <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Packages</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Choose the partnership level that aligns with your organization's goals and budget.
            Every contribution makes a meaningful impact on our mission.
          </p>
        </motion.div>

        {/* Sponsorship Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {sponsorshipTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-gray-800/50 backdrop-blur-sm border-2 rounded-xl p-6 hover:scale-105 transition-all duration-300 ${
                tier.popular
                  ? `border-${tier.borderColor} shadow-lg shadow-${tier.bgColor}/25`
                  : `border-gray-700 hover:border-${tier.borderColor}`
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${tier.color} text-white px-4 py-1 rounded-full text-sm font-heading`}>
                  Most Popular
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full mb-4`}>
                  <CurrencyDollarIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl text-white mb-2">{tier.name}</h3>
                <p className={`text-${tier.borderColor} font-semibold text-lg`}>{tier.price}</p>
              </div>

              {/* Benefits List */}
              <div className="space-y-3 mb-8">
                {tier.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start gap-3">
                    <CheckIcon className={`h-5 w-5 text-${tier.borderColor} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#contact-form"
                className={`block w-full py-3 px-6 text-center font-heading text-sm rounded-lg transition-all ${
                  tier.popular
                    ? `bg-gradient-to-r ${tier.color} text-white hover:scale-105 hover:shadow-lg hover:shadow-${tier.bgColor}/25`
                    : `border-2 border-${tier.borderColor} text-${tier.borderColor} hover:bg-${tier.bgColor} hover:text-white`
                }`}
              >
                Choose {tier.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Partnership Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-8">
            <h3 className="font-heading text-xl text-white mb-4">
              Need a Custom Partnership?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We're flexible and open to discussing custom sponsorship packages that align with your specific goals and requirements.
              Whether it's equipment donations, technical expertise, or unique collaboration opportunities.
            </p>
            <a
              href="#contact-form"
              className="inline-block py-3 px-6 bg-purple-500 hover:bg-purple-600 text-white font-heading text-sm rounded-lg transition-all hover:scale-105"
            >
              Discuss Custom Package
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, PhotoIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryPhotos = [
  {
    id: 1,
    src: "/gallery/1.png",
    alt: "Deakin Aurora Rover"
  },
  {
    id: 2,
    src: "/gallery/2.webp",
    alt: "Deakin Rover Team 2025"
  },
  {
    id: 3,
    src: "/gallery/3.webp",
    alt: "Deakin Competitive Robotics Banner"
  },
  {
    id: 4,
    src: "/gallery/4.webp",
    alt: "Misbah's Badge"
  },
  {
    id: 5,
    src: "/gallery/5.webp",
    alt: "Deakin Rover Team in the base station during space resources task"
  },
  {
    id: 6,
    src: "/gallery/6.webp",
    alt: "Jatan and Nguyen working on the rover"
  },
  {
    id: 7,
    src: "/gallery/7.webp",
    alt: "Practice session a day before post-landing task"
  },
  {
    id: 8,
    src: "/gallery/8.webp",
    alt: "Award Ceremony at the Australian Rover Challenge 2025"
  },
  {
    id: 9,
    src: "/gallery/9.webp",
    alt: "Aurora Rover at the Australian Rover Challenge 2025"
  },
  {
    id: 10,
    src: "/gallery/10.webp",
    alt: "Team working on the rover"
  },
  {
    id: 11,
    src: "/gallery/11.webp",
    alt: "Bon and Jatan on field during the space resources task"
  },
  {
    id: 12,
    src: "/gallery/12.webp",
    alt: "Deakin Rover Team discussing strategy in the base station"
  },
  {
    id: 13,
    src: "/gallery/13.webp",
    alt: "Group photo of all the teams at the Australian Rover Challenge 2025"
  },
  {
    id: 14,
    src: "/gallery/14.webp",
    alt: "Group photo of Deakin Rover Team 2025"
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const selectedPhoto = galleryPhotos.find(photo => photo.id === selectedImage);

  return (
    <div id="gallery" className="relative w-full bg-gradient-to-b from-gray-900/70 to-black/70 py-20 lg:py-32">
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
            Our 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            From late-night workshop sessions to competition day. Here&apos;s how we
            turned an ambitious dream into reality.
          </p>
        </motion.div>

        {/* Photo Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Custom Navigation Buttons */}
          <div className="gallery-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 cursor-pointer bg-purple-500 hover:bg-purple-600 text-white rounded-full p-3 transition-all duration-300 hover:scale-110">
            <ChevronLeftIcon className="h-6 w-6" />
          </div>
          <div className="gallery-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 cursor-pointer bg-purple-500 hover:bg-purple-600 text-white rounded-full p-3 transition-all duration-300 hover:scale-110">
            <ChevronRightIcon className="h-6 w-6" />
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.gallery-swiper-button-prev',
              nextEl: '.gallery-swiper-button-next',
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            className="!pb-4"
          >
            {galleryPhotos.map((photo, index) => (
              <SwiperSlide key={photo.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                  onClick={() => openLightbox(photo.id)}
                >
                  <div className="relative w-full h-60">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={320}
                      height={240}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.style.display = 'none';
                        const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                        if (placeholder) {
                          placeholder.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="hidden w-full h-full bg-gray-700 flex items-center justify-center rounded-xl">
                      <PhotoIcon className="h-16 w-16 text-gray-500" />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors z-10"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>

              {/* Large Image */}
              <div className="relative">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  width={800}
                  height={600}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  onError={(e) => {
                    // Fallback for lightbox
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback for lightbox */}
                <div className="hidden w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
                  <PhotoIcon className="h-24 w-24 text-gray-500" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
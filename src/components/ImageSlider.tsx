import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = () => {
  const images = [
    'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9',
    'https://images.unsplash.com/photo-1615183742857-94fb4ab8583d',
    'https://plus.unsplash.com/premium_photo-1664300608028-15bcc4da4996',
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="h-screen"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
                <div className="container mx-auto h-full flex items-center justify-center px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center text-white"
                  >
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Excellence in Electrical Solutions
                    </motion.h2>
                    <motion.p
                      className="text-xl md:text-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      Leading manufacturer of railway products
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
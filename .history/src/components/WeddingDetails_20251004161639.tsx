import React from 'react';
import { Heart, MapPin, Calendar, Clock, ArrowLeft, Sparkles, Phone } from 'lucide-react';
import WeddingCalendar from './WeddingCalendar';

interface WeddingDetailsProps {
  onBack: () => void;
}

const WeddingDetails: React.FC<WeddingDetailsProps> = ({ onBack }) => {
  const weddingDate = new Date(2024, 8, 15); // September 15, 2024

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-milk to-rose-50">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-burgundy-200 hover:bg-burgundy-50 transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 text-burgundy-700 group-hover:text-burgundy-800" />
      </button>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-burgundy-600 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-dancing text-burgundy-800 mb-4">
            Умед
            <span className="block text-4xl md:text-5xl text-burgundy-600 my-2">&</span>
            Шахло
          </h1>
          <p className="text-xl text-burgundy-700 font-cormorant font-medium">приглашают вас на свою свадьбу</p>
          <div className="flex justify-center space-x-4 mt-6">
            <Sparkles className="w-6 h-6 text-amber-500 animate-bounce" />
            <Heart className="w-6 h-6 text-burgundy-500 animate-pulse" />
            <Sparkles className="w-6 h-6 text-amber-500 animate-bounce delay-300" />
          </div>
        </div>

        {/* Wedding Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Date & Time Card */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-burgundy-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-burgundy-600 mr-3" />
              <h3 className="text-xl font-dancing text-burgundy-800">Дата и время</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-burgundy-500 mr-2" />
                <span className="text-lg text-burgundy-700 font-cormorant">14 октября 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-burgundy-500 mr-2" />
                <span className="text-lg text-burgundy-700 font-cormorant">18:00</span>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-burgundy-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-burgundy-600 mr-3" />
              <h3 className="text-xl font-dancing text-burgundy-800">Место проведения</h3>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-burgundy-700 font-cormorant font-medium">Ресторан "Звездопад"</p>
              <p className="text-burgundy-600 font-cormorant">Ставропольский проезд,7</p>
              <p className="text-burgundy-600 font-cormorant">г. Москва</p>
            </div>
          </div>

          {/* Calendar Card - Smaller */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-burgundy-200">
            <WeddingCalendar weddingDate={weddingDate} />
          </div>
        </div>

        {/* Wedding Photos & Text Section */}
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-burgundy-200 mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-burgundy-600 mr-4" />
              <h3 className="text-3xl font-dancing text-burgundy-800">Наша свадьба</h3>
              <Heart className="w-8 h-8  text-burgundy-600 ml-4" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-burgundy-700  leading-relaxed text-lg font-cormorant">
                Дорогие друзья и родные! Мы с радостью приглашаем вас разделить с нами 
                один из самых важных дней в нашей жизни. Ваше присутствие сделает этот 
                день еще более особенным и незабываемым.
              </p>
              <p className="text-burgundy-700 leading-relaxed text-lg font-cormorant">
                Мы готовили этот праздник с особой любовью и вниманием к деталям. 
                Нас ждет прекрасная церемония, изысканный банкет и много радостных моментов, 
                которые мы хотим провести в кругу самых близких людей.
              </p>
              <div className="bg-gradient-to-r from-burgundy-100 to-rose-100 p-4 rounded-lg">
                <p className="text-burgundy-800 font-cormorant font-medium text-center">
                  "Любовь - это когда два сердца бьются как одно"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://fs01.cap.ru/www22/minust/news/2022/07/22/99ddafcb-3a3a-4b7f-9997-bc5e1933add6/sva.jpg" 
                  alt="Свадебное фото 1"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://i.pinimg.com/736x/0b/8b/12/0b8b12c12fec8c030ec7d014c46b7a65.jpg" 
                  alt="Свадебное фото 2"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg col-span-2">
                <img 
                  src="https://sun6-23.userapi.com/s/v1/ig2/7aGQTIO8n1obVnxD7TjqrpIFsP_Hc7WUjKdDkBNbHvObSrscPSV5mQnC3mDeoa9RsOgoqX78DGXad9oT6QPKisgP.jpg?size=828x828&quality=95&crop=0,98,828,828&ava=1" 
                  alt="Свадебное фото 3"
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-burgundy-200 mb-12">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-burgundy-600 mr-4" />
              <h3 className="text-3xl font-dancing text-burgundy-800">Как добраться</h3>
              <MapPin className="w-8 h-8 text-burgundy-600 ml-4" />
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe>
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6798721954488!2d37.7999122!3d55.677166799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab58244df6de5%3A0x7cd436cf6d0555c4!2z0JfQstC10LfQtNC-0L_QsNC0!5e0!3m2!1sru!2sru!4v1750530145308!5m2!1sru!2sru" 
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            </iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-burgundy-700 font-cormorant text-lg">
              Ресторан "Звездопад" находится в Люблино
            </p>
            <p className="text-burgundy-600 font-cormorant mt-2">
              Удобная транспортная доступность и парковка
            </p>
          </div>
        </div>

        {/* RSVP Section */}
        <div className="bg-gradient-to-r from-burgundy-800 to-burgundy-900 p-8 rounded-2xl shadow-xl text-center text-white">
          <h3 className="text-3xl font-dancing mb-4">Подтвердите свое присутствие</h3>
          <p className="text-burgundy-100 mb-6 text-lg font-cormorant">
            Мы будем очень рады видеть вас на нашем празднике!
          </p>
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center">
              <Phone className="w-5 h-5 text-white mr-3" />
              <span className="text-white font-cormorant font-medium">+7 (991) 576-92-03</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingDetails;
import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './HomeTestimonials.css'; 
import  { useEffect, useState } from 'react';
import AxiosInstance from '../../Api/AxiosInstance';

function HomeTestimonials() {
  const [data, setData] = useState([]);

 useEffect(() => {
    const fetchEvents = async () => {
        try {
            const response = await AxiosInstance.get('/testmonials');
            console.log(response.data.partners); 
            setData(response.data.partners);
        } catch (error) {
            console.error(error);
        }
    };
    
    fetchEvents();
  }, []);

  const truncateText = (text, limit) => {
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  };

return (
    <div className='w-full bg-white p-7 md:p-24'>
      <div className='w-full bg-[#30326B] rounded-2xl p-7 md:p-24'>
        <div className='flex items-center justify-between mb-10'>
          <h1 className='text-white font_poppins text-xl sm:text-2xl  md:text-3xl font-bold'>We Believe in People We Trust</h1>
          <p className='text-white font_poppins text-base sm:text-2xl  md:text-3xl flex items-center md:gap-1 '>See All <ArrowForwardIcon className='' style={{ fontSize: "30px" }} /></p>
        </div>
        
        <div className='home-testimonials-slider'>
        <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={50}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{ delay: 2000 }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
  breakpoints={{
    768: {
      slidesPerView: 2,
    },
  }}
>
  {data.map((data,index) => (
    <SwiperSlide key={data.id}>
      <div className='bg-white rounded-lg shadow-lg p-3 mb-20 h-[280px] relative'>
        <p className='text-[#12141D] font_poppins font-normal text-[10px] md:text-[12px] mt-2'>{truncateText(data.description, 80)}</p>
        <div className='flex items-center justify-start absolute bottom-1'>
          <img src={`https://btagglobal.com/admin/uploads/testmonial/${data.image}`} alt={data.image} className='w-[48px] h-[48px] object-cover rounded-full' />
          {/* data.imageUrl */}
          <div className='p-4'>
            <h3 className='text-[#000000] font_poppins text-xs font-bold'>{data.name}</h3>
            <p className='text-[#000000] font_poppins text-xs'>{data.designation}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
        </Swiper>

        </div>
      </div>
    </div>
  );
}

export default HomeTestimonials;
























"use client"
import React from 'react';
import SchemeCard from './SchemeCard'; 
import Slider from "react-slick";
import { schemes } from '@/constants/Schemes';


const Schemes = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div className='w-full bg-[#E9F8F3B2] py-20'>
      <div className='md:max-w-[1480px] mx-auto max-w-[600px] px-4 md:px-0'>
        <div className='py-4'>
          <h1 className='py-3 text-3xl font-bold'>
            Featured <span className='text-[#20B486]'>Healthcare Schemes</span>
          </h1>
          <p className='text-[#6D737A]'>
            Empowering citizens through accessible government health initiatives.
          </p>
        </div>

        <Slider {...settings} className='px-5'>
          {schemes.map((scheme, i) => (
            <div key={i}>
              <SchemeCard scheme={scheme} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Schemes;

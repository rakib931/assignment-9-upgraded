import React from "react";
import { useLoaderData } from "react-router";
import CourscCard from "./CourscCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { SyncLoader } from "react-spinners";

const CourscCardPage = () => {
  const { loading } = use(AuthContext);
  const cardData = useLoaderData();
  //

  return (
    <div className="md:max-w-[1200px] max-w-[350px] mx-auto">
      {loading ? (
        <div>
          <SyncLoader />
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-3xl text-white font-bold my-5 text-center ">
              Popular course
            </h1>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {cardData.map((singelData) => (
              <SwiperSlide>
                <CourscCard key={singelData.skillId} singelData={singelData} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default CourscCardPage;

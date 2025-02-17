"use client";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import React from "react";

const shopData = [
  {
    id: "shop-1",
    name: "COMFORT SALON-SB GORAI ROAD ",
    image: "/assets/hero-bg.jpg",
    city: "Asansol",
    state: "West Bengal",
    establishedDate: "2001",
    description:
      "Our flagship store featuring premium services in the heart of Asansol present at SB Gorai road. At COMFORT Luxury Salon, we offer a wide range of high-end beauty and grooming services tailored to meet the diverse needs of our clientele. With a team of expert stylists and beauty professionals, we ensure top-notch service quality using the latest trends, techniques, and premium products. Whether you are looking for a relaxing spa session, a rejuvenating skincare treatment, or a stylish hair makeover, our salon provides a luxurious experience designed to pamper and enhance your beauty. Experience elegance, comfort, and personalized care at our South Extension branch, where excellence is our standard.",
    address: "SB GORAI Road, opposite Gorai Mansion, pin:- 713301",
    contactNumber: "+91 7001707740",
    email: "office@comfort.org.in",
    workingHours: {
      weekdays: "10:00 AM - 8:00 PM",
      weekends: "9:00 AM - 9:00 PM",
    },
  },
  {
    id: "shop-2",
    name: "Schwarzkopf Comfort Salon",
    image: "/assets/hero-bg.jpg",
    city: "Asansol",
    state: "West Bengal",
    establishedDate: "2024",
    description:
      "Located in the bustling heart of Murgasol, COMFORT Luxury Salon offers an upscale experience with a wide array of premium beauty and grooming services. Our expert team of stylists and skincare specialists are dedicated to providing top-tier services, whether it’s a stylish new haircut, rejuvenating facial, or professional makeup application. We use industry-leading products and cutting-edge techniques to ensure that every client leaves feeling refreshed and confident. Step into luxury and let us redefine your beauty experience at our Connaught Place branch.",
    address: "Murgasol, Asansol - 713303 (Beside Yes Bank,Opposite Pantaloons)",
    contactNumber: "+91 7001707740",
    email: "office@comfort.org.in",
    workingHours: {
      weekdays: "10:30 AM - 8:30 PM",
      weekends: "9:00 AM - 9:30 PM",
    }
  },
  {
    id: "shop-3",
    name: "COMFORT Luxury Salon - Bangalore Indiranagar",
    image: "/assets/hero-bg.jpg",
    city: "Bangalore",
    state: "Karnataka",
    establishedDate: "2020",
    description:
      "Our Indiranagar branch in Bangalore is a haven of elegance and relaxation. COMFORT Luxury Salon brings high-end styling, skincare, and spa services to one of Bangalore’s most vibrant neighborhoods. Our team of professionals is dedicated to crafting personalized beauty experiences, ensuring that every visit is a rejuvenating escape. From expert hair treatments to luxurious facials and relaxing spa therapies, we provide services that cater to your every need. Visit our Indiranagar branch to experience beauty, wellness, and relaxation like never before.",
    address:
      "105, 1st Floor, 100 Feet Road, Indiranagar, Bangalore, Karnataka 560038",
    contactNumber: "+91 9876543233",
    email: "indiranagar@comfortsalon.com",
    workingHours: {
      weekdays: "10:00 AM - 9:00 PM",
      weekends: "9:30 AM - 10:00 PM",
    },
    employees: [
      {
        id: 5,
        name: "Ananya Iyer",
        role: "Makeup Artist",
        image: "/assets/service-7.jpg",
        description: "Professional makeup artist for all occasions",
        experience: 6,
        specialties: ["Bridal Makeup", "Party Makeup", "Airbrush Makeup"],
      },
      {
        id: 6,
        name: "Rohan Verma",
        role: "Hair Stylist",
        image: "/assets/service-8.jpg",
        description: "Expert in men’s and women’s haircuts",
        experience: 8,
        specialties: ["Fade Cuts", "Hair Texturing", "Scalp Treatments"],
      },
    ],
  },
];

interface ShopDetailsProps {
  params: Promise<{
    shopId: string;
  }>;
}

const ShopDetails = ({ params }: ShopDetailsProps) => {
  const { shopId } = React.use(params);
  const shop = shopData.find((s) => s.id === shopId);
  const otherShops = shopData.filter((s) => s.id !== shopId);

  if (!shop) return <div>Shop not found</div>;

  return (
    <div className="min-h-screen bg-secondary-foreground text-white">
      {/* Shop Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] bg-black">
        <div className="relative w-full h-full">
          <Image
            src="/assets/hero-bg.jpg"
            alt="Shop Hero"
            fill
            className="object-cover opacity-50"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
          <Link href="/shops">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-gray-800 hover:bg-gray-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Shops
            </Button>
          </Link>
        </div>
      </div>

      <div className="my-12 flex flex-col justify-center items-center text-center px-24">
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          {shop.name}
        </h1>
        <p className="text-base md:text-lg text-white/80 font-medium">
          {shop.description}
        </p>
      </div>

      {/* Shop Details Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-1 md:order-first relative h-[400px] md:h-[500px]">
            <Image
              src={shop.image}
              alt="Shop Location"
              fill
              className="rounded-xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Details Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">
              Find Us At Our Location
            </h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" />
                <p className="text-lg">{shop.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" />
                <p className="text-lg">{shop.contactNumber}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
                <p className="text-lg">{shop.email}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full bg-secondary hover:bg-secondary hover:scale-105 duration-300">
                Book Appointment
              </Button>
              <Button className="rounded-full bg-white text-black hover:bg-white hover:scale-105 duration-300">
                Get Directions
              </Button>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-3 flex items-center gap-2">
                <Clock className="text-primary" />
                Shop Timings
              </h2>
              <div className="space-y-1">
                <p>Weekdays: {shop.workingHours.weekdays}</p>
                <p>Weekends: {shop.workingHours.weekends}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Shops Carousel */}
      <div className="py-24 pb-36">
        <h2 className="text-2xl font-bold text-primary text-center mb-12">
          Other Locations
        </h2>
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={4}
            navigation
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="shop-swiper"
          >
            {otherShops.map((otherShop) => (
              <SwiperSlide key={otherShop.id}>
                <div className="bg-gray-900 shadow-2xl rounded-lg overflow-hidden h-full">
                  <div className="relative h-64 w-full">
                    <Image
                      src={otherShop.image}
                      alt={otherShop.name}
                      fill
                      className="object-cover hover:scale-105 duration-300 transition-transform"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {otherShop.name}
                    </h3>
                    <a
                      href={`/shops/${otherShop.id}`}
                      className="text-primary hover:underline"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .shop-swiper .swiper-button-next,
        .shop-swiper .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .shop-swiper .swiper-button-next:after,
        .shop-swiper .swiper-button-prev:after {
          font-size: 20px;
        }

        .shop-swiper .swiper-pagination-bullet {
          background: white;
        }

        .shop-swiper .swiper-pagination-bullet-active {
          background: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default ShopDetails;

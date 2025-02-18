import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const shopData = [
  {
    id: "shop-3",
    name: "COMFORT SALON-SB GORAI ROAD",
    image: "/assets/hero-bg.jpg",
    city: "Asansol",
    state: "West Bengal",
    establishedDate: "2001",
    description:
      "Our flagship store featuring premium services in the heart of Asansol. At COMFORT Luxury Salon, we offer a wide range of high-end beauty and grooming services tailored to meet the diverse needs of our clientele. With a team of expert stylists and beauty professionals, we ensure top-notch service quality using the latest trends, techniques, and premium products. Whether you are looking for a relaxing spa session, a rejuvenating skincare treatment, or a stylish hair makeover, our salon provides a luxurious experience designed to pamper and enhance your beauty. Experience elegance, comfort, and personalized care at our Gorai Road branch, where excellence is our standard.",
    address: "SB GORAI Road, opposite Gorai Mansion, pin:- 713301",
    contactNumber: "+91 9564664242",
    email: "office@comfort.org.in",
    workingHours: {
      weekdays: "09:00 AM - 10:00 PM",
      weekends: "09:00 AM - 10:00 PM",
    },
  },
  {
    id: "shop-2",
    name: "Schwarzkopf Comfort Salon",
    image: "/assets/pic-90.jpg",
    city: "New Delhi",
    state: "Delhi",
    establishedDate: "2018",
    description:
      "Located in the bustling heart of Connaught Place, COMFORT Luxury Salon offers an upscale experience with a wide array of premium beauty and grooming services. Our expert team of stylists and skincare specialists are dedicated to providing top-tier services, whether it’s a stylish new haircut, rejuvenating facial, or professional makeup application. We use industry-leading products and cutting-edge techniques to ensure that every client leaves feeling refreshed and confident. Step into luxury and let us redefine your beauty experience at our Connaught Place branch.",
    address: "E-12, Connaught Place, New Delhi, Delhi 110001",
    contactNumber: "+91 9876543222",
    email: "connaughtplace@comfortsalon.com",
    workingHours: {
      weekdays: "10:30 AM - 8:30 PM",
      weekends: "9:00 AM - 9:30 PM",
    }
  },
  {
    id: "shop-1",
    name: "COMFORT Prémia",
    image: "/assets/pic-90.jpg",
    city: "Asansol",
    state: "West Bengal",
    establishedDate: "2024",
    description:
      "Prepare to be captivated by the epitome of refined elegance at Comfort Premia Salon, the BEST Salon in Asansol. From Trend-Setting hairstyles to flawless makeup, are pro artist at Premia offer a comprehensive range of services tailored to your desires. Indulge in Comfort signature rituals designed to elevate your look while rejuvenating your spirit. As the top rated salon in Asansol we provide an unparallel experience in a luxurious ambience where every detail is curated to ensure your utmost comfort and satisfaction. Get yourself pampered with the skilled hands of our professionals at Comfort Premia salon and emerge feeling refreshed, radiant and relaxed.",
    address:
      "Comfort Premia 1st floor beside PC Chandra Jewellers, opposite Pantaloons Asansol-713303",
    contactNumber: "+91 9382283793",
    email: "office@comfort.org.in",
    workingHours: {
      weekdays: "10:00 AM - 9:00 PM",
      weekends: "9:30 AM - 10:00 PM",
    }
  },
  {
    id: "shop-4",
    name: "WELLA COMFORT",
    image: "/assets/pic-89.jpg",
    city: "Asansol",
    state: "West Bengal",
    establishedDate: "2020",
    description:
      "Our WELLA COMFORT branch in Sentrum Mall,Asansol is a heaven of elegance and relaxation. COMFORT Luxury Salon brings high-end styling, skincare, and spa services to one of Asansol most vibrant neighborhoods. Our team of professionals is dedicated to crafting personalized beauty experiences, ensuring that every visit is a rejuvenating escape. From expert hair treatments to luxurious facials and relaxing spa therapies, we provide services that cater to your every need. Visit our Wella Comfort branch to experience beauty, wellness, and relaxation like never before.",
    address:
      "Wella Comfort, 1st Floor, Sentrum Mall, Shristinagar, Asansol-713305",
    contactNumber: "+91 9434100422",
    email: "office@comfort.org.in",
    workingHours: {
      weekdays: "10:00 AM - 9:00 PM",
      weekends: "9:30 AM - 10:00 PM",
    }
  },
  {
    id: "shop-5",
    name: "COMFORT Salon- Bastin Bazaar-Underground",
    image: "/assets/pic-85.jpg",
    city: "Asansol",
    state: "West bengal",
    establishedDate: "2020",
    description:
      "Our Bastin Bazaar branch in Asansol is a haven of elegance and relaxation. COMFORT Salon brings high-end styling, skincare, and spa services to one of the most vibrant neighborhoods. Our team of professionals is dedicated to crafting personalized beauty experiences, ensuring that every visit is a rejuvenating escape. From expert hair treatments to luxurious facials and relaxing spa therapies, we provide services that cater to your every need. Visit our Bastin Bazaar branch to experience beauty, wellness, and relaxation like never before.",
    address:
      "Comfort Salon Bastin Bazaar,Beside Amrito Sweets, Asansol-713301",
    contactNumber: "+91 8001927701",
    email: "office@comfort.org.in",
    workingHours: {
      weekdays: "10:00 AM - 9:00 PM",
      weekends: "9:30 AM - 10:00 PM",
    },
  },
  {
    id: "shop-6",
    name: "COMFORT Salon- Bastin Bazaar-First Floor",
    image: "/assets/pic-87.jpg",
    city: "Asansol",
    state: "West bengal",
    establishedDate: "2020",
    description:
      "Our Bastin Bazaar branch in Asansol is a haven of elegance and relaxation. COMFORT Salon brings high-end styling, skincare, and spa services to one of the most vibrant neighborhoods. Our team of professionals is dedicated to crafting personalized beauty experiences, ensuring that every visit is a rejuvenating escape. From expert hair treatments to luxurious facials and relaxing spa therapies, we provide services that cater to your every need. Visit our Bastin Bazaar branch to experience beauty, wellness, and relaxation like never before.",
    address:
      "Comfort Salon Bastin Bazaar,Beside Amrito Sweets, Asansol-713301",
    contactNumber: "+91 8001927701",
    email: "office@comfort.org.in",
    workingHours: {
      weekdays: "10:00 AM - 9:00 PM",
      weekends: "9:30 AM - 10:00 PM",
    },
  },
  {
    id: "shop-7",
    name: "COMFORT Purulia",
    image: "/assets/pic-86.jpg",
    city: "Purulia",
    state: "West Bengal",
    establishedDate: "2020",
    description:
      "Our Comfort branch in Purulia is a haven of elegance and relaxation. COMFORT Luxury Salon brings high-end styling, skincare, and spa services to one of Purulia's most vibrant neighborhoods. Our team of professionals is dedicated to crafting personalized beauty experiences, ensuring that every visit is a rejuvenating escape. From expert hair treatments to luxurious facials and relaxing spa therapies, we provide services that cater to your every need. Visit our Comfort Purulia's branch to experience beauty, wellness, and relaxation like never before.",
    address:
      "Comfort Salon, KB City Center Mall Beside Baskin Robbins, deshbandhu road purulia-723101",
    contactNumber: "+91 7001707292",
    email: "office@comfort.org.in",
    workingHours: {
      weekdays: "10:00 AM - 9:00 PM",
      weekends: "9:30 AM - 10:00 PM",
    },
  },
  {
    id: "shop-8",
    name: "COMFORT Bankura",
    image: "/assets/pic-88.jpg",
    city: "Bankura",
    state: "West Bengal",
    establishedDate: "2020",
    description:
      "Our Comfort branch in Bankura is a haven of elegance and relaxation. COMFORT Luxury Salon brings high-end styling, skincare, and spa services to one of Bankura’s most vibrant neighborhoods. Our team of professionals is dedicated to crafting personalized beauty experiences, ensuring that every visit is a rejuvenating escape. From expert hair treatments to luxurious facials and relaxing spa therapies, we provide services that cater to your every need. Visit our Bankura branch to experience beauty, wellness, and relaxation like never before.",
    address:
      "Comfort Salon Swastik Alloy Apartment beside Sanjeevani Medical, Pratap Bagan, Bankura-722101",
    contactNumber: "+91 9733686328",
    email: "office@comfort.org.in",
    workingHours: {
      weekdays: "10:00 AM - 9:00 PM",
      weekends: "9:30 AM - 10:00 PM",
    },
  }
];

const Shops = () => {
  return (
    <div className="min-h-screen bg-secondary-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-gray-800 hover:bg-gray-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Our Locations
          </h1>
          <p className="text-lg text-gray-300">
            Find your nearest COMFORT salon and experience luxury beauty
            services
          </p>
        </div>

        {/* Shops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {shopData.map((shop) => (
            <div key={shop.id}>
              <Card className="overflow-hidden shadow-xl bg-gray-900 h-[24rem] flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src={shop.image || "/placeholder.svg"}
                    alt={shop.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2">
                    {shop.name}
                  </h3>

                  <div className="mt-2 flex justify-start">
                    <a href={`/shops/${shop.id}`}>
                      <Button className="hover:scale-110 duration-300 transition-transform ease-in-out bg-white text-black hover:bg-white hover:text-black">
                        Know More
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shops;

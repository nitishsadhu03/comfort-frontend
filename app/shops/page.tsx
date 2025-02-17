import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const shopData = [
  {
    id: "shop-1",
    name: "COMFORT SALON-SB GORAI ROAD",
    image: "/assets/hero-bg.jpg",
    city: "Asansol",
    state: "West Bengal",
    establishedDate: "2001",
    description:
      "Our flagship store featuring premium services in the heart of South Delhi. At COMFORT Luxury Salon, we offer a wide range of high-end beauty and grooming services tailored to meet the diverse needs of our clientele. With a team of expert stylists and beauty professionals, we ensure top-notch service quality using the latest trends, techniques, and premium products. Whether you are looking for a relaxing spa session, a rejuvenating skincare treatment, or a stylish hair makeover, our salon provides a luxurious experience designed to pamper and enhance your beauty. Experience elegance, comfort, and personalized care at our South Extension branch, where excellence is our standard.",
    address: "SB GORAI Road, opposite Gorai Mansion, pin:- 713301",
    contactNumber: "+91 9876543210",
    email: "office@comfort.org.in",
    workingHours: {
      weekdays: "10:00 AM - 8:00 PM",
      weekends: "9:00 AM - 9:00 PM",
    },
    employees: [
      {
        id: 1,
        name: "Priya Sharma",
        role: "Senior Stylist",
        image: "/assets/service-1.jpg",
        description: "Expert in hair styling and color treatments",
        experience: 10,
        specialties: ["Balayage", "Hair Coloring", "Bridal Styling"],
      },
      {
        id: 2,
        name: "Rahul Mehra",
        role: "Beauty Specialist",
        image: "/assets/service-2.jpg",
        description: "Specializing in advanced skincare and beauty treatments",
        experience: 8,
        specialties: ["Facial Treatments", "Skin Consultation", "Makeup"],
      },
    ],
  },
  {
    id: "shop-2",
    name: "Schwarzkopf Comfort Salon",
    image: "/assets/hero-bg.jpg",
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
    },
    employees: [
      {
        id: 3,
        name: "Sanya Kapoor",
        role: "Hair Stylist",
        image: "/assets/service-5.jpg",
        description: "Specialist in modern haircuts and styling",
        experience: 7,
        specialties: ["Layered Cuts", "Hair Spa", "Keratin Treatment"],
      },
      {
        id: 4,
        name: "Vikram Singh",
        role: "Massage Therapist",
        image: "/assets/service-6.jpg",
        description: "Expert in deep tissue and relaxation massages",
        experience: 9,
        specialties: ["Swedish Massage", "Aromatherapy", "Reflexology"],
      },
    ],
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
  {
    id: "shop-4",
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
  {
    id: "shop-5",
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
  {
    id: "shop-6",
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
  {
    id: "shop-7",
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
  {
    id: "shop-8",
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
  {
    id: "shop-9",
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

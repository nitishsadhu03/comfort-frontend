import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Membership = () => {
  const plans = [
    {
      name: "Silver Membership",
      tagline: "Perfect for regular clients",
      price: "1599.00",
      period: "yr",
      originalPrice: "2099.00",
      savings: "SAVE 22%",
      renewal: "Renews at ₹1599.00/yr.",
      popular: false,
      features: [
        "10% discount on all services",
        "Priority booking",
        "1 free facial per year",
        "Product discounts",
        "Monthly newsletter",
      ],
    },
    {
      name: "Gold Membership",
      tagline: "Everything you need for premium care",
      price: "2599.00",
      period: "yr",
      originalPrice: "2999.00",
      savings: "SAVE 25%",
      renewal: "Renews at ₹2599.00/yr.",
      popular: true,
      features: [
        "20% discount on all services",
        "VIP booking priority",
        "4 free facials per year",
        "Exclusive product discounts",
        "Bi-weekly skincare consultations",
        "Free monthly treatment",
        "Access to members-only events",
      ],
    },
  ];

  return (
    <div className="bg-secondary-foreground text-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Comfort Membership Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect membership for your beauty needs and enjoy
            exclusive benefits tailored just for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-gray-900 border-2 ${
                plan.popular ? "border-primary" : "border-gray-700"
              } relative overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold transform translate-x-2 translate-y-2 rotate-12">
                  MOST POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {plan.name}
                </CardTitle>
                <p className="text-gray-300">{plan.tagline}</p>
                <div className="mt-4">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white">
                    ₹{plan.price}
                    </span>
                    <span className="text-lg text-gray-400 ml-1">
                      /{plan.period}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="line-through text-gray-400 mr-2">
                    ₹{plan.originalPrice}
                    </span>
                    <span className="text-primary text-sm font-bold">
                      {plan.savings}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "bg-primary"
                      : "bg-white border-primary border-2 text-black hover:text-white"
                  }`}
                >
                  Choose plan
                </Button>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  {plan.renewal}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Not sure which membership to choose?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our beauty consultants can help you select the perfect membership
            based on your skincare needs and budget.
          </p>
          <Button variant="outline" className="border-primary text-primary">
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Membership;

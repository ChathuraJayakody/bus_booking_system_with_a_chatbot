import { Shield, Clock, CreditCard, Headphones } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your bookings and payments are protected with bank-level security'
    },
    {
      icon: Clock,
      title: 'Quick Booking',
      description: 'Book your tickets in less than 2 minutes with our easy process'
    },
    {
      icon: CreditCard,
      title: 'Easy Payments',
      description: 'Multiple payment options including cards and mobile wallets'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our customer support team is always here to help you'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg">
            We make bus travel simple, safe, and convenient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
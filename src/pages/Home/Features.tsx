import { Truck, ShieldCheck, RefreshCcw, Headset } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Truck size={24} className="text-blue-500" />,
      title: "Free Shipping",
      subtitle: "On orders over 500 EGP",
      iconBg: "bg-blue-50"
    },
    {
      icon: <ShieldCheck size={24} className="text-green-500" />,
      title: "Secure Payment",
      subtitle: "100% secure transactions",
      iconBg: "bg-green-50"
    },
    {
      icon: <RefreshCcw size={24} className="text-orange-500" />,
      title: "Easy Returns",
      subtitle: "14-day return policy",
      iconBg: "bg-orange-50"
    },
    {
      icon: <Headset size={24} className="text-purple-500" />,
      title: "24/7 Support",
      subtitle: "Dedicated support team",
      iconBg: "bg-purple-50"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${feature.iconBg}`}>
              {feature.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">{feature.title}</h3>
              <p className="text-gray-500 text-xs mt-0.5">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

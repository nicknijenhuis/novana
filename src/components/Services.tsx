import * as React from 'react';
import {
  FaCode,
  FaCogs,
  FaEnvelope,
  FaLightbulb,
  FaServer,
  FaShoppingCart,
} from 'react-icons/fa';

const ServiceCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <div className='p-6 bg-gray-800 rounded-lg'>
    <div className='flex items-center justify-between mb-2'>
      <Icon className='w-6 h-6 text-primary-400' />
      <h3 className='flex-1 text-xl font-bold text-white text-center'>
        {title}
      </h3>
      <div className='w-6'></div>
    </div>
    <p className='text-gray-300'>{description}</p>
  </div>
);

export default function Services() {
  const services = [
    {
      title: 'Webontwikkeling',
      description:
        'Moderne en schaalbare webapplicaties met React, Next.js en TypeScript. Focus op prestaties, toegankelijkheid en gebruiksvriendelijkheid.',
      icon: FaCode,
    },
    {
      title: 'Software architectuur',
      description:
        'Ontwerp van robuuste, onderhoudbare systemen. Expertise in microservices, cloud-native architectuur en gedistribueerde systemen.',
      icon: FaServer,
    },
    {
      title: 'Backend ontwikkeling',
      description:
        'Krachtige en veilige backend systemen met C# (.NET) en Go. Specialisatie in API ontwikkeling, optimalisatie en high-performance applicaties.',
      icon: FaCogs,
    },
    {
      title: 'IT Advies',
      description:
        'Strategisch advies voor digitale zaken. Optimalisatie van ontwikkelprocessen en technische workflows voor maximale efficiëntie.',
      icon: FaLightbulb,
    },
    {
      title: 'E-commerce',
      description:
        'Technisch advies voor e-commerce platforms. Expertise in payment integraties, API koppelingen, performance optimalisatie en security vraagstukken.',
      icon: FaShoppingCart,
    },
    {
      title: 'Email verbeteringen',
      description:
        'Verbetering van email aflevering en engagement. Implementatie van DMARC, SPF en DKIM. Optimalisatie van verzendreputatie.',
      icon: FaEnvelope,
    },
  ];

  return (
    <section className='mt-6 w-full max-w-5xl'>
      <h2 className='text-3xl font-bold text-white mb-8 text-center'>
        Onze diensten
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

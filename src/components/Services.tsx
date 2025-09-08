import React from 'react';
import { Smartphone, Globe, Database, Cloud, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas e responsivas usando as mais recentes tecnologias como React, Vue, e Node.js.',
      features: ['Progressive Web Apps', 'E-commerce', 'Dashboards', 'APIs REST']
    },
    {
      icon: Smartphone,
      title: 'Apps Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android com performance excepcional.',
      features: ['React Native', 'Flutter', 'App Store', 'Google Play']
    },
    {
      icon: Cloud,
      title: 'Soluções Cloud',
      description: 'Migração e desenvolvimento de aplicações na nuvem com escalabilidade garantida.',
      features: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
    },
    {
      icon: Database,
      title: 'Sistemas Corporativos',
      description: 'ERPs, CRMs e sistemas de gestão personalizados para otimizar processos internos.',
      features: ['ERP', 'CRM', 'BI', 'Automação']
    },
    {
      icon: Shield,
      title: 'Segurança Digital',
      description: 'Implementação de práticas de segurança avançadas e auditoria de código.',
      features: ['Pentesting', 'LGPD', 'ISO 27001', 'Criptografia']
    },
    {
      icon: Zap,
      title: 'Consultoria Tech',
      description: 'Consultoria estratégica em tecnologia para acelerar a transformação digital.',
      features: ['Arquitetura', 'Code Review', 'Mentoria', 'Roadmap']
    }
  ];

  return (
    <section id="serviços" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de desenvolvimento de software 
            para impulsionar sua transformação digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
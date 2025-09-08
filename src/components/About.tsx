import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Cada projeto é desenvolvido com foco total nas necessidades específicas do cliente.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Utilizamos as tecnologias mais avançadas para criar soluções únicas.'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalhamos em parceria com nossos clientes em cada etapa do projeto.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Comprometidos em entregar software de alta qualidade que supera expectativas.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a Nexora One
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa de desenvolvimento de software especializada em criar 
            soluções inovadoras que transformam a forma como as empresas operam e crescem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Capacitar empresas através de tecnologia de ponta, desenvolvendo software 
              personalizado que não apenas atende, mas antecipa as necessidades do mercado 
              em constante evolução.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Com mais de 5 anos de experiência, nossa equipe combina expertise técnica 
              com visão estratégica para entregar resultados excepcionais.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">150+</div>
                <div className="text-gray-600">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">99%</div>
                <div className="text-gray-600">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800 mb-2">24/7</div>
                <div className="text-gray-600">Suporte</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Roberto Mendes',
      company: 'TechCorp',
      role: 'CTO',
      content: 'A Nexora One transformou completamente nossa operação. O sistema desenvolvido aumentou nossa produtividade em 40% e a qualidade do código é excepcional.',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg'
    },
    {
      name: 'Fernanda Lima',
      company: 'InnovateHub',
      role: 'CEO',
      content: 'Parceria fantástica! A equipe entendeu perfeitamente nossa visão e entregou uma solução que superou todas as expectativas. Recomendo fortemente.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg'
    },
    {
      name: 'João Pereira',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'Profissionalismo e qualidade excepcionais. O app desenvolvido pela Nexora One nos ajudou a captar investimento e escalar rapidamente.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como ajudamos empresas a alcançar seus objetivos através de software excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
              <Quote className="w-8 h-8 text-blue-500/20 absolute top-6 right-6" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-700 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
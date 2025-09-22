import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Relson Ferreira',
      role: 'CEO & Founder',
      bio: 'Visionário em tecnologia com expertise em transformação digital e liderança estratégica.',
      image: `${import.meta.env.BASE_URL}Foto.png`,
      Linkedin: 'https://www.linkedin.com/in/relson-souza-ferreira-b7b25056',
      Github: 'https://github.com/relsonsf',
      Mail: 'relson@nexoraone.com.br'
    },
    {
      name: 'Gustavo Rodrigues',
      role: 'CTO & Founder',
      bio: 'Co-fundador e líder técnico especializado em arquitetura de software e inovação tecnológica.',
      image: `${import.meta.env.BASE_URL}FotoGu.png`,
      Mail: 'gustavo@nexoraone.com.br'
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os profissionais talentosos que tornam a Nexora One uma referência 
            em desenvolvimento de software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center place-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-700 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                 <button
                    onClick={() => window.open(member.Linkedin, '_blank', 'noopener,noreferrer')}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors duration-200"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>

                  <button 
                    onClick={() => window.open(member.Github, '_blank', 'noopener,noreferrer')}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { achievements } from '../data/portfolio';
import { SectionWrapper } from './SectionWrapper';
import { AnimatedHeading } from './AnimatedHeading';

const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    const icons = {
      trophy: Trophy,
      award: Award,
      medal: Medal
    };
    return icons[iconName as keyof typeof icons] || Trophy;
  };

  const getIconColor = (position: string) => {
    if (position.includes('1st')) return 'text-yellow-400';
    if (position.includes('2nd')) return 'text-gray-300';
    if (position.includes('3rd')) return 'text-orange-400';
    return 'text-cyan-400';
  };

  return (
    <SectionWrapper id="achievements" className="py-20 px-4">
      <AnimatedHeading>Achievements</AnimatedHeading>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = getIcon(achievement.icon);
            const iconColor = getIconColor(achievement.position);
            
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className={`${iconColor} group-hover:animate-pulse`} size={32} />
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className={`text-sm font-medium ${iconColor}`}>
                      {achievement.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Mastercard Cybersecurity',
              'AWS Solutions Architecture',
              'EA Games Software Engineering',
              'Tata Data Visualization',
              'Microsoft & LinkedIn Career Essentials',
              'IIT Delhi Generative AI'
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <div className="flex items-center space-x-3">
                  <Award className="text-cyan-400" size={20} />
                  <p className="text-white text-sm">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
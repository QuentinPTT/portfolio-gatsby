import React from 'react';
import {icons} from './Icons'

function LeftComponent({ project }) {
const imagePath = require(`../images/${project.image}`);
  return (
    <div className='flex justify-center items-center lg:justify-between relative lg:static mb-20'>
      <div className='max-w-xl relative w-full hover:scale-105 transition-transform'>
        <a href={project.link} className='block h-96 lg:h-80'>
          <img src={imagePath.default} alt='grey bg' className='rounded-xl w-full object-cover h-full' />
        </a>
        <div className='absolute inset-0 bg-black bg-opacity-80 lg:bg-opacity-0 rounded-xl'></div>
      </div>
      <div className='flex flex-col justify-center items-center max-w-lg absolute lg:static w-full z-10'>
        <a href={project.link} className='text-3xl mb-2 font-bold hover:text-red-400 transition-colors'>{project.title}</a>
        <p className='bg-light_blue p-6 rounded-xl leading-relaxed mx-4 text-gray-400'>
          {project.description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < project.description.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
        <div className='flex w-full flex-wrap mt-2'>
            {project.techs.map((tech, index) => {
            const Icon = icons[tech.icon]; 
            if (!Icon) return null; // Check if the icon exists
            return (
                <a key={index} href={tech.link} className='ml-4'>
                    <div className='flex items-center'>
                        <Icon width='1rem' height="1rem" alt={tech.name} /> {/* Render the React component for the SVG */}
                        <p style={{color:`${tech.color}`}}className={`pl-2`}>{tech.name}</p>
                    </div>
                </a>
            );
            })}
        </div>
        <div className='flex w-full flex-wrap mt-2'>
            {project.featured.map((feature, index) => {
            const Icon = icons[feature.icon]; 
            if (!Icon) return null; // Check if the icon exists
            return (
                <a key={index} href={feature.link} className='ml-4'>
                    <div className='flex items-center'>
                        <Icon width='1.8rem' height="1.8rem" className='hover:fill-red-600 transition-colors' alt={feature.name} />
                    </div>
                </a>
            );
            })}
        </div>
      </div>
    </div>
  );
}

export default LeftComponent;

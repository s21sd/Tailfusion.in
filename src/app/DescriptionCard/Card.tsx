import React from 'react';
import { CardProps } from '../types/type';
import { content } from '../utils/data';

const Card: React.FC<CardProps> = ({ contentVal }) => {
    return (
        <div className='box-border'>
            <div className='flex flex-col gap-4 dark:text-black'>
                <h1 className='text-[#fff2c1] text-4xl dark:text-[#9e4ceb] font-bold'>{content[contentVal].title}</h1>
                <p className='text-gray-400 text-sm sm:text-xl p-4 dark:text-gray-700'>{content[contentVal].description}</p>
            </div>
            <div className='flex flex-col gap-2 mt-2 pl-4'>
                <h1 className='text-[#fff2c1] text-xl font-bold dark:text-[#9e4ceb]'>{content[contentVal].sections[0].title}</h1>
                <p className='text-gray-400 p-2 text-sm sm:text-xl dark:text-gray-700'>{content[contentVal].sections[0].description}</p>
            </div>
            <div className='flex flex-col gap-2 mt-2 pl-4'>
                <h1 className='text-[#fff2c1] text-xl font-bold dark:text-[#9e4ceb]'>{content[contentVal].sections[1].title}</h1>
                <p className='text-gray-400 p-2 text-sm sm:text-xl dark:text-gray-700'>{content[contentVal].sections[1].description}</p>
            </div>
            <div className='mt-2 pl-4'>
                <h2 className='text-[#fff2c1] text-xl font-bold dark:text-[#9e4ceb]'>Features</h2>
                <ul className='list-disc list-inside mb-8 mt-4 p-2 text-gray-400 dark:text-gray-700 text-sm sm:text-xl'>
                    {content[contentVal].features.map((feature, index) => (
                        <li key={index} className='mb-2'>
                            <strong>{feature.split(':')[0]}:</strong> {feature.split(':')[1]}
                        </li>
                    ))}
                </ul>
                <h2 className='text-[#fff2c1] text-xl font-bold dark:text-[#9e4ceb]'>Benefits</h2>
                <ul className='list-disc list-inside mb-8 mt-4 p-2 text-gray-400 dark:text-gray-700 text-sm sm:text-xl'>
                    {content[contentVal].benefits.map((benefit, index) => (
                        <li key={index} className='mb-2'>
                            <strong>{benefit.split(':')[0]}:</strong> {benefit.split(':')[1]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;

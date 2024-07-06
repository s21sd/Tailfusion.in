import React from 'react';
import { CardProps } from '../types/type';
import { content } from '../utils/data';
const Card: React.FC<CardProps> = ({ contentVal }) => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[#fff2c1] text-4xl font-bold'>{content[contentVal].title}</h1>
                <p className='text-gray-400 text-xl p-4'>{content[contentVal].description}</p>
            </div>
            <div className='flex flex-col gap-2 mt-2 pl-4'>
                <h1 className='text-[#fff2c1] text-xl font-bold'>{content[contentVal].sections[0].title}</h1>
                <p className='text-gray-400 p-2'>{content[contentVal].sections[0].description}
                </p>
            </div>
            <div className='flex flex-col gap-2 mt-2 pl-4'>
                <h1 className='text-[#fff2c1] text-xl font-bold'>{content[contentVal].sections[1].title}
                </h1>
                <p className='text-gray-400 p-2'>{content[contentVal].sections[1].description}</p>
            </div>
            <div className="mt-2 pl-4">
                <h2 className="text-[#fff2c1] text-xl font-bold">Features</h2>
                <ul className="list-disc list-inside mb-8 mt-4 p-2 text-gray-400">
                    {content[contentVal].features.map((feature, index) => (
                        <li key={index} className="mb-2">
                            <strong>{feature.split(":")[0]}:</strong> {feature.split(":")[1]}
                        </li>
                    ))}

                </ul>

                <h2 className="text-[#fff2c1] text-xl font-bold">Benefits</h2>
                <ul className="list-disc list-inside mb-8 mt-4 p-2 text-gray-400">
                    {content[contentVal].benefits.map((benefit, index) => (
                        <li key={index} className="mb-2">
                            <strong>{benefit.split(":")[0]}:</strong> {benefit.split(":")[1]}
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default Card;
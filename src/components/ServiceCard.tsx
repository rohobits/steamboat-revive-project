// src/components/ServiceCard.tsx

import React from 'react';
import Button from '@/components/Button';

export interface Service {
  name: string;
  description?: string;
  image: string;
  link?: string;
  callToAction: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="object-cover w-full h-full object-center"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-steamboat-darkBlue">
          {service.name}
        </h3>
        {service.description && (
          <p className="mb-4 text-steamboat-gray">{service.description}</p>
        )}
        {service.link ? (
          <div className="flex justify-center">
            <Button
              to={service.link.startsWith('#') ? undefined : service.link}
              href={service.link.startsWith('#') ? service.link : undefined}
              external={!service.link.startsWith('#') && /^https?:\/\//.test(service.link)}
              variant="secondary"
            >
              {service.callToAction}
            </Button>
          </div>
        ) : (
          <div className="flex justify-center">
            <Button variant="secondary" className="cursor-default">
              {service.callToAction}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

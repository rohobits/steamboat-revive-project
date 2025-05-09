// src/components/ServiceCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';

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
        {service.link && (
          <div className="flex justify-center">
            <Link to={service.link} className="btn-secondary">
              {service.callToAction}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

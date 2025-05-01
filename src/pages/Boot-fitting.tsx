import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Shoe, Compass, Layers, Wrench, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BASE_URL = import.meta.env.BASE_URL;

const testimonials = [
  {
    text: "The expert staff at this shop knew exactly how to dial in my boots. I’ve never skied more comfortably!",
    author: "Harry",
    rating: 5,
  },
  {
    text: "MJ and the team were so friendly and took the time to explain every step. My boots feel custom-built!",
    author: "MJ",
    rating: 5,
  },
  {
    text: "Willie’s quality tunes made a world of difference on the slopes. Boot fitting has never been so precise.",
    author: "Willie",
    rating: 5,
  },
  {
    text: "Brendan’s attention to detail is unmatched. Free lifetime adjustments seal the deal—best in Colorado!",
    author: "Brendan",
    rating: 5,
  },
];

export default function BootFittingPage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden pt-20">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={`${BASE_URL}videos/boot-fit-loop.mp4`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
            Precision Boot Fitting in Steamboat Springs
          </h2>
          <p className="mt-3 text-xl lg:text-2xl drop-shadow-md">
            Custom comfort and performance from top to toe
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-16">
        {/* Page Title */}
        <div className="flex items-center space-x-4 mb-8">
          <Shoe className="text-steamboat-blue" size={36} />
          <h1 className="section-title mb-0">Boot Fitting Services</h1>
        </div>

        {/* Intro Copy */}
        <section className="mb-12">
          <p className="text-lg text-steamboat-gray">
            Our expert boot fitters combine advanced fitting technology with hands-on craftsmanship to create a custom fit that's unrivaled in Colorado. From shell selection and heat molding to precision alignment and footbeds, we tailor every step to your unique anatomy and skiing style.
          </p>
        </section>

        {/* Key Steps */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex items-start space-x-3">
            <Compass className="text-steamboat-blue" size={32} />
            <div>
              <h4 className="text-lg font-semibold text-steamboat-darkBlue">Shell Selection</h4>
              <p className="text-steamboat-gray">Guided by our experts to choose the ideal boot for your foot shape and riding style.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Layers className="text-steamboat-blue" size={32} />
            <div>
              <h4 className="text-lg font-semibold text-steamboat-darkBlue">Custom Footbeds</h4>
              <p className="text-steamboat-gray">Individually cast and heat-formed for perfect arch support and alignment.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Wrench className="text-steamboat-blue" size={32} />
            <div>
              <h4 className="text-lg font-semibold text-steamboat-darkBlue">Precision Adjustments</h4>
              <p className="text-steamboat-gray">Fine-tuning shell punches and canting to eliminate pressure points.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-steamboat-blue" size={32} />
            <div>
              <h4 className="text-lg font-semibold text-steamboat-darkBlue">Final Dial-In</h4>
              <p className="text-steamboat-gray">Comprehensive performance check to ensure optimal control on every run.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <Star className="text-steamboat-blue" size={32} />
            <h2 className="text-2xl font-bold text-steamboat-darkBlue">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="text-steamboat-orange" size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-steamboat-gray mb-4 italic">"{t.text}"</p>
                  <p className="font-semibold text-steamboat-darkBlue">- {t.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Guarantee Banner */}
        <section className="bg-gray-50 text-center rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-steamboat-blue">Free Lifetime Adjustments</h3>
          <p className="text-steamboat-gray mt-2">Purchase your boots from us and enjoy unlimited adjustments for life.</p>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <a
            href="tel:9708799144"
            className="px-6 py-3 bg-steamboat-blue text-white font-semibold rounded shadow hover:bg-white hover:text-steamboat-blue transition"
          >
            Call Us to Schedule Your Appointment Today
          </a>
        </section>
      </div>

      <Footer />
    </>
  );
}

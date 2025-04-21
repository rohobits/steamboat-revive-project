
const Testimonial = ({ quote, author, position }: { quote: string; author: string; position: string }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="relative">
        <svg
          className="absolute top-0 left-0 w-16 h-16 text-steamboat-blue/10 transform -translate-x-6 -translate-y-6"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative mt-4 text-lg italic text-steamboat-gray">{quote}</p>
      </div>
      <div className="mt-6">
        <p className="font-semibold text-steamboat-darkBlue">{author}</p>
        <p className="text-sm text-steamboat-gray">{position}</p>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "We've rented equipment from Steamboat Ski & Bike for years. Their gear is always top-notch and the staff is incredibly knowledgeable. They made our family's ski trip so much easier!",
      author: "Jennifer T.",
      position: "Annual Visitor from Texas",
    },
    {
      quote: "The mountain bike they set me up with was perfect for the trails around Steamboat. The staff took time to understand my experience level and recommended the ideal bike and trails.",
      author: "Michael D.",
      position: "Mountain Biking Enthusiast",
    },
    {
      quote: "As first-time visitors to Steamboat, we weren't sure what to expect. The team helped us choose the right ski equipment and gave us great tips for the mountain. We'll definitely be back!",
      author: "Sarah and John K.",
      position: "First-time Visitors",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

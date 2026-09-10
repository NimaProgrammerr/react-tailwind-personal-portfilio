import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

// import image1 from "../../public/profile-image/profile-image-1.jpg";
// import image2 from "../../public/profile-image/profile-image-2.jpg";
// import image3 from "../../public/profile-image/profile-image-3.jpg";
// import image4 from "../../public/profile-image/profile-image-4.jpg";
// import image5 from "../../public/profile-image/profile-image-5.jpg";


const testimonials = [
  {
    quote:
      "Nima is a highly motivated developer with a strong passion for learning and improving his technical skills. What stands out most is his ability to understand new technologies quickly and apply them in real projects. He is responsible, curious, and always willing to take on new challenges. I believe he has great potential to grow into a strong software engineer.",
    author: "Ali Valipour",
    role: "CTO, Tech Innovators Inc.",
    avator: "../../public/profile-image/profile-image-1.jpg",
  },
  {
    quote:
      "Working with Nima has been a great experience. He understands that building a good product is not only about writing code, but also about understanding user needs and business goals. He communicates well, takes feedback seriously, and consistently looks for ways to improve the final product. His mindset and willingness to learn make him a valuable member of any team.",
    author: "Armin Mohammadi",
    role: "Product Manager",
    avator: "../../public/profile-image/profile-image-2.jpg",
  },
  {
    quote:
      "Nima has a strong interest in modern front-end development and pays close attention to both functionality and user experience. His work with React, TypeScript, and Tailwind CSS shows his commitment to building clean and responsive interfaces. He is also comfortable learning from others, solving problems, and continuously improving the quality of his code.",
    author: "Ata Alizade",
    role: "Front-End Developer",
    avator: "../../public/profile-image/profile-image-3.jpg",
  },
  {
    quote:
      "Nima is a developer who understands the importance of good communication between the front-end and back-end. He is interested in how APIs, databases, and application architecture work together to create reliable software. He asks the right questions, learns quickly, and is always looking for a better technical solution. I really appreciate his collaborative approach to development.",
    author: "Mohammad hassani",
    role: "Back-End developer",
    avator: "../../public/profile-image/profile-image-4.jpg",
  },
  {
    quote:
      "Nima has a good understanding of the relationship between design and development. He pays attention to details and makes an effort to translate UI/UX designs into clean, responsive, and user-friendly interfaces. He is open to feedback and understands that small visual details can make a big difference in the overall user experience.",
    author: "Hassan Mohammadi",
    role: "Ui/Ux desiner",
    avator: "../../public/profile-image/profile-image-5.jpg",
  },
];

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next =() => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  }

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
            w-[800px] h-[800px] bg-primary/5
            rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
             px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground
            text-sm font-medium tracking-wider
            uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind Words from{" "}
            <span className="font-serif italic 
            font-normal text-white">
              Amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium  leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img src={testimonials[activeIdx].avator}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-conver ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">{testimonials[activeIdx].author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                <button 
                onClick={() => setActiveIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
              </div>

              <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

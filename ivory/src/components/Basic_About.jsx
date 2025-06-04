const aboutData = [
  {
    id: 1,
    number: "01",
    headline: "Match with one of our talented designers and get inspired.",
    paragraph:
      "Take a style quiz to help us get to know you a little bit better, then choose your interior designer from our personalized recommendations. With over 10 years of experience and nearly 1 million designs, our expert team will help you turn your vision into reality.",
    image: "images/img/services_img/service-04.jpg",
  },
  {
    id: 2,
    number: "02",
    headline: "Visualize your space with customized mood boards.",
    paragraph:
      "We craft designs tailored to your tastes and preferences. Our personalized visual plans help you make informed decisions about furniture and layout before making a purchase.",
    image: "/images/img/services_img/service-05.jpg",
  },
  {
    id: 3,
    number: "03",
    headline: "Get ongoing support from your dedicated designer.",
    paragraph:
      "Once your design is complete, we stay with you. Get help with orders, decor ideas, or layout tweaks — we’re just a message away throughout your home transformation.",
    image: "/images/img/services_img/service-01.webp",
  },
];

const Basic_About = () => {
  return (
    <section className="w-[75%] mx-auto my-20 space-y-20">
        <h1 className="text-center text-lg font-semibold uppercase font-['Charis_SIL']">How Ivory Work</h1>
      {aboutData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col lg:flex-row gap-10 max-md:justify-center max-md:items-center "
        >
          
          <div className="text-4xl font-['Charis_SIL'] text-[#D83B28] min-w-[120px] ">
            {item.number}
          </div>

          {/* Center: Text */}
          <div className="w-[400px] max-md:w-full">
            <h2 className="text-3xl font-['Charis_SIL'] text-black mb-4 leading-snug">
              {item.headline}
            </h2>
            <p className="text-black text-sm leading-relaxed">
              {item.paragraph}
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-[476px] h-[327px] bg-white shadow-md flex items-center justify-center ml-40 max-lg:ml-0 max-md:w-[380px] max-md:h-[300px]">
            <img
              src={item.image}
              alt={`About ${item.id}`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          
        </div>
      ))}
    </section>
  );
};

export default Basic_About;

import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-base-200 xl:h-screen font-poppins gap-7 mt-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full mb-10 md:w-96 mx-auto">
              <img
                src={section.image}
                alt=""
                className="object-cover w-full h-96 rounded-3xl"
              />
            </div>
            <div className="w-full px-4 mb-10">
              <h2
                className={`mb-4 text-2xl md:text-4xl font-semibold text-${section.color}`}
              >
                {section.title}
              </h2>
              <p className="mb-10 text-base md:text-lg leading-7">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const sections = [
  {
    title: "About Us",
    color: "blue-500",
    image:
      "https://images.pexels.com/photos/8918416/pexels-photo-8918416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "Welcome to BOOKSTACK, your destination for literary exploration and discovery. Our passion for books is at the heart of everything we do, and we're thrilled to share it with you. At bookstack, we believe that books have the power to transport us to new worlds, broaden our horizons, and connect us with the thoughts and experiences of others. Our website is dedicated to connecting book enthusiasts, whether you're an avid reader, a casual book lover, or someone just starting their reading journey.",
  },
  {
    title: "Our Mission",
    color: "red-500",
    image:
      "https://images.pexels.com/photos/6135340/pexels-photo-6135340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "Our mission is simple: to inspire a love for reading and promote the joy of books. We're here to help you find your next great read, whether it's a thrilling mystery, a heartwarming romance, an insightful non-fiction work, or anything in between. We curate and review a wide variety of books to provide you with recommendations that cater to all tastes and preferences.",
  },
  {
    title: "Why Choose Us?",
    color: "green-500",
    image:
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "User-Friendly Interface: We've designed our website to be user-friendly, making it easy for you to explore and discover new books. Diverse Selection: We offer a diverse selection of book recommendations, ensuring there's something for everyone. From classic literature to contemporary bestsellers, we've got you covered. Curation with Care: We take the time to curate our book recommendations with care. Our team of avid readers sifts through a multitude of titles, selecting only the best to ensure you're introduced to high-quality books that are worth your time.",
  },
  {
    title: "Connect With Us",
    color: "orange-500",
    image:
      "https://images.pexels.com/photos/7583935/pexels-photo-7583935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "We'd love to hear from you and connect with fellow book enthusiasts. Feel free to reach out to us through our Contact Page for inquiries, suggestions, or simply to discuss your latest literary discovery. Join us on our social media platforms, where we share book recommendations, author interviews, and more. Thank you for being a part of the BOOKSTACK community.",
  },
];

export default AboutUs;

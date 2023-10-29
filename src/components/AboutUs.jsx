import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <section class="grid grid-cols-2 bg-base-200 xl:h-screen font-poppins gap-7 mt-8">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/8918416/pexels-photo-8918416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                class="relative z-40 object-cover w-full h-96 rounded-3xl"
              />
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 class="mb-4 text-4xl font-semibold text-blue-500">
                About Us
              </h2>
              <p class="mb-10 text-base leading-7">
                Welcome to{" "}
                <span className="font-extrabold underline">BOOKSTACK</span>,
                your destination for literary exploration and discovery. Our
                passion for books is at the heart of everything we do, and we're
                thrilled to share it with you. At
                <span className="uppercase"> bookstack</span>, we believe that
                books have the power to transport us to new worlds, broaden our
                horizons, and connect us with the thoughts and experiences of
                others. Our website is dedicated to connecting book enthusiasts,
                whether you're an avid reader, a casual book lover, or someone
                just starting their reading journey.
              </p>
            </div>
          </div>
        </div>
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/6135340/pexels-photo-6135340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                class="relative z-40 object-cover w-full h-96 rounded-3xl"
              />
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 class="mb-4 text-4xl font-semibold text-red-500">
                Our Mission
              </h2>
              <p class="mb-10 text-base leading-7">
                <span className="font-extrabold">Our mission is simple:</span>{" "}
                to inspire a love for reading and promote the joy of books.
                We're here to help you find your next great read, whether it's a
                thrilling mystery, a heartwarming romance, an insightful
                non-fiction work, or anything in between. We curate and review a
                wide variety of books to provide you with recommendations that
                cater to all tastes and preferences.
              </p>
            </div>
          </div>
        </div>
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                class="relative z-40 object-cover w-full h-96 rounded-3xl"
              />
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 class="mb-4 text-4xl font-semibold text-green-500">
                Why Choose Us?
              </h2>
              <p class="mb-10">
                <span className="font-extrabold">User-Friendly Interface:</span>
                <br />
                We've designed our website to be user-friendly, making it easy
                for you to explore and discover new books.
                <br />
                <span className="font-extrabold">
                  Diverse Selection:
                  <br />
                </span>{" "}
                We offer a diverse selection of book recommendations, ensuring
                there's something for everyone. From classic literature to
                contemporary bestsellers, we've got you covered.
                <br />
                <span className="font-extrabold">Curation with Care:</span> We
                take the time to curate our book recommendations with care. Our
                team of avid readers sifts through a multitude of titles,
                selecting only the best to ensure you're introduced to
                high-quality books that are worth your time.
              </p>
            </div>
          </div>
        </div>
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/7583935/pexels-photo-7583935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                class="relative z-40 object-cover w-full h-96 rounded-3xl"
              />
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 class="mb-4 text-4xl font-semibold text-orange-500">
                Connect With Us
              </h2>
              <p class="mb-10 text-base leading-7">
                We'd love to hear from you and connect with fellow book
                enthusiasts. Feel free to reach out to us through our{" "}
                <Link to="/contactus">
                  <p className="font-extrabold underline">Contact Page</p>
                </Link>
                for inquiries, suggestions, or simply to discuss your latest
                literary discovery. Join us on our social media platforms, where
                we share book recommendations, author interviews, and more.
                Thank you for being a part of the BOOKSTACK community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

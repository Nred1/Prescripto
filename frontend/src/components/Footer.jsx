import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Le personnel peut se prévaloir sur place de services professionnels
            et confidentiels offerts à la Clinique médicale. Le bureau de la
            Clinique médicale offre une vaste gamme de services tels que des
            consultations médicales, des vaccins, un programme de contraception,
            et bien plus. Une infirmière est présente en tout temps et il y a
            une clinique médicale par jour, selon le calendrier.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-613-404-9428</li>
            <li>nouryredouane@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ Prescripto.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

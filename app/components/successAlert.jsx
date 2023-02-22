"use client";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessAlert(props) {
  if (!props.isHide) {
    return (
      <div className="flex items-center mb-5 py-3 px-6  rounded-lg bg-dark-green text-green ">
        <FaCheckCircle className="mr-4 text-6xl " />
        <div>
          <h1 className="mb-1 text-base">{props.title}</h1>
          <p className="text-xs font-light">{props.description}</p>
        </div>
      </div>
    );
  }
}

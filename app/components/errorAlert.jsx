"use client";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorAlert(props) {
  if (!props.isHide) {
    return (
      <div className="flex items-center mb-5 py-3 px-6  rounded-lg bg-orange text-sunset">
        <FaExclamationTriangle className="mr-4 text-6xl" />
        <div>
          <h1 className="mb-1 text-base">{props.title}</h1>
          <p className="text-xs font-light">{props.description}</p>
        </div>
      </div>
    );
  }
}

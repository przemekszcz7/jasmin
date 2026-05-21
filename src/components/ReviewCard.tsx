import React from "react";
import { REVIEWS } from "../data";
import { Review } from "../types";

export const ReviewCard: React.FC<{ review: Review; index: number }> = ({ review, index }) => {
  // Let the second card run slightly asymmetric (larger tilt or custom color accent)
  const isAltStyle = index === 1;

  return (
    <div
      className={`relative p-8 rounded-lg transition-all duration-300 flex flex-col justify-between ${
        isAltStyle
          ? "bg-bg-dark text-text-light border border-border-dark lg:scale-105 lg:rotate-[0.5deg] shadow-lg"
          : "bg-bg-section/70 text-text border-t-2 border-navy/30 hover:border-gold shadow-sm"
      }`}
    >
      {/* Decorative quotes symbol */}
      <span
        className={`absolute top-2 right-6 font-serif text-[4rem] select-none pointer-events-none ${
          isAltStyle ? "text-gold opacity-15" : "text-navy opacity-5"
        }`}
      >
        &ldquo;
      </span>

      <div>
        {/* Rating Stars based on positive review vibe */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${isAltStyle ? "text-gold fill-gold" : "text-gold fill-gold"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Content */}
        <p
          className={`font-serif text-lg leading-relaxed mb-6 italic ${
            isAltStyle ? "text-cream/90" : "text-text"
          }`}
        >
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Author profile block */}
      <div className="flex items-center gap-3.5 border-t border-navy/10 pt-4 mt-auto">
        <div>
          <div className="flex items-center gap-1.5 mt-0.5">
            {/* Tiny Facebook Logo Representational Vector */}
            <svg
              className="w-3.5 h-3.5 text-blue-500 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className={`font-sans text-[0.72rem] uppercase tracking-wide ${isAltStyle ? "text-cream/60" : "text-text-muted"}`}>
              Opinia z Facebooka
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

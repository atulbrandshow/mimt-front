"use client";

export default function ShimmerContent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center justify-center">
        {/* 3D Gradient Orb */}
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-primary/70 shadow-xl shadow-primary/40 animate-orb"></div>

        {/* Glow ring */}
        <div className="absolute w-28 h-28 rounded-full border border-primary/30 animate-glow">
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-gray-700 text-sm font-semibold tracking-wide animate-fade">
          Please wait, loading content...
        </p>
      </div>

      <style jsx>{`
        @keyframes orb {
          0% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.15);
            filter: brightness(1.3);
          }
          100% {
            transform: scale(1);
            filter: brightness(1);
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        @keyframes fade {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.4;
          }
        }

        .animate-orb {
          animation: orb 1.8s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2.4s ease-in-out infinite;
        }

        .animate-fade {
          animation: fade 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

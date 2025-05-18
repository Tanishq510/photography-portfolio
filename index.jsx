import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

export default function PhotographerPortfolio() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/ambient.mp3"); // Add ambient.mp3 in your public folder
    audio.loop = true;
    audio.volume = 0.1;
    audioRef.current = audio;
    audio.play();

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
        {/* Background Floating Circles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 bg-white/10 rounded-full top-10 left-10"
            animate={{ y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-72 h-72 bg-white/10 rounded-full bottom-10 right-10"
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-tight">
            Alex Lens
          </h1>
          <p className="text-lg md:text-2xl font-light mb-6">
            Capturing Emotion Through the Lens
          </p>
          <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2">
            View Portfolio
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-serif mb-6">About</h2>
          <p className="text-lg leading-relaxed">
            Alex is a passionate photographer who believes in the beauty of unfiltered
            moments. From portraits to landscapes, his work reflects emotion, depth,
            and clarity.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif mb-6">Portfolio</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <motion.img
              key={n}
              src={`/portfolio/pic${n}.jpg`}
              alt={`Pic ${n}`}
              className="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-serif mb-6">Contact</h2>
          <p className="text-lg mb-4">
            Let’s connect and create something beautiful.
          </p>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="mailto:alexlens@example.com"
              className="hover:text-gray-600"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://instagram.com/alexlens"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Tanishq Joshi. All rights reserved.
      </footer>
    </div>
  );
}

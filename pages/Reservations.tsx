import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Calendar, Users, Clock, MessageSquare, CheckCircle } from 'lucide-react';

const Reservations: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-cream-bg"
    >
      {/* Header Section for Navbar Visibility */}
      <div className="bg-wine-red text-white py-20 pt-32 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="relative z-10"
         >
            <h1 className="text-6xl md:text-7xl font-serif mb-4">Reservations</h1>
            <p className="text-gold-accent uppercase tracking-[0.3em] text-sm">Secure Your Experience</p>
         </motion.div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Form Section */}
          <div className="lg:w-1/2">
             <div className="mb-8">
               <h2 className="text-4xl font-serif text-wine-red">Table Details</h2>
               <p className="text-stone-500 mt-4">For parties larger than 8, please contact us directly via phone.</p>
             </div>

             {isSubmitted ? (
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 className="bg-green-50 border border-green-200 p-8 rounded-lg text-center"
               >
                 <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                 <h3 className="text-2xl font-serif text-green-800 mb-2">Reservation Request Sent</h3>
                 <p className="text-green-700">We will confirm your booking via email shortly.</p>
                 <button 
                   onClick={() => setIsSubmitted(false)}
                   className="mt-6 text-sm text-green-600 underline"
                 >
                   Make another reservation
                 </button>
               </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-xl border-t-4 border-gold-accent">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 text-stone-400" size={18} />
                        <input type="date" required className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded focus:border-wine-red focus:ring-1 focus:ring-wine-red outline-none bg-white" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 text-stone-400" size={18} />
                        <select className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded focus:border-wine-red focus:ring-1 focus:ring-wine-red outline-none bg-white">
                          <option>18:00</option>
                          <option>18:30</option>
                          <option>19:00</option>
                          <option>19:30</option>
                          <option>20:00</option>
                          <option>20:30</option>
                          <option>21:00</option>
                        </select>
                      </div>
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-stone-700 mb-2">Guests</label>
                       <div className="relative">
                          <Users className="absolute left-3 top-3 text-stone-400" size={18} />
                          <select className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded focus:border-wine-red focus:ring-1 focus:ring-wine-red outline-none bg-white">
                            <option>2 People</option>
                            <option>3 People</option>
                            <option>4 People</option>
                            <option>5 People</option>
                            <option>6 People</option>
                            <option>7 People</option>
                            <option>8 People</option>
                          </select>
                       </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">Name</label>
                      <input type="text" placeholder="John Doe" required className="w-full px-4 py-2 border border-stone-300 rounded focus:border-wine-red focus:ring-1 focus:ring-wine-red outline-none bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">Email</label>
                      <input type="email" placeholder="john@example.com" required className="w-full px-4 py-2 border border-stone-300 rounded focus:border-wine-red focus:ring-1 focus:ring-wine-red outline-none bg-white" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Special Requests</label>
                    <textarea rows={2} className="w-full px-4 py-2 border border-stone-300 rounded focus:border-wine-red focus:ring-1 focus:ring-wine-red outline-none bg-white"></textarea>
                  </div>

                  <Button type="submit" className="w-full">Request Booking</Button>
               </form>
             )}
          </div>

          {/* Info Section - Aligned with Form */}
          <div className="lg:w-1/2 flex flex-col gap-8 lg:pt-28">
             <div className="bg-wine-red text-white p-8 rounded-lg shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <MessageSquare size={100} />
               </div>
               <h3 className="text-2xl font-serif font-bold mb-4 text-gold-accent">Prefer to Chat?</h3>
               <p className="mb-6 z-10 relative">Book directly via WhatsApp for immediate confirmation.</p>
               <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded flex items-center gap-2 font-bold transition-colors w-fit z-10 relative">
                 <MessageSquare size={20} />
                 WhatsApp Reservation
               </button>
             </div>

             <div className="flex-grow min-h-[150px] w-full bg-stone-200 rounded-lg overflow-hidden shadow-lg border border-stone-300 relative group">
               {/* Placeholder for Map */}
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover opacity-80" alt="Map Location" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 p-4 rounded shadow text-center">
                   <p className="font-bold text-wine-red text-sm mb-1">Via Gianfilippo Usellini, 341, Roma</p>
                   <a 
                     href="https://www.google.com/maps/place/LA+BAITA+DEL+GUSTO+RISTORANTE/@41.772935,12.378612,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMF9dGTSGf_8uazYGHPg-Uj_WTJPRS3aY4iYfvS!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipMF9dGTSGf_8uazYGHPg-Uj_WTJPRS3aY4iYfvS%3Dw224-h298-k-no!7i3024!8i4032!4m13!1m2!2m1!1srestaurants+in+Italy!3m9!1s0x1325f3ba853457cb:0x8c017dbb6a236dfb!8m2!3d41.772935!4d12.378612!10e5!14m1!1BCgIgAQ!15sChRyZXN0YXVyYW50cyBpbiBJdGFseVoWIhRyZXN0YXVyYW50cyBpbiBpdGFseZIBEml0YWxpYW5fcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSRWNIVkRNR2RSUlJBQuABAPoBBAgAECk!16s%2Fg%2F11cj9nvrkx?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" 
                     target="_blank" 
                     rel="noreferrer" 
                     className="text-xs text-blue-600 underline hover:text-blue-800"
                   >
                     View on Google Maps
                   </a>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reservations;
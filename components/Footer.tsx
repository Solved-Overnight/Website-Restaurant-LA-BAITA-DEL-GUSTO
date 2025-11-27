import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wine-red text-white pt-24 pb-12 relative overflow-hidden border-t-4 border-gold-accent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/food.png')] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-serif font-bold text-white tracking-tight">LA BAITA</h3>
              <span className="text-xs uppercase tracking-[0.4em] text-gold-accent block mt-1">Del Gusto</span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed font-light pr-4">
              Authentic Italian cuisine crafted with passion, tradition, and the finest ingredients. Experience the true taste of Italy in every bite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif text-gold-accent tracking-widest uppercase text-xs font-bold">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Menu', path: '/menu' },
                { name: 'Our Story', path: '/about' },
                { name: 'Photo Gallery', path: '/gallery' },
                { name: 'Reservations', path: '/reservations' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="flex items-center text-stone-300 hover:text-white hover:pl-2 transition-all duration-300 text-sm group"
                  >
                    <ChevronRight size={14} className="mr-2 text-gold-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif text-gold-accent tracking-widest uppercase text-xs font-bold">Contact Us</h4>
            <div className="space-y-6">
              <a 
                href="https://www.google.com/maps/place/LA+BAITA+DEL+GUSTO+RISTORANTE/@41.772935,12.378612,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMF9dGTSGf_8uazYGHPg-Uj_WTJPRS3aY4iYfvS!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipMF9dGTSGf_8uazYGHPg-Uj_WTJPRS3aY4iYfvS%3Dw224-h298-k-no!7i3024!8i4032!4m13!1m2!2m1!1srestaurants+in+Italy!3m9!1s0x1325f3ba853457cb:0x8c017dbb6a236dfb!8m2!3d41.772935!4d12.378612!10e5!14m1!1BCgIgAQ!15sChRyZXN0YXVyYW50cyBpbiBJdGFseVoWIhRyZXN0YXVyYW50cyBpbiBpdGFseZIBEml0YWxpYW5fcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSRWNIVkRNR2RSUlJBQuABAPoBBAgAECk!16s%2Fg%2F11cj9nvrkx?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-4 text-stone-300 text-sm group hover:text-white transition-colors"
              >
                <MapPin size={20} className="text-gold-accent shrink-0 mt-1" />
                <span className="leading-relaxed">Via Gianfilippo Usellini, 341,<br/>00125 Roma RM, Italy</span>
              </a>
              <div className="flex items-center gap-4 text-stone-300 text-sm">
                <Phone size={20} className="text-gold-accent shrink-0" />
                <span>+39 366 105 9792</span>
              </div>
              <div className="flex items-center gap-4 text-stone-300 text-sm">
                <Mail size={20} className="text-gold-accent shrink-0" />
                <span>reservations@labaita.it</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Hours */}
          <div className="space-y-8">
             {/* Hours */}
             <div>
                <h4 className="text-lg font-serif text-gold-accent tracking-widest uppercase text-xs font-bold mb-6">Opening Hours</h4>
                <div className="flex items-start gap-4 text-stone-300 text-sm">
                  <Clock size={20} className="text-gold-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-1">Mon - Sun</p>
                    <p>5:30 PM - 12:00 AM</p>
                  </div>
                </div>
             </div>

             {/* Newsletter */}
             <div>
               <h4 className="text-lg font-serif text-gold-accent tracking-widest uppercase text-xs font-bold mb-4">Newsletter</h4>
               <p className="text-stone-400 text-xs mb-4">Subscribe for seasonal updates and exclusive event invitations.</p>
               <div className="flex border-b border-stone-600 pb-2">
                 <input 
                   type="email" 
                   placeholder="Your email address" 
                   className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-stone-500 focus:placeholder-stone-300"
                 />
                 <button className="text-gold-accent hover:text-white transition-colors">
                   <ArrowRight size={18} />
                 </button>
               </div>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 tracking-wider">
          <p>&copy; {new Date().getFullYear()} La Baita del Gusto. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
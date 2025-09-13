/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import './index.css';
import Logo from './Logo';

// Componente para el encabezado
const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
            <Logo />
            <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
                <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">Servicios</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition duration-300">Testimonios</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 transition duration-300">FAQ</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contacto</a>
            </nav>
            <button className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </header>
);

// Componente para la sección principal (Hero)
const Hero = () => (
    <motion.section 
        id="hero" 
        className="bg-gradient-to-r from-blue-50 to-blue-200 pt-32 pb-24 md:py-36 min-h-screen flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
    >
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Protege Tu Hogar con Impermeabilización Duradera y Sin Preocupaciones
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Evita Filtraciones, Ahorra en Reparaciones y Disfruta de la Tranquilidad que Mereces con Nuestros Servicios Expertos
            </p>
            <a href="#contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                ✅ Solicita una Evaluación Gratuita
            </a>
        </div>
    </motion.section>
);

const sectionAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    variants: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    }
};

// Componente para la sección de "Por qué elegirnos"
const WhyChooseUs = () => {
    const benefits = [
        { icon: '⭐', title: 'Garantía de Calidad', description: 'Materiales premium y mano de obra certificada con garantía extendida.' },
        { icon: '⏱️', title: 'Rápido y Limpio', description: 'Completa tu proyecto en 1-3 días, con limpieza incluida post-trabajo.' },
        { icon: '💰', title: 'Ahorro a Largo Plazo', description: 'Evita costos futuros por daños por agua o reparaciones estructurales.' },
        { icon: '🌧️', title: 'Resistencia Climática', description: 'Soluciones adaptadas a tu clima local, lluvia, calor o frío extremo.' }
    ];

    return (
        <motion.section id="why-choose-us" className="py-20 bg-gray-50" {...sectionAnimation}>
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">¿Por Qué Elegir Impocm?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map(benefit => (
                        <div key={benefit.title} className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

// Componente para la sección de servicios
const Services = () => {
    const services = [
        "Impermeabilización Residencial: Techos planos, inclinados, terrazas y más.",
        "Impermeabilización Industrial: Soluciones para naves, fábricas y edificios.",
        "Mantenimiento Preventivo: Inspecciones y reparaciones proactivas.",
        "Impermeabilización con Materiales Ecológicos: Opciones sostenibles y eficientes."
    ];
    return (
        <motion.section id="services" className="py-20" {...sectionAnimation}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {services.map(service => (
                        <div key={service} className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 text-center transition-transform transform hover:scale-105">
                            <p className="text-lg text-gray-700">{service}</p>
                        </div>
                    ))}
                </div>
                {/* Sección de imágenes de instalación */}
                <div className="text-center mt-16 mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Proceso de Instalación de Membranas Asfálticas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img src="https://placehold.co/600x400/3b82f6/ffffff?text=Instalacion+de+Membrana" alt="Instalación de membrana asfáltica en techo" className="w-full h-auto object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img src="https://placehold.co/600x400/3b82f6/ffffff?text=Sellado+de+Detalles" alt="Detalle de sellado de membrana asfáltica" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

// Componente para la sección de costos
const Costs = () => (
    <motion.section id="costs" className="py-20 bg-gray-50" {...sectionAnimation}>
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Entendiendo los Costos</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-4">El costo de impermeabilizar depende de:</p>
                <ul className="text-left list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>✓ <strong className="font-semibold text-gray-800">Tamaño del techo:</strong> Precio por metro cuadrado.</li>
                    <li>✓ <strong className="font-semibold text-gray-800">Materiales utilizados:</strong> Desde membranas asfálticas hasta recubrimientos acrílicos.</li>
                    <li>✓ <strong className="font-semibold text-gray-800">Complejidad del techo:</strong> Pendiente, accesibilidad y estado actual.</li>
                    <li>✓ <strong className="font-semibold text-gray-800">Ubicación geográfica:</strong> Factores locales como clima y regulaciones.</li>
                </ul>
                <p className="text-gray-700 mb-4"><strong>Ejemplo de precios:</strong> Precio promedio: $X–$Y por m² (varía según factores anteriores).</p>
                <blockquote className="italic text-gray-500 border-l-4 border-blue-500 pl-4">"Ofrecemos presupuestos detallados sin sorpresas ocultas."</blockquote>
            </div>
        </div>
    </motion.section>
);

// Componente para la sección de testimonios
const Testimonials = () => {
    const testimonials = [
        { quote: "¡Después de años de goteras, Impocm solucionó todo en solo dos días! Ahora mi familia está segura y seca.", author: "María G., Ciudad de México" },
        { quote: "La garantía de 10 años me dio tranquilidad. ¡Cumplieron lo prometido!", author: "Roberto L., Guadalajara" }
    ];
    return (
        <motion.section id="testimonials" className="py-20" {...sectionAnimation}>
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Testimonios de Clientes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-blue-50 p-8 rounded-2xl shadow-lg border-2 border-blue-200">
                            <blockquote className="italic text-gray-700 mb-4 text-center">"{testimonial.quote}"</blockquote>
                            <footer className="font-semibold text-gray-800 text-right">– {testimonial.author}</footer>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

// Componente para un solo item de FAQ
interface FAQItemProps {
    faq: { question: string; answer: string; };
    index: number;
    isOpen: boolean;
    toggleFAQ: (index: number) => void;
}

const FAQItem = ({ faq, index, isOpen, toggleFAQ }: FAQItemProps) => (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-4 cursor-pointer transition-all duration-300 hover:shadow-lg" onClick={() => toggleFAQ(index)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(index)} aria-expanded={isOpen}>
        <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
            <h3>{faq.question}</h3>
            <span className="text-blue-600 text-2xl transition-transform duration-300 transform">{isOpen ? '−' : '+'}</span>
        </div>
        {isOpen && (
            <div className="pt-4 text-gray-600 leading-relaxed">
                <p>{faq.answer}</p>
            </div>
        )}
    </div>
);

// Componente para la sección de FAQ
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { question: "¿Cuánto tiempo dura el proceso?", answer: "Desde evaluación hasta finalización, típicamente 1-3 días dependiendo del tamaño." },
        { question: "¿Qué materiales utilizan?", answer: "Trabajamos con marcas líderes como Sika y Tremco, garantizando durabilidad." },
        { question: "¿Ofrecen garantía?", answer: "Sí, garantía por escrito de hasta 10 años en materiales y mano de obra." },
        { question: "¿Cómo preparo mi hogar para el trabajo?", answer: "Te guiamos paso a paso para mover muebles y proteger pertenencias." }
    ];

    return (
        <motion.section id="faq" className="py-20 bg-gray-50" {...sectionAnimation}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Preguntas Frecuentes</h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} index={index} faq={faq} isOpen={openIndex === index} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

// Componente para la sección de contacto
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'residencial',
        utm_source: '',
        utm_medium: '',
        utm_campaign: ''
    });
    const [message, setMessage] = useState<{ text: string; type: string; } | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setFormData(prev => ({
            ...prev,
            utm_source: params.get('utm_source') || '',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
        }));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage({
            text: `¡Gracias, ${formData.name}! Hemos recibido tu solicitud para el servicio de ${formData.service}. Nos pondremos en contacto contigo pronto.`,
            type: 'success'
        });
        setFormData({
            name: '', email: '', phone: '', service: 'residencial',
            utm_source: formData.utm_source, utm_medium: formData.utm_medium, utm_campaign: formData.utm_campaign
        });
    };

    return (
        <motion.section id="contact" className="py-20" {...sectionAnimation}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">¿Listo para un Techo Impermeable? ¡Nosotros Lo Hacemos Realidad!</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-2xl shadow-lg">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ofertas Especiales</h3>
                            <div className="bg-white p-6 rounded-xl shadow-md mb-4 border border-gray-200">
                                <p className="text-gray-700"><strong>⏳ Descuento por Tiempo Limitado:</strong> 15% de descuento en proyectos contratados este mes.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                <p className="text-gray-700"><strong>🔄 Financiamiento Flexible:</strong> Opciones de pago a meses sin intereses.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Certificaciones de Confianza</h3>
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-gray-500 text-sm">Logos de certificaciones aquí (e.g., ISO, Acreditaciones)</span>
                            </div>
                            <p className="text-sm text-gray-400 mt-2">
                                (Placeholder para certificaciones y logos de asociaciones)
                            </p>
                        </div>
                    </div>
                    <form className="bg-white p-8 rounded-2xl shadow-xl" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Formulario de Contacto</h3>
                        {message && (
                            <div className="mb-4 p-4 rounded-xl bg-green-100 text-green-700 font-medium">
                                {message.text}
                            </div>
                        )}
                        <div className="space-y-4">
                            <input type="hidden" name="utm_source" value={formData.utm_source} />
                            <input type="hidden" name="utm_medium" value={formData.utm_medium} />
                            <input type="hidden" name="utm_campaign" value={formData.utm_campaign} />
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="service" className="text-sm font-medium text-gray-700 mb-1">Tipo de Servicio</label>
                                <select id="service" name="service" value={formData.service} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="residencial">Residencial</option>
                                    <option value="industrial">Industrial</option>
                                    <option value="mantenimiento">Mantenimiento Preventivo</option>
                                    <option value="ecologico">Ecológico</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                                ✅ Quiero una evaluación gratuita
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.section>
    );
};

// Componente para el pie de página
const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Impocm. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Política de Privacidad</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Términos de Servicio</a>
            </div>
        </div>
    </footer>
);

// Botón flotante de WhatsApp
const WhatsAppButton = () => (
    <a href="https://wa.me/1234567890" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.316 0-.56.11-.766.363-.208.25-.81.792-.81 2.015 0 1.225.84 2.34 1.002 2.59.16.24.33.504.556.834.277.45.696 1.05.978 1.403.468.56.99 1.02 1.518 1.36.73.498 1.48.78 2.23.978.48.13.9.193 1.28.193.578 0 1.03-.213 1.39-.817.244-.43.51-.82.53-1.076.026-.274 0-.373-.058-.45-.085-.12-.245-.214-.48-.214zM16.05 15.453c-.27-.2-1.39-.652-1.61-1.316-.22-.664.44-1.39.44-1.39s-2.126.33-2.126 1.2c0 .87.33 1.39.33 1.39s-1.875-.11-1.875-1.5c0-1.39 1.432-2.78 2.57-2.78 1.138 0 2.474 1.39 2.474 2.78 0 1.39-1.226 1.5-1.226 1.5zM16 2C8.2 2 2 8.2 2 16s6.2 14 14 14 14-6.2 14-14S23.8 2 16 2zM16 26.5C9.65 26.5 4.5 21.35 4.5 15S9.65 3.5 16 3.5 27.5 8.65 27.5 15 22.35 26.5 16 26.5z"></path>
        </svg>
    </a>
);

// Componente principal de la aplicación
const App = () => (
    <div className="font-sans text-gray-800 bg-white">
        <Header />
        <main>
            <Hero />
            <WhyChooseUs />
            <Services />
            <Costs />
            <Testimonials />
            <FAQ />
            <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
    </div>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
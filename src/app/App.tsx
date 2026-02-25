import { motion } from "motion/react";
import { ThemeToggle } from "./components/ThemeToggle";
import { ProposalCard } from "./components/ProposalCard";
import { VoteCounter } from "./components/VoteCounter";
import { ConfettiButton } from "./components/ConfettiButton";
import {
  Calendar,
  Apple,
  Music,
  MessageSquare,
  Shield,
  Droplet,
  Sparkles,
  Heart,
  Star,
} from "lucide-react";
import candidateImage from "../assets/isa.png";

const proposals = [
  {
    title: "Día Temático",
    description:
      "Un día especial donde cada estudiante puede expresar su identidad vistiendo lo que representa: etnias, países, profesiones futuras, géneros musicales y más. ¡Celebremos nuestra diversidad!",
    icon: Calendar,
  },
  {
    title: "Día de Comida Saludable",
    description:
      "Durante el descanso, ofreceremos solo frutas frescas y saludables. Una oportunidad para variar nuestra alimentación y promover hábitos saludables en nuestra comunidad escolar.",
    icon: Apple,
  },
  {
    title: "Jean Day + Show de Talentos",
    description:
      "Un día para venir en jean y mostrar los increíbles talentos que tiene nuestro colegio. Música, baile, arte y más. ¡Es hora de brillar y que todos conozcan lo talentosos que somos!",
    icon: Music,
  },
  {
    title: "Buzón de Sugerencias",
    description:
      "Tu voz importa. Durante el descanso, tendrás un espacio para compartir tus ideas y sugerencias de forma anónima. Juntos construiremos un mejor colegio para todos.",
    icon: MessageSquare,
  },
  {
    title: "Guardianes de Limpieza",
    description:
      "Estudiantes de labor social ayudarán a mantener el restaurante limpio y agradable. Supervisarán que las mesas queden limpias y la basura en su lugar. ¡Un espacio limpio para todos!",
    icon: Shield,
  },
  {
    title: "Papel y Jabón en los Baños",
    description:
      "Disponibilidad garantizada de papel y jabón en los baños, supervisados por estudiantes de labor social. Pequeño aporte de $100 para mantener este servicio funcionando siempre.",
    icon: Droplet,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full"
            >
              <Sparkles size={20} />
              <span className="font-semibold">Campaña 2026</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Tu Voz,
              <span className="text-blue-600 dark:text-blue-400"> Mi Compromiso</span>
              <span className="ml-4 inline-flex -translate-y-2 rounded-full border-2 border-amber-300 bg-gradient-to-r from-amber-400 to-yellow-300 px-4 py-1 text-2xl md:text-3xl font-extrabold text-blue-950 shadow-lg">
                Vota #01
              </span>
              
            </h1>
            <motion.div
              className="h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-300"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />
           

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Candidata a <strong>Personera</strong> del Colegio Isaías Duarte Cancino.
              Propuestas reales, cambios reales, para una mejor experiencia escolar
              ¿Quieres un cambios? <strong>¡PARA ESO ESTOY YO!</strong>
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <ConfettiButton />
              <motion.a
                href="#propuestas"
                className="px-8 py-4 rounded-full font-bold text-lg border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Propuestas
              </motion.a>
            </motion.div>

            <div className="flex gap-8 pt-4">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Heart className="text-red-500" size={24} />
                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                  Por ti
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Star className="text-yellow-500" size={24} />
                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                  Por nosotros
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-3xl blur-2xl opacity-50 animate-pulse" />
              <img
                src={candidateImage}
                alt="Candidata"
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto border-4 border-white dark:border-gray-700"
              />
            </motion.div>

            {/* Floating Elements */}



          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-blue-600 dark:border-blue-400 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre Mí
            </h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 shadow-xl"
          >

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Soy Isabel Mina Quiñones, tengo 16 años pero con mentalidad de 35 con ideas que vienen a cambiar tu <strong>COLEGIO</strong>.</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Soy estudiante del <strong>Colegio Isaías Duarte Cancino</strong> de grado <strong>11°</strong>, y me presento como candidata a <strong>Personera</strong> porque creo firmemente en que nuestra voz estudiantil puede generar cambios positivos y duraderos.</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Durante mi tiempo en el colegio, he observado las necesidades de mis compañeros y
              he escuchado sus ideas. Ahora quiero ser el puente entre nosotros, los estudiantes,
              y la administración del colegio para crear un ambiente más inclusivo, divertido y
              saludable para todos.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Mi compromiso es trabajar incansablemente para que cada propuesta se convierta en
              realidad. <strong>No son solo promesas, son proyectos con plan de acción.</strong>{" "}
              Juntos podemos hacer de nuestro colegio un lugar mejor. ¡Cuenta conmigo!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proposals Section */}
      <section id="propuestas" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

             <span className="ml-4 inline-flex -translate-y-2 rounded-full border-2 border-amber-300 bg-gradient-to-r from-amber-400 to-yellow-300 px-4 py-1 text-2xl md:text-3xl font-extrabold text-blue-950 shadow-lg">
                Vota #01
              </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Mis Propuestas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Proyectos concretos para mejorar nuestra experiencia escolar. Haz clic en cada
              tarjeta para conocer los detalles.
            </p>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proposals.map((proposal, index) => (
              <ProposalCard key={index} {...proposal} index={index} />
            ))}
          </div>

          {/* Why Vote Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-3xl p-12 text-white text-center shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué votarme?</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="text-4xl mb-3">💪</div>
                <h4 className="font-bold text-lg mb-2">Compromiso Real</h4>
                <p className="text-sm opacity-90">
                  Propuestas realizables con planes de acción concretos
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="text-4xl mb-3">👂</div>
                <h4 className="font-bold text-lg mb-2">Escucho a Todos</h4>
                <p className="text-sm opacity-90">
                  Tu opinión importa y será tomada en cuenta siempre
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-lg mb-2">Resultados</h4>
                <p className="text-sm opacity-90">
                  No promesas vacías, sino cambios reales y medibles
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-12"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ConfettiButton />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >

            
            <h3 className="text-2xl font-bold">
              Juntos construimos un mejor{" "}
              <span className="text-blue-400">Isaías Duarte Cancino</span>
            </h3>
            <motion.button
              type="button"
              className="group mt-6 w-full max-w-md rounded-2xl border border-blue-400/40 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 px-5 py-4 text-left shadow-lg transition-colors duration-300 hover:border-blue-300/70 hover:from-blue-600/30 hover:to-cyan-500/30"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200/90">
                Desarrollado por
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                JUAN CAMILO MINA QUIÑONES
              </p>

            </motion.button>
            <div className="flex justify-center gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <Heart size={24} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <Star size={24} />
              </motion.div>
            </div>

          </motion.div>
        </div>
      </footer>
    </div>
  );
}

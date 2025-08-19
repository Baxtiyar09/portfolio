import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient"
      >
        Baxtiyar Alizada
      </motion.h1>

      {/* Təhsil */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full max-w-4xl mb-10"
      >
        <Card className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(0,128,255,0.6)] transition-all duration-500">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Təhsil</h2>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-200"
            >
              🎓 ATL Akademiya
            </motion.p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Bacarıqlar */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full max-w-4xl mb-10"
      >
        <Card className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(128,0,255,0.6)] transition-all duration-500">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">Bacarıqlar</h2>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-200"
            >
              💻 Android Developer, Frontend Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-200"
            >
              🌐 HTML, CSS, JavaScript, Bootstrap, XML, Kotlin
            </motion.p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Təcrübə */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full max-w-4xl mb-10"
      >
        <Card className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(255,128,0,0.6)] transition-all duration-500">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">İş Təcrübəsi</h2>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-200"
            >
              👨‍💻 Mentor, Junior Developer
            </motion.p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Əlaqə */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full max-w-4xl mb-10"
      >
        <Card className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(255,0,128,0.6)] transition-all duration-500">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold text-pink-400 mb-4">Əlaqə</h2>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-200"
            >
              📧 baxtiyaralizada1@gmail.com
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-200"
            >
              📱 0773339831
            </motion.p>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              href="https://github.com/Baxtiyar09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline block mt-3"
            >
              🔗 GitHub Profilim
            </motion.a>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}

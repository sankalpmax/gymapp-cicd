import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <motion.div
        className="text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-gray-700 max-w-2xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-red-600 drop-shadow-md"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Welcome to FitZone Gym 💪
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your fitness journey starts here. Train harder, live better!
        </motion.p>

        <motion.div
          className="mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg transition duration-300">
            Join Now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;

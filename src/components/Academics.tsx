// In /components/Academics.tsx

'use client'
import { useState, useMemo, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, animate } from 'framer-motion'
import { academicsData } from '../data/portfolio-data'
import { BookOpenCheck, Star, X, Hash } from 'lucide-react'
import { random } from '../utils/random' // Assuming a utility function for random numbers

// --- TROPHY SHINE EFFECT ---
const TrophyShine = () => {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ x: "-150%", rotate: -45 }}
      animate={{ x: "150%" }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 4,
        duration: 1.5,
        ease: 'easeOut'
      }}
    >
      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </motion.div>
  );
};

// --- SUBTLE SPARKLES EFFECT ---
const Sparkles = () => {
  const sparkles = Array.from({ length: 20 });
  return (
    <>
      {sparkles.map((_, i) => {
        const size = random(1, 3);
        const delay = random(0, 5);
        const duration = random(2, 4);

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-200/50"
            style={{
              top: `${random(0, 100)}%`,
              left: `${random(0, 100)}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        );
      })}
    </>
  );
};

// --- WRAPPER FOR BOTH EFFECTS ---
const ShimmerHighlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative inline-block overflow-hidden">
      {children}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Sparkles />
        <TrophyShine />
      </div>
    </div>
  );
};


type Course = {
  name: string;
  code: string;
  grade: string;
  type: string;
  description?: string;
  topics?: string[];
};

const getGradeColor = (grade: string) => {
  const upperGrade = grade.toUpperCase();
  if (upperGrade.includes('O')) return 'text-primary glow-text-primary';
  if (upperGrade.includes('E')) return 'text-cyan-400';
  if (upperGrade.includes('A')) return 'text-green-400';
  if (upperGrade.includes('B')) return 'text-yellow-400';
  return 'text-orange-400';
};

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = value.toFixed(2);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return (
    <ShimmerHighlight>
      <h3
        ref={ref}
        className="text-6xl md:text-7xl font-bold text-amber-400 [text-shadow:0_0_8px_rgba(252,211,77,0.3)]"
      >
        0.00
      </h3>
    </ShimmerHighlight>
  );
}


export default function Academics() {
  const [activeSemester, setActiveSemester] = useState(academicsData[0].semester);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const activeCourses = useMemo(() => {
    return academicsData.find(s => s.semester === activeSemester)?.courses || [];
  }, [activeSemester]);

  return (
    <section id="academics" className="section py-24 bg-[rgba(16,16,16,1)] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center bg-gradient-to-r from-white via-primary to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-flow-x">
            <span>Academic Coursework</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[rgba(var(--primary-rgb),0.7)] to-transparent"></div>
        </motion.div>
        
        <div className="text-center mb-16">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">Current Cumulative GPA</p>
            <Counter to={8.61} />
          </motion.div>
          
          <motion.div 
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="mb-2">Grading Scale (Highest to Lowest):</p>
             {/* --- FIX: Added the '>' characters back in --- */}
            <div className="flex justify-center items-baseline flex-wrap gap-x-3 text-xs md:text-sm">
              <span><span className={`font-bold ${getGradeColor('O')}`}>O</span> (Outstanding)</span>
              <span className="text-gray-500"></span>
              <span><span className={`font-bold ${getGradeColor('E')}`}>E</span> (Excellent)</span>
              <span className="text-gray-500"></span>
              <span><span className={`font-bold ${getGradeColor('A')}`}>A</span> (Very Good)</span>
              <span className="text-gray-500"></span>
              <span><span className={`font-bold ${getGradeColor('B')}`}>B</span> (Good)</span>
            </div>
          </motion.div>
        </div>


        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {academicsData.map((data) => (
            <button
              key={data.semester}
              onClick={() => setActiveSemester(data.semester)}
              className={`btn text-sm relative transition-colors duration-300 ${
                activeSemester === data.semester ? 'btn-primary' : 'btn-outline'
              }`}
            >
              {data.semester}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSemester}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="flex overflow-x-auto gap-6 pb-6 -mx-6 px-6 custom-scrollbar"
          >
            {activeCourses.map((course, index) => (
              <motion.div
                key={course.code}
                className="card bg-[rgba(28,28,28,0.8)] border border-[rgba(38,38,38,1)] p-5 flex flex-col justify-between hover:border-primary/50 transition-colors duration-300 cursor-pointer w-64 flex-shrink-0"
                onClick={() => setSelectedCourse(course)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div>
                  <h4 className="font-semibold text-white mb-1 truncate">{course.name}</h4>
                  <span className={`badge text-xs ${course.type === 'Core' ? 'badge-primary' : 'badge-secondary'}`}>
                    {course.type === 'Core' ? <BookOpenCheck size={12} className="inline mr-1" /> : <Star size={12} className="inline mr-1" />}
                    {course.type}
                  </span>
                </div>
                <div className="flex justify-between items-end mt-4">
                    <p className="text-xs text-[rgba(255,255,255,0.5)]">{course.code}</p>
                    <div className={`text-2xl font-bold ${getGradeColor(course.grade)}`}>
                        {course.grade}
                    </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- ADDED BACK: The modal (pop-up) for course details --- */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              className="modal-content max-w-2xl w-full bg-[rgba(24,24,24,1)] border border-[rgba(48,48,48,1)] rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="p-8 relative max-h-[85vh] overflow-y-auto custom-scrollbar">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[rgba(38,38,38,0.8)] text-white/70 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedCourse.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-[rgba(255,255,255,0.5)]">
                        <span>{selectedCourse.code}</span>
                        <span className={`badge text-xs ${selectedCourse.type === 'Core' ? 'badge-primary' : 'badge-secondary'}`}>
                            {selectedCourse.type === 'Core' ? <BookOpenCheck size={12} className="inline mr-1" /> : <Star size={12} className="inline mr-1" />}
                            {selectedCourse.type}
                        </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-xs text-gray-400 mb-1">Grade</p>
                      <div className={`text-5xl font-bold ${getGradeColor(selectedCourse.grade)}`}>
                        {selectedCourse.grade}
                      </div>
                  </div>
                </div>
                
                {selectedCourse.description && (
                  <p className="text-[rgba(255,255,255,0.8)] my-6">
                    {selectedCourse.description}
                  </p>
                )}

                {selectedCourse.topics && selectedCourse.topics.length > 0 && (
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-[rgba(255,255,255,0.5)] mb-3 flex items-center">
                      <Hash size={14} className="mr-2"/> Key Topics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourse.topics.map((topic) => (
                        <span key={topic} className="badge">{topic}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
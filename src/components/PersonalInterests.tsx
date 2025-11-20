import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Heart, Users, ArrowLeft, ArrowRight } from 'lucide-react';

interface VinylRecord {
  id: string;
  artist: string;
  title: string;
  year: number;
  genre: string;
  metaphor: string;
  coverColor: string;
}

const vinylCollection: VinylRecord[] = [
  {
    id: 'daft-punk',
    artist: 'Daft Punk',
    title: 'One More Time',
    year: 2000,
    genre: 'House/Electronic',
    metaphor: 'Innovation through repetition—building security frameworks that scale.',
    coverColor: 'from-purple-500 to-pink-500'
  },
  {
    id: 'nirvana',
    artist: 'Nirvana',
    title: 'Nevermind',
    year: 1991,
    genre: 'Grunge',
    metaphor: 'Disrupting the status quo—challenging outdated security paradigms.',
    coverColor: 'from-blue-400 to-cyan-400'
  },
  {
    id: 'stardust',
    artist: 'Stardust',
    title: 'Music Sounds Better With You',
    year: 1998,
    genre: 'House',
    metaphor: 'Collaboration amplifies results—building security culture together.',
    coverColor: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'basement-jaxx',
    artist: 'Basement Jaxx',
    title: 'Red Alert',
    year: 1999,
    genre: 'House',
    metaphor: 'Early warning systems—detecting threats before they escalate.',
    coverColor: 'from-red-500 to-pink-500'
  },
  {
    id: 'fatboy-slim',
    artist: 'Fatboy Slim',
    title: 'Gangster Trippin',
    year: 1998,
    genre: 'Big Beat',
    metaphor: 'Strategic risk-taking—calculated moves in cybersecurity.',
    coverColor: 'from-green-500 to-teal-500'
  },
  {
    id: 'mj-cole',
    artist: 'MJ Cole',
    title: 'Sincere',
    year: 2000,
    genre: 'UK Garage',
    metaphor: 'Authentic leadership—genuine commitment to security excellence.',
    coverColor: 'from-indigo-500 to-purple-500'
  }
];

const PersonalInterests: React.FC = () => {
  const [currentVinyl, setCurrentVinyl] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextVinyl = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentVinyl((prev) => (prev + 1) % vinylCollection.length);
      setIsFlipping(false);
    }, 300);
  };

  const prevVinyl = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentVinyl((prev) => (prev - 1 + vinylCollection.length) % vinylCollection.length);
      setIsFlipping(false);
    }, 300);
  };

  const currentRecord = vinylCollection[currentVinyl];

  return (
    <section id="beyond-boardroom" className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Beyond the Boardroom
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leadership isn't just about strategy—it's about passion, curation, and the art of bringing diverse elements together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* The Vinyl Vault */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Music className="w-6 h-6 text-amber-400" />
              <h3 className="text-2xl font-bold">The Vinyl Vault</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Former DJ with an extensive collection. Each record represents the art of curation—selecting, mixing, and creating something new from existing components. Just like digital transformation.
            </p>

            {/* Vinyl Record Display */}
            <div className="relative aspect-square max-w-xs mx-auto mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRecord.id}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  {/* Vinyl Record */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${currentRecord.coverColor} shadow-2xl`}>
                    <div className="absolute inset-4 rounded-full bg-black/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center">
                        <Music className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <button
                onClick={prevVinyl}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-background/80 rounded-full shadow-lg hover:bg-background transition-colors"
                aria-label="Previous record"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextVinyl}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-background/80 rounded-full shadow-lg hover:bg-background transition-colors"
                aria-label="Next record"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Record Info */}
            <div className="text-center space-y-2">
              <h4 className="text-xl font-bold">{currentRecord.artist}</h4>
              <p className="text-lg text-primary">{currentRecord.title}</p>
              <p className="text-sm text-muted-foreground">
                {currentRecord.year} • {currentRecord.genre}
              </p>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm italic text-muted-foreground">
                  "{currentRecord.metaphor}"
                </p>
              </div>
            </div>

            {/* Collection Stats */}
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">86+ records</span> in collection
              </p>
            </div>
          </motion.div>

          {/* The Locker Room - LFC */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-lg p-6 bg-gradient-to-br from-red-900/20 to-red-800/10"
          >
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-bold">The Locker Room</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-600" />
                  Leadership Philosophy: "You'll Never Walk Alone"
                </h4>
                <p className="text-muted-foreground mb-4">
                  Liverpool FC embodies resilience, teamwork, and unwavering commitment—values that translate directly to building effective security culture.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-semibold text-foreground mb-1">Team Culture</p>
                    <p className="text-muted-foreground">
                      Security is a team sport. Every member plays a critical role in defense.
                    </p>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-semibold text-foreground mb-1">Resilience</p>
                    <p className="text-muted-foreground">
                      Bounce back from incidents stronger, learning from every challenge.
                    </p>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-semibold text-foreground mb-1">Strategic Vision</p>
                    <p className="text-muted-foreground">
                      Long-term thinking wins championships—and security programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Dedicated supporter</span> with extensive memorabilia collection, 
                  including signed jerseys and Anfield visits. The passion for excellence on the pitch mirrors the commitment to excellence in cybersecurity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connection Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center glass-card rounded-lg p-6 max-w-3xl mx-auto"
        >
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">The Connection:</span> Just as a DJ curates tracks to create the perfect set, 
            and a football team builds chemistry through shared values, effective cybersecurity leadership requires 
            <span className="font-semibold text-primary"> curation, collaboration, and strategic vision</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalInterests;


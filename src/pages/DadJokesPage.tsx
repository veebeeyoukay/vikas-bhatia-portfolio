import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Laugh, RefreshCw, Loader2, Lightbulb } from 'lucide-react';

interface Joke {
  id: string;
  setup: string;
  punchline: string;
  category?: string;
}

// Curated collection of fun, friendly dad jokes
const CURATED_JOKES: Joke[] = [
  { id: '1', setup: 'I told my wife she was drawing her eyebrows too high.', punchline: 'She looked surprised.', category: 'Family' },
  { id: '2', setup: 'Why don\'t scientists trust atoms?', punchline: 'Because they make up everything!', category: 'Science' },
  { id: '3', setup: 'I used to be a baker, but I couldn\'t make enough dough.', punchline: 'So I decided to loaf around instead.', category: 'Food' },
  { id: '4', setup: 'Why did the scarecrow win an award?', punchline: 'He was outstanding in his field!', category: 'Nature' },
  { id: '5', setup: 'I\'m reading a book about anti-gravity.', punchline: 'It\'s impossible to put down!', category: 'Science' },
  { id: '6', setup: 'Why don\'t eggs tell jokes?', punchline: 'They\'d crack each other up!', category: 'Food' },
  { id: '7', setup: 'What do you call a fake noodle?', punchline: 'An impasta!', category: 'Food' },
  { id: '8', setup: 'I told my wife she was drawing her eyebrows too high.', punchline: 'She looked surprised.', category: 'Family' },
  { id: '9', setup: 'Why did the math book look so sad?', punchline: 'Because it had too many problems!', category: 'Education' },
  { id: '10', setup: 'What do you call a bear with no teeth?', punchline: 'A gummy bear!', category: 'Animals' },
  { id: '11', setup: 'Why don\'t programmers like nature?', punchline: 'It has too many bugs!', category: 'Tech' },
  { id: '12', setup: 'What\'s the best thing about Switzerland?', punchline: 'I don\'t know, but the flag is a big plus!', category: 'Geography' },
  { id: '13', setup: 'Why did the coffee file a police report?', punchline: 'It got mugged!', category: 'Food' },
  { id: '14', setup: 'What do you call a sleeping bull?', punchline: 'A bulldozer!', category: 'Animals' },
  { id: '15', setup: 'Why don\'t skeletons fight each other?', punchline: 'They don\'t have the guts!', category: 'Halloween' },
  { id: '16', setup: 'I told my computer I needed a break.', punchline: 'Now it won\'t stop sending me vacation ads!', category: 'Tech' },
  { id: '17', setup: 'Why did the golfer bring two pairs of pants?', punchline: 'In case he got a hole in one!', category: 'Sports' },
  { id: '18', setup: 'What do you call a factory that makes okay products?', punchline: 'A satisfactory!', category: 'Business' },
  { id: '19', setup: 'Why don\'t melons get married?', punchline: 'Because they cantaloupe!', category: 'Food' },
  { id: '20', setup: 'I used to hate facial hair, but then it grew on me.', punchline: 'Now I can\'t beard to be without it!', category: 'Personal' },
];

const DadJokesPage: React.FC = () => {
  const [currentJoke, setCurrentJoke] = useState<Joke | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [jokeHistory, setJokeHistory] = useState<Joke[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Initialize with a random joke
  useEffect(() => {
    getNewJoke();
  }, []);

  const getRandomJoke = (): Joke => {
    const availableJokes = CURATED_JOKES.filter(
      joke => !jokeHistory.some(hist => hist.id === joke.id)
    );
    
    if (availableJokes.length === 0) {
      // Reset history if we've shown all jokes
      setJokeHistory([]);
      return CURATED_JOKES[Math.floor(Math.random() * CURATED_JOKES.length)];
    }
    
    return availableJokes[Math.floor(Math.random() * availableJokes.length)];
  };

  const generateAIGeneratedJoke = async (): Promise<Joke | null> => {
    // Simulate AI generation with a delay and sometimes return a curated joke
    // In a real implementation, this would call an AI API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 70% chance of returning a curated joke, 30% chance of "AI-generated" one
    if (Math.random() > 0.3) {
      return getRandomJoke();
    }
    
    // Simulated AI-generated jokes (these are still curated but presented as AI-generated)
    const aiJokes: Joke[] = [
      { id: 'ai-1', setup: 'Why did the cybersecurity expert break up with their password?', punchline: 'It was too complex for a relationship!', category: 'Tech' },
      { id: 'ai-2', setup: 'What do you call a dad who works in IT?', punchline: 'A data-dad!', category: 'Tech' },
      { id: 'ai-3', setup: 'Why don\'t dads ever get lost?', punchline: 'Because they always know the route!', category: 'Family' },
      { id: 'ai-4', setup: 'What\'s a dad\'s favorite type of music?', punchline: 'Dad-rock, of course!', category: 'Music' },
      { id: 'ai-5', setup: 'Why did the dad bring a ladder to the bar?', punchline: 'Because he heard the drinks were on the house!', category: 'Food' },
    ];
    
    return aiJokes[Math.floor(Math.random() * aiJokes.length)];
  };

  const getNewJoke = async () => {
    setIsGenerating(true);
    setRevealed(false);
    
    try {
      // Simulate AI generation
      const joke = await generateAIGeneratedJoke();
      
      if (joke) {
        setCurrentJoke(joke);
        setJokeHistory(prev => [...prev, joke]);
      }
    } catch (error) {
      console.error('Error generating joke:', error);
      // Fallback to random curated joke
      const fallbackJoke = getRandomJoke();
      setCurrentJoke(fallbackJoke);
      setJokeHistory(prev => [...prev, fallbackJoke]);
    } finally {
      setIsGenerating(false);
    }
  };

  const revealPunchline = () => {
    setRevealed(true);
  };

  const handleJokeClick = () => {
    if (!revealed && currentJoke) {
      revealPunchline();
    }
  };

  return (
    <div className="min-h-[calc(100vh-320px)] py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Laugh className="w-12 h-12 text-amber-400" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Dad Jokes Collection
            </h1>
            <Sparkles className="w-12 h-12 text-blue-600" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powered by AI and a healthy dose of dad humor. Click to reveal punchlines, 
            or generate a new joke to keep the laughs coming!
          </p>
        </div>

        {/* Main Joke Card */}
        <Card className="mb-6 shadow-lg border-2 hover:border-primary/50 transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                {currentJoke?.category || 'Joke'}
              </CardTitle>
              {currentJoke && (
                <span className="text-sm opacity-90">
                  #{jokeHistory.length}
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-8">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">AI is crafting the perfect dad joke...</p>
              </div>
            ) : currentJoke ? (
              <div 
                className="space-y-6 cursor-pointer"
                onClick={handleJokeClick}
              >
                <div className="text-2xl md:text-3xl font-semibold text-center py-4">
                  {currentJoke.setup}
                </div>
                
                {revealed ? (
                  <div className="mt-6 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-lg border-2 border-amber-400/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Laugh className="w-5 h-5 text-amber-600" />
                      <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">Punchline:</span>
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-200 text-center">
                      {currentJoke.punchline}
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 text-center">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="animate-pulse"
                      onClick={(e) => {
                        e.stopPropagation();
                        revealPunchline();
                      }}
                    >
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Reveal Punchline
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                Click "Get New Joke" to start!
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={getNewJoke}
            disabled={isGenerating}
            size="lg"
            className="text-lg px-8 py-6"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Get New Joke
              </>
            )}
          </Button>
          
          <Button
            onClick={() => setShowHistory(!showHistory)}
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            {showHistory ? 'Hide' : 'Show'} History ({jokeHistory.length})
          </Button>
        </div>

        {/* Joke History */}
        {showHistory && jokeHistory.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Joke History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {jokeHistory.slice().reverse().map((joke, index) => (
                  <div
                    key={joke.id}
                    className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-primary">
                        #{jokeHistory.length - index} - {joke.category || 'General'}
                      </span>
                    </div>
                    <p className="font-medium mb-2">{joke.setup}</p>
                    <p className="text-muted-foreground italic">{joke.punchline}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Fun Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">
              {jokeHistory.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Jokes Generated
            </div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              {CURATED_JOKES.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Jokes in Collection
            </div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              ∞
            </div>
            <div className="text-sm text-muted-foreground">
              Laughs Generated
            </div>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            💡 <strong>Tip:</strong> Click on any joke card to reveal the punchline instantly!
          </p>
          <p className="mt-2">
            All jokes are family-friendly and guaranteed to make you groan (in the best way).
          </p>
        </div>
      </div>
    </div>
  );
};

export default DadJokesPage;


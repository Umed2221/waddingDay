import { useState } from 'react';
import EnvelopePage from './components/EnvelopePage';
import WeddingDetails from './components/WeddingDetails';

function App() {
  const [currentPage, setCurrentPage] = useState<'envelope' | 'details'>('envelope');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {currentPage === 'envelope' ? (
        <EnvelopePage onOpenEnvelope={() => setCurrentPage('details')} />
      ) : (
        <WeddingDetails onBack={() => setCurrentPage('envelope')} />
      )}
    </div>
  );
}

export default App;
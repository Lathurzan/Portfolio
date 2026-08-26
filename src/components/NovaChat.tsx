import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Sparkles, X } from 'lucide-react';

const NOVA_URL =
  'https://copilotstudio.microsoft.com/environments/Default-189dc61c-769b-4048-8b0f-6de074bba26c/bots/cr10a_agent_5X36c4/webchat?__version__=2&enableFileAttachment=false&cliAgent=true';

const NovaChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const loadingTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    setIsLoading(true);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (loadingTimeoutRef.current !== null) {
        window.clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const handleFrameLoad = () => {
    if (loadingTimeoutRef.current !== null) {
      window.clearTimeout(loadingTimeoutRef.current);
    }

    loadingTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
      loadingTimeoutRef.current = null;
    }, 1000);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="false"
            aria-labelledby="nova-title"
            className="pointer-events-auto absolute bottom-0 right-0 flex h-[58vh] w-full flex-col overflow-hidden border-t border-[var(--border)] bg-[var(--page)] shadow-2xl shadow-blue-950/25 md:top-0 md:h-full md:w-[400px] md:border-l md:border-t-0"
          >
            <header className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--card)] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 id="nova-title" className="text-base font-bold text-[var(--copy)]">Nova AI</h2>
                  <p className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    Portfolio assistant
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Nova AI"
                className="rounded-lg p-2 text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--copy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </header>

            <div className="relative min-h-0 flex-1 bg-[var(--page)]">
              <div
                className={`absolute inset-0 z-10 flex items-center justify-center bg-[var(--page)] transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                aria-hidden={!isLoading}
              >
                <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-3 shadow-lg shadow-blue-950/10" role="status" aria-label="Nova is connecting">
                  <span className="text-sm font-medium text-[var(--secondary)]">Nova is getting ready</span>
                  <span className="flex items-center gap-1" aria-hidden="true">
                    {[0, 1, 2].map((delay) => (
                      <span
                        key={delay}
                        className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-[nova-dot_1.2s_ease-in-out_infinite]"
                        style={{ animationDelay: `${delay * 150}ms` }}
                      />
                    ))}
                  </span>
                </div>
              </div>
              <iframe
                src={NOVA_URL}
                title="Nova AI chat"
                onLoad={handleFrameLoad}
                className={`h-full w-full border-0 bg-[var(--page)] transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                allow="microphone"
              />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            onClick={() => setIsOpen(true)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Open Nova AI"
            aria-expanded={false}
            exit={{ opacity: 0, scale: 0.8 }}
            className="pointer-events-auto absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-900/30 transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 md:bottom-7 md:right-7"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span className="hidden md:inline">Nova AI</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NovaChat;
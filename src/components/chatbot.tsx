import React, { useEffect, useRef, useState } from 'react';

type Message = {
  id: number;
  sender: 'user' | 'bot';
  text: string;
};

const generateReply = (text: string) => {
  const t = text.toLowerCase();
  if (t.includes('resume')) return "You can download my resume from the public folder or via the Resume link in the header.";
  if (t.includes('projects')) return 'Take a look at the Projects section — I build with React, TypeScript and Tailwind.';
  if (t.includes('skills')) return 'I have experience with React, TypeScript, Tailwind, Node and cloud deployments.';
  return "I'm a robotic demo chatbot for this portfolio. Try asking about 'projects', 'skills' or 'resume'.";
};

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'bot', text: "[SYS] Robochat online. Ask about projects(), skills() or resume()." },
  ]);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: Date.now(), sender: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setInput('');

    // simulated robotic response
    setTimeout(() => {
      const botMsg: Message = { id: Date.now() + 1, sender: 'bot', text: generateReply(text) };
      setMessages((m) => [...m, botMsg]);
    }, 650);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  // Robotic-only styling
  const headerBg = 'bg-gradient-to-r from-cyan-600 to-teal-500 text-black';

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className={`flex flex-col items-end ${open ? 'mb-3' : ''}`}>
        {open && (
          <div
            role="dialog"
            aria-label="Robotic chat"
            className={`w-80 md:w-96 flex flex-col bg-black text-cyan-100 border border-cyan-800 shadow-xl rounded-xl overflow-hidden`}
          >
            <div className={`px-3 py-2 flex items-center justify-between ${headerBg}`}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black text-cyan-300 font-mono">🤖</div>
                <div className="text-sm font-mono font-medium">Robochat</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  className="text-black/90"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-3 flex-1 min-h-[140px] max-h-64 overflow-y-auto space-y-3 bg-black text-cyan-100 font-mono">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.sender === 'bot' && (
                    <div className="mr-2 flex items-end text-cyan-300">🤖</div>
                  )}

                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-md text-sm leading-snug ${m.sender === 'user' ? 'bg-slate-800 text-cyan-200 border border-cyan-700' : 'bg-black text-cyan-300 border-l-4 border-cyan-500'}`}
                  >
                    <pre className="whitespace-pre-wrap text-sm m-0">{m.text}</pre>
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="px-3 py-2 border-t border-cyan-700 bg-black">
              <label htmlFor="chat-input" className="sr-only">Type a message</label>
              <div className="flex items-center gap-2">
                <input
                  id="chat-input"
                  aria-label="Type a message"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="flex-1 px-3 py-2 rounded-md border border-cyan-700 bg-gray-900 text-cyan-100 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="e.g. projects() or show resume()"
                />
                <button
                  onClick={handleSend}
                  aria-label="Send message"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-cyan-500 hover:bg-cyan-600 text-black text-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          aria-label="Open robotic chat"
          onClick={() => setOpen((v) => !v)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2 border-black bg-cyan-600 hover:bg-cyan-700 text-black"
        >
          {open ? '💬' : '🤖'}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

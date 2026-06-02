import { useState, useRef, useEffect } from 'react'

function BotIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* antenna */}
      <circle cx="16" cy="3.5" r="2" fill="currentColor" opacity="0.9" />
      <rect x="15" y="5" width="2" height="4" rx="1" fill="currentColor" opacity="0.9" />
      {/* head */}
      <rect x="4" y="9" width="24" height="16" rx="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.6" />
      {/* ears */}
      <rect x="1" y="14" width="3" height="6" rx="1.5" fill="currentColor" opacity="0.6" />
      <rect x="28" y="14" width="3" height="6" rx="1.5" fill="currentColor" opacity="0.6" />
      {/* eyes */}
      <circle cx="11.5" cy="17" r="2.8" fill="currentColor" />
      <circle cx="20.5" cy="17" r="2.8" fill="currentColor" />
      <circle cx="12.3" cy="16.2" r="1" fill="white" opacity="0.7" />
      <circle cx="21.3" cy="16.2" r="1" fill="white" opacity="0.7" />
      {/* smile */}
      <path d="M11.5 22 Q16 25.5 20.5 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  )
}

const WELCOME = "Hi! I'm the Mindflix assistant. Ask me anything about our services, products, pricing, or how to get started!"

const SUGGESTIONS = [
  'What services do you offer?',
  'Tell me about your products',
  'How much does FlowDesk cost?',
  'How do I get started?',
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', content: WELCOME }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  const send = async (text) => {
    const content = (text || input).trim()
    if (!content || loading) return

    setShowSuggestions(false)
    setInput('')
    const userMsg = { role: 'user', content }
    const history = [...messages, userMsg]
    setMessages(history)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.content || 'Sorry, I could not get a response.' }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Something went wrong. Please try again or contact us at mindsetters.sg@gmail.com.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 gradient-bg rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <BotIcon className="w-7 h-7 text-white" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-[#0d0d1a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ height: '520px' }}>

          {/* Header */}
          <div className="gradient-bg px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <BotIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-sm">Mindflix Assistant</div>
              <div className="text-white/70 text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                Online — here to help
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                    <BotIcon className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
                <div className={`max-w-[78%] text-sm px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'gradient-bg text-white rounded-2xl rounded-br-sm'
                    : 'bg-white/8 border border-white/10 text-slate-200 rounded-2xl rounded-bl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start items-end gap-2">
                <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <BotIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-white/8 border border-white/10 text-slate-300 text-sm px-4 py-2.5 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {/* Suggestion chips */}
            {showSuggestions && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-purple-500/40 text-purple-300 hover:bg-purple-500/20 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex gap-2 flex-shrink-0 bg-white/3">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
              placeholder="Ask me anything…"
              disabled={loading}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50"
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              className="gradient-bg text-white w-10 h-10 rounded-xl flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity flex-shrink-0"
              aria-label="Send"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

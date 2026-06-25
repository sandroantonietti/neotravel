'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ChatWindow.module.css';

const SUGGESTIONS = [
  'Trajet Paris → Lyon, 45 personnes, le 15 juillet',
  'Navette aéroport CDG pour 12 personnes',
  'Week-end scolaire 60 élèves',
] as const;

const PREVIEW_MSG =
  'Bonjour ! Décrivez-moi votre projet de transport et je prépare votre devis personnalisé en quelques minutes.';

const LOADING_LABELS = [
  'NeoTravel réfléchit',
  'Analyse de votre demande',
  'Préparation de votre réponse',
] as const;

interface Msg {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

export default function ChatWindow() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingLabel, setLoadingLabel] = useState<string>(LOADING_LABELS[0]);
  const [error, setError] = useState<string | null>(null);
  const [sessionId] = useState(() => crypto.randomUUID());

  const messagesAreaRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Scroll uniquement à l'intérieur du conteneur — jamais la page */
  const scrollToBottom = useCallback(() => {
    const el = messagesAreaRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (expanded) scrollToBottom();
  }, [msgs, loading, expanded, scrollToBottom]);

  const expand = useCallback(() => {
    if (expanded) return;
    setExpanded(true);
    setMsgs(prev =>
      prev.length === 0
        ? [{ id: 'welcome', role: 'assistant' as const, text: PREVIEW_MSG }]
        : prev
    );
    /* Scroll la page pour suivre l'agrandissement */
    setTimeout(() => {
      chatbotRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }, [expanded]);

  const send = useCallback(
    async (text: string) => {
      const t = text.trim();
      if (!t || loading) return;

      setError(null);
      setInput('');
      expand();

      const label = LOADING_LABELS[Math.floor(Math.random() * LOADING_LABELS.length)];
      setLoadingLabel(label);

      setMsgs(prev => [...prev, { id: crypto.randomUUID(), role: 'user', text: t }]);
      setLoading(true);

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chatInput: t, sessionId }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? 'Erreur de connexion');

        const reply = (data.output ?? data.message ?? "Je n'ai pas pu traiter votre demande.") as string;
        setMsgs(prev => [...prev, { id: crypto.randomUUID(), role: 'assistant', text: reply }]);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Erreur de connexion');
      } finally {
        setLoading(false);
      }
    },
    [loading, sessionId, expand]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const lastUserText = msgs.slice().reverse().find(m => m.role === 'user')?.text ?? '';

  return (
    <div ref={chatbotRef} className={`${styles.chatbot} ${expanded ? styles.expanded : ''}`}>

      {/* ── Header ── */}
      <header className={styles.header}>
        <button
          type="button"
          className={styles.backBtn}
          onClick={() => setExpanded(false)}
          aria-label="Fermer la conversation"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.headerMain}>
          <div className={styles.headerInfo}>
            <span className={styles.headerName}>NeoTravel</span>
            <span className={styles.headerStatus}>
              <span className={styles.statusDot} aria-hidden="true" />
              Disponible
            </span>
          </div>
        </div>

        <span className={styles.aiTag}>IA</span>
      </header>

      {/* ── Messages ── */}
      <div
        ref={messagesAreaRef}
        className={styles.messagesArea}
        aria-live="polite"
        aria-label="Conversation"
      >
        <div className={styles.msgList}>
          {msgs.map(m => (
            <div key={m.id} className={m.role === 'user' ? styles.rowUser : styles.rowBot}>
              <p className={m.role === 'user' ? styles.bubbleUser : styles.bubbleBot}>
                {m.text}
              </p>
            </div>
          ))}

          {loading && (
            <div className={styles.rowBot}>
              <div className={`${styles.bubbleBot} ${styles.loadingBubble}`}>
                <span className={styles.loadingLabel}>{loadingLabel}</span>
                <span className={styles.dots} aria-label="chargement en cours">
                  <span /><span /><span />
                </span>
              </div>
            </div>
          )}

          {error && (
            <div className={styles.errorRow}>
              <span className={styles.errorText}>{error}</span>
              {lastUserText && (
                <button type="button" className={styles.retryBtn} onClick={() => send(lastUserText)}>
                  Réessayer
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Preview message — état compact uniquement ── */}
      <div className={styles.previewWrap}>
        <p className={styles.previewBubble}>{PREVIEW_MSG}</p>
      </div>

      {/* ── Suggestions ── */}
      <div className={styles.suggestionsWrap} aria-hidden={expanded}>
        <div className={styles.suggestions}>
          {SUGGESTIONS.map(s => (
            <button
              key={s}
              type="button"
              className={styles.chip}
              onClick={() => send(s)}
              tabIndex={expanded ? -1 : 0}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* ── Input ── */}
      <form className={styles.inputArea} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className={styles.input}
          value={input}
          onChange={e => setInput(e.target.value)}
          onFocus={expand}
          placeholder="Décrivez votre trajet, votre groupe, votre date…"
          disabled={loading}
          maxLength={2000}
          autoComplete="off"
          aria-label="Message"
        />
        <button
          type="submit"
          className={styles.sendBtn}
          disabled={!input.trim() || loading}
          aria-label="Envoyer le message"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
}

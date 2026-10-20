import { useEffect } from "react";

export default function FeedbackToast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <aside
      aria-label="Notification alert"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-high/95 backdrop-blur-xl border border-primary-container/40 shadow-2xl text-on-surface animate-bounce-short max-w-sm"
    >
      <div className="w-7 h-7 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container shrink-0">
        <span className="material-symbols-outlined text-[18px]">
          {type === "success" ? "check_circle" : "info"}
        </span>
      </div>

      <div className="flex-1 font-body-sm text-body-sm leading-snug">
        <span className="font-label-technical text-[10px] uppercase text-primary-container block font-bold tracking-wider">
          {type === "success" ? "Cart Updated" : "Notice"}
        </span>
        <span className="text-on-surface">{message}</span>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="text-on-surface-variant hover:text-on-surface p-1"
        aria-label="Dismiss message"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </aside>
  );
}

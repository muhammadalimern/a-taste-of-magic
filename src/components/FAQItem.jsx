import { Plus } from "lucide-react";

export function FAQItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-${item.id}`}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-display text-lg font-semibold text-ink">{item.question}</span>
          <Plus
            className={`size-5 shrink-0 text-ember transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={`faq-${item.id}`}
        hidden={!open}
        className="pb-5 text-sm leading-relaxed text-ink/65"
      >
        {item.answer}
      </div>
    </div>
  );
}

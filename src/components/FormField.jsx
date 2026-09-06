const inputClass =
  "w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40";

export function FormField({
  id,
  label,
  error,
  required = false,
  hint,
  as = "input",
  children,
  ...props
}) {
  const describedBy = [error ? `${id}-error` : null, hint ? `${id}-hint` : null]
    .filter(Boolean)
    .join(" ");
  const borderClass = error ? "border-emberdeep" : "border-ink/15";
  const Tag = as;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-ember" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1 text-xs font-normal text-ink/40">(optional)</span>
        )}
      </label>
      <Tag
        id={id}
        name={id}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy || undefined}
        className={`${inputClass} ${borderClass} ${as === "textarea" ? "min-h-28" : ""}`}
        {...props}
      >
        {children}
      </Tag>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-xs text-ink/50">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs font-semibold text-emberdeep">
          {error}
        </p>
      ) : null}
    </div>
  );
}

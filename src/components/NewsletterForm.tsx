"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type NewsletterFormProps = {
  idSuffix?: string;
  layout?: "inline" | "stacked";
};

function isValidEmail(value: string) {
  // Basic email format validation — REPLACE_ME with stricter rules if needed.
  return /\S+@\S+\.\S+/.test(value);
}

export function NewsletterForm({
  idSuffix = "default",
  layout = "inline",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const emailId = `newsletter-email-${idSuffix}`;
  const errorId = `${emailId}-error`;
  const successId = `${emailId}-success`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!isValidEmail(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // REPLACE_ME: Connect to your real newsletter provider or backend here.
    // For example, call a serverless function:
    // const response = await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) });
    // Handle success / error based on the response instead of this stub.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
  }

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={`flex w-full gap-3 ${
        layout === "inline" ? "flex-col sm:flex-row" : "flex-col"
      }`}
    >
      <div className="flex-1">
        <label
          htmlFor={emailId}
          className="block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-foreground/70"
        >
          Email address
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") {
              setStatus("idle");
              setError(null);
            }
          }}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : isSuccess ? successId : undefined}
          className="mt-2 w-full rounded-full border border-foreground/20 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-accent focus:ring-2 focus:ring-accent"
          placeholder="you@example.com"
        />
        {error && (
          <p id={errorId} className="mt-2 text-xs text-[#c6007e]" role="alert">
            {error}
          </p>
        )}
        {isSuccess && (
          <p
            id={successId}
            className="mt-2 text-xs text-foreground/80"
            role="status"
          >
            {/* REPLACE_ME: Refine the success copy if needed. */}
            Thanks — we&apos;ll be in touch.
          </p>
        )}
        <p className="mt-2 text-[0.65rem] leading-relaxed text-foreground/70">
          {/* REPLACE_ME: Update or localize this privacy note. */}
          We only use your email for the weekly newsletter. No spam. Unsubscribe
          anytime.
        </p>
      </div>

      <div className={layout === "inline" ? "sm:self-end" : ""}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-3 inline-flex min-w-32 items-center justify-center rounded-full bg-accent px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-background transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-80 sm:mt-0"
        >
          {isSubmitting ? "Submitting..." : "Subscribe"}
        </button>
      </div>
    </form>
  );
}

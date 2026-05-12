"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(12, "Tell me a little more about the project.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange"
  });

  const onSubmit = async (values: ContactFormValues): Promise<void> => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      toast.error("Message could not be sent. Please email Shubham directly.");
      return;
    }

    toast.success("Message sent. Shubham will get back to you soon.");
    reset();
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-white/82">Name</span>
        <input
          {...register("name")}
          className="h-12 rounded-[var(--radius)] border border-[var(--border)] bg-black px-4 text-white outline-none transition placeholder:text-white/28 focus:border-[var(--accent)]"
          placeholder="Your name"
          autoComplete="name"
        />
        {errors.name ? <span className="text-sm text-[var(--accent-warm)]">{errors.name.message}</span> : null}
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-white/82">Email</span>
        <input
          {...register("email")}
          className="h-12 rounded-[var(--radius)] border border-[var(--border)] bg-black px-4 text-white outline-none transition placeholder:text-white/28 focus:border-[var(--accent)]"
          placeholder="you@example.com"
          autoComplete="email"
        />
        {errors.email ? (
          <span className="text-sm text-[var(--accent-warm)]">{errors.email.message}</span>
        ) : null}
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-white/82">Message</span>
        <textarea
          {...register("message")}
          className="min-h-36 resize-y rounded-[var(--radius)] border border-[var(--border)] bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-[var(--accent)]"
          placeholder="Tell me about your AI, data, or product challenge."
        />
        {errors.message ? (
          <span className="text-sm text-[var(--accent-warm)]">{errors.message.message}</span>
        ) : null}
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius)] bg-[var(--accent)] px-5 text-sm font-black text-black transition hover:bg-[#8ffff0] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? <Loader2 className="animate-spin" size={17} /> : <Send size={17} />}
        Send message
      </button>
    </form>
  );
}

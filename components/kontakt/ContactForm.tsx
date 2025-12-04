"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Betreff muss mindestens 3 Zeichen lang sein"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Sie müssen die Datenschutzerklärung akzeptieren",
  }),
  // Honeypot field - must be empty
  website: z.string().max(0).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <Label htmlFor="name">
          Name <span className="text-error">*</span>
        </Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Max Mustermann"
          className="mt-2"
        />
        {errors.name && (
          <p className="text-sm text-error mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">
          E-Mail <span className="text-error">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="max@beispiel.de"
          className="mt-2"
        />
        {errors.email && (
          <p className="text-sm text-error mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone (optional) */}
      <div>
        <Label htmlFor="phone">Telefon (optional)</Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="+49 123 456789"
          className="mt-2"
        />
      </div>

      {/* Subject */}
      <div>
        <Label htmlFor="subject">
          Betreff <span className="text-error">*</span>
        </Label>
        <Input
          id="subject"
          {...register("subject")}
          placeholder="Projektanfrage"
          className="mt-2"
        />
        {errors.subject && (
          <p className="text-sm text-error mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">
          Nachricht <span className="text-error">*</span>
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Beschreiben Sie Ihr Projekt..."
          rows={6}
          className="mt-2"
        />
        {errors.message && (
          <p className="text-sm text-error mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Honeypot Field - Hidden from users, only bots will fill this */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Privacy Checkbox */}
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            {...register("privacy")}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary cursor-pointer flex-shrink-0"
          />
          <Label htmlFor="privacy" className="cursor-pointer text-sm leading-relaxed">
            Ich habe die{" "}
            <a
              href="/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:no-underline"
            >
              Datenschutzerklärung
            </a>{" "}
            gelesen und akzeptiere diese. <span className="text-red-500">*</span>
          </Label>
        </div>
        {errors.privacy && (
          <p className="text-sm text-red-600 ml-7">{errors.privacy.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          "Nachricht senden"
        )}
      </Button>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">
            Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden
            uns in Kürze bei Ihnen.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <XCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">
            Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen
            Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.
          </p>
        </div>
      )}
    </form>
  );
}

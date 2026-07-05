"use client";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react";
import CountdownTimer from "./CountdownTimer";

type EnrolmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const EXPERIENCE_OPTIONS = ["Beginner", "Intermediate", "Advanced"];
const GOAL_OPTIONS = [
  "Build a repeatable, disciplined process",
  "Transition to full-time trading",
  "Strengthen risk & capital management",
  "Pass a prop firm evaluation",
  "Other",
];
const SOURCE_OPTIONS = ["Discord", "YouTube", "Instagram", "Referral from a friend", "Google Search", "Other"];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  occupation: "",
  experience: "",
  goal: "",
  source: "",
  confirmed: false,
};

const inputClass =
  "w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-white outline-none transition placeholder:text-grey focus:border-primary";
const labelClass = "block text-muted text-opacity-60 text-sm mb-2";
// Native <option> elements don't inherit the <select>'s bg-transparent — the
// browser renders its own (usually light) popup list unless the options
// themselves get an explicit background/text color. `checked:` covers the
// currently-selected row, which browsers otherwise highlight with their own
// default (light) selection color regardless of the base option styling.
const optionClass = "bg-dark_grey text-white checked:bg-primary checked:text-black";

const EnrolmentModal: React.FC<EnrolmentModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setForm(initialForm);
      setSubmitted(false);
      setSubmitting(false);
    }
  }, [isOpen]);

  const handleOverlayMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }
    if (!form.confirmed) {
      toast.error("Please confirm your commitment to the programme before submitting.");
      return;
    }

    setSubmitting(true);

    // TODO: No enrolment backend/email service exists yet — this is a
    // placeholder. Wire this up the same way the newsletter form posts to
    // /api/newsletter (see src/app/api/newsletter and src/lib/*EmailService)
    // once a real enrolment endpoint + destination email/CRM are available.
    console.log("New Trading Masterclass enrolment submission:", form);
    await new Promise((resolve) => setTimeout(resolve, 500));

    setSubmitting(false);
    setSubmitted(true);
    toast.success("Enrolment received!");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onMouseDown={handleOverlayMouseDown}
    >
      <div
        ref={modalRef}
        className="relative mx-auto w-full max-w-lg overflow-y-auto max-h-[90vh] rounded-lg px-8 pt-14 pb-8 bg-dark_grey bg-opacity-90 backdrop-blur-md"
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
          aria-label="Close Enrolment Modal"
        >
          <Icon icon="tabler:currency-xrp" className="text-white hover:text-primary text-24 inline-block me-2" />
        </button>

        {!submitted && <CountdownTimer />}

        {submitted ? (
          <div className="text-center py-10">
            <Icon icon="tabler:check-circle" className="text-primary mx-auto mb-4" width={48} height={48} />
            <h3 className="text-white text-24 font-medium mb-3">Enrolment Received</h3>
            <p className="text-muted text-opacity-60 text-18">
              Thank you — your enrolment has been received. Payment instructions will be sent to your
              email and WhatsApp within 1 hour of submission.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-white text-24 font-medium mb-6 text-center">Cohort 01 Enrolment Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelClass} htmlFor="firstName">First Name</label>
                  <input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Grace" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="lastName">Last Name</label>
                  <input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Wanjiru" className={inputClass} />
                </div>
              </div>

              <div className="mb-5">
                <label className={labelClass} htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="grace@email.com" className={inputClass} />
              </div>

              <div className="mb-5">
                <label className={labelClass} htmlFor="phone">Phone Number (WhatsApp)</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX" className={inputClass} />
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelClass} htmlFor="city">City / Town</label>
                  <input id="city" name="city" value={form.city} onChange={handleChange} placeholder="Nairobi" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="occupation">Occupation</label>
                  <input id="occupation" name="occupation" value={form.occupation} onChange={handleChange} placeholder="e.g. Teacher" className={inputClass} />
                </div>
              </div>

              <div className="mb-5">
                <label className={labelClass} htmlFor="experience">Current Trading Experience</label>
                <select id="experience" name="experience" value={form.experience} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={optionClass}>Select your level</option>
                  {EXPERIENCE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className={optionClass}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label className={labelClass} htmlFor="goal">What is your primary goal from this programme?</label>
                <select id="goal" name="goal" value={form.goal} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={optionClass}>Select your primary goal</option>
                  {GOAL_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className={optionClass}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className={labelClass} htmlFor="source">How did you discover the Masterclass?</label>
                <select id="source" name="source" value={form.source} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={optionClass}>Select a source</option>
                  {SOURCE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className={optionClass}>{opt}</option>
                  ))}
                </select>
              </div>

              <label className="flex items-start gap-3 mb-6 text-muted text-opacity-60 text-sm">
                <input
                  type="checkbox"
                  name="confirmed"
                  checked={form.confirmed}
                  onChange={handleChange}
                  className="mt-1 accent-primary outline-none focus:ring-2 focus:ring-primary rounded"
                />
                <span>
                  I confirm that I am committing to the full 6-week programme, including the weekly
                  sessions and the Vaultmont Consistency Evaluation at close.
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="bg-primary w-full py-3 rounded-lg text-18 font-medium border border-primary hover:text-primary hover:bg-transparent disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Enrolment →"}
              </button>

              <p className="text-muted text-opacity-60 text-sm text-center mt-4">
                You will receive payment instructions on WhatsApp and email within 1 hour of submission.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EnrolmentModal;

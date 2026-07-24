import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15555555555"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] group"
      aria-label="Contact us on WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 group-hover:animate-ping"></span>
      <MessageCircle className="relative z-10 h-7 w-7" />
    </a>
  );
}

"use client";

export default function ContactSection() {
  return (
    <section className="relative bg-faint w-full md:h-[700px] h-[1020px] ">
      {/* Google Map - Marseille Area */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185818.573496678!2d5.3046!3d43.2965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2sMarseille%2C%20France!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
        width="100%"
        height="700px"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 border-0"
        title="Marseille Area Map"
      ></iframe>
    </section>
  );
}

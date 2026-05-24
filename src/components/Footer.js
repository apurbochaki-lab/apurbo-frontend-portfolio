"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark w-full mt-auto">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-sm">© 2025 Developer Portfolio. Built with passion.</p>
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          <a className="hover:text-brand transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-brand transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

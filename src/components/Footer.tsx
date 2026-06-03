import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-50 text-navy-500 border-t border-navy-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-navy-900 mb-3">
              Natasha Brown
            </h3>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              UX Research & Consumer Insights leader helping teams make
              confident product decisions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-navy-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/natasha-brown016/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-navy-900 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:natashabrown.ux@gmail.com"
                  className="hover:text-navy-900 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-200 mt-12 pt-8 text-sm text-navy-400 text-center">
          &copy; {new Date().getFullYear()} Natasha Brown. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

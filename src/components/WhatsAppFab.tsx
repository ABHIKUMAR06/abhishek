import { whatsapp, whatsappHref } from '../data/content'
import { WhatsAppIcon } from './Icons'

/** Floating WhatsApp action button, pinned bottom-right on every screen size. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Chat with Abhishek on WhatsApp at ${whatsapp.display}`}
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] pr-0 pl-3.5 shadow-lg shadow-[#25D366]/25 ring-1 ring-black/10 transition-[padding] duration-300 hover:pr-4 sm:right-7 sm:bottom-7"
    >
      <WhatsAppIcon className="my-3.5 h-6 w-6 shrink-0 text-white" />
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap text-white transition-all duration-300 group-hover:max-w-40 group-hover:pl-2.5 motion-reduce:transition-none">
        Chat on WhatsApp
      </span>
    </a>
  )
}

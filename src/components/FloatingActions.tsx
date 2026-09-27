import { whatsapp, whatsappHref } from '../data/content'
import { WhatsAppIcon } from './Icons'
import { BackToTop } from './BackToTop'

/** Fixed action stack: rocket (scroll to top) above the WhatsApp chat button. */
export function FloatingActions() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3 sm:right-7 sm:bottom-7">
      <BackToTop />
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Chat with Abhishek on WhatsApp at ${whatsapp.display}`}
        className="group flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 ring-1 ring-black/10 transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe57] sm:w-auto sm:justify-start sm:gap-0 sm:pr-0 sm:pl-3.5"
      >
        <WhatsAppIcon className="h-7 w-7 shrink-0 text-white sm:my-3.5 sm:h-6 sm:w-6" />
        <span className="hidden max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap text-white transition-all duration-300 group-hover:max-w-40 group-hover:pr-4 group-hover:pl-2.5 motion-reduce:transition-none sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}

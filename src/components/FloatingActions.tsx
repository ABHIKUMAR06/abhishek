import { BackToTop } from './BackToTop'

/** Fixed rocket button for scrolling back to the top. */
export function FloatingActions() {
  return (
    <div className="fixed right-5 bottom-5 z-50 sm:right-7 sm:bottom-7">
      <BackToTop />
    </div>
  )
}

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from '../components/Icons'

/** Maps a social label to its icon component, falling back to email. */
export function iconFor(label: string) {
  if (label === 'WhatsApp') return WhatsAppIcon
  if (label === 'GitHub') return GitHubIcon
  if (label === 'LinkedIn') return LinkedInIcon
  if (label === 'Instagram') return InstagramIcon
  return MailIcon
}

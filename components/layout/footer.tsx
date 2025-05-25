import FooterNewsletter from '@/components/layout/footer-newsletter';
import FooterLegal from './footer-legal';
import { FooterLinks } from './footer-links';
import PayMethodsBanner from '@/components/product/PayMethodsBanner';
import FooterSocialMedia from '@/components/layout/footer-socialmedia';

export default async function Footer() {
  return (
    <footer className="relative w-full bg-[#343E31] text-sm text-white">
      <div className="mx-auto flex w-[1400px] flex-row justify-between border-t border-neutral-200 py-12 text-sm">
        <FooterNewsletter />
        <FooterLegal />
        <FooterLinks />
        <FooterSocialMedia />
        <div className="absolute right-5 bottom-1">
          <PayMethodsBanner />
        </div>
      </div>
    </footer>
  );
}

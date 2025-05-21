import FooterNewsletter from "@/components/layout/footer-newsletter";
import FooterLegal from "./footer-legal";
import { FooterLinks } from "./footer-links";
import PayMethodsBanner from "@/components/product/PayMethodsBanner";
import FooterSocialMedia from "@/components/layout/footer-socialmedia";

export default async function Footer() {
  return (
    <footer className="relative text-sm bg-[#343E31] w-full text-white">
      <div className="mx-auto flex w-[1400px] py-12 flex-row justify-between border-t border-neutral-200 text-sm">
        <FooterNewsletter />
        <FooterLegal />
        <FooterLinks />
        <div className="absolute bottom-1 right-5">
          <PayMethodsBanner />
        </div>
        <FooterSocialMedia/>
      </div>
    </footer>
  );
}

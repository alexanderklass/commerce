import Link from "next/link";

export default function FooterLegal({ links }: { links: any }) {
  const legalRoutes = [
    {
      title: "Impressum",
      link: "#",
    },
    {
      title: "Datenschutz",
      link: "#",
    },
    {
      title: "AGB",
      link: "#",
    },
    {
      title: "Kontakt",
      link: "#",
    },
    {
      title: "Rückgabebestimmungen",
      link: "#",
    },
    {
      title: "Versandinformationen",
      link: "#",
    },
  ];
  return (
    <div className={"flex max-w-[250px] flex-col gap-y-3"}>
      <p className={"font-bold"}>Rechtliches</p>
      <div className={"flex flex-col gap-y-1"}>
        {legalRoutes.map((link: any, i: number) => (
          <Link
            className={"underline-offset-2 hover:underline"}
            key={i}
            href={link.link}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

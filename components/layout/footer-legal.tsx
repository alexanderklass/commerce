import Link from "next/link";

export default function FooterLegal() {
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
        {legalRoutes.map((route, i) => (
          <Link key={i} href={route.link}>
            {route.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

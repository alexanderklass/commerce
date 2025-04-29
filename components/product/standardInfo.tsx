import StandardInfoCheckmark from "./standardInfoCheckmark";
export default function StandardInfo() {
  return (
    <div className={"text-gray-700 border-b-2 pb-6 mt-5 mb-10 gap-y-2 flex flex-col items-start justify-center"}>
      <StandardInfoCheckmark text="Kostenloser Versand ab 50€" />
      <StandardInfoCheckmark text="30 Tage Rückgaberecht" />
      <StandardInfoCheckmark text="Nachhaltige Inhaltsstoffe" />
    </div>
  );
}

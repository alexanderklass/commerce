import StandardInfoCheckmark from "./standardInfoCheckmark";

export default function StandardInfo() {
  return (
    <div
      className={
        "text-gray-700 my-2 gap-y-2 flex flex-col items-start justify-center"
      }
    >
      <StandardInfoCheckmark text="100% originale Düfte" />
      <StandardInfoCheckmark text="Abgefüllt am nächsten Werktag" />
      <StandardInfoCheckmark text={"Kostenloser versand ab 50€"} />
    </div>
  );
}

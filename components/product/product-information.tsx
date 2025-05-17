import DropDownMenu from "@/components/product/drop-down-menu";

type ProductInformationProps = {
  description: string;
};

export default function ProductInformation({
  description,
}: ProductInformationProps) {
  const splitDescription = description?.split(";");
  const productDetails = splitDescription[1];
  const ingredients = splitDescription[2];
  const sustainability = splitDescription[3];
  const warnings = splitDescription[4];
  if (!productDetails) return null;
  const kopfMatch = productDetails.match(/Kopfnote:\s*(.+?)(?=\s*Herznote:|$)/);
  const herzMatch = productDetails.match(
    /Herznote:\s*(.+?)(?=\s*Basisnote:|$)/,
  );
  const basisMatch = productDetails.match(/Basisnote:\s*(.+)$/);

  const formateProductDetailsCorrectly = (
    art: string,
    komponenten: string | undefined,
  ) => {
    if (!komponenten) return "";
    const duftstoffe = komponenten
      .split("-")
      .map((k) => k.trim())
      .filter(Boolean)
      .join(" - ");
    return `${art}: ${duftstoffe}`;
  };

  return (
    <>
      <DropDownMenu title={"Duftnote"}>
        <ul className="flex flex-col gap-y-2 list-disc pl-4">
          <li>{formateProductDetailsCorrectly("Kopfnote", kopfMatch?.[1])}</li>
          <li>{formateProductDetailsCorrectly("Herznote", herzMatch?.[1])}</li>
          <li>
            {formateProductDetailsCorrectly("Basisnote", basisMatch?.[1])}
          </li>
        </ul>
      </DropDownMenu>
      <DropDownMenu title={"Inhaltsstoffe"}>{ingredients}</DropDownMenu>
      <DropDownMenu title={"Zusätzliche Produktinformationen"}>
        {sustainability}
      </DropDownMenu>
      <DropDownMenu title={"Warnhinweise"}>{warnings}</DropDownMenu>
    </>
  );
}

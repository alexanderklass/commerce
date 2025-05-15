import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Faq() {
  return (
    <div className={"w-[50rem] p-5"}>
      <p className={"font-bold text-2xl"}>FAQs</p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className={"text-lg"}>
            Fragen und Antworten
          </AccordionTrigger>
          <AccordionContent>FAQ CONTENT HIER REIN</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className={"text-lg"}>
            Fragen und Antworten
          </AccordionTrigger>
          <AccordionContent>FAQ CONTENT HIER REIN</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className={"text-lg"}>
            Fragen und Antworten
          </AccordionTrigger>
          <AccordionContent>FAQ CONTENT HIER REIN</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className={"text-lg"}>
            Fragen und Antworten
          </AccordionTrigger>
          <AccordionContent>FAQ CONTENT HIER REIN</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className={"text-lg"}>
            Fragen und Antworten
          </AccordionTrigger>
          <AccordionContent>FAQ CONTENT HIER REIN</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

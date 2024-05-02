import Accordion from "react-bootstrap/Accordion";
import "../App.css"
import { useState } from "react";

function AccordionComponent() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const accordionData = [
    {
      id: 0,
      question:
        "What are the average area requirements for setting up a Chai Max franchise?",
      answer: "Mini: 100 sq.ft – 500 sq.ft , Based on categories ",
    },
    {
      id: 1,
      question:
        "How many employees will be required for the Chai Max franchise?",
      answer:
        "Depends on Franchisee need and Business Flow. One or Two employees is enough to handle it",
    },
    {
      id: 2,
      question: "What support is provided by Chai Max?",
      answer:
        "Business development support, CRM ERP Finance management, Quality Audit, Brand  & Marketing Promotion Advertising, Complete Business Training Support, R & D,Business Development & Strategies, Corporate orders, Business Vendor Collaboration Process, Seasonal Add on Business Support",
    },
    {
      id: 3,
      question:
        "How many years is the franchise agreement? Is it regenerating?",
      answer:
        "The five-year term of the franchise deal. You can extend the contract for an additional five years by paying 10% of the franchise price.",
    },
    {
      id: 4,
      question:
        "When the first supply runs out, will the company still offer stock to prepare everything on the menu?",
      answer:
        "All of the essential components will be provided by the brand. The franchisee must, however, purchase some products locally",
    },
    {
      id: 5,
      question: "What types of snacks does the company offer?",
      answer:
        "With the brand's permission, the franchisee may continue to sell regional snacks at the business. The franchisee has the option of making the snacks or purchasing them from reputable snack suppliers. Snack quality should not be compromised",
    },
    {
      id: 6,
      question:
        "Can the chain expand the menu to include more drinks in addition to the snacks?",
      answer:
        "The CHAI MAX  store is only permitted to sell goods from its own menu. With the brand's explicit consent, a few particular beverages may be included, taking into account regional flavors and requests. No further types of tea may be added.",
    },
    {
      id: 7,
      question: "Will the company supply staff??",
      answer:
        "No However, the company gives your chosen personnel training. To manage the business, you need at least 2-3 employees. There is no requirement for prior hotel industry experience for these employees. The items at CHAI MAX  are all made following a formula, which explains why. CHAI MAX 's preparatory techniques may be learned in upto 3  days of instruction.",
    },
    {
      id: 8,
      question: "How much do current stores sell on a daily average?",
      answer:
        "The daily sales at CHAI MAX  locations range from 5,000 to 20,000 rupees. However, a regular sale of 10,000 or more may be anticipated on average. The location of the store and the manner in which you treat clients are the main determinants of daily sales.",
    },
    {
      id: 9,
      question:
        "What steps must an investor take if they want to open a  CHAI Max  franchise?",
      answer:
        "Stage-1: Initial Payment Rs: 25,000 as confirmation. ( Registration + Inspection  ).The investor will get a payment confirmation for this amount, which will be the subject of a Letter of Intent (LOI).Stage-2: Remaining Payments should be settle when the agreement get signed based on categories ( Basic , Standard , Premium ).The agreement will be executed once the last and final payment has been made. The company will provide all the materials, including the starter kit, within 10 days after receiving full and complete payment.",
    },
    {
      id: 10,
      question: "When and how should the franchisee inform the brand of sales?",
      answer:
        "Daily, weekly, and monthly sales reports must be sent to the brand through WhatsApp by the franchisee",
    },
    {
      id: 11,
      question: "What are the Materials provide to franchise ?",
      answer:
        "Welcome Kit, Raw Materials, Kitchen Equipments, Interior & Exterior",
    },
    {
      id: 12,
      question: "Will the brand Visit & inspection Franchisee?",
      answer:
        "Yes , every month twice our Audit team may visit like a customer to Standardize the Brand & Taste Quality.",
    },
    {
      id: 13,
      question: "Time required for Setup process?",
      answer: "It takes up to 15-20 working days",
    },
  ];
   const handleAccordionClick = (id) => {
     setActiveAccordion(activeAccordion === id ? null : id);
   };
  return (

    <Accordion>
      {accordionData.map((acc) => (
        <Accordion.Item key={acc.id} eventKey={acc.id}>
          <Accordion.Header onClick={() => handleAccordionClick(acc.id)}>
            {acc.question}
          </Accordion.Header>
          <Accordion.Body>{acc.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AccordionComponent;

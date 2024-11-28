import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { CardDefault } from './CardDefault';
import card from '@material-tailwind/react/theme/components/card';

// Default cardData can be defined here as a constant
const defaultCardData = {
  "Climate Change Mitigation": [
    { title: "Card 1", description: "Description for card 1" },
    { title: "Card 2", description: "Description for card 2" },
    { title: "Card 3", description: "Description for card 3" },
    { title: "Card 4", description: "Description for card 4" },
  ],
  "Biodiversity and Conservation": [
    { title: "Card 1", description: "Description for card 1" },
    { title: "Card 2", description: "Description for card 2" },
    { title: "Card 3", description: "Description for card 3" },
    { title: "Card 4", description: "Description for card 4" },
  ],
  "Renewable Energy and Clean Tech": [
    { title: "Card 1", description: "Description for card 1" },
    { title: "Card 2", description: "Description for card 2" },
    { title: "Card 3", description: "Description for card 3" },
    { title: "Card 4", description: "Description for card 4" },
  ],
  "Green Finance": [
    { title: "Card 1", description: "Description for card 1" },
    { title: "Card 2", description: "Description for card 2" },
    { title: "Card 3", description: "Description for card 3" },
    { title: "Card 4", description: "Description for card 4" },
  ],
  "Environmental Regulations and Policies": [
    { title: "Card 1", description: "Description for card 1" },
    { title: "Card 2", description: "Description for card 2" },
    { title: "Card 3", description: "Description for card 3" },
    { title: "Card 4", description: "Description for card 4" },
  ],
  "Carbon Credits and Trading": [
    { title: "Card 1", description: "Description for card 1" },
    { title: "Card 2", description: "Description for card 2" },
    { title: "Card 3", description: "Description for card 3" },
    { title: "Card 4", description: "Description for card 4" },
  ],
};

export default function CountryAccordians({ cardData = defaultCardData }) {
  console.log("cardData:",cardData)
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(false);
  const [openAcc3, setOpenAcc3] = React.useState(false);
  const [openAcc4, setOpenAcc4] = React.useState(false);
  const [openAcc5, setOpenAcc5] = React.useState(false);
  const [openAcc6, setOpenAcc6] = React.useState(false);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
  const handleOpenAcc4 = () => setOpenAcc4((cur) => !cur);
  const handleOpenAcc5 = () => setOpenAcc5((cur) => !cur);
  const handleOpenAcc6 = () => setOpenAcc6((cur) => !cur);

  return (
    <>
      <Accordion open={openAcc1}>
        <AccordionHeader onClick={handleOpenAcc1}>Climate Change Mitigation</AccordionHeader>
        <AccordionBody className="flex gap-y-6 gap-x-6 flex-wrap">
          {cardData["ClimateChangeMitigation"].map((card, index) => (
            <CardDefault key={index} title={card.title} description={card.description} link={card.link}/>
          ))}
        </AccordionBody>
      </Accordion>

      <Accordion open={openAcc2}>
        <AccordionHeader onClick={handleOpenAcc2}>Biodiversity and Conservation</AccordionHeader>
        <AccordionBody className="flex gap-y-6 gap-x-6 flex-wrap">
          {cardData["BiodiversityandConservation"].map((card, index) => (
            <CardDefault key={index} title={card.title} description={card.description}  link={card.link}/>
          ))}
        </AccordionBody>
      </Accordion>

      <Accordion open={openAcc3}>
        <AccordionHeader onClick={handleOpenAcc3}>Renewable Energy and Clean Tech</AccordionHeader>
        <AccordionBody className="flex gap-y-6 gap-x-6 flex-wrap">
          {cardData["RenewableEnergyAndClean"].map((card, index) => (
            <CardDefault key={index} title={card.title} description={card.description} link={card.link}/>
          ))}
        </AccordionBody>
      </Accordion>

      <Accordion open={openAcc4}>
        <AccordionHeader onClick={handleOpenAcc4}>Green Finance</AccordionHeader>
        <AccordionBody className="flex gap-y-6 gap-x-6 flex-wrap">
          {cardData["GreenFinance"].map((card, index) => (
            <CardDefault key={index} title={card.title} description={card.description} link={card.link}/>
          ))}
        </AccordionBody>
      </Accordion>

      <Accordion open={openAcc5}>
        <AccordionHeader onClick={handleOpenAcc5}>Environmental Regulations and Policies</AccordionHeader>
        <AccordionBody className="flex gap-y-6 gap-x-6 flex-wrap">
          {cardData["EnvironmentalRegulationsAndPolicies"].map((card, index) => (
            <CardDefault key={index} title={card.title} description={card.description} link={card.link}/>
          ))}
        </AccordionBody>
      </Accordion>

      <Accordion open={openAcc6}>
        <AccordionHeader onClick={handleOpenAcc6}>Carbon Credits and Trading</AccordionHeader>
        <AccordionBody className="flex gap-y-6 gap-x-6 flex-wrap">
          {cardData["CarbonCreditsAndTrading"].map((card, index) => (
            <CardDefault key={index} title={card.title} description={card.description} link={card.link} />
          ))}
        </AccordionBody>
      </Accordion>
    </>
  );
}

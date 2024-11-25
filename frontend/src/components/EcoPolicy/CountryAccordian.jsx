import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { CardDefault } from './CardDefault';

export default function CountryAccordians() {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);
  const [openAcc4, setOpenAcc4] = React.useState(true);
  const [openAcc5, setOpenAcc5] = React.useState(true);
  const [openAcc6, setOpenAcc6] = React.useState(true);

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
          <CardDefault />
          <CardDefault />
          <CardDefault />
          <CardDefault />
        </AccordionBody>
      </Accordion>

      <Accordion open={openAcc2}>
        <AccordionHeader onClick={handleOpenAcc2}>Biodiversity and Conservation</AccordionHeader>
        <AccordionBody className="flex gap-y-6 gap-x-6 flex-wrap">
          <CardDefault />
          <CardDefault />
          <CardDefault />
          <CardDefault />
        </AccordionBody>
      </Accordion>

      <Accordion open={openAcc3}>
        <AccordionHeader onClick={handleOpenAcc3}>Renewable Energy and Clean Tech</AccordionHeader>
        <AccordionBody className="flex gap-y-6 gap-x-6 flex-wrap">
          <CardDefault />
          <CardDefault />
          <CardDefault />
          <CardDefault />
        </AccordionBody>
      </Accordion>

      <Accordion open={openAcc4}>
        <AccordionHeader onClick={handleOpenAcc4}>Green Finance</AccordionHeader>
        <AccordionBody className="flex gap-y-6 gap-x-6 flex-wrap">
          <CardDefault />
          <CardDefault />
          <CardDefault />
          <CardDefault />
        </AccordionBody>
      </Accordion>

      <Accordion open={openAcc5}>
        <AccordionHeader onClick={handleOpenAcc5}>Environmental Regulations and Policies</AccordionHeader>
        <AccordionBody className="flex gap-y-6 gap-x-6 flex-wrap">
          <CardDefault />
          <CardDefault />
          <CardDefault />
          <CardDefault />
        </AccordionBody>
      </Accordion>

      <Accordion open={openAcc6}>
        <AccordionHeader onClick={handleOpenAcc6}>Carbon Credits and Trading</AccordionHeader>
        <AccordionBody className="flex gap-y-6 gap-x-6 flex-wrap">
          <CardDefault />
          <CardDefault />
          <CardDefault />
          <CardDefault />
        </AccordionBody>
      </Accordion>
    </>
  );
}

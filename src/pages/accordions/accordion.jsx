import AccordionItem from "./accordionItem";

function Accordion() {
  const accordionDatas = [
    {
      title: "Demo title 1",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      title: "Demo title 2",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also.`,
    },
    {
      title: "Demo title 3",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ];

  return (
    <div>
      <section className="h-screen grid place-items-center">
        <div className="px-[40px] max-w-[800px]">
          {
            accordionDatas.map((accordionData, i) => {
              return <AccordionItem key={i} title={accordionData.title} desc={accordionData.desc} />
            })
          }
        </div>
      </section>
    </div>
  );
}

export default Accordion;
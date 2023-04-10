import Accordion from '../components/Accordion'

function AccordionPage() {
    const items = [
        {
            id: '1',
            label: "Can I use React on a project?",
            content: "You can use React in any project you want. You can use React in any project you want. You can use React in any project you want."
        },
        {
            id: '2',
            label: "Can I use JS on a project?",
            content: "You can use JS in any project you want. You can use JS in any project you want. You can use JS in any project you want."
        },
        {
            id: '3',
            label: "Can I use CSS on a project?",
            content: "You can use CSS in any project you want. You can use CSS in any project you want. You can use CSS in any project you want."
        },
    ];

    return <Accordion items={items} />
}

export default AccordionPage;
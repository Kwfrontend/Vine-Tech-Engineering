import './faq-section.styles.css';

import Accordion from '../../components/Accordion/accordion.component';

const FaqSection = () => {
  
    return (
        <div className="faq-section-container">
            <h1 className="faq-section-headline">Frequently asked questions</h1>
            <div className="accordions-container">
                <Accordion data={data1} />
                <Accordion data={data2}  />
            </div>
        </div>
    )
}

const data1 = [
    {
        question: 'Do you offer financing for your Projects?',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
    {
        question: 'What types of contaminants does the system remove?',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
    {
        question: 'How often do the filters need to be replaced?',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
]
const data2 = [
    {
        question: 'Do you serve both homes and businesses?',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
    {
        question: 'What makes your systems different from competitors?  ',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
    {
        question: 'What is the maintenance required for a system?',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
]



export default FaqSection;
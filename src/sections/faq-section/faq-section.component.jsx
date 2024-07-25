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
        question: 'Do you offer custom sizes and shapes?',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
    {
        question: 'What finishes do you offer?',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
    {
        question: 'What grades of stainless steel do you offer?',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
]
const data2 = [
    {
        question: 'What are the benefits of using stainless steel over other materials?',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
    {
        question: 'What makes your service different from competitors?  ',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
    {
        question: 'What types of stainless steel are best for wine and food production?',
        anwser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, suscipit alias molestiae dolorem adipisci autem sint obcaecati perspiciatis magnam accusamus!'
    },
]



export default FaqSection;
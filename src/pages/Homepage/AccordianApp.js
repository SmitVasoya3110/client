import React, { useState } from 'react';
// import Header from './Accordian_Header';
import FAQ from './FAQ';

function AccordianApp () {
  const [faqs, setfaqs] = useState([
    {
      question: 'How long does it take to build a pro website?',
      answer: 'Well, To be honest it depends on the design and structure of the website, but normally it takes about a week or two',
      open: true
    },
    {
      question: 'Which technology is mostly used for web development around the world?',
      answer: 'According to the latest survey WordPress is used in about 70% of the website built around the world.',
      open: false
    },
    {
      question: 'What about careers at DigiSurf | Australia?',
      answer: 'Kindly send an e-mail or contact through whatsapp and submit your Resume, and we will get in touch with you if there is an opening.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="AccordianApp">
    <div className="Accordian-Center"><h1>FAQ</h1></div>
    
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default AccordianApp;

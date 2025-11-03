import { useState } from "react";
// Icons replaced with inline SVGs

export const FAQ1 = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
  <div 
    className="w-full pt-20 lg:pt-40 pb-8 lg:pb-12"
    style={{ backgroundColor: '#314E34' }}
  >
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border border-white/30 text-white bg-white/10">
                FAQ
              </span>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular text-white">
                Frequently Asked Questions
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-200 text-left">
                Everything you need to know about the book, the author, and how this powerful message can transform your perspective on ageing and living with purpose.
              </p>
            </div>
            <div className="">
              <a 
                href="https://wa.me/+2347049393818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button 
                  className="px-6 py-3 border border-white rounded-md font-medium transition-colors duration-200 flex items-center gap-4"
                  style={{ 
                    backgroundColor: '#ffffff',
                    color: '#314E34',
                    borderColor: '#ffffff'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.setProperty('background-color', '#f3f4f6', 'important');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty('background-color', '#ffffff', 'important');
                  }}
                >
                  Have questions? Contact us 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full space-y-2">
          {[
            {
              question: "What makes this book different from other books on ageing?",
              answer: "This book is written by an 83-year-old author who is a living example of what she teaches. It combines practical wisdom with spiritual insights, showing that ageing gracefully is not just possible but can be embraced with joy and purpose."
            },
            {
              question: "Is this book only for older adults?",
              answer: "Not at all! While the author is 83, the principles apply to anyone who wants to live with vitality and purpose at any age. Younger readers will find a roadmap for healthy living, while older readers will be encouraged and inspired."
            },
            {
              question: "What practical advice does the book offer?",
              answer: "The book covers fitness and wellness habits, mindset shifts for positive ageing, spiritual foundations for health, practical daily disciplines, and how to maintain relevance and impact throughout life's journey."
            },
            {
              question: "How did the author's faith influence her approach to ageing?",
              answer: "The author's faith in God's sustaining power has been central to her journey. She believes that ageing is not a curse but a blessing when lived with the right mindset, healthy habits, and God's grace."
            },
            {
              question: "How can I purchase the book?",
              answer: "The book is now available for purchase! Order your copy today and start your journey to living and ageing gracefully by the power of God."
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/30 rounded-md"
              style={{ backgroundColor: '#ffffff' }}
            >
              <button
                className="w-full px-4 py-3 text-left flex justify-between items-center transition-colors duration-200"
                style={{ backgroundColor: '#ffffff' }}
                onClick={() => toggleItem(index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.setProperty('background-color', '#f3f4f6', 'important');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty('background-color', '#ffffff', 'important');
                }}
              >
                <span className="font-medium" style={{ color: '#314E34' }}>{faq.question}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 text-white ${openItems.includes(index) ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openItems.includes(index) && (
                <div 
                  className="px-4 pb-3 mt-2"
                  style={{ 
                    backgroundColor: '#ffffff',
                    color: '#314E34'
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};
// Icons replaced with inline SVGs
import { getWhatsAppLink } from "@/constants";

export const CTA1 = () => (
  <div className="w-full py-8 lg:py-12 bg-marquee">
    <div className="w-full">
      <div className="flex flex-col text-center bg-green-1000 p-4 lg:p-6 gap-4 items-center">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white" style={{color: '#314E34'}}>
            Now Available
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-4xl font-regular text-white">
            Ready to Transform Your Life?
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-gray-200 max-w-xl">
            Join thousands who are already living with purpose, health, and joy at every age. Your journey to graceful ageing starts here.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <a 
            href={getWhatsAppLink("Hi! I'm interested in getting the Living and Ageing book.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md font-medium flex items-center gap-4"
            style={{
              backgroundColor: '#ffffff',
              color: '#314E34',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('background-color', '#f3f4f6', 'important');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('background-color', '#ffffff', 'important');
            }}
          >
           Get the Book
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </a>
     
        </div>
      </div>
    </div>
  </div>
);
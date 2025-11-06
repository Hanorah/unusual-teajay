"use client";
import Image from "next/image";
import { 
	img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
	img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22
} from "@/public";

export function FeaturesSectionDemo() {
  return (
    <section className="w-full padding-y bg-background relative z-20">
      <div className="padding-x">
        <div className="w-full mb-[60px] sm:mb-[40px] xm:mb-[40px]">
          <h2 className="sub-heading font-semibold font-FoundersGrotesk text-secondry mb-[20px]">
            How We Work Together
          </h2>
          <p className="paragraph font-NeueMontreal text-secondry opacity-70 max-w-[600px]">
            Discover the transformative journey that awaits you through personalized coaching designed to unlock your potential.
          </p>
        </div>

        {/* Bento Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-1 xm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-3 xm:gap-3 md:gap-2"
          style={{
            gridAutoRows: 'minmax(200px, auto)',
          }}
        >
          {/* Large card - Top Left: 2 cols × 2 rows */}
          <div className="relative overflow-hidden rounded-[15px] group cursor-pointer sm:col-span-1 xm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 md:row-span-2 lg:row-span-2 xl:row-span-2 aspect-[4/3] sm:aspect-[4/5] xm:aspect-[4/5] md:aspect-auto lg:aspect-auto xl:aspect-auto">
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={img1} 
                alt="Coaching Session" 
                fill
                className="object-cover" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 bg-black/60 opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-[30px]">
                <h3 className="text-4xl font-semibold font-FoundersGrotesk text-white mb-[15px]">
                  One-on-One Coaching
                </h3>
                <p className="text-xl font-NeueMontreal text-white/90">
                  Personalized sessions tailored to your unique goals and challenges. Work directly with an experienced coach who understands your journey and provides customized guidance to help you unlock your full potential and achieve lasting transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Tall card - Top Right: 1 col × 2 rows */}
          <div className="relative overflow-hidden rounded-[15px] group cursor-pointer sm:col-span-1 xm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 md:row-span-2 lg:row-span-2 xl:row-span-2 aspect-[3/4] sm:aspect-[4/5] xm:aspect-[4/5] md:aspect-auto lg:aspect-auto xl:aspect-auto">
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={img2} 
                alt="Goal Setting" 
                fill
                className="object-cover" 
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-[25px]">
                <h4 className="text-3xl font-semibold font-FoundersGrotesk text-white mb-[10px]">Goal Setting</h4>
                <p className="text-xl font-NeueMontreal text-white/90">Define clear, actionable goals that align with your values and vision. Learn powerful techniques to break down big dreams into manageable steps and create a roadmap to success.</p>
              </div>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="relative overflow-hidden rounded-[15px] group cursor-pointer sm:col-span-1 xm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 aspect-square sm:aspect-[4/5] xm:aspect-[4/5] md:aspect-square lg:aspect-square xl:aspect-square">
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={img3} 
                alt="Breakthrough" 
                fill
                className="object-cover" 
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-[20px]">
                <h4 className="text-3xl font-semibold font-FoundersGrotesk text-white mb-[8px]">Breakthrough</h4>
                <p className="text-xl font-NeueMontreal text-white/90">Overcome limiting beliefs and mental barriers that hold you back. Discover your inner strength and break through obstacles to create the life you truly deserve.</p>
              </div>
            </div>
          </div>

          {/* Small card 2 */}
          <div className="relative overflow-hidden rounded-[15px] group cursor-pointer sm:col-span-1 xm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 aspect-square md:aspect-square lg:aspect-square xl:aspect-square sm:hidden xm:hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={img4} 
                alt="Support" 
                fill
                className="object-cover" 
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-[20px]">
                <h4 className="text-3xl font-semibold font-FoundersGrotesk text-white mb-[8px]">Support</h4>
                <p className="text-xl font-NeueMontreal text-white/90">Receive ongoing guidance and encouragement every step of the way. You'll never feel alone on your journey with consistent support and accountability.</p>
              </div>
            </div>
          </div>

          {/* Wide card - Bottom: 2 cols × 1 row */}
          <div className="relative overflow-hidden rounded-[15px] group cursor-pointer sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 aspect-[2/1] md:aspect-[2/1] lg:aspect-[2/1] xl:aspect-[2/1] sm:hidden xm:hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={img5} 
                alt="Holistic Approach" 
                fill
                className="object-cover" 
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-[25px]">
                <h4 className="text-3xl font-semibold font-FoundersGrotesk text-white mb-[10px]">Holistic Approach</h4>
                <p className="text-xl font-NeueMontreal text-white/90">Experience comprehensive transformation that addresses mind, body, and spirit. Our integrated approach ensures lasting change across all areas of your life.</p>
              </div>
            </div>
          </div>

          {/* Small card 3 */}
          <div className="relative overflow-hidden rounded-[15px] group cursor-pointer sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 aspect-square md:aspect-square lg:aspect-square xl:aspect-square sm:hidden xm:hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={img6} 
                alt="Growth" 
                fill
                className="object-cover" 
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-[20px]">
                <h4 className="text-3xl font-semibold font-FoundersGrotesk text-white mb-[8px]">Growth</h4>
                <p className="text-xl font-NeueMontreal text-white/90">Achieve sustainable success through continuous personal development. Build habits and strategies that create long-term growth and fulfillment.</p>
              </div>
            </div>
          </div>

          {/* Small card 4 */}
          <div className="relative overflow-hidden rounded-[15px] group cursor-pointer sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 aspect-square md:aspect-square lg:aspect-square xl:aspect-square sm:hidden xm:hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={img7} 
                alt="Results" 
                fill
                className="object-cover" 
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-[20px]">
                <h4 className="text-3xl font-semibold font-FoundersGrotesk text-white mb-[8px]">Results</h4>
                <p className="text-xl font-NeueMontreal text-white/90">Celebrate your achievements and milestones along the way. Track your progress and recognize how far you've come on your transformative journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
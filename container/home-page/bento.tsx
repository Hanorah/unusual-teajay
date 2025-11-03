"use client";

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
          <div className="relative overflow-hidden rounded-[15px] group cursor-pointer sm:col-span-1 xm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 md:row-span-2 lg:row-span-2 xl:row-span-2 aspect-[4/3] sm:aspect-[9/7] xm:aspect-[9/7] md:aspect-auto lg:aspect-auto xl:aspect-auto">
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwY2VsZWJyYXRpbmclMjB0b2dldGhlcnxlbnwwfHx8fDE3MjEwNDMyOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Coaching Session" 
                className="w-full h-full object-cover" 
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
          <div className="relative overflow-hidden rounded-[15px] group cursor-pointer sm:col-span-1 xm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 md:row-span-2 lg:row-span-2 xl:row-span-2 aspect-[3/4] sm:aspect-[9/7] xm:aspect-[9/7] md:aspect-auto lg:aspect-auto xl:aspect-auto">
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMHByb2R1Y3R8ZW58MHwwfHx8MTcyMTA0MzI5Nnww&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Goal Setting" 
                className="w-full h-full object-cover" 
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
          <div className="relative overflow-hidden rounded-[15px] group cursor-pointer sm:col-span-1 xm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 aspect-square sm:aspect-[9/7] xm:aspect-[9/7] md:aspect-square lg:aspect-square xl:aspect-square">
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MHwwfHx8MTcyMTA0MzI0MXww&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Breakthrough" 
                className="w-full h-full object-cover" 
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
              <img 
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Support" 
                className="w-full h-full object-cover" 
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
              <img 
                src="https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHx8c2VhcmNofDJ8fHN3aW1taW5nfGVufDB8fHx8MTcyMTA0MzI5MXww&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Holistic Approach" 
                className="w-full h-full object-cover" 
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
              <img 
                src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHx8c2VhcmNofDV8fGZvb3RiYWxsfGVufDB8fHx8MTcyMTA0MzExMHww&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Growth" 
                className="w-full h-full object-cover" 
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
              <img 
                src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHx8c2VhcmNofDd8fGNyaWNrZXR8ZW58MHwwfHx8MTcyMTA0MzE1OHww&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Results" 
                className="w-full h-full object-cover" 
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
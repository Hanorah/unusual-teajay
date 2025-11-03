"use client";
import Image from "next/image";
import { useState } from "react";
import { aboutImg, tea } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section id="about" className="w-full bg-[#FFF] padding-y pb-[40px] lg:pb-[30px] md:pb-[25px] sm:pb-[20px] xm:pb-[20px] rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
					Ready to transform your life?&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal cursor-pointer">
						The journey begins with a single step.&nbsp;
					</span>
					<b className="sm:hidden xm:hidden" /> As your life coach, I'm here to guide you through every moment of growth,&nbsp;
					helping you unlock&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal cursor-pointer">
						your true potential&nbsp;
					</span>
					and create the life you've always envisioned.&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal cursor-pointer">
						Let's embark on this transformative journey together.
					</span>
				</h2>
			</div>
			<div className="w-full  my-[50px] py-[50px]">
				<div className="padding-x w-full flex justify-between items-center sm:flex-col xm:flex-col gap-[50px]">
					{/* Text Section */}
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[30px]">
						<h2 className="text-4xl font-semibold font-NeueMontreal text-secondry sm:text-3xl xm:text-2xl">
							Transform Your Life
						</h2>
						<p className="text-lg leading-7 font-NeueMontreal text-secondry sm:text-base">
							Discover your path to personal growth and fulfillment. As your life coach, I guide you through transformative journeys that unlock your true potential and help you achieve the life you've always envisioned.
						</p>
						<dl className="space-y-6 mt-4">
							<div className="relative pl-9">
								<dt className="inline font-semibold font-NeueMontreal text-secondry">
									<svg viewBox="0 0 20 20" fill="currentColor" className="absolute top-1 left-1 size-5" style={{ color: "#0D2818" }}>
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
									</svg>
									Personalized Coaching
								</dt>
								<dd className="inline ml-2 font-NeueMontreal text-secondry/80">Tailored strategies designed specifically for your unique goals and challenges.</dd>
							</div>
							<div className="relative pl-9">
								<dt className="inline font-semibold font-NeueMontreal text-secondry">
									<svg viewBox="0 0 20 20" fill="currentColor" className="absolute top-1 left-1 size-5" style={{ color: "#0D2818" }}>
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
									</svg>
									Holistic Approach
								</dt>
								<dd className="inline ml-2 font-NeueMontreal text-secondry/80">Addressing mind, body, and spirit to create lasting positive change.</dd>
							</div>
							<div className="relative pl-9">
								<dt className="inline font-semibold font-NeueMontreal text-secondry">
									<svg viewBox="0 0 20 20" fill="currentColor" className="absolute top-1 left-1 size-5" style={{ color: "#0D2818" }}>
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
									</svg>
									Sustainable Results
								</dt>
								<dd className="inline ml-2 font-NeueMontreal text-secondry/80">Build habits and mindsets that support long-term success and happiness.</dd>
							</div>
						</dl>
						<div
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
					>
						<RoundButton
							href="/About-us"
							title="learn more"
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
					</div>
					{/* Image Section */}
					<div className="w-[50%] sm:w-full xm:w-full relative h-[500px] sm:h-[400px] xm:h-[300px] rounded-[15px] overflow-hidden">
						<Image
							src={tea}
							alt="Life coaching session"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</div>

				

		
		</section>
	);
}

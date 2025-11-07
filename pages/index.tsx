"use client";
import { useEffect } from "react";
import { Curve, Marquee } from "@/components";
import { About, AboutCoach, Hero, Testimonials, Services, Process, Stats, Benefits, Contact, Workbook } from "@/container";

import { FeaturesSectionDemo } from "@/container/home-page/bento";


export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<><div className="w-full">
			<Curve backgroundColor={"#fff"}>
				<Hero />
				<div className="w-full  bg-marquee z-10 relative rounded-t-[20px] padding-y">
					<Marquee
						title="UNUSUAL TEAJAY"
						className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
					/>
				</div>
				<About />
				<AboutCoach />
				<Stats />
				<Benefits />
				<Services />
				<Process />
				
				<Testimonials />

				<FeaturesSectionDemo />
			
				<Workbook />
			
				<Contact />
			</Curve>
		</div>
		</>
	);
}

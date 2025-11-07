"use client";
import { motion } from "framer-motion";
import { Award, Users, BookOpen, MessageSquare, Building2, GraduationCap } from "lucide-react";

export default function AboutCoach() {
	const expertise = [
		{
			title: "Leadership Coaching & Facilitation",
			description:
				"Certified expert in designing and facilitating leadership curricula for corporate, public, and youth sectors. Empowers professionals and emerging leaders with enhanced emotional intelligence, strategic thinking, and executive presence.",
			icon: <Users size={28} />,
		},
		{
			title: "Strategic Communications & Public Speaking",
			description:
				"A seasoned Toastmaster and communications strategist who coaches individuals and teams to articulate vision, influence stakeholders, and communicate with clarity and impact.",
			icon: <MessageSquare size={28} />,
		},
		{
			title: "Corporate Training & Capacity Building",
			description:
				"Develops and delivers bespoke training modules on youth engagement, digital citizenship, and parental advocacy for organizational effectiveness. Proven track record with leading financial, governmental, and tech institutions.",
			icon: <Building2 size={28} />,
		},
		{
			title: "Family Systems Leadership",
			description:
				"Applies family systems engineering principles to coach parents and organizational leaders on managing complex dynamics, fostering healthy communication, and building cohesive, high-performing teams.",
			icon: <Users size={28} />,
		},
		{
			title: "Curriculum Development & Program Architecture",
			description:
				"Architect of acclaimed leadership and development programs, including the IgniteX Startup Leadership Program and the Teens on Fire Leadership Network, demonstrating a capacity to build transformative learning ecosystems from the ground up.",
			icon: <BookOpen size={28} />,
		},
	];

	const credentials = [
		"B.Sc. in Computer Science",
		"M.Sc. in Strategic Leadership",
		"Professional certifications in Public Leadership",
		"Neuro-Linguistic Programming (NLP)",
		"Family Wellness Coaching (US Certified)",
		"Certified Coach and Fellow with the Chartered Institute of Mentoring and Coaching Nigeria (CIMCN)",
		"African Emerging Leader (2015)",
		"Fellow with the International Association of World Peace Ambassadors",
	];

	const organizations = [
		"Google Digital Skills for Africa",
		"CBN",
		"NAMA",
		"UBA",
		"Access Bank",
		"Center for Values & Leadership",
	];

	return (
		<section id="about-coach" className="w-full padding-y bg-background relative z-20">
			<div className="padding-x">
				<div className="max-w-7xl mx-auto">
					{/* Header Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-[60px] sm:mb-[40px] xm:mb-[40px]"
					>
						<h2 className="sub-heading font-semibold font-FoundersGrotesk text-[#212121] mb-[20px] sm:mb-[15px] xm:mb-[12px]">
							About Coach Teajay
						</h2>
						<div className="mb-[15px]">
							<h3 className="text-3xl lg:text-2xl md:text-xl sm:text-lg xm:text-lg font-semibold font-FoundersGrotesk text-[#212121] mb-[10px]">
								Dr. Tejiri Jerry Chunu, h.c., FPMC
							</h3>
							<p className="text-xl lg:text-lg md:text-base sm:text-sm xm:text-sm font-NeueMontreal text-[#212121]/80 mb-[5px]">
								Leadership Development & Strategic Communications Expert
							</p>
							<p className="text-lg lg:text-base md:text-sm sm:text-sm xm:text-xs font-NeueMontreal text-[#212121]/70">
								Corporate Trainer | Youth & Family Systems Coach
							</p>
						</div>
					</motion.div>

					{/* Main Content Grid */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] lg:gap-[30px] mb-[60px] sm:mb-[40px] xm:mb-[40px]">
						{/* Left Column - Main Description */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="lg:col-span-2"
						>
							<div className="bg-white rounded-[20px] p-[40px] lg:p-[35px] md:p-[30px] sm:p-[25px] xm:p-[20px] border border-[#21212110] shadow-sm">
								<p className="paragraph font-NeueMontreal text-[#212121]/80 leading-relaxed mb-[25px]">
									Dr. Tejiri Jerry Chunu is a master facilitator and leadership architect with over{" "}
									<span className="font-semibold text-[#212121]">24 years of experience</span> designing
									and delivering high-impact training and coaching programs. He specializes in developing
									leadership pipelines, enhancing strategic communication, and building resilient,
									value-driven cultures within organizations, families, and youth communities.
								</p>
								<p className="paragraph font-NeueMontreal text-[#212121]/80 leading-relaxed">
									His expertise empowers institutions to cultivate tomorrow's leaders and navigate complex
									intergenerational dynamics.
								</p>
							</div>
						</motion.div>

						{/* Right Column - Key Stats */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="space-y-[20px]"
						>
							<div className="bg-[#212121]/5 rounded-[20px] p-[30px] sm:p-[25px] xm:p-[20px] border border-[#212121]/10">
								<div className="flex items-center gap-[15px] mb-[15px]">
									<div className="w-[50px] h-[50px] flex items-center justify-center bg-[#212121] rounded-[12px] text-white">
										<Award size={24} />
									</div>
									<div>
										<p className="text-3xl font-bold font-FoundersGrotesk text-[#212121]">24+</p>
										<p className="text-sm font-NeueMontreal text-[#212121]/70">Years Experience</p>
									</div>
								</div>
							</div>

							<div className="bg-[#212121]/5 rounded-[20px] p-[30px] sm:p-[25px] xm:p-[20px] border border-[#212121]/10">
								<div className="flex items-center gap-[15px] mb-[15px]">
									<div className="w-[50px] h-[50px] flex items-center justify-center bg-[#212121] rounded-[12px] text-white">
										<Users size={24} />
									</div>
									<div>
										<p className="text-3xl font-bold font-FoundersGrotesk text-[#212121]">50,000+</p>
										<p className="text-sm font-NeueMontreal text-[#212121]/70">People Trained</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Core Expertise Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-[60px] sm:mb-[40px] xm:mb-[40px]"
					>
						<h3 className="text-2xl lg:text-xl md:text-lg sm:text-lg xm:text-base font-semibold font-FoundersGrotesk text-[#212121] mb-[30px] sm:mb-[25px] xm:mb-[20px]">
							Core Expertise & Methodologies
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] sm:gap-[20px] xm:gap-[18px]">
							{expertise.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="bg-white rounded-[20px] p-[30px] sm:p-[25px] xm:p-[20px] border border-[#21212110] hover:border-[#212121]/30 hover:shadow-lg transition-all duration-300"
								>
									<div className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] xm:w-[50px] xm:h-[50px] flex items-center justify-center bg-[#212121]/5 rounded-[15px] mb-[20px] sm:mb-[15px] xm:mb-[15px] text-[#212121]">
										{item.icon}
									</div>
									<h4 className="text-xl sm:text-lg xm:text-base font-semibold font-FoundersGrotesk text-[#212121] mb-[12px] sm:mb-[10px] xm:mb-[8px]">
										{item.title}
									</h4>
									<p className="text-base sm:text-sm xm:text-sm font-NeueMontreal text-[#212121]/70 leading-relaxed">
										{item.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Professional Impact Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-[60px] sm:mb-[40px] xm:mb-[40px]"
					>
						<div className="bg-marquee rounded-[20px] p-[40px] lg:p-[35px] md:p-[30px] sm:p-[25px] xm:p-[20px]">
							<h3 className="text-2xl lg:text-xl md:text-lg sm:text-lg xm:text-base font-semibold font-FoundersGrotesk text-white mb-[20px] sm:mb-[15px] xm:mb-[12px]">
								Professional Impact & Key Engagements
							</h3>
							<p className="paragraph font-NeueMontreal text-white/90 mb-[25px] sm:mb-[20px] xm:mb-[18px]">
								As a facilitator and strategic partner, Dr. Chunu has been entrusted by premier
								organizations to train, coach, and develop their talent and stakeholders. Selected
								organizations include:
							</p>
							<div className="flex flex-wrap gap-[15px] sm:gap-[12px] xm:gap-[10px] mb-[25px] sm:mb-[20px] xm:mb-[18px]">
								{organizations.map((org, index) => (
									<span
										key={index}
										className="px-[20px] py-[10px] sm:px-[15px] sm:py-[8px] xm:px-[12px] xm:py-[6px] bg-white/10 border border-white/20 rounded-full text-sm sm:text-xs xm:text-xs font-NeueMontreal text-white"
									>
										{org}
									</span>
								))}
							</div>
							<p className="paragraph font-NeueMontreal text-white/90">
								Through his founding of The Nursing Fathers Community, The GLAD Digital Parent Tribe, and
								the Teens on Fire Leadership Network, he has directly trained and mentored a community of
								over <span className="font-semibold text-white">50,000 individuals</span>, honing a
								practical, scalable methodology for leadership development.
							</p>
						</div>
					</motion.div>

					{/* Credentials Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="bg-white rounded-[20px] p-[40px] lg:p-[35px] md:p-[30px] sm:p-[25px] xm:p-[20px] border border-[#21212110] shadow-sm">
							<div className="flex items-center gap-[15px] mb-[30px] sm:mb-[25px] xm:mb-[20px]">
								<div className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] xm:w-[50px] xm:h-[50px] flex items-center justify-center bg-[#212121]/5 rounded-[15px] text-[#212121]">
									<GraduationCap size={28} />
								</div>
								<h3 className="text-2xl lg:text-xl md:text-lg sm:text-lg xm:text-base font-semibold font-FoundersGrotesk text-[#212121]">
									Credentials & Recognition
								</h3>
							</div>
							<p className="paragraph font-NeueMontreal text-[#212121]/80 mb-[25px] sm:mb-[20px] xm:mb-[18px]">
								Dr. Chunu's authority is backed by extensive education and professional certifications:
							</p>
							<ul className="space-y-[15px] sm:space-y-[12px] xm:space-y-[10px]">
								{credentials.map((credential, index) => (
									<li key={index} className="flex items-start gap-[15px]">
										<div className="w-[6px] h-[6px] rounded-full bg-[#212121] mt-[10px] flex-shrink-0" />
										<p className="paragraph font-NeueMontreal text-[#212121]/70 flex-1">
											{credential}
										</p>
									</li>
								))}
							</ul>
							<p className="paragraph font-NeueMontreal text-[#212121]/80 mt-[25px] sm:mt-[20px] xm:mt-[18px]">
								His commitment to communicative excellence is demonstrated through his leadership in
								pioneering Toastmasters International in Benin City and his fellowship with the
								International Association of World Peace Ambassadors.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}


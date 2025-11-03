"use client";
import { motion } from "framer-motion";
import { Search, Target, Rocket, CheckCircle, ArrowRight } from "lucide-react";

interface Step {
	id: number;
	number: string;
	title: string;
	description: string;
	icon: React.ReactNode;
}

const steps: Step[] = [
	{
		id: 1,
		number: "01",
		title: "Discovery Call",
		description:
			"We start with a free 30-minute conversation to understand your goals, challenges, and what you hope to achieve. This helps us determine if we're a good fit for your journey.",
		icon: <Search size={32} />,
	},
	{
		id: 2,
		number: "02",
		title: "Assessment & Planning",
		description:
			"Together, we'll assess your current situation, identify limiting beliefs, and create a customized roadmap tailored specifically to your unique needs and aspirations.",
		icon: <Target size={32} />,
	},
	{
		id: 3,
		number: "03",
		title: "Take Action",
		description:
			"With your personalized plan in hand, we'll begin working through your goals step by step. Each session builds momentum as we address obstacles and celebrate wins.",
		icon: <Rocket size={32} />,
	},
	{
		id: 4,
		number: "04",
		title: "Achieve & Sustain",
		description:
			"As you reach your milestones, we focus on building sustainable habits and mindsets that ensure your transformation lasts. You'll have the tools to thrive independently.",
		icon: <CheckCircle size={32} />,
	},
];

export default function Process() {
	return (
		<section id="process" className="w-full padding-y bg-background relative z-20">
			<div className="padding-x">
				<div className="w-full mb-[60px] sm:mb-[40px] xm:mb-[40px]">
					<h2 className="sub-heading font-semibold font-FoundersGrotesk text-secondry mb-[20px]">
						How We Work Together
					</h2>
					<p className="paragraph font-NeueMontreal text-secondry opacity-70 max-w-[600px]">
						Your transformation journey follows a proven four-step process designed to maximize your growth and
						ensure lasting change.
					</p>
				</div>

				{/* Process Steps */}
				<div className="relative max-w-6xl mx-auto">
					{/* Connecting Line (Desktop only) */}
					<div className="hidden lg:block absolute top-[60px] left-[80px] right-[80px] h-[2px] bg-gradient-to-r from-secondry via-secondry/50 to-secondry/20" />

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-[30px]">
						{steps.map((step, index) => (
							<motion.div
								key={step.id}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.15 }}
								className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
							>
								{/* Step Number & Icon */}
								<div className="relative mb-[25px]">
									<div className="w-[120px] h-[120px] lg:w-[100px] lg:h-[100px] md:w-[90px] md:h-[90px] sm:w-[80px] sm:h-[80px] xm:w-[80px] xm:h-[80px] flex items-center justify-center bg-secondry/10 rounded-full mb-[15px] mx-auto lg:mx-0">
										<div className="text-secondry">{step.icon}</div>
									</div>
									<div className="absolute -top-[10px] -right-[10px] w-[40px] h-[40px] bg-secondry rounded-full flex items-center justify-center">
										<span className="text-background font-bold font-FoundersGrotesk text-lg">
											{step.number}
										</span>
									</div>
								</div>

								{/* Step Content */}
								<h3 className="text-2xl font-semibold font-FoundersGrotesk text-secondry mb-[15px]">
									{step.title}
								</h3>
								<p className="text-base font-NeueMontreal text-secondry/70 leading-relaxed">
									{step.description}
								</p>

								{/* Arrow (Desktop only, between steps) */}
								{index < steps.length - 1 && (
									<div className="hidden lg:block absolute top-[60px] -right-[15px] text-secondry/30">
										<ArrowRight size={24} />
									</div>
								)}
							</motion.div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-[80px] text-center"
				>
					<p className="text-xl font-medium font-NeueMontreal text-secondry mb-[25px]">
						Ready to start your transformation journey?
					</p>
					<a
						href="/contact"
						className="inline-flex items-center gap-[10px] bg-secondry text-background px-[30px] py-[15px] rounded-full font-semibold font-NeueMontreal hover:bg-secondry/90 transition-colors"
					>
						Begin with a Free Discovery Call
						<ArrowRight size={20} />
					</a>
				</motion.div>
			</div>
		</section>
	);
}


"use client";
import { motion } from "framer-motion";
import {
	Brain,
	Heart,
	Target,
	Users,
	TrendingUp,
	Shield,
	Clock,
	Zap,
	CheckCircle,
	Sparkles,
} from "lucide-react";

interface Benefit {
	id: number;
	title: string;
	description: string;
	icon: React.ReactNode;
}

const benefits: Benefit[] = [
	{
		id: 1,
		title: "Clarity & Direction",
		description: "Gain crystal-clear understanding of your goals and the path to achieve them.",
		icon: <Target size={28} />,
	},
	{
		id: 2,
		title: "Overcome Limiting Beliefs",
		description: "Break free from self-sabotaging patterns and mental barriers holding you back.",
		icon: <Brain size={28} />,
	},
	{
		id: 3,
		title: "Personalized Strategy",
		description: "Receive a customized plan tailored specifically to your unique situation and goals.",
		icon: <Sparkles size={28} />,
	},
	{
		id: 4,
		title: "Accountability Support",
		description: "Stay on track with consistent check-ins and encouragement throughout your journey.",
		icon: <Users size={28} />,
	},
	{
		id: 5,
		title: "Confidence Building",
		description: "Develop unshakeable self-confidence and belief in your abilities to succeed.",
		icon: <TrendingUp size={28} />,
	},
	{
		id: 6,
		title: "Work-Life Balance",
		description: "Learn to create harmony between your personal and professional life.",
		icon: <Shield size={28} />,
	},
	{
		id: 7,
		title: "Faster Results",
		description: "Accelerate your progress with proven frameworks and expert guidance.",
		icon: <Zap size={28} />,
	},
	{
		id: 8,
		title: "Sustainable Change",
		description: "Build habits and mindsets that ensure your transformation lasts long-term.",
		icon: <CheckCircle size={28} />,
	},
];

export default function Benefits() {
	return (
		<section id="benefits" className="w-full padding-y bg-background relative z-20">
			<div className="padding-x">
				<div className="w-full mb-[60px] sm:mb-[40px] xm:mb-[30px] text-center">
					<h2 className="sub-heading font-semibold font-FoundersGrotesk text-secondry mb-[20px] sm:mb-[15px] xm:mb-[12px]">
						Why Choose Life Coaching?
					</h2>
					<p className="paragraph font-NeueMontreal text-secondry opacity-70 max-w-[600px] mx-auto sm:text-base xm:text-sm">
						Experience the transformative benefits that have helped hundreds of clients create lasting positive
						change in their lives.
					</p>
				</div>

				<div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[30px] lg:gap-[25px] md:gap-[20px] sm:gap-[18px] xm:gap-[16px] max-w-7xl mx-auto">
					{benefits.map((benefit, index) => (
						<motion.div
							key={benefit.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-white border border-[#21212110] rounded-[20px] p-[30px] sm:p-[25px] xm:p-[20px] hover:border-secondry/50 hover:shadow-lg transition-all duration-300 group"
						>
							<div className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] xm:w-[50px] xm:h-[50px] flex items-center justify-center bg-secondry/10 rounded-[15px] mb-[20px] sm:mb-[15px] xm:mb-[15px] text-secondry group-hover:bg-secondry group-hover:text-background transition-all duration-300">
								{benefit.icon}
							</div>
							<h3 className="text-xl sm:text-lg xm:text-base font-semibold font-FoundersGrotesk text-secondry mb-[12px] sm:mb-[10px] xm:mb-[8px]">
								{benefit.title}
							</h3>
							<p className="text-base sm:text-sm xm:text-sm font-NeueMontreal text-secondry/70 leading-relaxed">
								{benefit.description}
							</p>
						</motion.div>
					))}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="mt-[60px] sm:mt-[40px] xm:mt-[30px] text-center max-w-3xl mx-auto"
				>
					<div className="bg-marquee rounded-[20px] p-[40px] sm:p-[30px] xm:p-[25px] border border-secondry/20">
						<h3 className="text-3xl sm:text-2xl xm:text-xl font-semibold font-FoundersGrotesk text-white mb-[15px] sm:mb-[12px] xm:mb-[10px]">
							Ready to Experience These Benefits?
						</h3>
						<p className="text-lg sm:text-base xm:text-sm font-NeueMontreal text-white mb-[25px] sm:mb-[20px] xm:mb-[18px]">
							Take the first step towards transformation. Book your free discovery call today.
						</p>
						<a
							href="/contact"
							className="inline-flex items-center gap-[10px] bg-white text-black px-[30px] py-[15px] sm:px-[25px] sm:py-[12px] xm:px-[20px] xm:py-[10px] rounded-full font-semibold font-NeueMontreal text-base sm:text-sm xm:text-sm hover:bg-secondry/90 transition-colors"
						>
							Start Your Journey
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}


"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Target, Heart, Users, BookOpen } from "lucide-react";

interface Service {
	id: number;
	title: string;
	description: string;
	features: string[];
	price: string;
	popular?: boolean;
	icon: React.ReactNode;
}

const services: Service[] = [
	{
		id: 1,
		title: "Starter Package",
		description: "Perfect for those beginning their transformation journey",
		features: [
			"1 session per month",
			"Email support",
			"Goal setting framework",
			"Progress tracking tools",
			"Resource library access",
		],
		price: "$199",
		icon: <Target size={32} />,
	},
	{
		id: 2,
		title: "Transformation Package",
		description: "Most popular for achieving significant life changes",
		features: [
			"4 sessions per month",
			"24/7 messaging support",
			"Customized action plans",
			"Accountability check-ins",
			"Priority scheduling",
			"Bonus resources & workshops",
		],
		price: "$699",
		popular: true,
		icon: <Sparkles size={32} />,
	},
	{
		id: 3,
		title: "Elite Package",
		description: "Comprehensive coaching for maximum transformation",
		features: [
			"8 sessions per month",
			"Direct phone access",
			"Personalized strategy sessions",
			"Daily check-ins available",
			"Exclusive masterclasses",
			"Quarterly retreat access",
			"Lifetime resource updates",
		],
		price: "$1,299",
		icon: <Heart size={32} />,
	},
];

export default function Services() {
	return (
		<section id="services" className="w-full padding-y bg-marquee relative z-20">
			<div className="padding-x">
				<div className="w-full mb-[60px] sm:mb-[40px] xm:mb-[40px] text-center">
					<h2 className="sub-heading font-semibold font-FoundersGrotesk text-white mb-[20px]">
						Choose Your Coaching Package
					</h2>
					<p className="paragraph font-NeueMontreal text-white max-w-[600px] mx-auto">
						Select the package that aligns with your goals and lifestyle. Each package is designed to support
						your unique journey.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-7xl mx-auto mb-[50px]">
					{services.map((service, index) => (
						<motion.div
							key={service.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className={`relative bg-white rounded-[20px] p-[40px] border-2 transition-all duration-300 ${
								service.popular
									? "border-secondry shadow-xl scale-105 md:scale-105 sm:scale-100 xm:scale-100"
									: "border-[#21212110] hover:border-secondry/50 hover:shadow-lg"
							}`}
						>
							{service.popular && (
								<div className="absolute -top-[15px] left-1/2 -translate-x-1/2 bg-secondry text-background px-[20px] py-[5px] rounded-full text-sm font-semibold font-NeueMontreal">
									Most Popular
								</div>
							)}

							<div className="flex flex-col h-full">
								{/* Icon */}
								<div className="w-[60px] h-[60px] flex items-center justify-center bg-secondry/10 rounded-[15px] mb-[25px] text-secondry">
									{service.icon}
								</div>

								{/* Title & Description */}
								<h3 className="text-2xl font-semibold font-FoundersGrotesk text-secondry mb-[10px]">
									{service.title}
								</h3>
								<p className="text-base font-NeueMontreal text-secondry/70 mb-[25px]">
									{service.description}
								</p>

								{/* Price */}
								<div className="mb-[30px]">
									<span className="text-4xl font-bold font-FoundersGrotesk text-secondry">
										{service.price}
									</span>
									<span className="text-base font-NeueMontreal text-secondry/70 ml-[5px]">/month</span>
								</div>

								{/* Features */}
								<ul className="flex-1 space-y-[15px] mb-[30px]">
									{service.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-start gap-[12px]">
											<Check
												size={20}
												className="text-secondry flex-shrink-0 mt-[2px]"
												strokeWidth={3}
											/>
											<span className="text-base font-NeueMontreal text-secondry/80">{feature}</span>
										</li>
									))}
								</ul>

								{/* CTA Button */}
								<a
									href={`https://wa.me/2348023401104?text=${encodeURIComponent(`Hi I would like to purchase a coaching plan - ${service.title}`)}`}
									target="_blank"
									rel="noopener noreferrer"
									className={`w-full py-[15px] px-[25px] rounded-full font-medium font-NeueMontreal text-center transition-all duration-300 flex items-center justify-center gap-[10px] ${
										service.popular
											? "bg-secondry text-background hover:bg-secondry/90"
											: "bg-transparent border-2 border-secondry text-secondry hover:bg-secondry hover:text-background"
									}`}
								>
									Get Started
									<ArrowRight size={18} />
								</a>
							</div>
						</motion.div>
					))}
				</div>

				{/* Additional Info */}
				<div className="max-w-4xl mx-auto text-center">
					<p className="text-base font-NeueMontreal text-white mb-[20px]">
						All packages include a free 30-minute discovery call to ensure we're the right fit for your journey.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-[10px] text-base font-semibold font-NeueMontreal text-white hover:text-secondry/80 transition-colors"
					>
						Book Your Free Discovery Call
						<ArrowRight size={18} />
					</Link>
				</div>
			</div>
		</section>
	);
}


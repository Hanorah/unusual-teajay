"use client";
import { Star } from "lucide-react";
import Avatar from "@/components/Avatar";

interface Testimonial {
	id: number;
	name: string;
	role: string;
	rating: number;
	text: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Sarah Johnson",
		role: "Entrepreneur",
		rating: 5,
		text: "Working with my life coach has been transformational. I've gained clarity on my goals, overcome self-doubt, and achieved more in 6 months than I did in the previous year. The personalized approach and genuine care made all the difference.",
	},
	{
		id: 2,
		name: "Michael Chen",
		role: "Executive",
		rating: 5,
		text: "The coaching sessions helped me find balance between my career and personal life. I learned to set boundaries, prioritize what matters, and create a sustainable lifestyle. Highly recommend to anyone seeking meaningful change.",
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		role: "Creative Professional",
		rating: 5,
		text: "I was stuck in a rut and couldn't see a way forward. Through coaching, I discovered my true passions and built the courage to pursue them. The accountability and support were exactly what I needed to take action.",
	},
	{
		id: 4,
		name: "David Thompson",
		role: "Business Owner",
		rating: 5,
		text: "The holistic approach to coaching transformed not just my business decisions, but my entire perspective on life. I'm more confident, focused, and aligned with my values. The investment was worth every penny.",
	},
	{
		id: 5,
		name: "Jessica Williams",
		role: "Life Transition",
		rating: 5,
		text: "During a major life transition, coaching provided the guidance and clarity I desperately needed. I navigated uncertainty with confidence and emerged stronger than ever. This coach truly understands human transformation.",
	},
];

export default function Testimonials() {
	return (
		<section className="w-full padding-y bg-marquee relative z-20">
			<div className="padding-x">
				<div className="w-full mb-[60px] sm:mb-[40px] xm:mb-[40px] text-center">
					<h2 className="sub-heading font-semibold font-FoundersGrotesk text-white mb-[20px]">
						What Clients Say
					</h2>
					<p className="paragraph font-NeueMontreal text-white/90 max-w-[600px] mx-auto">
						Real stories from real people who transformed their lives through personalized coaching.
					</p>
				</div>

				{/* Horizontal Scroll Testimonials */}
				<div className="w-full overflow-x-auto overflow-y-hidden pb-[20px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
					<div className="flex gap-[30px] lg:gap-[25px] md:gap-[20px] sm:gap-[18px] xm:gap-[16px] min-w-max px-[20px]">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.id}
								className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[20px] p-[40px] lg:p-[35px] md:p-[30px] sm:p-[25px] xm:p-[20px] hover:bg-white/20 transition-all w-[450px] lg:w-[400px] md:w-[350px] sm:w-[320px] xm:w-[300px] flex-shrink-0"
							>
								{/* Stars */}
								<div className="flex gap-[5px] mb-[20px]">
									{Array.from({ length: testimonial.rating }).map((_, i) => (
										<Star key={i} size={20} fill="#FFD700" stroke="#FFD700" />
									))}
								</div>

								{/* Testimonial Text */}
								<blockquote className="text-lg font-NeueMontreal text-white/90 mb-[25px] leading-relaxed">
									"{testimonial.text}"
								</blockquote>

								{/* Author Info */}
								<div className="flex items-center gap-[15px]">
									<div className="flex-shrink-0 border-2 border-white/30 rounded-full overflow-hidden">
										<Avatar name={testimonial.name} size={60} />
									</div>
									<div>
										<h5 className="text-lg font-semibold font-NeueMontreal text-white">{testimonial.name}</h5>
										<p className="text-sm font-NeueMontreal text-white/80">{testimonial.role}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}


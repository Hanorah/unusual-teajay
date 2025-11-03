"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Stat {
	id: number;
	number: string;
	suffix?: string;
	label: string;
}

const stats: Stat[] = [
	{
		id: 1,
		number: "500",
		suffix: "+",
		label: "Lives Transformed",
	},
	{
		id: 2,
		number: "98",
		suffix: "%",
		label: "Client Satisfaction",
	},
	{
		id: 3,
		number: "10",
		suffix: "+",
		label: "Years of Experience",
	},
	{
		id: 4,
		number: "1000",
		suffix: "+",
		label: "Coaching Hours",
	},
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });
	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		if (!isInView) return;

		const duration = 2000;
		const steps = 60;
		const increment = value / steps;
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= value) {
				setDisplayValue(value);
				clearInterval(timer);
			} else {
				setDisplayValue(Math.floor(current));
			}
		}, duration / steps);

		return () => clearInterval(timer);
	}, [isInView, value]);

	return (
		<span ref={ref}>
			{displayValue}
			{suffix}
		</span>
	);
}

export default function Stats() {
	return (
		<section className="w-full padding-y bg-marquee relative z-20">
			<div className="padding-x">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xm:grid-cols-2 gap-[60px] lg:gap-[40px] md:gap-[30px] sm:gap-[30px] xm:gap-[25px]">
						{stats.map((stat, index) => (
							<motion.div
								key={stat.id}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="flex flex-col items-center"
							>
								<div className="text-7xl lg:text-6xl md:text-5xl sm:text-4xl xm:text-3xl font-bold font-FoundersGrotesk text-white mb-[15px]">
									<Counter value={parseInt(stat.number)} suffix={stat.suffix} />
								</div>
								<p className="text-xl lg:text-lg md:text-base sm:text-base xm:text-sm font-NeueMontreal text-white/90 font-medium text-center">
									{stat.label}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}


"use client";

interface AvatarProps {
	name: string;
	size?: number;
	className?: string;
}

export default function Avatar({ name, size = 60, className = "" }: AvatarProps) {
	// Generate initials from name
	const initials = name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase()
		.slice(0, 2);

	// Generate a color based on the name (consistent for same name)
	const colors = [
		"#FF6B6B", // Red
		"#4ECDC4", // Teal
		"#45B7D1", // Blue
		"#FFA07A", // Light Salmon
		"#98D8C8", // Mint
		"#F7DC6F", // Yellow
		"#BB8FCE", // Purple
		"#85C1E2", // Sky Blue
		"#F8B88B", // Peach
		"#AED6F1", // Light Blue
	];
	
	const colorIndex = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
	const bgColor = colors[colorIndex];

	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx={size / 2} cy={size / 2} r={size / 2} fill={bgColor} />
			<text
				x="50%"
				y="50%"
				dominantBaseline="central"
				textAnchor="middle"
				fill="white"
				fontSize={size * 0.4}
				fontWeight="600"
				fontFamily="system-ui, -apple-system, sans-serif"
			>
				{initials}
			</text>
		</svg>
	);
}


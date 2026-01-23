/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter',
					'sans-serif'
				],
				mono: [
					'JetBrains Mono',
					'monospace'
				]
			},
			colors: {
				primary: {
					'50': '#eff6ff',
					'100': '#dbeafe',
					'500': '#3b82f6',
					'600': '#2563eb',
					'700': '#1d4ed8',
					'900': '#1e3a8a',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			animation: {
				'cursor-blink': 'blink 1s step-end infinite',
				scan: 'scan 4s linear infinite',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				glitch: 'glitch 1s linear infinite',
				'modal-dive': 'modalDive 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'backdrop-in': 'backdropIn 0.3s ease-out forwards',
				scanline: 'scanline 8s linear infinite'
			},
			keyframes: {
				blink: {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0'
					}
				},
				scan: {
					'0%': {
						backgroundPosition: '0% 0%'
					},
					'100%': {
						backgroundPosition: '0% 100%'
					}
				},
				fadeInUp: {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				glitch: {
					'2%, 64%': {
						transform: 'translate(2px,0) skew(0deg)'
					},
					'4%, 60%': {
						transform: 'translate(-2px,0) skew(0deg)'
					},
					'62%': {
						transform: 'translate(0,0) skew(5deg)'
					}
				},
				modalDive: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				backdropIn: {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				scanline: {
					'0%': {
						transform: 'translateY(-100%)'
					},
					'100%': {
						transform: 'translateY(100%)'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

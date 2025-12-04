/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    black: '#050505',
                    yellow: '#FEEF06',
                    pink: '#D900D6',
                    cyan: '#00F0FF',
                    dark: '#0a0a0a'
                }
            },
            fontFamily: {
                rajdhani: ['Rajdhani', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
            },
            backgroundImage: {
                'hex-pattern': "url('https://grainy-gradients.vercel.app/noise.svg')",
                'gradient-pink': 'linear-gradient(90deg, #D900D6 0%, #8c008a 100%)',
            },
            animation: {
                'glitch': 'glitch 3s infinite',
                'scanline': 'scanline 8s linear infinite',
                'spin-slow': 'spin 4s linear infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                glitch: {
                    '0%': {
                        textShadow: '2px 2px 0px #00F0FF, -2px -2px 0px #D900D6',
                        transform: 'translate(0)',
                    },
                    '2%': {
                        textShadow: '-2px 2px 0px #00F0FF, 2px -2px 0px #D900D6',
                        transform: 'translate(-1px, 1px)',
                    },
                    '4%': {
                        textShadow: '2px -2px 0px #00F0FF, -2px 2px 0px #D900D6',
                        transform: 'translate(1px, -1px)',
                    },
                    '6%, 100%': {
                        textShadow: '0 0 0 transparent',
                        transform: 'translate(0)',
                    },
                },
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}

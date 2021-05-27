module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif']
		},
		extend: {
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				}
			},
			animation: {
				'fade-in': 'fade-in 1s ease-out'
			}
		}
	},
	plugins: []
};

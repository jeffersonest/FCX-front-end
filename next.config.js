/** @type {import('next').NextConfig} */
require('dotenv').config()

const API_URL = process.env.API_URL

/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: `${API_URL}/:path*`,
			},
		]
	},
}

module.exports = nextConfig

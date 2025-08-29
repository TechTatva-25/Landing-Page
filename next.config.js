/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		turbo: {
			resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
		},
	},
	reactStrictMode: true,
	images: {
		domains: [],
		remotePatterns: [],
	},
	// output: process.env.BUILD_STANDALONE ? "standalone" : undefined, // Commented out for Vercel compatibility
	// distDir: "dist", // Commented out for Vercel compatibility
}

module.exports = nextConfig

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
	output: process.env.BUILD_STANDALONE ? "standalone" : undefined,
	distDir: "dist",
}

module.exports = nextConfig

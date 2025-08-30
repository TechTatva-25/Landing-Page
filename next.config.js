/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		turbo: {
			resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
		},
		scrollRestoration: true,
	},
	reactStrictMode: true,
	compiler: {
		// Remove console logs in production
		removeConsole: process.env.NODE_ENV === "production",
	},
	images: {
		domains: [],
		remotePatterns: [],
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 60,
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	// Performance optimizations
	poweredByHeader: false,
	compress: true,
	// output: process.env.BUILD_STANDALONE ? "standalone" : undefined, // Commented out for Vercel compatibility
	// distDir: "dist", // Commented out for Vercel compatibility
}

module.exports = nextConfig

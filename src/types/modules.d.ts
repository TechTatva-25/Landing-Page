interface IpInfo {
	ip: string
	city: string
	region: string
	country: string
	loc: string
	org: string
	postal: string
	timezone: string
	bogon: boolean
}

declare module "ipinfo" {
	async function ipInfo(ip: string): IpInfo

	export = ipInfo
}

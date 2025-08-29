"use client"

import { useRouter } from "next/navigation"
import { FC } from "react"

import { Button } from "@/components/ui/button"
import styles from "@/styles/footer.module.css"

const Footer: FC = (): JSX.Element => {
	const router = useRouter()

	return (
		<footer className={styles.footerSection}>
			<div className={styles.footerContainer}>
				<div className={styles.footerGrid}>
					<div>
						<h3>Address</h3>
						<div className={styles.addressContent}>
							<p>Manipal Institute of Technology</p>
							<p>Manipal Academy of Higher Education (MAHE)</p>
							<p>Manipal, Karnataka 576104</p>
						</div>
					</div>
					<div>
						<h3>Connect With Us</h3>
						<div className={styles.socialLinks}>
							<a href="#" className={styles.socialLink}>
								Instagram
							</a>
							<a href="#" className={styles.socialLink}>
								Twitter
							</a>
							<a href="#" className={styles.socialLink}>
								LinkedIn
							</a>
							<a href="#" className={styles.socialLink}>
								YouTube
							</a>
						</div>
					</div>
					<div>
						<h3>Team</h3>
						<Button onClick={() => router.push("/team")} className={styles.teamButton}>
							Meet the Team
						</Button>
					</div>
				</div>
				<div className={styles.footerBottom}>
					© {new Date().getFullYear()} <span>TechTatva</span>. All rights reserved.
				</div>
			</div>
		</footer>
	)
}

export default Footer

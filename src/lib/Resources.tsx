"use client"
import { FC } from "react"
import stylesHeading from "@/styles/passes.module.css"
import rStyles from "@/styles/resources.module.css"
import DownloadButton from "@/lib/DownloadButton"
import { useInView } from "./useInView"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface DownloadItem {
  label: string
  type: "download" | "route"
  fileUrl?: string
  fileName?: string
  route?: string
  text: string
  description?: string
  tag?: string
}

const Resources: FC = () => {
  const router = useRouter()
  const { ref, isInView } = useInView()

  const items: DownloadItem[] = [
    {
      label: "Cultural Rulebook",
      type: "download",
      fileUrl: "/rulebooks/revels_2025_cultural_rulebook.pdf",
      fileName: "revels_2025_cultural_rulebook.pdf",
      text: "Download",
      description: "Official cultural event guidelines & regulations.",
      tag: "PDF"
    },
    {
      label: "Sports Rulebook",
      type: "download",
      fileUrl: "/rulebooks/revels_2025_sports_rulebook.pdf",
      fileName: "revels_2025_sports_rulebook.pdf",
      text: "Download",
      description: "Complete sports fixtures, rules & formats.",
      tag: "PDF"
    },
    {
      label: "Team Directory",
      type: "route",
      route: "/team",
      text: "View",
      description: "Browse core coordinators & domain leads.",
      tag: "LINK"
    }
  ]

  return (
    <section id="resources" ref={ref} className="px-4 py-8 pb-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-12 flex items-center justify-center">
          <h2 className={`${stylesHeading.passesHeading} heading-font ${isInView ? "in-view" : ""}`}>Resources</h2>
        </div>
        <div className={rStyles.resourcesGrid}>
          {items.map((it, i) => (
            <div key={i} className={rStyles.resourceCard}>
              <div className={rStyles.resourceTop}>
                <h3 className={`${rStyles.resourceTitle} heading-font`}>{it.label}</h3>
                {/* Tag removed as per request */}
              </div>
              {it.description && (
                <p className={`${rStyles.resourceBody} body-font`}>{it.description}</p>
              )}
              <div className={rStyles.resourceActions}>
                {it.type === "download" && it.fileUrl && it.fileName && (
                  <DownloadButton variant="subtle" fileUrl={it.fileUrl} fileName={it.fileName} text={it.text} className={rStyles.resourceBtn} />
                )}
                {it.type === "route" && it.route && (
                  <Button className={`${rStyles.resourceBtn}`} onClick={() => router.push(it.route!)}>{it.text}</Button>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* optional note removed; lead paragraph covers it */}
      </div>
    </section>
  )
}

export default Resources

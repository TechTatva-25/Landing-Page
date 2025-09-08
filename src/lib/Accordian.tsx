import { ChevronDown } from "lucide-react"
import * as RadixAccordion from "@radix-ui/react-accordion"
import React from "react"
import styles from "@/styles/faq.module.css"

interface AccordionProps {
    title?: string
    content?: string
}

const Accordion = ({
    title = "placeholder title",
    content = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}: AccordionProps): React.JSX.Element => {
    return (
        <RadixAccordion.Root type="single" collapsible className={styles.royalFaqItem}>
            <RadixAccordion.Item value="item-1">
                <RadixAccordion.Header asChild>
                    <RadixAccordion.Trigger className={styles.royalFaqHeader + " " + styles.royalFaqTrigger}>
                        <span>{title}</span>
                        <ChevronDown className={styles.royalFaqIcon} />
                    </RadixAccordion.Trigger>
                </RadixAccordion.Header>
                <RadixAccordion.Content className={styles.royalFaqContent}>
                    <div className={styles.royalFaqContentInner}>
                        <p 
                            className={styles.royalFaqAnswer} 
                            style={{ whiteSpace: 'pre-line' }}
                        >
                            {content}
                        </p>
                    </div>
                </RadixAccordion.Content>
            </RadixAccordion.Item>
        </RadixAccordion.Root>
    )
}

export default Accordion

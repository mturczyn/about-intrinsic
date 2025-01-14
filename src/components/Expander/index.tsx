import {
    ForwardedRef,
    forwardRef,
    PropsWithChildren,
    useEffect,
    useRef,
    useState,
} from 'react'
import './Expander.css'

type ExpanderProps = PropsWithChildren & {
    expandedText: string
    collapsedText: string
}

export const Expander = forwardRef(
    (
        { expandedText, collapsedText, children }: ExpanderProps,
        forwardedRef: ForwardedRef<HTMLDivElement>
    ) => {
        const [expanded, setExpanded] = useState(false)
        const expanderRef = useRef<HTMLDivElement>(null)
        const text = expanded ? expandedText : collapsedText

        useEffect(() => {
            if (!expanderRef.current) return

            expanderRef.current.style.height = expanded
                ? expanderRef.current.scrollHeight + 'px'
                : '0'
        }, [expanded])

        return (
            <div ref={forwardedRef}>
                <button onClick={() => setExpanded((x) => !x)}>{text}</button>
                <div ref={expanderRef} className="expander">
                    {children}
                </div>
            </div>
        )
    }
)

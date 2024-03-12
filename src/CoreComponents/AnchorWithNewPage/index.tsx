export const AnchorWithNewPage = ({
    description,
    url,
}: {
    description: string
    url: string
}) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={url}>
            {description}
        </a>
    )
}

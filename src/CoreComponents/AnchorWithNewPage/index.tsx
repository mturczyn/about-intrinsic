export const AnchorWithNewPage = ({
    description,
    url,
}: {
    description: string
    url: string
}) => {
    return (
        <a target="_blank" rel="noreferrer" href={url}>
            {description}
        </a>
    )
}

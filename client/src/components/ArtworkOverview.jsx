export default function Explore({ artworks }) {
    return (
        <div className="artwork-overview">
            {artworks.map((artwork) => {
                return (
                    <div
                        key={artwork.id}
                        className="artwork-overview__artwork-wrapper">
                        <a
                            className="artwork-overview__artwork-link"
                            href={`/artwork/${artwork.id} `} />
                        <iframe
                            className="artwork-overview__artwork"
                            src={`/img/${artwork.id} `}
                            width={1000}
                            height={700} />
                    </div>
                );
            })}
        </div>
    );
}
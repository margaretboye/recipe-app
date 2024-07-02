export default function CategoryCards ({image, name}) {
    return (
        <div className="flex gap-y-2 justify-between">
            <p>{name}</p>
            <img src= {image} alt={name} />
        </div>
    );
}
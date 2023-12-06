export default function imageCreate(image) {
    return(
        <img src = {image.src} alt = {image.alt} style={image.style}></img>
    )
}
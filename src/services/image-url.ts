import noImage from "../assets/no-image-placeholder.webp"
const getCroppedImageUrl = (url: string) =>{
    if(!url) return noImage
    //mosh says if you place '/crop/600/400' between themedia and rest of tghe url it will reduce to your preferred size in this case 600 and 400
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl
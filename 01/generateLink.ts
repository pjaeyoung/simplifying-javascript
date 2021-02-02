export default function generateLink(image:string,width:string):string{
    return `https://provider.com/${image}?width=${parseInt(width,10)}`;
}
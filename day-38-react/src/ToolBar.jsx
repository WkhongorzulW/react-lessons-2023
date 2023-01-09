import AlertButton from "./AlertFunc";

export default function Toolbar(){
    return(
        <div>
            <AlertButton message="Playing!">Play Movie</AlertButton>
            <AlertButton message="Uploading!">Upload image</AlertButton>
        </div>
    )
}
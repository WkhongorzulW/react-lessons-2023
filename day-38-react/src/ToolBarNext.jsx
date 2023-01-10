import PlayButton from "./PlayButton";
import UploadButton from "./UploadButton";

export default function ToolBarNext(){
    return(
        <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    )
}
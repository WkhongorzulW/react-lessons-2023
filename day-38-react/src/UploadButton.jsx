import ChildButton from "./ChildButton";

export default function UploadButton(){
    return(
        <ChildButton onClick={() => alert("Uploading!")}>
            Upload image
        </ChildButton>
    )
}
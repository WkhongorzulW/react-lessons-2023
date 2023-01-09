export default function ParentToolBar() {
    return (
        <div className="ToolBar" onClick={() => {
            alert("You clicked on the toolbar");
        }}>
            <button onClick={(e) => {e.stopPropagation(); alert("Playing!")}}>Play Movie</button>
            <button onClick={() => alert("Uploading!")}>Upload Image</button>
        </div >
    )
}
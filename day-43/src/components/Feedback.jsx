import { useState } from "react";
function FeedBackForm() {
    const [text, setText] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSending(true);
        await sendMessage(text);
        setIsSending(false);
        setIsSent(true);
    };

    function sendMessage(text) {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        })
    };

    return (
        isSent ? (<h2>Thanks for feedback</h2>) :
            (<div className="App">
                
                <form onSubmit={handleSubmit}>
                    <h2>Та текстээ оруулна уу?</h2>
                    <textarea value={text} disabled={isSending} onChange={e => setText(e.target.value)}></textarea>
                    <br />
                    <button>Send</button>
                    {isSending && <p>Sending...</p>}
                </form>
            </div>)
    )
}

export default FeedBackForm;
import { useState } from "react";

const Profile = () => {
    const [temporaryPath, setTemporaryPath] = useState<string|undefined>(undefined);
    const [realPath, setRealPath] = useState<string|undefined>(undefined);

    const uploadImage = () => {
        
    }

    return (
    <>
        <div>Add image</div>
        <form action="">
            <input type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTemporaryPath(e.target.value);
            }}/>
            <br />
            <button type="submit" onClick={uploadImage}>Submit</button>
        </form>
    </>
    )
}

export default Profile;
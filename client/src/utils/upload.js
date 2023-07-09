import axios from "axios";

const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "giga_site");

    try {
        const res = await axios.post(import.meta.env.VITE_CLOUDINARY_UPLOAD_LINK, data);
        const { url } = res.data;
        return url;
    } catch (err) {
        console.log(err);
    }
};

export default upload;

import React, { useReducer, useState } from "react";
import "./Add.scss";
import { INITIAL_STATE, gigReducer } from "../../reducers/gigReducer";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [singleFile, setSingleFile] = useState(undefined);
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);

    const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

    const handleChange = (e) => {
        dispatch({ type: "CHANGE_INPUT", payload: { name: e.target.name, value: e.target.value } });
    };

    const handleFeature = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_FEATURE", payload: e.target[0].value });
        e.target[0].value = "";
    };

    const handleUpload = async () => {
        setUploading(true);

        try {
            const cover = await upload(singleFile);

            const images = await Promise.all(
                [...files].map(async (file) => {
                    const url = await upload(file);
                    return url;
                })
            );
            setUploading(false);
            dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
        } catch (err) {
            console.log(err);
        }
    };

    const navigate = useNavigate()

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (gig) => {
            return newRequest.post("/gigs", gig)
        },
        onSuccess:() => {
            queryClient.invalidateQueries(["myGigs"])
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        mutation.mutate(state)

        navigate("/my-gigs")
    }

    return (
        <div className="add">
            <div className="container">
                <div className="sections">
                    <div className="info">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            placeholder="e.g. I will do this for money!"
                            onChange={handleChange}
                        />
                        <label htmlFor="title">Category</label>
                        <select id="category" name="category" onChange={handleChange}>
                            <option value="design">Design</option>
                            <option value="development">Development</option>
                            <option value="art">Art</option>
                            <option value="writing">Writing</option>
                        </select>
                        {/* Images */}
                        <div className="images">
                            <div className="imagesInputs">
                                <label htmlFor="">Cover Image</label>
                                <input type="file" onChange={(e) => setSingleFile(e.target.files[0])} />
                                <label htmlFor="">Upload Images</label>
                                <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
                            </div>
                            <button onClick={handleUpload}>{uploading ? "Uploading" : "Upload"}</button>
                        </div>
                        <label htmlFor="desc">Description</label>
                        <textarea
                            name="desc"
                            id="desc"
                            cols="30"
                            rows="10"
                            placeholder="brief description for your customers"
                            onChange={handleChange}></textarea>
                        <button onClick={handleSubmit}>Create</button>
                    </div>
                    <div className="details">
                        <label htmlFor="">Short Title</label>
                        <input
                            id="shortTitle"
                            name="shortTitle"
                            type="text"
                            placeholder="e.g. One pixel art character"
                        />
                        <label htmlFor="shortDesc">Short Description</label>
                        <textarea
                            id="shortDesc"
                            name="shortDesc"
                            cols="30"
                            rows="10"
                            placeholder="short description of your service"></textarea>
                        <label htmlFor="">Delivery Time</label>
                        <input type="number" name="deliveryTime" min={1} onChange={handleChange} />
                        <label htmlFor="">Revision Amount</label>
                        <input type="number" name="revisionNumber" min={0} onChange={handleChange} />
                        <label htmlFor="">Add Features</label>
                        <form action="" onSubmit={handleFeature} className="add">
                            <input type="text" placeholder="e.g. Add background" />
                            <button type="submit">Add</button>
                        </form>
                        <div className="addedFeatures">
                            {state?.features?.map((feature) => (
                                <div className="item" key={feature}>
                                    <button onClick={() => dispatch({ type: "REMOVE_FEATURE", payload: feature })}>
                                        {feature}
                                        <span>X</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" min={1} onChange={handleChange} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;

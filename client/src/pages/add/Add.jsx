import React from "react";
import "./Add.scss";

const Add = () => {
    return (
        <div className="add">
            <div className="container">
                <div className="sections">
                    <div className="info">
                        <label htmlFor="title">Title</label>
                        <input
                            id=""
                            type="text"
                            name=""
                            placeholder="e.g. I will do this for money!"
                        />
                        <label htmlFor="title">Category</label>
                        <select id="categories" name="categories">
                            <option value="design">Design</option>
                            <option value="development">Development</option>
                            <option value="art">Art</option>
                            <option value="writing">Writing</option>
                        </select>
                        <label htmlFor="">Cover Image</label>
                        <input type="file" />
                        <label htmlFor="">Upload Images</label>
                        <input type="file" multiple />
                        <label htmlFor="">Description</label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="brief description for your customers"
                        ></textarea>
                        <button>Create</button>
                    </div>
                    <div className="details">
                        <label htmlFor="">Service Title</label>
                        <input
                            type="text"
                            placeholder="e.g. One pixel art character"
                        />
                        <label htmlFor="">Short Description</label>
                        <textarea
                            id=""
                            name=""
                            cols="30"
                            rows="10"
                            placeholder="short description of your service"
                        ></textarea>
                        <label htmlFor="">Delivery Time</label>
                        <input type="number" min={1} />
                        <label htmlFor="">Revision Amount</label>
                        <input type="number" min={0} />
                        <label htmlFor="">Add Features</label>
                        <input type="text" placeholder="e.g. Add background" />
                        <input
                            type="text"
                            placeholder="e.g. Give Source File"
                        />
                        <input type="text" placeholder="e.g. Add More Colors" />
                        <input
                            type="text"
                            placeholder="e.g. Give it sugar and spice"
                        />
                        <label htmlFor="">Price</label>
                        <input type="number" min={1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;

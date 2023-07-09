import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import "./Message.scss";

const Message = () => {
    const { id } = useParams();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery({
        queryKey: ["messages"],
        queryFn: () =>
            newRequest.get(`/messages/${id}`).then((res) => {
                return res.data;
            }),
    });

    const mutation = useMutation({
        mutationFn: (message) => {
            return newRequest.post(`/messages`, message)
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["messages"])
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        mutation.mutate({
            conversationId: id,
            desc: e.target[0].value,
        })
        e.target[0].value = ''
    }

    return (
        <div className="message">
            <div className="container">
                <span className="breadcrumbs">
                    <Link to="/messages">MESSAGES | THOMAS VU</Link>
                </span>
                {isLoading ? (
                    "loading..."
                ) : error ? (
                    "error..."
                ) : (
                    <div className="messages">
                        {data.map((message) => (
                            <div className={message.userId === currentUser._id ? "owner item" : "item"} key={message._id}>
                                <img src="https://i.pinimg.com/736x/31/ce/28/31ce281a1034c1c323bdc78387c5e659.jpg" alt="user image" />
                                <p>{message.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
                <hr />
                <form className="write" onSubmit={handleSubmit}>
                    <textarea name="" placeholder="write a message" rows="30" cols="30"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Message;

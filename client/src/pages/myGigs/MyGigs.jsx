import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const MyGigs = () => {
    const currentUser = getCurrentUser();

    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery({
        queryKey: ["myGigs"],
        queryFn: () =>
            newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
                return res.data;
            }),
    });

    const mutation = useMutation({
        mutationFn: (id) => {
            return newRequest.delete(`/gigs/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["myGigs"]);
        },
    });

    const handleDelete = (id) => {
        mutation.mutate(id);
    };

    return (
        <div className="myGigs">
            {isLoading ? (
                "loading"
            ) : error ? (
                "err"
            ) : (
                <div className="container">
                    <div className="title">
                        <h1>My Gigs</h1>
                        {currentUser.isSeller && (
                            <Link to="/add">
                                <button>Add New Gig</button>
                            </Link>
                        )}
                    </div>
                    <table>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Sales</th>
                            <th>Action</th>
                        </tr>
                        {data.map((gig) => (
                            <tr key={gig._id}>
                                <td>
                                    <img src={gig.cover} alt="" className="img" />
                                </td>
                                <td>{gig.title}</td>
                                <td>{gig.price}</td>
                                <td>{gig.sales}</td>
                                <td>
                                    <Icon
                                        icon="game-icons:trash-can"
                                        className="delete"
                                        onClick={() => handleDelete(gig._id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyGigs;

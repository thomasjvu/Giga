import User from "../models/userModel.js";
import createError from "../utils/createError.js";

// ROUTE    /users/:id
// DESC.    @DELETE (DELETE) User from Users Collection
export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (req.userId !== user._id.toString()) {
        return next(createError(403, "You can only delete your account!"));
    }

    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send("User deleted!");
};

// ROUTE    /users/:id
// DESC.    @GET (READ) Single User from Users Collection
export const getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) return next(createError(404, "User not found!"));

    return res.status(200).send(user);
};

// ROUTE    /users/
// DESC.    @GET (READ) All Users from Users Collection
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        if (!users) return next(createError(404, "No users not found!"));
        return res.status(200).send(users);
    } catch (err) {
        next(err);
    }
};

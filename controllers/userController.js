const { User } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try {   
            const users = await User.find();

            res.status(200).json(users);
        } catch(err) {
            return res.status(500).json(err);
        }
    },
    async getUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId });

            res.status(200).json(user);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    async createUser(req, res) {
    try {
        const user = await User.create(req.body);
        
        res.status(200).json(user);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body},
                { runValidators: true, new: true}
            );

            if (!user) {
                return res.status(404).json({ message: "Invalid user"});
            };
            
            res.json(user);
        } catch (err) {
           return res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete(
                { _id: req.params.userId },
            );
            
            if (!user) {
                return res.status(404).json({message: "Invalid user"});
            };

            res.json(user);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            const friend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId }},
                { runValidators: true, new: true},
            );

            if (!friend) {
                return res.status(404).json({ message: "Invalid user id"});
            };

            res.status(200).json(friend);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    async deleteFriend(req, res) {
        try {
            const friend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId}},
            )
            
            if (!friend) {
                return res.status(404).json({ message: "Invalid user id"});
            }

            res.status(200).json(friend);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}
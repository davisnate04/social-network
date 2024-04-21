const router = require('express').Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId  Add
router.route('/:userId/friends/:friendId')
    .post(addFriend);

// /api/users/:userId/friends/:friendId Delete
router.route('/:userId/friends/:friendId')
    .delete(deleteFriend);

module.exports = router;
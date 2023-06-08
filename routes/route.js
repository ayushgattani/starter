// in this file we are making routes of request coming from frontend.here we are not making directly making what to do
// but that exactly what to do that functions we are making in controller files here we are calling them for request 
// comming from frontend. basically here we are dealing with different request coming from frontend and making their 
// routes and calling thier function from controllerr file.
import express from 'express';
import { signupUser, loginUser, logoutUser } from '../controller/user-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';
import { createPost, getAllPosts, getPost, updatePost, deletePost } from '../controller/post-controller.js';
import { authenticateToken, createNewToken } from '../controller/jwt-controller.js';
import { newComment, getComments, deleteComment } from '../controller/comment-controller.js';

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);
router.post('/create', authenticateToken, createPost);
router.get('/posts', authenticateToken, getAllPosts);
router.get('/post/:id', authenticateToken, getPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);
router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id', authenticateToken, getComments);
router.delete('/comment/delete/:id', authenticateToken, deleteComment);

export default router;
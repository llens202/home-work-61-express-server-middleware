import express from 'express';
import { checkArticleAccess } from '../middlewares/checkArticleAccess.js';
import {
  getArticles,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
} from '../controllers/articlesController.js';

const router = express.Router();

router.get('/', checkArticleAccess, getArticles);
router.post('/', checkArticleAccess, createArticle);

router.get('/:articleId', checkArticleAccess, getArticleById);
router.put('/:articleId', checkArticleAccess, updateArticle);
router.delete('/:articleId', checkArticleAccess, deleteArticle);

export default router;
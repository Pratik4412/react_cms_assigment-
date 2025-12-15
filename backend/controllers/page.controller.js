import slugify from "slugify";
import Page from "../models/Page.js";

export const createPageController = async (req, res) => {
  const { title, content } = req.body;

  const page = await Page.create({
    title,
    slug: slugify(title, { lower: true }),
    content,
  });

  res.status(201).json(page);
};

export const getPagesController = async (req, res) => {
  const pages = await Page.find().sort({ createdAt: -1 });
  res.json(pages);
};

export const getPageBySlugController = async (req, res) => {
  const page = await Page.findOne({
    slug: req.params.slug,
    // status: "published",
  });

  if (!page) return res.status(404).json({ message: "Page not found" });
  res.json(page);
};

export const updatePageController = async (req, res) => {
  const page = await Page.findById(req.params.id);
  if (!page) return res.status(404).json({ message: "Page not found" });

  page.title = req.body.title || page.title;
  page.content = req.body.content || page.content;
  page.status = req.body.status || page.status;

  if (req.body.title) {
    page.slug = slugify(req.body.title, { lower: true });
  }

  await page.save();
  res.json(page);
};

export const deletePageController = async (req, res) => {
  await Page.findByIdAndDelete(req.params.id);
  res.json({ message: "Page deleted" });
};

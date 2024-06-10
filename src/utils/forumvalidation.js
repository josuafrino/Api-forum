// forumValidation.js

import * as yup from "yup";

export const forumValidationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  tags: yup.string().required("Tags are required"),
});

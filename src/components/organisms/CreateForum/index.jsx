import React, { useState } from "react";
import InputForm from "../../molecules/InputForm/index.jsx";
import { getForum } from "../../../api/forumApi.js";
import Button from "../../atoms/Button/index.jsx";
import { forumValidationSchema } from "../../../utils/forumvalidation.js";
import * as yup from "yup";
import HtmlEditor from "../../../pages/CreateForumPages.jsx";

export default function CreateForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await forumValidationSchema.validate(formValues, {
        abortEarly: false,
      });
      const data = await getForum(
        formValues.title,
        formValues.content,
        formValues.tags.split(",").map((tag) => tag.trim()) // Assuming tags are entered as comma-separated values
      );
      console.log(data);
      window.location.href = "/forum";
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errorMessages = {};
        error.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        setErrors(errorMessages);
      } else {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputForm htmlFor={"name"} id={"name"} name={"name"} label={"name"} type={"text"} placeholder={"Forum post title"} value={formValues.title} onChange={handleChange} error={errors.title} />
        <InputForm htmlFor={"description"} id={"description"} name={"description"} label={"description"} placeholder={"Write your post here..."} value={formValues.content} onChange={handleChange} error={errors.content} />
        <Button variant={"primary"} type={"submit"} children={"Create Post"} className="mt-1 w-100 rounded-3" />
        <HtmlEditor />
      </form>
    </>
  );
}

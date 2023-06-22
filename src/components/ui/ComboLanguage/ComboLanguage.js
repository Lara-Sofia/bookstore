import React, { useContext } from "react";
import { TranslationContext } from "../../services/translation/translation.context";
import useTranslation from "../../custom/useTranslation/useTranslation";
import { Form } from "react-bootstrap";

const ComboLanguage = () => {
  const { language, changeLanguage } = useContext(TranslationContext);

  const translate = useTranslation();

  const changeLanguageHandler = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <Form.Select
      onChange={changeLanguageHandler}
      value={language}
      aria-label="Select Language"
      className="w-50 mb-4"
    >
      <option value="es">{translate("spanish_lang")}</option>
      <option value="en">{translate("english_lang")}</option>
    </Form.Select>
  );
};

export default ComboLanguage;

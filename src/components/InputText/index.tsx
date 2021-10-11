import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Mask } from "../../model/enums/mask-types";
import { MaskProps } from "../../model/mask";
import StringUtils from "../../shared/util/string-utils";
import { Input, InputContainer, InputLabel, InputWrapper } from "./styles";
import { GoMail } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { InputTypes } from "../../model/enums/input-types";
import { InputTypeProps } from "../../model/input";

interface InputTextProps {
  name?: string;
  label?: string;
  placeholder: string;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mask?: MaskProps;
  defaultValue?: string;
  type?: InputTypeProps;
  autofocus?: boolean;
}

const inputTypeOptions = {
  [InputTypes.USER]: <FaRegUserCircle />,
  [InputTypes.EMAIL]: <GoMail />,
  [InputTypes.PASSWORD]: <AiOutlineLock />,
  [InputTypes.DEFAULT]: <></>,
  [InputTypes.TEXT]: <></>,
  [InputTypes.SEARCH]: <FiSearch />,
  [InputTypes.FILE]: <></>,
  [InputTypes.NUMBER]: <></>,
  [InputTypes.CHECKBOX]: <></>,
};

const InputText = ({
  name = "input",
  placeholder,
  handleOnChange,
  mask = Mask.DEFAULT,
  defaultValue,
  label,
  type = InputTypes.DEFAULT,
  autofocus = false,
}: InputTextProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const {
    register,
    getValues,
    formState: { errors, dirtyFields },
    setValue,
  } = useFormContext();

  const handleGetValue = () => {
    const values = getValues();
    return Boolean(values[name]);
  };

  const hasDefaultValue = () => {
    if ((defaultValue || handleGetValue()) && !dirtyFields[name]) {
      return true;
    }
    return dirtyFields[name];
  };

  const validationProps = {
    hasError: !!errors[name] && !isFocused,
    hasValue: handleGetValue() ?? hasDefaultValue(),
    isFocused,
    isValid: !errors[name] && !isFocused && handleGetValue(),
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleRegister = register(name);

  const handleSetMask = (value: string | number) => {
    const text = value.toString();
    const MaskFormats = {
      [Mask.CURRENCY]: StringUtils.currencyMask(text),
      [Mask.PHONE]: StringUtils.phoneMask(text),
      [Mask.CNPJ]: StringUtils.cnpjMask(text),
      [Mask.CPF]: StringUtils.cpfMask(text),
      [Mask.DEFAULT]: text,
    };

    setValue(name, MaskFormats[mask]);
  };

  const choiceType = (type: string) => {
    if (type === InputTypes.PASSWORD) {
      return InputTypes.PASSWORD;
    }
    if (type === InputTypes.NUMBER) {
      return InputTypes.NUMBER;
    }

    return InputTypes.TEXT;
  };

  useEffect(() => {
    if (defaultValue) {
      handleSetMask(defaultValue);
    }
    return;
    // eslint-disable-next-line
  }, []);

  return (
    <InputContainer {...validationProps}>
      {type !== InputTypes.SEARCH ? (
        <>
          <InputLabel {...validationProps}>
            {label}
            {validationProps.hasError && `${errors[name].message}`}
          </InputLabel>
          <InputWrapper {...validationProps}>
            {inputTypeOptions[type]}
            <Input
              {...register(name)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(evt) => {
                handleRegister.onChange(evt);
                if (handleOnChange) {
                  handleOnChange(evt);
                }
              }}
              placeholder={placeholder}
              type={choiceType(type)}
              autoFocus={autofocus}
            />
          </InputWrapper>
        </>
      ) : (
        <InputWrapper {...validationProps} style={{ maxWidth: "270px" }}>
          <Input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(evt) => {
              if (handleOnChange) {
                handleOnChange(evt);
              }
            }}
            placeholder={placeholder}
          />
          {inputTypeOptions[type]}
        </InputWrapper>
      )}
    </InputContainer>
  );
};

export default InputText;

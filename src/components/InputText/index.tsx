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
import { Color } from "../../model/enums/theme-colors";

interface InputTextProps {
  name?: string;
  label?: string;
  placeholder: string;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mask?: MaskProps;
  defaultValue?: string;
  type?: InputTypeProps;
  autofocus?: boolean;
  disabled?: boolean;
  maxWidth?: string;
}

const inputTypeOptions = {
  [InputTypes.USER]: <FaRegUserCircle color={Color.TEXT_MAIN} />,
  [InputTypes.EMAIL]: <GoMail color={Color.TEXT_MAIN} />,
  [InputTypes.PASSWORD]: <AiOutlineLock color={Color.TEXT_MAIN} />,
  [InputTypes.DEFAULT]: <></>,
  [InputTypes.TEXT]: <></>,
  [InputTypes.SEARCH]: <FiSearch color={Color.TEXT_MAIN} />,
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
  maxWidth,
  type = InputTypes.DEFAULT,
  autofocus = false,
  disabled = false,
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
          <InputWrapper {...validationProps} maxWidth={maxWidth}>
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
              disabled={disabled}
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

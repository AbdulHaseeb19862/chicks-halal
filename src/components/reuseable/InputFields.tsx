import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { Field, FieldError, FieldLabel } from "../ui/field";

type TTextInputProps = {
  name: string;
  title: string;
  control: any;
  placeholder: string;
  type?: string;
  className?: string;
};

const InputFields = (props: TTextInputProps) => {
  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Controller
          name={props.name}
          control={props.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>{props.title}</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type={props.type}
                aria-invalid={fieldState.invalid}
                placeholder={props.placeholder}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
    </>
  );
};

export default InputFields;

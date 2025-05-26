"use client";
import { PropsWithChildren } from "react";
import { useFormState } from "react-dom";

type HTMLFormProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

type FormProps = PropsWithChildren<
  Omit<HTMLFormProps, "action"> & {
    action: (prevState: any, formData: FormData) => Promise<any>;
  }
>;

export default function Form(props: FormProps) {
  const [_, formAction] = useFormState(props.action, { error: null });
  return <form {...props} action={formAction} />;
}

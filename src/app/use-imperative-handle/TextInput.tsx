"use client"
import { forwardRef, Ref, useImperativeHandle, useRef } from "react";

export interface TextInputRef {
    reset: () => void;
}

interface TextInputProps {
    className?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}

function TextInput(props: TextInputProps, ref: Ref<TextInputRef>) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        reset: () => {
            if (!localRef.current) return;

            localRef.current.value = "";
            localRef.current?.focus();
        },
    }));

    return <input type="text" ref={localRef} />;
}

export default forwardRef(TextInput);

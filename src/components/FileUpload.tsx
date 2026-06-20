import React, { useRef, useState } from "react";

type FileUploadProps = {
    name: string;
    accept?: string;
    multiple?: boolean;
    label?: string;
    selectText: string;
    noFileText: string;
    onChange?: (files: FileList | null) => void;
};

export default function FileUpload({
    name,
    accept,
    multiple = false,
    label,
    selectText,
    noFileText,
    onChange,
}: FileUploadProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [fileName, setFileName] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files && files.length > 0) {
            const names = Array.from(files).map((f) => f.name).join(", ");
            setFileName(names);
        } else {
            setFileName("");
        }

        onChange?.(files ?? null);
    };

    return (
        <div className="mb-5">
            {label && (
                <label className="block text-sm font-medium mb-1">
                    {label}
                </label>
            )}

            <div className="flex items-center gap-3">
                {/* Custom button */}
                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-50"
                >
                    {selectText}
                </button>

                {/* Hidden input */}
                <input
                    ref={inputRef}
                    type="file"
                    name={name}
                    accept={accept}
                    multiple={multiple}
                    className="hidden"
                    onChange={handleChange}
                />

                {/* File name display */}
                <span className="text-sm text-gray-600">
                    {fileName || noFileText}
                </span>
            </div>
        </div>
    );
}
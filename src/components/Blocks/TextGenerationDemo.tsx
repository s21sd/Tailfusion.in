"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";


const words = `Elevate Your Design with TailFusion TailFusion is a UI library for creating stunning, responsive designs with ready-to-use Tailwind CSS and HTML/CSS components. Integrate modern UI elements seamlessly without extra installations.
`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect className="w-full sm:w-[50%]" words={words} />;
}

import { SelectColor } from "@/app/components/Codetabs/SelectColor";

// colorUtils.js
export const renderColor = (selectColor: string) => {
    switch (selectColor) {
        case 'pink':
            return 'text-pink-500';
        case 'red':
            return 'text-red-500';
        case 'purple':
            return 'text-purple-500';
        case 'blue':
            return 'text-blue-500';
        case 'orange':
            return 'text-orange-500';
        default:
            return 'text-[#fff2c1] dark:text-[#9e4ceb]';
    }
};


export const renderBtnColors = (colorClass: string) => {
    if (colorClass === 'text-red-500') {
        return 'bg-red-500';
    } else if (colorClass === 'text-purple-500') {
        return 'bg-purple-500';
    } else if (colorClass === 'text-blue-500') {
        return 'bg-blue-500';
    } else if (colorClass === 'text-pink-500') {
        return 'bg-pink-500';
    } else if (colorClass === 'text-orange-500') {
        return 'bg-orange-500';
    } else {
        return 'bg-indigo-500 hover:bg-indigo-600';
    }
};

export const renderColorsBorder = (colorClass: string) => {
    if (colorClass === 'text-red-500') {
        return 'border-red-500';
    } else if (colorClass === 'text-purple-500') {
        return 'border-purple-500';
    } else if (colorClass === 'text-blue-500') {
        return 'border-blue-500';
    } else if (colorClass === 'text-pink-500') {
        return 'border-pink-500';
    } else if (colorClass === 'text-orange-500') {
        return 'border-orange-500';
    } else {
        return 'border-indigo-500 hover:border-indigo-600';
    }
}
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
            return 'text-[#fff2c1]';
    }
};

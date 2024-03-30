import { IconType } from "react-icons";

interface TechProps {
    text: string;
    icon: IconType;
}

export const TechItem = ({ text, icon }: TechProps) => {
    return (
        <li className="flex p-2 md:p-4 space-x-2 mx-6 md:mx-0">  
            <span>{icon({ className: "h-4 w-4 md:h-6 md:w-6 text-gray-400" })}</span>
            <span className="text-gray-400 text-xs md:text-lg">{text}</span>   
        </li>
    );
};

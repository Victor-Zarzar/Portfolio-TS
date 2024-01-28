import { IconType } from "react-icons";

interface TechProps {
    text: string;
    icon: IconType;
}

export const TechItem = ({ text, icon }: TechProps) => {
    return (
        <li className="flex p-2 md:p-4 space-x-2">  
            <span>{icon({ className: "h-6 w-6 text-gray-400" })}</span>
            <span className="text-gray-400">{text}</span>   
        </li>
    );
};

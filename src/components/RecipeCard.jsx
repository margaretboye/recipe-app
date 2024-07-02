import { HeartIcon } from "@heroicons/react/24/outline";

export default function RecipeCard({ image, name }) {
    return (
        <div className="relative">
            <div className="h-[27px]  w-[23px] bg-white absolute top-2 right-2 rounded-[7px] flex justify-center items-center">
                <HeartIcon className="size-[15px] align-middle opacity-50 " />
            </div>
            <img src={image} alt={name} />
            <p className="absolute left-5 bottom-2 font-bold text-white leading-[18px]">{name}</p>
        </div>
    );
}
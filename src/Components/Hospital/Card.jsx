import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    // console.log(props)
    const doctors = props.doctors;
    const likedDoctors = props.likedDoctors;
    const setlikedDoctors = props.setlikedDoctors;

    const clickHandler = () => {
        if (likedDoctors.includes(doctors.id)) {
            setlikedDoctors((prev) => prev.filter((id) => id !== doctors.id));
            toast.warning("Liked Removed");
        }
        else {
            setlikedDoctors((prev) => [...prev,doctors.id]);
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img
                    src={doctors.image.url}
                    alt={doctors.image.alt}
                    className="w-full min-h-[168px] object-cover"
                />
                <div className="w-[40px] h-[40px] rounded-full bg-white grid place-items-center absolute right-2 -bottom-3 shadow-xl">
                    <button onClick={clickHandler}>
                        {
                            likedDoctors.includes(doctors.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>

            <div className="p-4 text-white">
                <p className="font-semibold text-lg leading-6">{doctors.title}</p>
                <p className="text-base mt-2">
                    {doctors.description.length > 100
                        ? doctors.description.substring(0, 100) + "..."
                        : doctors.description}
                </p>
            </div>
        </div>
    );
};

export default Card;

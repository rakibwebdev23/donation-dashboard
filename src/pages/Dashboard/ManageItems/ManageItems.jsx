import { Link } from "react-router-dom";
import useProjectsData from "../../../hooks/useProjectsData";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const ManageItems = () => {
    const [projects] = useProjectsData();

    const handleDeleteProject = id => {
        console.log(id);
        
    }

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-md">
                    {/* Table Head */}
                    <thead className="bg-[#b3282d] text-white">
                        <tr>
                            <th className="border border-gray-200 px-4 py-2 text-center font-semibold">
                                #
                            </th>
                            <th className="border border-gray-200 px-4 py-2 font-semibold text-center">
                                Image
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-center font-semibold">
                                Title
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-center font-semibold">
                             Amount
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-center font-semibold">
                                Update
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left font-semibold">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {projects.map((project, index) => (
                            <tr key={project._id}>
                                <td className="border border-gray-200 px-4 py-3 text-gray-600 text-center font-semibold">
                                    {index + 1}
                                </td>
                                <td className="border border-gray-200">
                                    <div className="flex flex-col items-center py-3 px-3">
                                        <div className="w-12 h-12 overflow-hidden rounded-full">
                                            <img
                                                src={project.img}
                                                alt={project.name}
                                                className="w-full h-full object-cover"
                                            />
                                            
                                        </div>
                                        {project.category_name}
                                    </div>
                                </td>
                                <td className="border border-gray-200 px-4 py-3 text-gray-600 text-center">
                                {project.category_title}
                                </td>
                                <td className="border border-gray-200 px-4 py-3 text-gray-600 text-center">
                                   $ {project.donate_amount}
                                </td>
                                <td className="border border-gray-200 px-4 py-3 text-center">
                                    <Link to={`/dashboard/updateItem/${project._id}`}>
                                        <button>
                                            <FaEdit className="fas fa-edit text-xl text-green-600"></FaEdit>
                                        </button>
                                    </Link>
                                </td>
                                <td className="border border-gray-200 px-4 py-3 text-center">
                                    <button onClick={() => handleDeleteProject(_id)}>
                                        <RiDeleteBin6Line className="fa-solid fa-trash-can text-xl text-red-600"></RiDeleteBin6Line>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageItems;
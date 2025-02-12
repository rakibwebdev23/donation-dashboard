import { Link } from "react-router-dom";
import useProjectsData from "../../../hooks/useProjectsData";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
    const [projects, refetch] = useProjectsData();
    const axiosSecure = useAxiosSecure();

    const handleDeleteProject = project => {
        Swal.fire({
            title: 'Confirm Deletion',
            text: 'Are you sure you want to proceed?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DC2626',
            cancelButtonColor: '#6B7280',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            customClass: {
                popup: 'rounded-lg shadow-xl',
                title: 'text-xl font-semibold text-gray-800',
                htmlContainer: 'text-gray-600',
                confirmButton: 'px-6 py-2.5 rounded-md text-sm font-medium transition-colors',
                cancelButton: 'px-6 py-2.5 rounded-md text-sm font-medium transition-colors',
                actions: 'space-x-3'
            },
            buttonsStyling: true,
            padding: '2rem',
            background: '#FFFFFF',
            backdrop: 'rgba(255, 0, 0, 0.5)'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/projects/${project._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: 'Deleted Successfully',
                        text: `${project.category_title} has been removed`,
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false,
                        customClass: {
                            popup: 'rounded-lg shadow-xl',
                            title: 'text-lg font-medium text-gray-800',
                            htmlContainer: 'text-gray-600'
                        },
                        background: '#FFFFFF',
                        backdrop: 'rgba(0,0,0,0.4)',
                        position: 'top-end',
                        toast: true,
                        timerProgressBar: true
                    });
                }
            }
        });
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
                                        <button className="transition-colors hover:text-green-700">
                                            <FaEdit className="text-xl text-green-600" />
                                        </button>
                                    </Link>
                                </td>
                                <td className="border border-gray-200 px-4 py-3 text-center">
                                    <button 
                                        onClick={() => handleDeleteProject(project)}
                                        className="transition-colors hover:text-red-700"
                                    >
                                        <RiDeleteBin6Line className="text-xl text-red-600" />
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
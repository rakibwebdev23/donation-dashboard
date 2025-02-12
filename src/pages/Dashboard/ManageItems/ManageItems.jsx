import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();

    const { data: projects = [] } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await axiosSecure.get("projects");
            return res.data;
        }
    });

    return (
        <div>
            <h2>{ projects.length}</h2>
        </div>
    );
};

export default ManageItems;
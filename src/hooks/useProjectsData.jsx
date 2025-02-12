import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProjectsData = () => {
    const axiosSecure = useAxiosSecure();
    const { data: projects = [], refetch } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await axiosSecure.get("/projects");
            return res.data;
        }
    })
    return [projects, refetch];
};

export default useProjectsData;
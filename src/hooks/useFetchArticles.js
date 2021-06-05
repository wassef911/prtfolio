import { useQuery } from "react-query";
import axios from "axios";
const fetchArticles = async () => {
  const res = await axios.get(`https://dev.to/api/articles?username=wassef911`);
  return res.data;
};

const useFetchArticles = () => {
  return useQuery("fetchMembers", fetchArticles, {
    staleTime: 60 * 10000, // refresh 5 minutes
  });
};

export default useFetchArticles;

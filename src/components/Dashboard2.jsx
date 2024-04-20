// useQuery useMutation

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, getPosts } from "../api/service";

// HTTP GET POST PUT DELETE
const Dashboard2 = () => {
  const queryClient = useQueryClient();

  const { data: posts, isLoading } = useQuery({
    queryFn: ({ signal }) => getPosts(signal),
    queryKey: ["posts"], //stale
    // staleTime: Infinity,
    // refetchOnWindowFocus: false,
  });

  const { mutateAsync: addPostAsync } = useMutation({
    mutationFn: () => addPost(),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); // queryKey
    },
  });

  const handleAddPost = () => {
    addPostAsync();
  };

  if (isLoading) return <h1>Loading ....</h1>;

  return (
    <div>
      <button onClick={handleAddPost}>ADD POST</button>
      {posts.map((post) => (
        <>
          <p>User ID : {post.userId}</p>
          <p>Title : {post.title}</p>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Dashboard2;

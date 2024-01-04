import { useParams } from "react-router-dom";

export const EditCategory = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Category {id}</h1>
    </div>
  );
};

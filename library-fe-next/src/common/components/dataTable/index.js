import UButton from "@/common/components/ubutton";
import style from "./style.module.css";
import Link from "next/link";

function DataTable({ data, maxSize, editAction }) {
  // console.log("The data to be used is: ", data);
  // console.log("The max size to be used is: ", maxSize);

  const getRowsData = () => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td className={style["border"]}>{index + 1}</td>
          <td className={style["border"]}>{item.name}</td>
          <td className={style["border"]}>{item.author}</td>
          <td className={style["border"]}>{item.title}</td>
          <td className={style["border"]}>
            <UButton
              type="button"
              variant="secondary"
              onClick={() => {
                editAction(item);
              }}
            >
              Edit
            </UButton>
            <UButton
              type="button"
              variant="warning"
              onClick={() => {
                deleteAction(item);
              }}
            >
              Delete
            </UButton>
          </td>
        </tr>
      );
    });
  };
  return (
    <table className={style["table"]}>
      <thead>
        <tr>
          <th className={style["border"]}>Sr. No.</th>
          <th className={style["border"]}>Name</th>
          <th className={style["border"]}>Author</th>
          <th className={style["border"]}>Title</th>
          <th className={style["border"]}>Actions</th>
        </tr>
      </thead>
      <tbody>{getRowsData()}</tbody>
    </table>
  );
}

export default DataTable;

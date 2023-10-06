import Button from "@commonComponents/button";
import style from "./style.module.css";
import Link from "next/link";

function DataTable({ data, maxSize }) {
  // console.log("The data to be used is: ", data);
  // console.log("The max size to be used is: ", maxSize);

  const getRowsData = () => {
    return data.map((item, index) => {
      return (
        <tr>
          <td className={style["border"]}>{index + 1}</td>
          <td className={style["border"]}>{item.name}</td>
          <td className={style["border"]}>{item.author}</td>
          <td className={style["border"]}>{item.title}</td>
          <td className={style["border"]}>
            <Link href="/addbook" className="btn btn-primary">
              Add
            </Link>
            <Link href="/editbook" className="btn btn-secondary">
              Edit
            </Link>
          </td>
        </tr>
      );
    });
  };
  return (
    <table className={style["table"]}>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Author</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{getRowsData()}</tbody>
    </table>
  );
}

export default DataTable;

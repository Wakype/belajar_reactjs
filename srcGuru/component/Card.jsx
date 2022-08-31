import Button from "./Button";
import { showFormattedDate } from "../utils";
export default function Card({ title, body, year, createdAt, id, handleDelete }) {
  return (
    <div className="border p-5 h-72 w-full shadow-lg rounded-lg space-y-2">
      <div className="h-1/5">
        <h5 className="text-xl uppercase">{title}</h5>
        <p className="text-xs italic">{showFormattedDate(createdAt)}</p>
      </div>
      <div className="text-justify h-2/5">
        <p>{body}</p>
      </div>
      <div className="text-justify h-1/5">
        <p>Tahun terbit: {year}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-5">
        <Button onClick={handleDelete} value={id} type="button" title={"Delete"} bg="red" />
        <Button value={id} title="Arsipkan" bg="blue" />
      </div>
    </div>
  );
}

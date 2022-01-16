import { format } from "date-fns";

const FormattedDate = (props) => {
  const { date } = props;
  const formattedDate = format(new Date(date), "MMMM do, yyyy");
  return <time className="post-item-date">{formattedDate}</time>;
};

export default FormattedDate;

import { useEffect, useState } from "react";

const useFormattedDate = () => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const updateFormattedDate = () => {
      const currentDate = new Date();

      const options: any = {
        weekday: "long",
        day: "numeric",
        month: "long",
      };

      const formattedDateString = new Intl.DateTimeFormat(
        "fr-FR",
        options
      ).format(currentDate);
      setFormattedDate(formattedDateString);
    };

    // Update the formatted date on mount
    updateFormattedDate();

    // Update the formatted date every minute
    const intervalId = setInterval(updateFormattedDate, 60000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return formattedDate;
};

export default useFormattedDate;

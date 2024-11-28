import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Sim1 from "../../images/Sim1.jpeg";
import Sim2 from "../../images/Sim2.jpeg";
import Sim3 from "../../images/Sim3.jpeg";

export function CardLab() {
  const simulators = [
    {
      title: "Carbon Footprint",
      status: "Explore",
      imageUrl: Sim1,
      link: "https://example.com/simulator2",
    },
    {
      title: "Solar Energy Calculator",
      status: "Explore",
      imageUrl: Sim2,
      link: "",
    },
    {
      title: "Wind Energy Calculator",
      status: "Coming Soon",
      imageUrl: Sim3,
      link: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {simulators.map((simulator, index) => (
        <Card key={index} className="mt-6 w-72 m-3">
          <CardHeader color="blue-gray" className="relative h-72 overflow-hidden">
            <img
              src={simulator.imageUrl}
              alt={`${simulator.title}-image`}
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {simulator.title}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            {simulator.status === "Explore" && (
              <Button href={simulator.link} target="_blank">
                Explore
              </Button>
            )}
            {simulator.status !== "Explore" && (
              <Button disabled>{simulator.status}</Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

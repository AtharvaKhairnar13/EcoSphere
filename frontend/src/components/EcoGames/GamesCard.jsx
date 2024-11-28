import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import Game1 from "../../images/EcoCityBuilder.jpeg";
  import Game2 from "../../images/WildlifeConservationQuest.jpeg";
  import Game3 from "../../images/OceanCleanupChalenge.jpeg";
  import Game4 from "../../images/PollutionDetective.jpeg"
  
  export function GamesCard() {
    const simulators = [
      {
        title: "EcoCity Builder",
        status: "Coming Soon",
        imageUrl: Game1,
        link: "https://example.com/simulator2",
      },
      {
        title: "WildLife Conservation Quest",
        status: "Coming Soon",
        imageUrl: Game2,
        link: "",
      },
      {
        title: "Ocean Cleanup Challenge",
        status: "Coming Soon",
        imageUrl: Game3,
        link: "",
      },
      {
        title: "Pollution Detective",
        status: "Coming Soon",
        imageUrl: Game4,
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
  
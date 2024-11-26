import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardLab() {
    return (
      <a href="/eco-games/details" className="block"> {/* Link wrapping the card */}
      <Card className="mt-6 w-72">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://via.placeholder.com/800x400?text=Simulator"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Simulator
          </Typography>
          <Typography>
          Information about Simulator
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Explore</Button>
        </CardFooter>
      </Card>
      </a>
    );
  }
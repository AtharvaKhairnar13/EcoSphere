import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  
  export function GamesCard() {
    return (
        <a href="/eco-games/details" className="block"> {/* Link wrapping the card */}
            <Card className="w-64 h-80">
                <CardHeader floated={false} className="h-72">
                <img 
                    src="https://via.placeholder.com/800x400?text=Game" 
                    alt="profile-picture" 
                    className="w-full h-72 object-cover" // Fixed width and height
                />
                </CardHeader>
            </Card>
        </a>
    );
  }
  
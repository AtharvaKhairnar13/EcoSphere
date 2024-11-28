import { Progress, Typography } from "@material-tailwind/react";

export function ProgressLabelOutside({ EPI }) {
  // Determine the progress color based on the EPI value
  const getProgressColor = (EPI) => {
    if (EPI < 50) {
      return "red"; // Low EPI (red)
    } else if (EPI < 80) {
      return "yellow"; // Medium EPI (yellow)
    } else {
      return "green"; // High EPI (green)
    }
  };

  // Determine the progress value (EPI percentage)
  const progressValue = EPI;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">
        Environmental Performance Index(EPI)
        </Typography>
        <Typography color="blue-gray" variant="h6">
          {progressValue}
        </Typography>
      </div>
      <Progress value={progressValue} color={getProgressColor(EPI)} />
    </div>
  );
}

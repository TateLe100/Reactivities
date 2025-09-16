import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
  selectedActivity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
};

export default function ActivitiesDetail({
  selectedActivity,
  cancelSelectActivity,
  openForm,
}: Props) {
  const { activities } = useActivities();
  const activity = activities?.find((x) => x.id === selectedActivity.id);
  if (!activity) return <Typography>Loading...</Typography>;

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      ></CardMedia>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.title}</Typography>
      </CardContent>
      <Button color="primary" onClick={() => openForm(activity.id)}>
        Edit
      </Button>
      <Button color="inherit" onClick={cancelSelectActivity}>
        Cancel
      </Button>
    </Card>
  );
}

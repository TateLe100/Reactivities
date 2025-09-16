import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
  activity: Activity[];
  selectActivity: (id: string) => void;
};

export default function ActivityList({ activity, selectActivity }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activity.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          selectActivity={selectActivity}
        ></ActivityCard>
      ))}
    </Box>
  );
}

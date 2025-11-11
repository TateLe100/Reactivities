import { Grid2, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailSidebar from "./ActivityDetailSidebar";
import { useParams } from "react-router";

export default function ActivitiesDetailPage() {
  const { id } = useParams();

  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <Typography>Loading...</Typography>;

  if (!activity) return <Typography>Activity Not Found</Typography>;

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={8}>
        <ActivityDetailsHeader activity={activity}></ActivityDetailsHeader>
        <ActivityDetailsInfo activity={activity}></ActivityDetailsInfo>
        <ActivityDetailsChat></ActivityDetailsChat>
      </Grid2>
      <Grid2 size={4}>
        <ActivityDetailSidebar></ActivityDetailSidebar>
      </Grid2>
    </Grid2>
  );
}

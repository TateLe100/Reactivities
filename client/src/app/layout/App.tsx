import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  // initialize useState returns a list -> []
  const [activities, setActivites] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  // useEffect Happens when a component loads i.e in this case it being App Component
  useEffect(() => {
    // using AXIOS
    axios
      // you can specify what we are expecting (Activity List)
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivites(response.data));

    // use fetch utility in js
    // specify url of where to get data
    // fetch("https://localhost:5001/api/activities")
    // this fetch returns a js promise and use then to unwrap the promise
    // get a response back and extra this from a json into a response
    // .then((response) => response.json())
    //now we have a list of activities and use setActivities function to data
    // .then((data) => setActivites(data));

    return () => {};
  }, []);

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectedActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivites(
        activities.map((x) => (x.id === activity.id ? activity : x))
      );
    } else {
      const newActivity = { ...activity, id: activities.length.toString() };
      // ...activities is the current list of activities
      setActivites([...activities, newActivity]);
      setSelectedActivity(newActivity);
    }
    setEditMode(false);
  };

  const handleDelete = (id: string) => {
    setActivites(activities.filter((x) => x.id !== id));
  };

  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
          deleteActivity={handleDelete}
        ></ActivityDashboard>
      </Container>
    </Box>
  );
}

export default App;

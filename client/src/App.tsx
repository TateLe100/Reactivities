import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // initialize useState returns a list -> []
  const [activities, setActivites] = useState<Activity[]>([]);

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

  const title = "Welcome Reactivities";
  return (
    <>
      <Typography variant="h3">{title}</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;

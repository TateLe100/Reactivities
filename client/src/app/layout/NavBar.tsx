import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  MenuItem,
  Button,
} from "@mui/material";

type Props = {
  openForm: () => void;
};

export default function navbar({ openForm }: Props) {
  return (
    // box is like a div
    // sx == system style for material ui
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <MenuItem sx={{ display: "flex", ga: 2 }}>
                <Group fontSize="large"></Group>
                <Typography variant="h4" fontWeight="bold">
                  Reactivities
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: "flex" }}>
              <MenuItem
                sx={{
                  fontSize: "1.2em",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Activties
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: "1.2em",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                About
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: "1.2em",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Contacts
              </MenuItem>
            </Box>
            <Button
              size="large"
              variant="contained"
              color="warning"
              onClick={openForm}
            >
              Create Activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

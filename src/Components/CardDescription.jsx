import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PublicIcon from "@mui/icons-material/Public";
import HubIcon from "@mui/icons-material/Hub";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { colors } from "../Constants/colors";

export default function CardDescription({
  planet,
  dimension,
  species,
  status,
}) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        padding: 0,
      }}
      aria-label="contacts"
      className="card-characters__description"
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <PublicIcon sx={{ color: "#2c9be0" }} />
          </ListItemIcon>
          <ListItemText primary={planet ? planet : "unknown"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <HubIcon sx={{ color: "#97ce4c" }} />
          </ListItemIcon>
          <ListItemText primary={dimension ? dimension : "unknown"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {status == "Alive" ? (
              <FavoriteIcon sx={{ color: "#FB6467" }} />
            ) : (
              <HeartBrokenIcon sx={{ color: "gray" }} />
            )}
          </ListItemIcon>
          <ListItemText primary={status ? status : "unknown"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ReduceCapacityIcon sx={{ color: "#0062c4" }} />
          </ListItemIcon>
          <ListItemText primary={species ? species : "unknown"} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

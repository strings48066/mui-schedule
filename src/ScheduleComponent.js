import React from "react";
import { Paper, Typography } from "@material-ui/core";

const ScheduleComponent = ({ games }) => {
  return (
    <div>
      {games.map((game, index) => (
        <Paper
          key={game.id}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff",
            borderLeft: "4px solid #9F0F2E",
            borderRadius: "0px",
            paddingTop: "15px",
            paddingBottom: "15px"
          }}
        >
          <Typography variant="h6">
            {game.Played === "y" ? game.Score : `${game.Home} vs ${game.Away}`}
            {game.Played === "y" && (
              <a href={game.GameLink} style={{ marginLeft: "20px" }}>
                Game Summary
              </a>
            )}
          </Typography>
          <Typography variant="body1">Date: {game.Date}</Typography>
          <Typography variant="body1">Time: {game.Time}</Typography>
        </Paper>
      ))}
    </div>
  );
};

export default ScheduleComponent;

/*
* This system is responsible for detecting collisions and interactions in level one
* and informing the rest of the app 
*/

import Matter from "matter-js";

const Level1Dispatches = (entities, { dispatch }) => {
  let player = entities.player.body;
  if (Matter.SAT.collides(player, entities.sideTable.body).collided) {
    dispatch({ type: "note-one-found" });
  } else if (Matter.SAT.collides(player, entities.lamp.body).collided) {
    dispatch({ type: "note-two-found" });
  } else if (Matter.SAT.collides(player, entities.stairs.body).collided) {
    dispatch({ type: "at-objective" });
  } else if (Matter.SAT.collides(player, entities.npc.body).collided) {
    dispatch({ type: "npc-interact" });
  } else {
    dispatch({ type: "none" });
  }
  return entities;
};
export default Level1Dispatches;


/*
* This system is responsible for detecting collisions and interactions in level three
* and informing the rest of the app 
*/


import Matter from "matter-js";

const Level3Dispatches = (entities, { dispatch }) => {
  let player = entities.player.body;
  if (Matter.SAT.collides(player, entities.car.body).collided) {
    dispatch({ type: "note-one-found" });
  } else if (Matter.SAT.collides(player, entities.pool.body).collided) {
    dispatch({ type: "note-two-found" });
  } else if (Matter.SAT.collides(player, entities.dog.body).collided) {
    dispatch({ type: "at-objective" });
  } else if (Matter.SAT.collides(player, entities.npc.body).collided) {
    dispatch({ type: "npc-interact" });
  } else {
    dispatch({ type: "none" });
  }
  if (Matter.SAT.collides(player, entities.dog.body).collided) {
    dispatch({ type: "pet" });

  }
  return entities;
};
export default Level3Dispatches;

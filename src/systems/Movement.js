/*
 * This system is responsible for the movement logic of the game
 * all systems are passed as props into the react native game engine
 */

import Matter from "matter-js";

const Movement = (entities, { touches, time }) => {
  let engine = entities.physics.engine;
  let player = entities.player.body;

  let move = touches.find((x) => x.type === "move");
  if (move) {
    let pos = {
      x: player.position.x + move.delta.pageX,
      y: player.position.y + move.delta.pageY,
    };
    Matter.Body.setPosition(player, pos);
  }

  Matter.Engine.update(engine, time.delta);
  return entities;
};
export default Movement;

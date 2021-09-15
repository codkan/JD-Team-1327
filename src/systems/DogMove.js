import Matter from "matter-js";

let movement = false
const DogMove = (entities, { touches, time }) => {
  let engine = entities.physics.engine;
  let dog = entities.dog.body;
  if (dog.speed < 1.3) {
    Matter.Body.setVelocity(dog, {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5,
    });
    movement = true
  }
  return entities;
};
export default DogMove;

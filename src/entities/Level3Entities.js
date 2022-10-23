import Matter from "matter-js";
import Player from "../components/renderers/Player";
import Wall from "../components/Wall";
import Npc from "../components/renderers/Npc";
import Car from "../components/renderers/Car";
import Dog from "../components/renderers/Dog";
import Pool from "../components/renderers/Pool";
import { Dimensions } from "react-native";

const Entities = () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0;
  let MAX_WIDTH = Dimensions.get("screen").width;
  let MAX_HEIGHT = Dimensions.get("screen").height;

  let player = Matter.Bodies.rectangle(
    MAX_WIDTH / 2,
    MAX_HEIGHT / 6,
    40,
    70
  );

  let npc = Matter.Bodies.rectangle(
    MAX_WIDTH / 10,
    MAX_HEIGHT / 6,
    45,
    70,
    { isStatic: true }
  );

  let pool = Matter.Bodies.rectangle(
    MAX_WIDTH / 3,
    MAX_HEIGHT * 0.66,
    370,
    210,
    { isStatic: true }
  );

  let car = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.85,
    MAX_HEIGHT * 0.46,
    40,
    180,
    { isStatic: true }
  );
  
  let dog = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.75,
    MAX_HEIGHT * 0.86,
    45,
    45,
  );
  let top_wall = Matter.Bodies.rectangle(
    0,
    0,
    MAX_WIDTH * 2,
    MAX_HEIGHT / 6,
    { isStatic: true }
  );
  let left_wall = Matter.Bodies.rectangle(
    0,
    0,
    10,
    MAX_HEIGHT * 2,
    { isStatic: true }
  );
  let right_wall = Matter.Bodies.rectangle(
    MAX_WIDTH,
    0,
    10,
    MAX_HEIGHT * 2,
    { isStatic: true }
  );
  let bottom_wall = Matter.Bodies.rectangle(
    MAX_WIDTH / 2,
    MAX_HEIGHT,
    MAX_WIDTH,
    10,
    { isStatic: true }
  );
  Matter.World.add(world, [
    player,
    npc,
    pool,
    car,
    dog,
    top_wall,
    left_wall,
    right_wall,
    bottom_wall
  ]);

  return {
    physics: { engine: engine, world: world },
    player: { body: player, size: [90, 90], //backgroundColor:"#DBD7D2",
    renderer: Player },
    npc: { body: npc, size: [90, 90], //backgroundColor: "#DBD7D2",
    renderer: Npc },
    pool: {
      body: pool,
      size: [400, 300],
      color: "black",
      renderer: Pool,
    },
    car: {
      body: car,
      size: [200, 200],
      color: "black",
      renderer: Car,
    },
    dog: {
      body: dog,
      size: [70, 70],
      color: "black",
      renderer: Dog,
    },
    top_wall: {
      body: top_wall,
      size: [MAX_WIDTH * 2, MAX_HEIGHT / 6],
      color: "black",
      renderer: Wall,
    },
    left_wall: {
      body: left_wall,
      size: [10, MAX_HEIGHT * 2],
      color: "black",
      renderer: Wall,
    },
    right_wall: {
      body: right_wall,
      size: [10, MAX_HEIGHT * 2],
      color: "black",
      renderer: Wall,
    },
    bottom_wall: {
      body: bottom_wall,
      size: [MAX_WIDTH, 10],
      color: "black",
      renderer: Wall,
    },
    
  };
};
export default Entities;
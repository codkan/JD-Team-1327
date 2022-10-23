import Matter from "matter-js";
import Wall from "../components/Wall";
import Player from "../components/renderers/Player";
import Npc from "../components/renderers/Npc";
import DiningTable from "../components/renderers/DiningTable"
import Island from "../components/renderers/Island";
import Refrigerator from "../components/renderers/Refrigerator";
import Counter1 from "../components/renderers/Counter1";
import Counter2 from "../components/renderers/Counter2";
import Counter3 from "../components/renderers/Counter3";
import Counter4 from "../components/renderers/Counter4";
import Stove from "../components/renderers/Stove";
import Sink from "../components/renderers/Sink";
import Corner from "../components/renderers/Corner";
import { Dimensions } from "react-native";

const Entities = () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0;
  let MAX_WIDTH = Dimensions.get("screen").width;
  let MAX_HEIGHT = Dimensions.get("screen").height;

  let player = Matter.Bodies.rectangle(
    MAX_WIDTH / 8,
    MAX_HEIGHT / 2,
    30,
    70,
  );

  let npc = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.5,
    MAX_HEIGHT * 0.66,
    30,
    70,
    { isStatic: true }
  );

  let diningTable = Matter.Bodies.rectangle(
    MAX_WIDTH / 7,
    MAX_HEIGHT / 3,
    150,
    150,
    { isStatic: true }
  );

  let counter1 = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.625,
    MAX_HEIGHT * 0.27,
    55,
    75,
    { isStatic: true }
  );

  let counter2 = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.82,
    MAX_HEIGHT * 0.27,
    55,
    75,
    { isStatic: true }
  );

  let counter3 = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.69,
    MAX_HEIGHT * 0.27,
    55,
    75,
    { isStatic: true }
  );

  let counter4 = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.9,
    MAX_HEIGHT * 0.45,
    55,
    75,
    { isStatic: true }
  );

  let counter5 = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.9,
    MAX_HEIGHT * 0.71,
    55,
    75,
    { isStatic: true }
  );

  let corner = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.9-10,
    MAX_HEIGHT * 0.27,
    55,
    75,
    { isStatic: true }
  );

  let stove = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.9,
    MAX_HEIGHT * 0.58,
    55,
    75,
    { isStatic: true }
  );

  let sink = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.755,
    MAX_HEIGHT * 0.27,
    55,
    75,
    { isStatic: true }
  );

  let island = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.65,
    MAX_HEIGHT * 0.66,
    100,
    70,
    { isStatic: true }
  );
  let refrigerator = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.55,
    MAX_HEIGHT * 0.25,
    30,
    75,
    { isStatic: true }
  );
  let topCabinet = Matter.Bodies.rectangle(
    MAX_WIDTH * 0.9,
    MAX_HEIGHT * 0.15,
    650,
    52,
    { isStatic: true }
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
    top_wall,
    npc,
    left_wall,
    right_wall,
    bottom_wall,
    diningTable,
    refrigerator,
    counter1,
    counter2,
    counter3,
    counter4,
    counter5,
    island,
    stove,
    sink,
    topCabinet,
    corner,
  ]);

  return {
    physics: { engine: engine, world: world },
    player: { body: player, size: [120, 120],
      renderer: Player },
    npc: { body: npc, size: [120, 120], 
      renderer: Npc },
    
    diningTable: {
      body: diningTable,
      size: [150, 150],
      renderer: DiningTable,
    },
    island: {
      body: island,
      size: [140, 140],
      color: "black",
      renderer: Island,
    },
    refrigerator: {
      body: refrigerator,
      size: [120, 120],
      color: "black",
      renderer: Refrigerator,
    },
    counter1: {
      body: counter1,
      size: [120, 120],
      color: "black",
      renderer: Counter1,
    },
    counter2: {
      body: counter2,
      size: [120, 120],
      color: "black",
      renderer: Counter2,
    },
    counter3: {
      body: counter3,
      size: [120, 120],
      color: "black",
      renderer: Counter3,
    },
    counter4: {
      body: counter4,
      size: [120, 120],
      color: "black",
      renderer: Counter4,
    },
    counter5: {
      body: counter5,
      size: [120, 120],
      color: "black",
      renderer: Counter4,
    },
    corner: {
      body: corner,
      size: [120, 120],
      color: "black",
      renderer: Corner,
    },
    sink: {
      body: sink,
      size: [120, 120],
      color: "black",
      renderer: Sink,
    },
    stove: {
      body: stove,
      size: [105, 105],
      color: "black",
      renderer: Stove,
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
